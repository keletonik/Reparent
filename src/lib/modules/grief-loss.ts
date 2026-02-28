import type { Module } from '../types'

const griefLoss: Module = {
  id: 'grief-loss',
  title: 'Grief, Loss & Letting Go',
  description: 'Navigate the complex terrain of grief — from bereavement to ambiguous loss to grieving the childhood you did not have. Drawing from Kubler-Ross, Worden\'s tasks of mourning, Pauline Boss\'s ambiguous loss theory, and disenfranchised grief research. Six sessions covering every form of loss relevant to healing.',
  icon: 'leaf',
  order: 21,
  category: 'growth',
  prerequisites: ['orientation-safety'],
  sessions: [
    // SESSION 1: Understanding Grief
    {
      id: 'grief-understanding',
      moduleId: 'grief-loss',
      title: 'What Grief Actually Is',
      description: 'Move beyond the "five stages" myth and understand grief as a complex, non-linear process. Learn Worden\'s tasks of mourning and what healthy grieving looks like.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand grief as a non-linear process, not a set of stages',
        'Learn Worden\'s four tasks of mourning',
        'Distinguish normal grief from complicated grief',
        'Recognise that grief is not limited to death — it encompasses all loss',
      ],
      prerequisites: [],
      contraindications: ['If you are in acute grief, please go gently with this material. It is okay to pause and return.'],
      segments: [
        {
          id: 'gu-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'Grief is a deeply personal topic. How are you feeling right now?', options: [{ label: 'Grounded and ready', value: 1 }, { label: 'A bit tender but okay', value: 3 }, { label: 'Somewhat heavy', value: 5 }, { label: 'Already activated — this touches something', value: 7 }, { label: 'Very distressed — I may need support', value: 9 }] },
        },
        {
          id: 'gu-psychoed', type: 'psychoeducation', title: 'The Nature of Grief', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Beyond the Five Stages', text: 'Elisabeth Kubler-Ross\'s famous "five stages of grief" (denial, anger, bargaining, depression, acceptance) were originally described in the context of people facing their own death, not bereavement. They were never meant to be a linear progression or a checklist. Grief researchers now understand that grief is far more complex, individual, and non-linear than the stage model suggests. You may experience multiple "stages" simultaneously, skip some entirely, revisit others repeatedly, and experience emotions that do not fit any stage at all — relief, numbness, guilt, yearning, disbelief, or even moments of unexpected joy. There is no right way to grieve. There is no timeline. The popular idea that grief "resolves" in a year is a myth that causes enormous harm to grieving people who are then shamed for "taking too long."' },
            { heading: 'Worden\'s Four Tasks of Mourning', text: 'J. William Worden offers a more nuanced and clinically useful framework. Rather than stages you passively experience, these are active tasks you work through (not necessarily in order): Task 1 — Accept the Reality of the Loss: Moving from intellectual understanding ("I know they are gone") to emotional acceptance. This can take months or years. The mind protects us from the full weight of loss, allowing it in gradually. Task 2 — Process the Pain of Grief: Allowing yourself to feel the full range of emotions — sadness, anger, guilt, relief, yearning — without numbing, avoiding, or short-circuiting the process. Society often pressures people to "be strong" or "move on," which actually impedes grieving. Task 3 — Adjust to a World Without the Lost Person/Thing: Practical adjustments (new routines, new roles), identity adjustments (who am I now?), and spiritual/existential adjustments (how do I make sense of this?). Task 4 — Find an Enduring Connection While Embarking on a New Life: Worden no longer uses the language of "withdrawal" from the deceased. Instead, the task is to find a way to maintain an enduring bond with what was lost while investing in ongoing life. You do not "get over" significant loss — you learn to carry it.', keyIdeas: [
              'The "five stages" are not a linear checklist — grief is far more complex and individual',
              'There is no timeline for grief — "taking too long" is a harmful myth',
              'Worden\'s model is about active tasks, not passive stages',
              'Grief is not limited to death — it encompasses all loss',
              'You do not "get over" significant loss — you learn to carry it and build a life alongside it',
            ] },
            { heading: 'What Grief Encompasses', text: 'Grief is the natural response to loss — any loss. This includes: death of a loved one, end of a relationship, loss of a friendship, loss of health or ability, loss of a job or career, loss of a home or place, loss of safety (after trauma), loss of innocence, loss of the family you thought you had, loss of the childhood you deserved, loss of a future you imagined. In attachment healing, grief is central because so much of the work involves acknowledging losses that may never have been named or honoured.' },
          ] },
        },
        {
          id: 'gu-breathing', type: 'breathing', title: 'Grief Grounding Breath', estimatedMinutes: 3,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'Grief can live in the body as tightness, heaviness, or hollowness. As you breathe, allow yourself to notice where grief lives in your body. You do not need to fix it. Simply acknowledge it. "I see you. I feel you. I am here."' },
        },
        {
          id: 'gu-journal', type: 'journal', title: 'Naming Your Losses', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'Make a list of losses you are carrying — named and unnamed. Include losses that may not seem "big enough" to grieve. All loss counts.',
            'Which of Worden\'s four tasks feels most relevant to you right now? Accepting reality, processing pain, adjusting to a changed world, or finding enduring connection?',
            'Has society, family, or your own inner critic ever told you that your grief was "too much" or "taking too long"? What did that message do to your grief?',
            'What does your grief need right now? Not what you think it "should" need — what does it actually need?',
          ], privacyNote: 'Grief is sacred ground. These reflections are private.' },
        },
        {
          id: 'gu-quiz', type: 'quiz', title: 'Grief Knowledge Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Kubler-Ross\'s "five stages of grief" were originally described in the context of:', options: ['Bereavement and losing a loved one', 'People facing their own terminal illness', 'Children experiencing divorce', 'Relationship breakups'], correctIndex: 1, explanation: 'The five stages were originally described in Kubler-Ross\'s "On Death and Dying" in the context of terminally ill patients facing their own death. They were never intended as a linear checklist for all grief.' },
            { question: 'Worden\'s Task 4 involves:', options: ['Completely letting go of the lost person', 'Maintaining an enduring connection while investing in ongoing life', 'Forgetting the past', 'Achieving "closure"'], correctIndex: 1, explanation: 'Worden\'s final task is not about "getting over" loss or achieving closure. It is about finding a way to maintain a meaningful bond with what was lost while continuing to invest in life. You carry grief — you do not resolve it.' },
          ] },
        },
      ],
    },

    // SESSION 2: Ambiguous Loss
    {
      id: 'ambiguous-loss',
      moduleId: 'grief-loss',
      title: 'Ambiguous Loss: Grieving What Cannot Be Resolved',
      description: 'Understand Pauline Boss\'s concept of ambiguous loss — loss that lacks clarity or closure — and how it applies to estrangement, addiction, mental illness, and absent but living parents.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Define ambiguous loss and its two types (Boss)',
        'Understand why ambiguous loss is uniquely difficult',
        'Recognise ambiguous loss in your own experience',
        'Learn to grieve without closure',
      ],
      prerequisites: ['grief-understanding'],
      contraindications: [],
      segments: [
        {
          id: 'al-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Ready to explore', value: 1 }, { label: 'A bit heavy', value: 3 }, { label: 'This resonates painfully', value: 5 }, { label: 'Very activated', value: 7 }, { label: 'I need support', value: 9 }] },
        },
        {
          id: 'al-psychoed', type: 'psychoeducation', title: 'Ambiguous Loss', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Is Ambiguous Loss?', text: 'Pauline Boss, a family therapist and researcher, identified a type of loss that does not fit the usual grief framework because it lacks clarity, finality, or social recognition. She called it "ambiguous loss." There are two types: Type 1 — Physical Absence with Psychological Presence: The person is physically gone but psychologically present. Examples: a missing person, a parent who abandoned the family, an estranged family member, a partner who has disappeared. Type 2 — Physical Presence with Psychological Absence: The person is physically present but psychologically gone. Examples: a parent with dementia, a family member with severe addiction, a partner with untreated mental illness, a parent who was physically present but emotionally unavailable throughout your childhood. Ambiguous loss is uniquely difficult because the loss cannot be verified or resolved. There is no death certificate, no funeral, no clear ending. The person is both gone and not gone. This ambiguity freezes the grief process — you cannot fully grieve someone who is not fully gone.' },
            { heading: 'Why It Is So Painful', text: 'Ambiguous loss creates a state Boss calls "frozen grief" — grief that cannot move forward because the loss itself is unresolved. Without clarity, the mind stays stuck in limbo: hoping and despairing simultaneously, unable to let go or move on. Society does not recognise ambiguous loss in the same way it recognises death. There are no rituals, no bereavement leave, no sympathy cards for "My parent is alive but was never emotionally present." This lack of social recognition compounds the pain.', keyIdeas: [
              'Ambiguous loss lacks the finality that allows traditional grieving',
              'Type 1: physically absent, psychologically present (missing persons, estrangement)',
              'Type 2: physically present, psychologically absent (addiction, mental illness, emotional neglect)',
              'Boss: "Ambiguous loss is the most stressful kind of loss because it defies resolution"',
              'Learning to live with ambiguity, rather than seeking closure, is the path forward',
            ] },
            { heading: 'Ambiguous Loss in Attachment Healing', text: 'For people healing from insecure attachment, ambiguous loss is often the central unaddressed grief. The parent who was physically present but emotionally unavailable is a Type 2 ambiguous loss. You cannot grieve them the way you would grieve a death because they are still alive. You may still have contact with them. Others may tell you to "be grateful" for what you have. But the loss is real: you lost the parent you needed, the childhood you deserved, and the emotional attunement that would have built secure attachment. Naming this as ambiguous loss — giving it a framework — can be profoundly validating. You are not overreacting. You are grieving a real loss that simply lacks a clear name.' },
            { heading: 'Living with Ambiguity', text: 'Boss teaches that the goal with ambiguous loss is not closure (which may never come) but "both/and" thinking. Both: my parent is alive. And: the parent I needed was never really there. Both: I love this person. And: they are not capable of giving me what I need. Both: I have hope. And: I accept what is. This "both/and" stance is not resignation. It is a mature, compassionate holding of complex reality. It allows you to stop waiting for resolution and start building your life alongside the ambiguity.' },
          ] },
        },
        {
          id: 'al-journal', type: 'journal', title: 'Your Ambiguous Losses', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'Do you recognise any ambiguous losses in your life? Name them. Which type are they — physically absent/psychologically present, or physically present/psychologically absent?',
            'Have you been waiting for closure or resolution for an ambiguous loss? What would it mean to accept that closure may never come?',
            'Practice "both/and" thinking: Write a sentence that holds both truths simultaneously. Example: "Both: I love my mother. And: she was not capable of meeting my emotional needs."',
            'What has the lack of social recognition for your ambiguous loss cost you? Have others minimised it? What would it mean to fully validate your own grief?',
          ], privacyNote: 'Private and deeply personal.' },
        },
        {
          id: 'al-quiz', type: 'quiz', title: 'Ambiguous Loss Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'A parent who was physically present but emotionally unavailable throughout childhood represents:', options: ['Normal parenting', 'Type 1 ambiguous loss', 'Type 2 ambiguous loss — physically present, psychologically absent', 'No loss at all'], correctIndex: 2, explanation: 'A parent who is physically present but emotionally absent represents Type 2 ambiguous loss. The child loses the attuned, emotionally available parent they needed while the person is still physically there, making the loss confusing and hard to name.' },
            { question: 'Boss recommends approaching ambiguous loss with:', options: ['Demands for closure', '"Both/and" thinking — holding two truths simultaneously', 'Denial of the loss', 'Complete detachment'], correctIndex: 1, explanation: 'Boss teaches "both/and" thinking as the path forward with ambiguous loss: holding two truths at once (e.g., "I love them AND they cannot give me what I need"), rather than seeking the closure that may never come.' },
          ] },
        },
        {
          id: 'al-action', type: 'action-plan', title: 'Honouring Ambiguous Loss', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one way to honour your ambiguous loss this week:', options: [
            { id: 'name-it', label: 'Name it and validate it', description: 'Write a statement that names your ambiguous loss: "What I experienced is real. This loss is real, even though there was no clear ending."' },
            { id: 'both-and', label: 'Practice "both/and" daily', description: 'Each day, write one "both/and" statement about a loss or complex situation you are holding.' },
            { id: 'ritual', label: 'Create a small private ritual', description: 'Create a simple ritual to honour your loss — lighting a candle, writing a letter, visiting a meaningful place. Grief rituals help the body process what the mind cannot resolve.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 3: Disenfranchised Grief
    {
      id: 'disenfranchised-grief',
      moduleId: 'grief-loss',
      title: 'Disenfranchised Grief: Losses That Go Unseen',
      description: 'Understand grief that society does not recognise or validate — the loss of a relationship, an identity, a future, or a childhood. Learn to grieve without permission.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Define disenfranchised grief (Doka)',
        'Identify your own disenfranchised losses',
        'Understand how invalidation compounds grief',
        'Learn to give yourself permission to grieve',
      ],
      prerequisites: ['ambiguous-loss'],
      contraindications: [],
      segments: [
        {
          id: 'dg-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Grounded', value: 1 }, { label: 'Tender', value: 3 }, { label: 'Heavy', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'dg-psychoed', type: 'psychoeducation', title: 'Grief Without Permission', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Is Disenfranchised Grief?', text: 'Kenneth Doka coined the term "disenfranchised grief" for losses that society does not recognise, validate, or support. When your grief is disenfranchised, you are denied the right to grieve — by others, by cultural norms, or even by yourself. Examples of disenfranchised grief include: grief after a breakup ("It was not a death — get over it"), grief after an abortion or miscarriage, grief for a pet, grief for a living person (estrangement, addiction, dementia), grief for the childhood you did not have, grief for the person you thought your parent/partner was, grief for a future that will not happen (childlessness, career change), grief after leaving an abusive relationship (people expect you to feel only relief), grief for parts of your identity you had to suppress. The common thread: your grief is real, but others (or you yourself) do not treat it as legitimate.' },
            { heading: 'How Invalidation Compounds Grief', text: 'When grief is disenfranchised, it does not disappear — it goes underground. Unvalidated grief can manifest as: depression, anxiety, or chronic anger, physical symptoms (fatigue, pain, immune suppression), relationship difficulties, substance use or other numbing behaviours, difficulty processing future losses, a pervasive sense of being "wrong" for feeling what you feel. The invalidation itself becomes a secondary wound. Not only did you lose something important — you were then told that the loss did not matter.', keyIdeas: [
              'Disenfranchised grief is real grief that lacks social recognition',
              'Invalidation does not eliminate grief — it drives it underground',
              'You do not need anyone else\'s permission to grieve your losses',
              'Grief for the childhood you did not have is one of the most common disenfranchised griefs in therapy',
              'Giving yourself permission to grieve is itself a healing act',
            ] },
            { heading: 'Grieving Without Permission', text: 'If your grief has been disenfranchised, the most powerful thing you can do is give yourself permission to grieve. This means: naming the loss as real ("I lost something important, even if others cannot see it"), allowing yourself to feel without policing your emotions, creating your own rituals of mourning when society does not provide them, finding communities that understand (support groups, therapy, this program), refusing to compare your grief to others\' ("At least..." is the enemy of grief), honouring the loss with the same compassion you would offer someone grieving a death.' },
          ] },
        },
        {
          id: 'dg-journal', type: 'journal', title: 'Validating Your Grief', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'What losses have you been told (by others or by yourself) are not "big enough" to grieve? Name them here. They count.',
            'How has the invalidation of your grief affected you? Where does unseen grief live in your body and behaviour?',
            'Write yourself a permission slip: "I give myself permission to grieve..." Complete this sentence as many times as you need.',
            'If you were treating your disenfranchised grief with the same compassion as a death, what would that look like? What rituals, space, and support would you give yourself?',
          ], privacyNote: 'Private. This space is yours to grieve freely.' },
        },
        {
          id: 'dg-quiz', type: 'quiz', title: 'Disenfranchised Grief Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Disenfranchised grief is:', options: ['Grief that does not really matter', 'Real grief that society does not recognise, validate, or support', 'A clinical diagnosis', 'Grief that resolves quickly'], correctIndex: 1, explanation: 'Disenfranchised grief is genuine grief for losses that lack social recognition. The grief is real, but the person is denied the right to grieve by cultural norms, others\' reactions, or their own internalised beliefs.' },
            { question: 'When grief is invalidated, it:', options: ['Goes away', 'Goes underground and manifests as depression, anxiety, or physical symptoms', 'Becomes less important', 'Resolves faster'], correctIndex: 1, explanation: 'Invalidated grief does not disappear. It goes underground, often manifesting as depression, anxiety, physical symptoms, anger, or difficulty processing future losses. The invalidation itself becomes a secondary wound.' },
          ] },
        },
      ],
    },

    // SESSION 4: Grief in Relationship Endings
    {
      id: 'grief-relationships',
      moduleId: 'grief-loss',
      title: 'Grief in Relationship Endings',
      description: 'Understand the unique grief of relationship loss — the death of a shared future, identity shifts, and the attachment system in mourning.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Understand why relationship endings can feel like death',
        'Recognise the attachment system\'s grief response',
        'Learn to grieve a relationship without minimising',
        'Understand the role of grief in post-breakup recovery',
      ],
      prerequisites: ['disenfranchised-grief'],
      contraindications: [],
      segments: [
        {
          id: 'gr-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Grounded', value: 1 }, { label: 'A bit raw', value: 3 }, { label: 'This touches something', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'gr-psychoed', type: 'psychoeducation', title: 'When Relationships End', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Why Breakups Hurt Like Death', text: 'Neuroscience research shows that the brain processes a breakup similarly to how it processes bereavement. The same neural regions activate: the anterior cingulate cortex (emotional pain), the insula (gut-wrenching physical sensation), and the dopamine withdrawal pathways. When a relationship ends, you lose: the person themselves, the daily routines and rituals, a shared future that no longer exists, an identity (you were "we" and now you are "I"), a sense of home and safety (if the relationship was your secure base), mutual friends and shared social worlds, physical intimacy and the oxytocin regulation it provided. Each of these is a separate loss that requires its own grieving.' },
            { heading: 'The Attachment System in Mourning', text: 'Bowlby observed that the attachment system responds to the loss of an attachment figure with a predictable sequence: protest (trying to get the person back — calling, begging, bargaining), despair (the withdrawal and depression that follows when protest fails), and reorganisation (gradually building a life without the person). For those with anxious attachment, the protest phase can be prolonged and intense — because the attachment system is wired to pursue proximity at all costs. For those with avoidant attachment, the despair phase may be delayed — suppressed initially but surfacing weeks or months later. Understanding that your response is your attachment system doing what it was designed to do can reduce self-blame.', keyIdeas: [
              'Breakups activate the same brain regions as bereavement and physical pain',
              'You are grieving multiple losses simultaneously — the person, the future, the identity',
              'Bowlby\'s protest-despair-reorganisation sequence applies to relationship loss',
              'Your attachment style shapes how you grieve relationships',
              'Grief after a breakup is not "dramatic" — it is neurologically legitimate',
            ] },
            { heading: 'Grieving vs Moving On', text: 'Society often pressures people to "move on" quickly from relationship endings — especially if the relationship was unhealthy. But grief and healing are not the same as dwelling or weakness. You can acknowledge that a relationship was wrong for you AND grieve its ending. You can be relieved to be out AND desperately miss the person. You can know intellectually that it needed to end AND feel devastated in your body. These are not contradictions. They are the complex reality of human attachment. Allow the grief. Do not rush to the lesson, the silver lining, or the next relationship. The grief is the path through.' },
          ] },
        },
        {
          id: 'gr-journal', type: 'journal', title: 'Grieving Your Relationship', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'If you are grieving a relationship ending: What specifically have you lost? List each loss separately — the person, the routines, the future, the identity, the physical comfort.',
            'Where are you in Bowlby\'s sequence? Protest (trying to get them back), despair (withdrawal and sadness), or reorganisation (building a new life)?',
            'What have people told you about your grief that was unhelpful? What do you need to hear instead?',
            'Write a farewell to this relationship — not to the person, but to the shared life you had. What are you letting go of?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'gr-quiz', type: 'quiz', title: 'Relationship Grief Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Breakups activate the same brain regions as:', options: ['Solving a math problem', 'Physical pain and bereavement', 'Relaxation', 'Hunger'], correctIndex: 1, explanation: 'Neuroscience research shows that relationship loss activates the same neural regions as physical pain (anterior cingulate cortex, insula) and the same withdrawal pathways as bereavement. The pain is neurologically real.' },
            { question: 'Bowlby\'s attachment response to loss includes:', options: ['Instant acceptance', 'Protest, despair, and reorganisation', 'Anger only', 'Nothing — attachment is not relevant to grief'], correctIndex: 1, explanation: 'Bowlby identified three phases of attachment loss: protest (attempting to recover the lost person), despair (withdrawal when protest fails), and reorganisation (gradually building a life without them).' },
          ] },
        },
      ],
    },

    // SESSION 5: Grieving the Childhood You Didn't Have
    {
      id: 'grieving-childhood',
      moduleId: 'grief-loss',
      title: 'Grieving the Childhood You Didn\'t Have',
      description: 'The most profound and often most avoided grief in attachment healing: mourning the safe, attuned, loving childhood you deserved but did not receive.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand why grieving childhood is essential for attachment healing',
        'Recognise the specific losses of inadequate parenting',
        'Learn to hold grief and compassion for your younger self simultaneously',
        'Begin the reparenting process through grief',
      ],
      prerequisites: ['grief-relationships'],
      contraindications: ['This session may bring up intense emotions. Please have grounding tools ready and consider working through this alongside a therapist if possible.'],
      segments: [
        {
          id: 'gc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'This session explores the grief of childhood loss. This can be one of the most emotional sessions in this program. How are you feeling?', options: [{ label: 'Ready and grounded', value: 1 }, { label: 'Nervous but willing', value: 3 }, { label: 'Already feeling something rise', value: 5 }, { label: 'This feels very heavy', value: 7 }, { label: 'I need support before continuing', value: 9 }] },
        },
        {
          id: 'gc-psychoed', type: 'psychoeducation', title: 'The Grief of Childhood', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Loss Beneath the Loss', text: 'Much of attachment healing comes down to one grief: the mourning of the childhood you deserved but did not receive. This is perhaps the most profound disenfranchised and ambiguous loss a person can experience. It is disenfranchised because society often says "Your parents did their best" or "At least they provided for you." It is ambiguous because the parent may still be alive, the childhood is over, and there is no specific event to point to — just a pervasive, unnameable absence. What you may be grieving: the safe, attuned parent you needed, the unconditional love and acceptance you deserved, the feeling of being truly seen and valued for who you are, the freedom to have needs without being punished or ignored, the childhood you should have had — play, safety, innocence, joy, the developmental experiences that were interrupted or prevented, the person you might have been without the wounds.' },
            { heading: 'Why This Grief Is Essential', text: 'Many people resist grieving their childhood because it feels like blaming their parents. But grief is not blame. You can understand that your parents were limited by their own wounds AND grieve what their limitations cost you. Both are true. Until you grieve, you may unconsciously: seek the parent you never had in romantic partners, repeat the patterns of your family of origin, minimise your own pain ("Others had it worse"), struggle to reparent yourself because you have not acknowledged what was missing, alternate between idealising and vilifying your parents. Grief opens the door to acceptance — not acceptance that what happened was okay, but acceptance that it happened, it hurt, and you survived.', keyIdeas: [
              'Grieving your childhood is not blaming your parents — it is honouring your pain',
              'This grief is both disenfranchised (socially unrecognised) and ambiguous (no clear ending)',
              'Until this grief is processed, it drives unconscious relationship patterns',
              'You can understand your parents\' limitations AND grieve what those limitations cost you',
              'This grief is the doorway to genuine reparenting',
            ] },
            { heading: 'Holding Both Truths', text: 'The mature grief of childhood requires holding complexity: "My parents loved me in the way they were capable of, and it was not enough." "My parent was themselves a wounded child, and their wounds wounded me." "I can have compassion for their struggle and still name my own pain." "I am not betraying them by grieving what they could not give me." This is "both/and" thinking applied to the most personal loss. It is not easy. But it is the path to freedom — freedom from the unconscious hope that they will change, freedom from the need to protect them from your reality, freedom to parent yourself the way you deserved to be parented.' },
          ] },
        },
        {
          id: 'gc-breathing', type: 'breathing', title: 'Holding Space for Grief', estimatedMinutes: 3,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'Before we move into the journaling, ground yourself. Place a hand on your heart. Breathe. Whatever comes up is welcome here. You do not need to be strong right now. You just need to be honest.' },
        },
        {
          id: 'gc-journal', type: 'journal', title: 'Letters of Grief', estimatedMinutes: 12,
          content: { type: 'journal', prompts: [
            'Write a letter to the child you were. Tell them what you wish someone had told them. Tell them they were not too much, not too needy, not the problem.',
            'What did you need from your parents that you did not receive? Name it specifically: attunement, protection, encouragement, acceptance, presence, delight in who you were.',
            'Write a "both/and" statement about your parents: "Both: ___. And: ___." Let both truths exist without needing to choose one.',
            'What would you like to say to the part of you that still hopes your parent will change? What does that part need to hear?',
          ], privacyNote: 'This is sacred ground. Take your time. There is no rush. Your entries are private and stored only on your device.' },
        },
        {
          id: 'gc-reflection', type: 'reflection', title: 'Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What came up for you in this session? Name it without judging it.',
            'What does the child in you need right now?',
            'How will you be gentle with yourself for the rest of today?',
          ] },
        },
        {
          id: 'gc-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Grieving the childhood you did not have is:', options: ['Blaming your parents', 'Unnecessary if your parents provided financially', 'An essential part of attachment healing that honours your pain without assigning blame', 'A sign of ingratitude'], correctIndex: 2, explanation: 'Grieving childhood loss is not blame — it is the honest acknowledgement of pain. You can understand your parents\' limitations and still grieve what those limitations cost you. This grief is essential for breaking free of unconscious patterns.' },
          ] },
        },
      ],
    },

    // SESSION 6: Complicated Grief and Moving Forward
    {
      id: 'complicated-grief',
      moduleId: 'grief-loss',
      title: 'Complicated Grief & Building a Life Alongside Loss',
      description: 'Understand when grief becomes "stuck," learn the signs of complicated grief, and develop practices for carrying loss forward while building a meaningful life.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Identify signs of complicated (prolonged) grief',
        'Understand when professional grief support is needed',
        'Learn practices for living alongside loss',
        'Build an ongoing grief maintenance plan',
      ],
      prerequisites: ['grieving-childhood'],
      contraindications: [],
      segments: [
        {
          id: 'cg-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Grounded', value: 1 }, { label: 'Tender but okay', value: 3 }, { label: 'Heavy', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'cg-psychoed', type: 'psychoeducation', title: 'When Grief Gets Stuck', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Complicated Grief', text: 'Complicated grief (now called "prolonged grief disorder" in the DSM-5-TR) occurs when the grief response remains intense and debilitating far beyond what would be expected. Signs include: intense longing or yearning that does not diminish over time, difficulty accepting the loss (months or years later), emotional numbness or detachment, feeling that life is meaningless, inability to engage in daily activities, avoidance of all reminders OR compulsive seeking of reminders, persistent anger or bitterness, difficulty imagining any future, feeling that a part of you died with the loss. It is important to note: there is no "right" timeline for grief. But if your grief is preventing you from functioning in daily life for an extended period, professional support can help.' },
            { heading: 'Factors That Complicate Grief', text: 'Grief becomes complicated when: the loss was sudden, violent, or traumatic, the relationship was ambivalent (love mixed with anger or unresolved conflict), the loss was disenfranchised (unsupported by society), there were previous unresolved losses, the grieving person has insecure attachment (anxious attachment can prolong protest; avoidant attachment can delay grief), the person lacks social support, the loss involves multiple layers (e.g., losing a partner, a home, and financial security simultaneously).', keyIdeas: [
              'Complicated grief is real and may need professional support',
              'There is no "right" timeline — but chronic inability to function signals a need for help',
              'Insecure attachment can complicate grief',
              'Unresolved previous losses can compound current grief',
              'Grief therapy (including specific protocols for prolonged grief) can be very effective',
            ] },
            { heading: 'Building a Life Alongside Loss', text: 'The goal of grief work is not to "get over" loss but to build a life that can hold both the loss and new meaning. Practices that help: Ritual and remembrance (lighting a candle, visiting a place, writing a letter on anniversaries), carrying the relationship forward (how did this person or experience shape you in ways you want to honour?), allowing grief to change form (it may shift from acute anguish to a gentle ache to a bittersweet tenderness), giving yourself permission to experience joy without guilt, finding meaning not in the loss itself but in how you choose to live in response to it. As Worden\'s Task 4 suggests, the enduring connection remains. You carry what you loved. You build a life that honours what was lost.' },
          ] },
        },
        {
          id: 'cg-journal', type: 'journal', title: 'Carrying Loss Forward', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Do you recognise any signs of complicated grief in yourself? If so, consider this a gentle encouragement to seek professional support.',
            'How has your grief changed over time? Has it shifted in form, intensity, or quality?',
            'What meaning are you finding — not in the loss itself, but in how you are choosing to live in response to it?',
            'What is one way you want to carry your loss forward with love, rather than being frozen by it?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'cg-reflection', type: 'reflection', title: 'Module Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What has this grief module opened up for you?',
            'What losses have you named for the first time?',
            'What is one commitment you are making to your grief — to honour it rather than suppress it?',
          ] },
        },
        {
          id: 'cg-quiz', type: 'quiz', title: 'Module Review', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Complicated (prolonged) grief is characterised by:', options: ['Feeling sad for more than a week', 'Intense, debilitating grief that prevents functioning and does not diminish over an extended period', 'Normal sadness after a loss', 'Crying at funerals'], correctIndex: 1, explanation: 'Complicated grief is characterised by intense, persistent grief that prevents daily functioning and does not follow the expected trajectory of gradual integration. It may require professional support.' },
            { question: 'The goal of grief work is:', options: ['To stop feeling sad', 'To forget the loss', 'To build a life that holds both the loss and new meaning', 'To achieve "closure"'], correctIndex: 2, explanation: 'The goal is not to "get over" loss or achieve closure, but to build a life that can hold both the reality of what was lost and the possibility of new meaning, connection, and joy.' },
          ] },
        },
        {
          id: 'cg-action', type: 'action-plan', title: 'Honouring Your Grief', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one ongoing grief practice:', options: [
            { id: 'grief-ritual', label: 'Create a personal grief ritual', description: 'Develop a small, regular practice for honouring your loss — lighting a candle, journaling, a walk in nature. Make it yours.' },
            { id: 'professional-support', label: 'Explore grief therapy', description: 'If any of this module resonated deeply, consider seeking a therapist trained in grief — especially one familiar with ambiguous and disenfranchised loss.' },
            { id: 'both-and-practice', label: 'Daily "both/and" practice', description: 'Each day, write one "both/and" statement about a loss you are carrying. Let both truths coexist.' },
          ], timeHorizonDays: 30 },
        },
      ],
    },
  ],
}

export default griefLoss
