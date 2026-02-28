/**
 * Reparent Module Audit System
 * Bulletproof validation of every module, session, and segment.
 * Run: npx tsx scripts/audit-modules.ts
 */
import { modules, getModuleById, getSessionById, isSessionUnlocked, isModuleUnlocked, getNextSession } from '../src/lib/modules-data'

const VALID_SEGMENT_TYPES = ['safety-check', 'psychoeducation', 'interactive', 'journal', 'quiz', 'action-plan', 'breathing', 'reflection'] as const
const VALID_CATEGORIES = ['foundation', 'skills', 'growth', 'integration'] as const

const errors: string[] = []
const warnings: string[] = []
let totalModules = 0
let totalSessions = 0
let totalSegments = 0

function error(msg: string) { errors.push(msg) }
function warn(msg: string) { warnings.push(msg) }

// ── Track uniqueness ──
const moduleIds = new Set<string>()
const sessionIds = new Set<string>()
const segmentIds = new Set<string>()
const moduleOrders = new Set<number>()

// ── Validate modules array ──
if (!Array.isArray(modules) || modules.length === 0) {
  error('modules array is empty or not an array')
}

for (const mod of modules) {
  totalModules++

  // Required module fields
  if (!mod.id) error('Module missing id')
  if (!mod.title) error(`Module ${mod.id}: missing title`)
  if (!mod.description) error(`Module ${mod.id}: missing description`)
  if (!mod.icon) error(`Module ${mod.id}: missing icon`)
  if (typeof mod.order !== 'number') error(`Module ${mod.id}: missing/invalid order`)
  if (!VALID_CATEGORIES.includes(mod.category as typeof VALID_CATEGORIES[number])) {
    error(`Module ${mod.id}: invalid category '${mod.category}'`)
  }
  if (!Array.isArray(mod.prerequisites)) error(`Module ${mod.id}: prerequisites is not an array`)

  // Unique IDs and orders
  if (moduleIds.has(mod.id)) error(`Duplicate module ID: ${mod.id}`)
  moduleIds.add(mod.id)
  if (moduleOrders.has(mod.order)) error(`Duplicate module order: ${mod.order} (module: ${mod.id})`)
  moduleOrders.add(mod.order)

  // Sessions
  if (!Array.isArray(mod.sessions) || mod.sessions.length === 0) {
    error(`Module ${mod.id}: has no sessions`)
    continue
  }

  for (const session of mod.sessions) {
    totalSessions++

    // Required session fields
    if (!session.id) error(`Session missing id in module ${mod.id}`)
    if (!session.title) error(`Session ${session.id}: missing title`)
    if (!session.description) error(`Session ${session.id}: missing description`)
    if (typeof session.estimatedMinutes !== 'number' || session.estimatedMinutes <= 0) {
      error(`Session ${session.id}: missing/invalid estimatedMinutes`)
    }
    if (session.moduleId !== mod.id) {
      error(`Session ${session.id}: moduleId '${session.moduleId}' doesn't match parent '${mod.id}'`)
    }
    if (!Array.isArray(session.learningObjectives) || session.learningObjectives.length === 0) {
      warn(`Session ${session.id}: no learning objectives`)
    }
    if (!Array.isArray(session.prerequisites)) error(`Session ${session.id}: prerequisites not an array`)
    if (!Array.isArray(session.contraindications)) error(`Session ${session.id}: contraindications not an array`)

    // Unique session IDs
    if (sessionIds.has(session.id)) error(`Duplicate session ID: ${session.id}`)
    sessionIds.add(session.id)

    // Segments
    if (!Array.isArray(session.segments) || session.segments.length === 0) {
      error(`Session ${session.id}: has no segments`)
      continue
    }

    for (const segment of session.segments) {
      totalSegments++

      if (!segment.id) error(`Segment missing id in session ${session.id}`)
      if (!segment.type) error(`Segment ${segment.id}: missing type`)
      if (!VALID_SEGMENT_TYPES.includes(segment.type as typeof VALID_SEGMENT_TYPES[number])) {
        error(`Segment ${segment.id}: invalid type '${segment.type}'`)
      }
      if (!segment.title) error(`Segment ${segment.id}: missing title`)
      if (typeof segment.estimatedMinutes !== 'number' || segment.estimatedMinutes <= 0) {
        error(`Segment ${segment.id}: missing/invalid estimatedMinutes`)
      }
      if (!segment.content) {
        error(`Segment ${segment.id}: missing content`)
      } else {
        // Content type must match segment type
        if ((segment.content as { type: string }).type !== segment.type) {
          error(`Segment ${segment.id}: content.type '${(segment.content as { type: string }).type}' != segment type '${segment.type}'`)
        }
        validateContent(segment as { id: string; type: string; content: unknown })
      }

      // Unique segment IDs (scoped to session)
      const fullId = `${session.id}::${segment.id}`
      if (segmentIds.has(fullId)) error(`Duplicate segment ID: ${segment.id} in session ${session.id}`)
      segmentIds.add(fullId)
    }
  }
}

// ── Cross-reference prerequisites ──
for (const mod of modules) {
  for (const prereq of mod.prerequisites) {
    if (!moduleIds.has(prereq)) {
      error(`Module ${mod.id}: prerequisite '${prereq}' is not a valid module ID`)
    }
  }
  for (const session of mod.sessions) {
    for (const prereq of session.prerequisites) {
      if (!sessionIds.has(prereq)) {
        error(`Session ${session.id}: prerequisite '${prereq}' is not a valid session ID`)
      }
    }
  }
}

// ── Check order numbers are sequential (1..N) ──
const orders = Array.from(moduleOrders).sort((a, b) => a - b)
for (let i = 0; i < orders.length; i++) {
  if (orders[i] !== i + 1) {
    error(`Module order gap: expected ${i + 1} at position ${i}, got ${orders[i]}`)
  }
}

// ── Validate helper functions ──
if (modules.length > 0) {
  const firstMod = modules[0]
  const firstSession = firstMod.sessions[0]

  const foundMod = getModuleById(firstMod.id)
  if (!foundMod) error(`getModuleById('${firstMod.id}') returned undefined`)

  const foundSession = getSessionById(firstMod.id, firstSession.id)
  if (!foundSession) error(`getSessionById('${firstMod.id}', '${firstSession.id}') returned undefined`)

  const unlocked = isSessionUnlocked(firstSession.id, [])
  if (typeof unlocked !== 'boolean') error('isSessionUnlocked did not return boolean')

  const modUnlocked = isModuleUnlocked(firstMod.id, [])
  if (typeof modUnlocked !== 'boolean') error('isModuleUnlocked did not return boolean')

  // Verify getNextSession returns correct chain
  const next = getNextSession(firstMod.id, firstSession.id)
  if (firstMod.sessions.length > 1 && !next) {
    error('getNextSession returned null for module with multiple sessions')
  }

  // Verify last module's last session returns null for next
  const lastMod = modules[modules.length - 1]
  const lastSession = lastMod.sessions[lastMod.sessions.length - 1]
  const afterLast = getNextSession(lastMod.id, lastSession.id)
  if (afterLast !== null) warn('getNextSession for last session did not return null')
}

// ── Content validation per type ──
function validateContent(segment: { id: string; type: string; content: unknown }) {
  const { content, type, id } = segment
  switch (type) {
    case 'safety-check': {
      const c = content as { question?: string; options?: { label: string; value: number }[] }
      if (!c.question) error(`Segment ${id}: safety-check missing question`)
      if (!Array.isArray(c.options) || c.options.length === 0) error(`Segment ${id}: safety-check missing options`)
      for (const opt of c.options || []) {
        if (!opt.label) error(`Segment ${id}: safety-check option missing label`)
        if (typeof opt.value !== 'number') error(`Segment ${id}: safety-check option missing value`)
      }
      break
    }
    case 'psychoeducation': {
      const c = content as { sections?: { text?: string; heading?: string }[] }
      if (!Array.isArray(c.sections) || c.sections.length === 0) error(`Segment ${id}: psychoeducation missing sections`)
      for (const section of c.sections || []) {
        if (!section.text) error(`Segment ${id}: psychoeducation section missing text`)
      }
      break
    }
    case 'interactive': {
      const c = content as { component?: string; instructions?: string }
      if (!c.component) error(`Segment ${id}: interactive missing component`)
      if (!c.instructions) error(`Segment ${id}: interactive missing instructions`)
      break
    }
    case 'journal': {
      const c = content as { prompts?: string[]; privacyNote?: string }
      if (!Array.isArray(c.prompts) || c.prompts.length === 0) error(`Segment ${id}: journal missing prompts`)
      if (!c.privacyNote) error(`Segment ${id}: journal missing privacyNote`)
      break
    }
    case 'quiz': {
      const c = content as { items?: { question?: string; options?: string[]; correctIndex?: number; explanation?: string }[] }
      if (!Array.isArray(c.items) || c.items.length === 0) error(`Segment ${id}: quiz missing items`)
      for (const item of c.items || []) {
        if (!item.question) error(`Segment ${id}: quiz item missing question`)
        if (!Array.isArray(item.options) || item.options.length < 2) error(`Segment ${id}: quiz needs 2+ options`)
        if (typeof item.correctIndex !== 'number') error(`Segment ${id}: quiz missing correctIndex`)
        else if (item.correctIndex < 0 || item.correctIndex >= (item.options?.length || 0)) {
          error(`Segment ${id}: quiz correctIndex ${item.correctIndex} out of range`)
        }
        if (!item.explanation) error(`Segment ${id}: quiz item missing explanation`)
      }
      break
    }
    case 'action-plan': {
      const c = content as { prompt?: string; options?: unknown[]; timeHorizonDays?: number }
      if (!c.prompt) error(`Segment ${id}: action-plan missing prompt`)
      if (!Array.isArray(c.options) || c.options.length === 0) error(`Segment ${id}: action-plan missing options`)
      if (typeof c.timeHorizonDays !== 'number') error(`Segment ${id}: action-plan missing timeHorizonDays`)
      break
    }
    case 'breathing': {
      const c = content as { pattern?: unknown; durationSeconds?: number; instruction?: string }
      if (!c.pattern) error(`Segment ${id}: breathing missing pattern`)
      if (typeof c.durationSeconds !== 'number') error(`Segment ${id}: breathing missing durationSeconds`)
      if (!c.instruction) error(`Segment ${id}: breathing missing instruction`)
      break
    }
    case 'reflection': {
      const c = content as { prompts?: string[] }
      if (!Array.isArray(c.prompts) || c.prompts.length === 0) error(`Segment ${id}: reflection missing prompts`)
      break
    }
  }
}

// ── Print Report ──
console.log('\n' + '='.repeat(65))
console.log('          REPARENT MODULE AUDIT REPORT')
console.log('='.repeat(65) + '\n')
console.log(`  Modules:  ${totalModules}`)
console.log(`  Sessions: ${totalSessions}`)
console.log(`  Segments: ${totalSegments}`)
console.log()

// Print module breakdown
console.log('  Module Breakdown:')
for (const mod of [...modules].sort((a, b) => a.order - b.order)) {
  const segCount = mod.sessions.reduce((sum, s) => sum + s.segments.length, 0)
  console.log(`    ${String(mod.order).padStart(2)}. ${mod.title} (${mod.sessions.length} sessions, ${segCount} segments)`)
}
console.log()

// Segment type distribution
const typeCounts: Record<string, number> = {}
for (const mod of modules) {
  for (const s of mod.sessions) {
    for (const seg of s.segments) {
      typeCounts[seg.type] = (typeCounts[seg.type] || 0) + 1
    }
  }
}
console.log('  Segment Types:')
for (const t of VALID_SEGMENT_TYPES) {
  console.log(`    ${t}: ${typeCounts[t] || 0}`)
}
console.log()

if (errors.length > 0) {
  console.log(`  ERRORS (${errors.length}):`)
  for (const e of errors) console.log(`    - ${e}`)
  console.log()
}

if (warnings.length > 0) {
  console.log(`  WARNINGS (${warnings.length}):`)
  for (const w of warnings) console.log(`    - ${w}`)
  console.log()
}

if (errors.length === 0) {
  console.log('  ALL CHECKS PASSED - Zero errors found.')
} else {
  console.log(`  AUDIT FAILED - ${errors.length} error(s) found.`)
}

console.log('\n' + '='.repeat(65) + '\n')
process.exit(errors.length > 0 ? 1 : 0)
