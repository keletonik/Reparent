import type { Module } from './types'
import {
  traumaBonding,
  codependencyHealing,
  selfCompassion,
  healthyRelationships,
  trustRebuilding,
  boundariesCommunication,
  griefLoss,
  innerChildWork,
  threePercentMan,
  threePercentManStudyGuide,
} from './modules'

export const modules: Module[] = [
  {
    id: 'orientation-safety',
    title: 'Orientation, Safety & Pacing',
    description: 'Learn how this program works, set up your safety tools, and understand your own window of tolerance. This foundation ensures you can learn at a pace that feels right for you.',
    icon: 'shield',
    order: 1,
    category: 'foundation',
    prerequisites: [],
    sessions: [
      {
        id: 'welcome-scope',
        moduleId: 'orientation-safety',
        title: 'Welcome: What This Program Is (And Is Not)',
        description: 'Understanding the scope of this learning program and setting expectations.',
        estimatedMinutes: 20,
        learningObjectives: [
          'Understand that this is education, not therapy',
          'Know when and how to seek professional help',
          'Set up your crisis resources',
        ],
        prerequisites: [],
        contraindications: [],
        segments: [
          {
            id: 'ws-safety',
            type: 'safety-check',
            title: 'How Are You Feeling Right Now?',
            estimatedMinutes: 2,
            content: {
              type: 'safety-check',
              question: 'Before we begin, take a moment to check in. How activated do you feel right now?',
              options: [
                { label: 'Calm and grounded', value: 1 },
                { label: 'A little uneasy but okay', value: 3 },
                { label: 'Somewhat activated', value: 5 },
                { label: 'Quite distressed', value: 7 },
                { label: 'Very distressed — I need support now', value: 9 },
              ],
            },
          },
          {
            id: 'ws-psychoed',
            type: 'psychoeducation',
            title: 'What Is Reparent?',
            estimatedMinutes: 6,
            content: {
              type: 'psychoeducation',
              sections: [
                {
                  heading: 'A Learning Program, Not Therapy',
                  text: 'Reparent is an evidence-based educational program designed to teach skills for understanding and healing attachment patterns. It draws from attachment theory, CBT, DBT, and trauma-informed approaches. While these are the same frameworks therapists use, this program is not a replacement for professional mental health care.',
                },
                {
                  heading: 'What You Will Learn',
                  text: 'Over 12 modules, you will learn to recognise your attachment patterns, regulate difficult emotions, challenge unhelpful thinking patterns, build healthier boundaries, and develop self-compassion.',
                  keyIdeas: [
                    'Attachment patterns can change — they are not fixed',
                    'Skills practice, not just knowledge, drives growth',
                    'Your pace matters — you can pause or step back at any time',
                    'Safety comes first, always',
                  ],
                },
                {
                  heading: 'Important Boundaries',
                  text: 'This program does not diagnose conditions, replace therapy, provide crisis intervention, or offer EMDR or trauma processing. If you are in crisis, use the safety button available on every screen to access immediate support resources.',
                },
              ],
            },
          },
          {
            id: 'ws-interactive',
            type: 'interactive',
            title: 'Build Your Coping Menu',
            estimatedMinutes: 8,
            content: {
              type: 'interactive',
              component: 'CopingMenuBuilder',
              config: { categories: ['Grounding', 'Movement', 'Connection', 'Comfort', 'Distraction'] },
              instructions: 'Choose activities that help you feel grounded when emotions get intense. You can come back and update this list anytime.',
            },
          },
          {
            id: 'ws-journal',
            type: 'journal',
            title: 'Reflect on Your Starting Point',
            estimatedMinutes: 5,
            content: {
              type: 'journal',
              prompts: [
                'What brought you to this program today?',
                'What signs tell you that you are outside your window of tolerance?',
                'What does healing look like for you?',
              ],
              privacyNote: 'Your journal entries are stored only on your device by default. You control your data.',
            },
          },
          {
            id: 'ws-quiz',
            type: 'quiz',
            title: 'Safety Foundations Check',
            estimatedMinutes: 3,
            content: {
              type: 'quiz',
              items: [
                {
                  question: 'This program is:',
                  options: [
                    'A replacement for therapy',
                    'An evidence-based learning tool for skills and knowledge',
                    'A diagnostic assessment',
                    'An AI therapist',
                  ],
                  correctIndex: 1,
                  explanation: 'Reparent is an educational program that teaches evidence-based skills. It is not therapy, diagnosis, or crisis intervention.',
                },
                {
                  question: 'If you feel overwhelmed during a session, you should:',
                  options: [
                    'Push through to finish',
                    'Close the app permanently',
                    'Use the pause/grounding tools or access crisis resources',
                    'Ignore how you feel',
                  ],
                  correctIndex: 2,
                  explanation: 'Your safety always comes first. You can pause, use grounding exercises, or access crisis resources at any time.',
                },
                {
                  question: 'True or False: Attachment patterns are fixed and cannot change.',
                  options: ['True', 'False'],
                  correctIndex: 1,
                  explanation: 'Research shows that attachment patterns can and do change over time, especially with intentional skill practice and supportive relationships.',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'window-of-tolerance',
        moduleId: 'orientation-safety',
        title: 'Your Window of Tolerance',
        description: 'Learn to recognise when you are within or outside your optimal zone for learning and growth.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Define the window of tolerance concept',
          'Identify personal signs of hyper- and hypo-arousal',
          'Practice returning to the window using a grounding technique',
        ],
        prerequisites: ['welcome-scope'],
        contraindications: ['If you feel at immediate risk of harming yourself or others, use Crisis Mode'],
        segments: [
          {
            id: 'wot-safety',
            type: 'safety-check',
            title: 'Check-In',
            estimatedMinutes: 2,
            content: {
              type: 'safety-check',
              question: 'How are you feeling as we begin?',
              options: [
                { label: 'Calm and ready to learn', value: 1 },
                { label: 'Slightly nervous but okay', value: 3 },
                { label: 'Somewhat activated', value: 5 },
                { label: 'Quite distressed', value: 7 },
                { label: 'Very distressed — I need support', value: 9 },
              ],
            },
          },
          {
            id: 'wot-psychoed',
            type: 'psychoeducation',
            title: 'Understanding Your Window',
            estimatedMinutes: 7,
            content: {
              type: 'psychoeducation',
              sections: [
                {
                  heading: 'What Is the Window of Tolerance?',
                  text: 'The "window of tolerance" is the zone of arousal where you can function effectively. Within this window, you can think clearly, feel your emotions without being overwhelmed, and make thoughtful decisions. Outside this window, your nervous system is either too activated (hyperarousal) or too shut down (hypoarousal).',
                },
                {
                  heading: 'Hyperarousal: Too Much Activation',
                  text: 'When pushed above your window, you may experience anxiety, panic, racing thoughts, anger, restlessness, or an overwhelming urge to act (like texting an ex repeatedly). Your fight-or-flight system is in overdrive.',
                  keyIdeas: [
                    'Racing heartbeat or shallow breathing',
                    'Feeling out of control or frantic',
                    'Urges to pursue, text, check, or seek reassurance',
                    'Anger, irritability, or emotional flooding',
                  ],
                },
                {
                  heading: 'Hypoarousal: Too Little Activation',
                  text: 'When pushed below your window, you may feel numb, disconnected, exhausted, foggy, or unable to act. This can feel like shutting down or going blank.',
                  keyIdeas: [
                    'Feeling numb or detached',
                    'Brain fog or inability to think clearly',
                    'Fatigue that is not explained by sleep',
                    'Feeling "frozen" or unable to make decisions',
                  ],
                },
                {
                  heading: 'Expanding Your Window',
                  text: 'The goal is not to never leave your window — that is impossible. The goal is to notice when you have left it and to have skills to return. Over time, your window naturally widens as you practise regulation skills.',
                },
              ],
            },
          },
          {
            id: 'wot-breathing',
            type: 'breathing',
            title: 'Grounding Breath Practice',
            estimatedMinutes: 4,
            content: {
              type: 'breathing',
              pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 },
              durationSeconds: 120,
              instruction: 'Follow the circle as it expands and contracts. Breathe in through your nose as it grows, hold gently, then breathe out slowly through your mouth as it shrinks.',
            },
          },
          {
            id: 'wot-journal',
            type: 'journal',
            title: 'Map Your Window',
            estimatedMinutes: 6,
            content: {
              type: 'journal',
              prompts: [
                'What does being inside your window of tolerance feel like? Describe any physical sensations, emotions, and thoughts.',
                'What are your personal signs of hyperarousal (too activated)?',
                'What are your personal signs of hypoarousal (too shut down)?',
                'What is one thing that usually helps you return to your window?',
              ],
              privacyNote: 'These reflections are private to you.',
            },
          },
          {
            id: 'wot-quiz',
            type: 'quiz',
            title: 'Window of Tolerance Check',
            estimatedMinutes: 3,
            content: {
              type: 'quiz',
              items: [
                {
                  question: 'Frantically checking your phone every 30 seconds for a reply is most likely a sign of:',
                  options: ['Hypoarousal', 'Being within your window', 'Hyperarousal', 'Healthy concern'],
                  correctIndex: 2,
                  explanation: 'Frantic checking, reassurance seeking, and urge-driven behaviours are signs of hyperarousal — your nervous system is above your window of tolerance.',
                },
                {
                  question: 'The goal of learning about your window of tolerance is to:',
                  options: [
                    'Never feel strong emotions',
                    'Notice when you leave the window and use skills to return',
                    'Avoid all triggering situations',
                    'Control other people\'s behaviour',
                  ],
                  correctIndex: 1,
                  explanation: 'The goal is awareness and skill — noticing when you leave your window and knowing how to come back, not avoiding emotions altogether.',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'attachment-foundations',
    title: 'Attachment Foundations',
    description: 'Understand how attachment works, explore your own patterns, and learn how they show up in relationships. Knowledge is the first step toward change.',
    icon: 'heart',
    order: 2,
    category: 'foundation',
    prerequisites: ['orientation-safety'],
    sessions: [
      {
        id: 'attachment-system',
        moduleId: 'attachment-foundations',
        title: 'How Attachment Works',
        description: 'The science of human bonding and why we seek closeness.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Explain the basic attachment system and its purpose',
          'Identify the dimensional model of attachment (anxiety/avoidance)',
          'Recognise that attachment patterns are changeable',
        ],
        prerequisites: [],
        contraindications: [],
        segments: [
          {
            id: 'as-safety',
            type: 'safety-check',
            title: 'Check-In',
            estimatedMinutes: 2,
            content: {
              type: 'safety-check',
              question: 'How are you feeling right now?',
              options: [
                { label: 'Calm and curious', value: 1 },
                { label: 'A little uneasy', value: 3 },
                { label: 'Somewhat activated', value: 5 },
                { label: 'Quite distressed', value: 7 },
                { label: 'Very distressed', value: 9 },
              ],
            },
          },
          {
            id: 'as-psychoed',
            type: 'psychoeducation',
            title: 'The Attachment System',
            estimatedMinutes: 8,
            content: {
              type: 'psychoeducation',
              sections: [
                {
                  heading: 'Why We Attach',
                  text: 'Humans are wired for connection. John Bowlby, the founder of attachment theory, showed that from birth we rely on caregivers for safety, comfort, and survival. This is not weakness — it is biology. The attachment system evolved to keep us close to people who can protect and support us. Mary Ainsworth\'s Strange Situation research confirmed that the quality of this early bond shapes how we relate to others throughout life.',
                },
                {
                  heading: 'Attachment Is Dimensional, Not Categorical',
                  text: 'Researchers Brennan, Clark, and Shaver (1998) demonstrated that adult attachment is best understood on two dimensions: attachment anxiety (fear of abandonment, need for reassurance) and attachment avoidance (discomfort with closeness, preference for independence). Everyone falls somewhere on each dimension — it is not a fixed "type".',
                  keyIdeas: [
                    'High anxiety + low avoidance = anxious-preoccupied tendencies',
                    'Low anxiety + high avoidance = dismissive tendencies',
                    'High anxiety + high avoidance = fearful-avoidant (disorganised) tendencies',
                    'Low anxiety + low avoidance = secure tendencies',
                    'These patterns can shift with awareness and practice',
                  ],
                },
                {
                  heading: 'Change Is Possible',
                  text: 'While early experiences shape our initial patterns, longitudinal research (including the Minnesota Study of Risk and Adaptation) shows that attachment can change throughout life. What researchers call "earned security" — developing secure attachment despite insecure beginnings — is well-documented. Therapy, healthy relationships, and intentional skill practice can all move someone toward greater security.',
                },
              ],
            },
          },
          {
            id: 'as-interactive',
            type: 'interactive',
            title: 'Attachment Pattern Reflection',
            estimatedMinutes: 8,
            content: {
              type: 'interactive',
              component: 'AttachmentReflection',
              config: {},
              instructions: 'Reflect on these questions about your relationship patterns. This is not a diagnosis — it is a starting point for self-understanding.',
            },
          },
          {
            id: 'as-journal',
            type: 'journal',
            title: 'Your Attachment Story',
            estimatedMinutes: 7,
            content: {
              type: 'journal',
              prompts: [
                'What are your top 5 attachment triggers — the situations that make you feel most anxious or shut down in relationships?',
                'When triggered, what do you usually do? (e.g., text repeatedly, withdraw, seek reassurance, become angry)',
                'Looking at the anxiety/avoidance dimensions, where do you think you tend to fall?',
              ],
              privacyNote: 'These reflections are private and stored only on your device.',
            },
          },
          {
            id: 'as-quiz',
            type: 'quiz',
            title: 'Attachment Knowledge Check',
            estimatedMinutes: 3,
            content: {
              type: 'quiz',
              items: [
                {
                  question: 'Modern attachment research views patterns as:',
                  options: ['Fixed personality types', 'Dimensional (a spectrum)', 'Disorders', 'Irrelevant in adulthood'],
                  correctIndex: 1,
                  explanation: 'Attachment is understood dimensionally — on spectrums of anxiety and avoidance — not as fixed, categorical "types".',
                },
                {
                  question: 'Which of these is TRUE about attachment patterns?',
                  options: [
                    'They are set in stone by age 2',
                    'They only matter in romantic relationships',
                    'They can change with awareness and practice',
                    'They can only change through medication',
                  ],
                  correctIndex: 2,
                  explanation: 'Research consistently shows that attachment patterns can change throughout life with intentional effort and supportive experiences.',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'trigger-mapping',
        moduleId: 'attachment-foundations',
        title: 'Mapping Your Triggers',
        description: 'Identify what activates your attachment system and begin to understand the patterns.',
        estimatedMinutes: 30,
        learningObjectives: [
          'Identify personal attachment triggers',
          'Understand the trigger-reaction-consequence cycle',
          'Begin to notice the space between trigger and response',
        ],
        prerequisites: ['attachment-system'],
        contraindications: ['If discussing triggers causes significant distress, pause and use grounding tools'],
        segments: [
          {
            id: 'tm-safety',
            type: 'safety-check',
            title: 'Check-In',
            estimatedMinutes: 2,
            content: {
              type: 'safety-check',
              question: 'This session explores triggers. How do you feel about exploring this topic right now?',
              options: [
                { label: 'Ready and grounded', value: 1 },
                { label: 'A little nervous but willing', value: 3 },
                { label: 'Somewhat anxious', value: 5 },
                { label: 'Very anxious', value: 7 },
                { label: 'Not ready — I need support', value: 9 },
              ],
            },
          },
          {
            id: 'tm-psychoed',
            type: 'psychoeducation',
            title: 'The Trigger-Reaction Cycle',
            estimatedMinutes: 6,
            content: {
              type: 'psychoeducation',
              sections: [
                {
                  heading: 'What Is an Attachment Trigger?',
                  text: 'An attachment trigger is any event that activates your attachment system — your brain\'s alarm that says "connection is at risk." Common triggers include delayed replies, perceived rejection, a partner seeming distant, seeing an ex on social media, or being alone on a significant date.',
                },
                {
                  heading: 'The Cycle',
                  text: 'When triggered, most people follow a predictable cycle: Trigger → Emotional flood → Urge to act → Behaviour → Consequence → (often) More distress. The goal is not to eliminate triggers but to widen the gap between "urge to act" and "behaviour."',
                  keyIdeas: [
                    'Triggers are not the problem — automatic reactions are',
                    'The urge is information, not a command',
                    'Pausing creates space for a different choice',
                  ],
                },
              ],
            },
          },
          {
            id: 'tm-interactive',
            type: 'interactive',
            title: 'My Trigger Map',
            estimatedMinutes: 10,
            content: {
              type: 'interactive',
              component: 'TriggerMapper',
              config: {},
              instructions: 'Map out your common triggers, the emotions they bring up, the urges you feel, and what you usually do. Then identify what you would prefer to do instead.',
            },
          },
          {
            id: 'tm-journal',
            type: 'journal',
            title: 'Reflect on Your Patterns',
            estimatedMinutes: 7,
            content: {
              type: 'journal',
              prompts: [
                'What is your most frequent attachment trigger?',
                'When this trigger fires, what story does your mind tell you? (e.g., "They don\'t care," "I\'m going to be abandoned")',
                'What do you usually do in response? What does it cost you?',
              ],
              privacyNote: 'Your reflections are private.',
            },
          },
          {
            id: 'tm-quiz',
            type: 'quiz',
            title: 'Trigger Awareness Check',
            estimatedMinutes: 3,
            content: {
              type: 'quiz',
              items: [
                {
                  question: 'The goal of understanding triggers is to:',
                  options: [
                    'Avoid all triggering situations forever',
                    'Blame the other person for triggering you',
                    'Create space between the urge and your response',
                    'Suppress all emotions',
                  ],
                  correctIndex: 2,
                  explanation: 'Understanding triggers helps you pause and choose your response rather than reacting automatically.',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'attachment-trauma',
    title: 'Attachment Trauma Deep Dive',
    description: 'Understand how early attachment disruptions create lasting patterns of relating, and begin identifying how these wounds show up in your adult relationships.',
    icon: 'heart',
    order: 3,
    category: 'foundation',
    prerequisites: ['attachment-foundations'],
    sessions: [
      {
        id: 'attachment-wounds',
        moduleId: 'attachment-trauma',
        title: 'Understanding Attachment Wounds',
        description: 'Explore how early attachment disruptions create lasting relational patterns.',
        estimatedMinutes: 25,
        learningObjectives: ['Understand how attachment wounds form', 'Identify your own attachment wound patterns', 'Recognise how wounds show up in adult relationships'],
        prerequisites: [],
        contraindications: ['If you are currently in crisis or experiencing flashbacks, please use the safety resources first.'],
        segments: [
          { id: 'aw-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'This session explores early attachment experiences. How are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'aw-psychoed', type: 'psychoeducation', title: 'How Attachment Wounds Form', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [{ heading: 'What Are Attachment Wounds?', text: 'Attachment wounds are injuries to our sense of safety and belonging that occur when our primary caregivers are consistently unavailable, unpredictable, or frightening. These are not always dramatic events — sometimes the wound is in what was absent rather than what happened.' }, { heading: 'The Impact on Your Nervous System', text: 'When a child cannot rely on their caregiver for comfort, their nervous system adapts. It may become hypervigilant (anxious attachment), shut down emotionally (avoidant attachment), or alternate between both (disorganised attachment). These adaptations were survival strategies, not character flaws.', keyIdeas: ['Attachment wounds are adaptive responses, not weaknesses', 'Your nervous system learned to protect you in the only way it could', 'These patterns can be updated with awareness and practice', 'Healing is possible at any age through earned security'] }] } },
          { id: 'aw-journal', type: 'journal', title: 'Mapping Your Wounds', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What was the emotional atmosphere like in your childhood home?', 'When you were upset as a child, what typically happened when you sought comfort?', 'How do these early experiences show up in your adult relationships?'], privacyNote: 'This is deeply personal. Your entries stay on your device.' } },
          { id: 'aw-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 5, content: { type: 'quiz', items: [{ question: 'What is an attachment wound?', options: ['A physical injury from childhood', 'An injury to our sense of safety and belonging from caregivers', 'A genetic condition', 'A choice we make as adults'], correctIndex: 1, explanation: 'Attachment wounds form when caregivers are unavailable, unpredictable, or frightening — injuring our sense of safety and belonging.' }, { question: 'Why does the nervous system develop attachment patterns?', options: ['Because of genetics alone', 'As a survival strategy to adapt to the caregiving environment', 'Because children are too sensitive', 'Due to peer relationships'], correctIndex: 1, explanation: 'The nervous system adapts to the caregiving environment as a survival strategy. These patterns were protective, not pathological.' }, { question: 'Can attachment patterns change in adulthood?', options: ['No, they are fixed for life', 'Yes, through earned security with awareness and practice', 'Only with medication', 'Only if you had a perfect childhood'], correctIndex: 1, explanation: 'Research shows attachment patterns can change through what is called earned security — developing new relational experiences and awareness.' }] } },
          { id: 'aw-reflection', type: 'reflection', title: 'Closing Reflection', estimatedMinutes: 3, content: { type: 'reflection', prompts: ['What is one thing you learned about yourself in this session?', 'How might understanding your attachment wounds change how you relate to others?'] } },
        ],
      },
      {
        id: 'anxious-attachment-deep',
        moduleId: 'attachment-trauma',
        title: 'Anxious Attachment & Hyperactivation',
        description: 'Understand the anxious attachment pattern: hypervigilance, protest behaviours, and the fear of abandonment.',
        estimatedMinutes: 25,
        learningObjectives: ['Understand the anxious attachment system', 'Identify protest behaviours', 'Learn to self-soothe during activation'],
        prerequisites: ['attachment-wounds'],
        contraindications: [],
        segments: [
          { id: 'aad-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How activated are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'aad-psychoed', type: 'psychoeducation', title: 'The Anxious Attachment System', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [{ heading: 'Hyperactivation: Your Alarm System on Overdrive', text: 'Anxious attachment develops when caregivers were inconsistently available — sometimes warm and present, other times distant or preoccupied. Your nervous system learned to amplify distress signals to get attention. In adult relationships, this looks like constant reassurance-seeking, difficulty tolerating silence, and interpreting ambiguity as rejection.' }, { heading: 'Protest Behaviours', text: 'When the attachment system is activated, you may engage in protest behaviours — actions designed to re-establish connection. These include excessive texting, picking fights to get a reaction, withdrawing to see if they will pursue you, or keeping score of perceived slights.', keyIdeas: ['Protest behaviours are attempts to restore connection, not manipulation', 'Recognising them is the first step to changing them', 'You can learn to meet your own needs before escalating', 'A regulated nervous system makes better relationship choices'] }] } },
          { id: 'aad-interactive', type: 'interactive', title: 'Identify Your Protest Behaviours', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'checklist', items: ['Excessive texting or calling when anxious', 'Picking fights to test if they care', 'Withdrawing to see if they pursue me', 'Keeping score of who initiates contact', 'Scanning for signs of disinterest', 'Making threats to leave (without meaning it)', 'People-pleasing to avoid rejection'] }, instructions: 'Review this list of common protest behaviours. Check any that you recognise in yourself. There is no judgement here — awareness is the goal.' } },
          { id: 'aad-breathing', type: 'breathing', title: 'Calming the Anxious System', estimatedMinutes: 5, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 180, instruction: 'This extended exhale pattern activates your parasympathetic nervous system, calming the anxious activation. Use this whenever you feel the urge to seek reassurance.' } },
          { id: 'aad-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'What is hyperactivation in anxious attachment?', options: ['Shutting down emotionally', 'Amplifying distress signals to get attention and connection', 'Being overly confident', 'Having no emotional responses'], correctIndex: 1, explanation: 'Hyperactivation means the attachment alarm system is turned up high, amplifying distress to try to get the caregiver or partner to respond.' }, { question: 'What are protest behaviours?', options: ['Healthy boundary setting', 'Actions to re-establish connection when feeling threatened', 'Deliberate manipulation of others', 'Signs of a personality disorder'], correctIndex: 1, explanation: 'Protest behaviours are automatic attempts to re-establish connection when the attachment system feels threatened. They are not deliberate manipulation.' }] } },
        ],
      },
      {
        id: 'avoidant-attachment-deep',
        moduleId: 'attachment-trauma',
        title: 'Avoidant Attachment & Deactivation',
        description: 'Understand the avoidant attachment pattern: emotional suppression, self-reliance, and fear of engulfment.',
        estimatedMinutes: 25,
        learningObjectives: ['Understand the avoidant deactivating system', 'Identify deactivating strategies', 'Begin reconnecting with suppressed needs'],
        prerequisites: ['attachment-wounds'],
        contraindications: [],
        segments: [
          { id: 'avd-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we begin?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'avd-psychoed', type: 'psychoeducation', title: 'The Avoidant Deactivating System', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [{ heading: 'Deactivation: Your Emotional Shutdown', text: 'Avoidant attachment develops when caregivers were emotionally unavailable or dismissive of emotional needs. Your nervous system learned to suppress attachment needs and become self-reliant. In adult relationships, this looks like pulling away when things get close, valuing independence over connection, and difficulty identifying or expressing emotions.' }, { heading: 'Deactivating Strategies', text: 'When intimacy increases, you may unconsciously create distance through focusing on a partner\'s flaws, fantasising about an ideal partner, avoiding commitment, working excessively, or intellectualising emotions rather than feeling them.', keyIdeas: ['Avoidance is a learned protection, not a lack of caring', 'Underneath the distance is often a deep longing for connection', 'You can learn to tolerate closeness gradually', 'Recognising deactivation in real-time is transformative'] }] } },
          { id: 'avd-interactive', type: 'interactive', title: 'Your Deactivating Strategies', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'checklist', items: ['Pulling away when things get emotionally close', 'Focusing on partner\'s flaws when feeling connected', 'Keeping one foot out the door in relationships', 'Preferring to handle problems alone', 'Feeling suffocated by partner\'s emotional needs', 'Intellectualising feelings rather than feeling them', 'Keeping busy to avoid emotional intimacy'] }, instructions: 'Review these common deactivating strategies. Check any you recognise in yourself. Remember: these were survival skills, not flaws.' } },
          { id: 'avd-journal', type: 'journal', title: 'Reconnecting with Needs', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What was the message you received about showing emotional needs as a child?', 'What happens in your body when someone gets emotionally close to you?', 'If you could safely ask for one thing in a relationship, what would it be?'], privacyNote: 'This reflection is private and only stored on your device.' } },
          { id: 'avd-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'What is deactivation in avoidant attachment?', options: ['Seeking excessive reassurance', 'Suppressing attachment needs and creating emotional distance', 'Having no attachment system', 'Being aggressive in relationships'], correctIndex: 1, explanation: 'Deactivation means the attachment system suppresses needs for closeness as a protective strategy learned in childhood.' }, { question: 'What underlies avoidant attachment?', options: ['A genuine lack of need for connection', 'A deep longing for connection that feels unsafe to express', 'Narcissism', 'Indifference to others'], correctIndex: 1, explanation: 'Research shows that underneath avoidant patterns is often a deep longing for connection that was not safe to express in childhood.' }] } },
        ],
      },
    ],
  },
  {
    id: 'betrayal-trauma',
    title: 'Understanding Betrayal Trauma',
    description: 'Explore how betrayal by someone you depend on creates a unique form of trauma, and learn why your responses to betrayal are normal survival adaptations.',
    icon: 'shield',
    order: 4,
    category: 'foundation',
    prerequisites: ['attachment-foundations'],
    sessions: [
      {
        id: 'understanding-betrayal',
        moduleId: 'betrayal-trauma',
        title: 'What Is Betrayal Trauma?',
        description: 'Learn about betrayal trauma theory and understand why betrayal by attachment figures is uniquely harmful.',
        estimatedMinutes: 25,
        learningObjectives: ['Define betrayal trauma and its unique characteristics', 'Understand betrayal blindness as a survival mechanism', 'Recognise the difference between betrayal trauma and other forms of trauma'],
        prerequisites: [],
        contraindications: ['This content may be activating if you are currently experiencing betrayal. Please use the safety check and crisis resources as needed.'],
        segments: [
          { id: 'ub-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'This session covers betrayal trauma. How are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ub-psychoed', type: 'psychoeducation', title: 'Betrayal Trauma Theory', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [{ heading: 'When Trust Is Weaponised', text: 'Betrayal trauma occurs when someone you depend on for survival or wellbeing violates your trust in a significant way. This was first described by Dr. Jennifer Freyd, who showed that betrayal by an attachment figure creates fundamentally different trauma than other types of harm — because the person who should protect you is the source of the wound.' }, { heading: 'Betrayal Blindness', text: 'One of the most important concepts in betrayal trauma is betrayal blindness — the mind\'s ability to not see or not remember betrayal. This is not weakness or denial. It is a sophisticated survival mechanism: if you depend on someone for shelter, food, or emotional survival, fully acknowledging their betrayal could threaten your survival.', keyIdeas: ['Betrayal trauma is distinct from other trauma because it involves violation of trust by someone you depend on', 'Betrayal blindness is a survival strategy, not a character flaw', 'The body often knows before the mind does — watch for physical symptoms', 'Recovery involves gradually allowing yourself to see and feel the truth at your own pace'] }] } },
          { id: 'ub-journal', type: 'journal', title: 'Your Experience with Betrayal', estimatedMinutes: 8, content: { type: 'journal', prompts: ['Without going into details that feel unsafe, can you identify a time when someone you trusted violated that trust?', 'Looking back, were there signs your body was responding even when your mind was not fully acknowledging it?', 'What feelings come up for you when you consider the concept of betrayal blindness?'], privacyNote: 'This journal is private and encrypted on your device.' } },
          { id: 'ub-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 4, content: { type: 'quiz', items: [{ question: 'What makes betrayal trauma different from other types of trauma?', options: ['It is less severe', 'It involves violation of trust by someone you depend on', 'It only happens to children', 'It always involves physical violence'], correctIndex: 1, explanation: 'Betrayal trauma is unique because it involves a violation of trust by someone you depend on, creating a conflict between the need for attachment and the reality of harm.' }, { question: 'What is betrayal blindness?', options: ['A form of weakness or denial', 'A deliberate choice to ignore problems', 'A survival mechanism that helps you not see betrayal you depend on the perpetrator', 'A rare psychological condition'], correctIndex: 2, explanation: 'Betrayal blindness is an adaptive survival mechanism — if you depend on someone, your mind may not fully register their betrayal to preserve the relationship you need for survival.' }, { question: 'Who first described betrayal trauma theory?', options: ['Sigmund Freud', 'John Bowlby', 'Jennifer Freyd', 'Bessel van der Kolk'], correctIndex: 2, explanation: 'Dr. Jennifer Freyd developed betrayal trauma theory, distinguishing trauma caused by trusted attachment figures from other forms of trauma.' }] } },
          { id: 'ub-reflection', type: 'reflection', title: 'Closing Reflection', estimatedMinutes: 3, content: { type: 'reflection', prompts: ['What was it like to learn about betrayal blindness? Does it change how you view your past experiences?', 'What is one compassionate thing you can tell yourself about your response to betrayal?'] } },
        ],
      },
      {
        id: 'betrayal-body-responses',
        moduleId: 'betrayal-trauma',
        title: 'Your Body\'s Response to Betrayal',
        description: 'Understand the physical and emotional aftermath of betrayal trauma and learn grounding practices.',
        estimatedMinutes: 25,
        learningObjectives: ['Recognise somatic responses to betrayal', 'Understand the gaslighting-to-self-doubt pipeline', 'Practice grounding when betrayal memories surface'],
        prerequisites: ['understanding-betrayal'],
        contraindications: [],
        segments: [
          { id: 'bbr-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How is your body feeling as we begin?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'bbr-psychoed', type: 'psychoeducation', title: 'The Body Keeps the Score', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [{ heading: 'Somatic Responses to Betrayal', text: 'Betrayal trauma lives in the body. Common physical responses include: a tight chest or difficulty breathing, nausea or stomach problems, hypervigilance and scanning for threats, insomnia or nightmares, chronic tension in shoulders and jaw, and feeling foggy or disconnected from your body.' }, { heading: 'When You Cannot Trust Yourself', text: 'One of the most damaging effects of betrayal is the erosion of self-trust. If someone you loved gaslit you, minimised your concerns, or denied reality, you may have learned to distrust your own perceptions. Rebuilding self-trust is a core part of healing.', keyIdeas: ['Your body responses are normal reactions to abnormal situations', 'Physical symptoms are your nervous system trying to protect you', 'Self-doubt after gaslighting is a predictable response, not a character flaw', 'Reconnecting with your body is part of rebuilding self-trust'] }] } },
          { id: 'bbr-breathing', type: 'breathing', title: 'Grounding Breath for Betrayal Pain', estimatedMinutes: 5, content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 6 }, durationSeconds: 180, instruction: 'Place one hand on your chest and one on your belly. Breathe slowly. This grounds you in the present moment and reminds your body that you are safe right now.' } },
          { id: 'bbr-journal', type: 'journal', title: 'Body Mapping', estimatedMinutes: 7, content: { type: 'journal', prompts: ['Where in your body do you feel the impact of betrayal most? Describe the sensation.', 'When did you first start doubting your own perceptions? What was happening at the time?', 'What does your body need right now to feel safer?'], privacyNote: 'Your responses are private.' } },
          { id: 'bbr-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 4, content: { type: 'quiz', items: [{ question: 'Why does betrayal trauma often show up in the body?', options: ['Because it is psychosomatic and not real', 'Because the nervous system stores trauma responses physically', 'Because people with betrayal trauma are weaker', 'Because it only affects physical health'], correctIndex: 1, explanation: 'The nervous system stores trauma responses physically. Betrayal trauma activates the stress response system, which creates real physical symptoms.' }, { question: 'What is one of the most damaging effects of gaslighting in betrayal?', options: ['Physical injury', 'Erosion of self-trust and trusting your own perceptions', 'Loss of appetite', 'Social isolation'], correctIndex: 1, explanation: 'Gaslighting erodes your ability to trust your own perceptions, which is one of the most damaging psychological effects of betrayal.' }] } },
        ],
      },
    ],
  },
  {
    id: 'childhood-schemas',
    title: 'Childhood Experiences & Schemas',
    description: 'Explore how early experiences shaped your beliefs about yourself, others, and relationships — and begin to update those beliefs.',
    icon: 'sprout',
    order: 5,
    category: 'foundation',
    prerequisites: ['attachment-foundations'],
    sessions: [
      {
        id: 'inner-working-models',
        moduleId: 'childhood-schemas',
        title: 'Your Inner Working Model',
        description: 'Understand how childhood experiences created mental models that still influence your relationships today.',
        estimatedMinutes: 30,
        learningObjectives: [
          'Explain what "inner working models" are',
          'Identify personal schemas formed in childhood',
          'Begin to challenge outdated beliefs with compassion',
        ],
        prerequisites: [],
        contraindications: ['If childhood memories cause significant distress, pause and use grounding tools. Consider working with a therapist for deeper processing.'],
        segments: [
          {
            id: 'iwm-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
            content: { type: 'safety-check', question: 'This session touches on childhood experiences. How do you feel about exploring this?', options: [{ label: 'Ready', value: 1 }, { label: 'A bit cautious', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Not ready', value: 9 }] },
          },
          {
            id: 'iwm-psychoed', type: 'psychoeducation', title: 'Inner Working Models', estimatedMinutes: 8,
            content: { type: 'psychoeducation', sections: [
              { heading: 'What Are Inner Working Models?', text: 'From our earliest relationships, we develop internal "maps" of how relationships work. These maps — called inner working models — contain beliefs like "I am lovable" or "I am not enough," and "Others can be trusted" or "Others will eventually leave." These models were adaptive in childhood but may no longer serve you.' },
              { heading: 'Common Schemas', text: 'Jeffrey Young\'s Schema Therapy identifies 18 Early Maladaptive Schemas — deep patterns of belief formed in childhood. The ones most relevant to attachment include: Abandonment ("People I love will leave"), Defectiveness ("There is something fundamentally wrong with me"), Emotional Deprivation ("My emotional needs will never be met"), Mistrust/Abuse ("People will hurt or betray me"), Subjugation ("I must suppress my needs to maintain connection"), and Enmeshment ("I cannot survive without this person"). Young also identified "schema modes" — the emotional states that activate when schemas are triggered. The Vulnerable Child mode carries the original pain. The Angry Child protests the unmet need. The Punitive Parent attacks you for having needs. The goal is to strengthen your Healthy Adult mode — the part that can comfort, protect, and guide you.', keyIdeas: ['Schemas feel like facts, but they are beliefs formed under duress', 'They were formed when you had less power and fewer options', 'Schema modes explain why you can feel like a different person when triggered', 'The Healthy Adult mode is what we are building throughout this program'] },
            ] },
          },
          {
            id: 'iwm-journal', type: 'journal', title: 'What Did You Learn About Love?', estimatedMinutes: 10,
            content: { type: 'journal', prompts: ['What did you learn about love and safety growing up?', 'What messages did you receive about your worthiness of love?', 'Which of these beliefs do you still carry today? Do they help or hinder you?'], privacyNote: 'These reflections are deeply personal and stored only on your device.' },
          },
          {
            id: 'iwm-quiz', type: 'quiz', title: 'Schema Awareness', estimatedMinutes: 3,
            content: { type: 'quiz', items: [
              { question: 'Inner working models are:', options: ['Fixed personality traits', 'Beliefs formed from early experiences that can be updated', 'Always accurate', 'Only relevant to children'], correctIndex: 1, explanation: 'Inner working models are belief systems formed in childhood that can be updated with awareness and practice.' },
            ] },
          },
        ],
      },
    ],
  },
  {
    id: 'nervous-system',
    title: 'Nervous System & Trauma Basics',
    description: 'Learn how your nervous system responds to threat, understand trauma responses, and build awareness of your body\'s signals.',
    icon: 'activity',
    order: 6,
    category: 'foundation',
    prerequisites: ['orientation-safety'],
    sessions: [
      {
        id: 'trauma-responses',
        moduleId: 'nervous-system',
        title: 'Understanding Trauma Responses',
        description: 'Learn about fight, flight, freeze, and fawn responses and how they show up in relationships.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Identify the four trauma responses',
          'Understand how trauma responses affect relationships',
          'Practice one grounding technique',
        ],
        prerequisites: [],
        contraindications: ['If you experience severe dissociation, please work with a trauma-informed clinician'],
        segments: [
          {
            id: 'tr-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
            content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
          },
          {
            id: 'tr-psychoed', type: 'psychoeducation', title: 'The Four Trauma Responses', estimatedMinutes: 8,
            content: { type: 'psychoeducation', sections: [
              { heading: 'Your Body\'s Protection System', text: 'Stephen Porges\' Polyvagal Theory explains how your nervous system has three states: ventral vagal (safe and social — you feel connected and calm), sympathetic (fight or flight — you feel activated and alert), and dorsal vagal (freeze/shutdown — you feel numb or collapsed). Porges introduced the concept of "neuroception" — your nervous system\'s unconscious surveillance system that is constantly scanning for safety or danger. Neuroception happens below awareness: before you consciously think "I feel unsafe," your body has already shifted state. In relationships, your neuroception can be triggered by a partner\'s tone of voice, facial expression, or even a delayed text reply.' },
              { heading: 'Fight, Flight, Freeze, Fawn', text: 'Pete Walker, author of Complex PTSD: From Surviving to Thriving, identified four trauma responses. Fight: arguing, criticising, becoming controlling. Flight: leaving, avoiding, distracting, over-working. Freeze: shutting down, going numb, dissociating. Fawn: people-pleasing, abandoning your own needs, over-accommodating to avoid conflict.', keyIdeas: ['These responses kept you safe at some point', 'They become problematic when they fire in safe situations', 'Recognising your default response is the first step to changing it', 'You may use different responses in different contexts'] },
              { heading: 'CPTSD and Ongoing Trauma', text: 'The World Health Organisation\'s ICD-11 recognises Complex PTSD, which includes PTSD symptoms plus disturbances in emotion regulation, self-concept, and relationships. This is particularly relevant for those who experienced ongoing childhood trauma, as described by Judith Herman in Trauma and Recovery. If this resonates strongly, professional support from a trauma-informed clinician is recommended.' },
            ] },
          },
          {
            id: 'tr-breathing', type: 'breathing', title: 'Grounding Breath', estimatedMinutes: 3,
            content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 6 }, durationSeconds: 90, instruction: 'Let\'s practice a calming breath together. A longer exhale than inhale activates your parasympathetic nervous system — your body\'s calming system.' },
          },
          {
            id: 'tr-journal', type: 'journal', title: 'Your Body\'s Signals', estimatedMinutes: 7,
            content: { type: 'journal', prompts: ['What is your default trauma response in relationships? (fight/flight/freeze/fawn)', 'What are the earliest body cues that tell you your nervous system is activated?', 'When in your life did this response first develop? What was it protecting you from?'], privacyNote: 'Your reflections are private.' },
          },
          {
            id: 'tr-quiz', type: 'quiz', title: 'Trauma Response Check', estimatedMinutes: 3,
            content: { type: 'quiz', items: [
              { question: 'People-pleasing and abandoning your own needs to keep the peace is an example of:', options: ['Fight response', 'Flight response', 'Freeze response', 'Fawn response'], correctIndex: 3, explanation: 'The fawn response involves people-pleasing and prioritising others\' needs over your own to maintain safety and connection.' },
              { question: 'Trauma responses are:', options: ['Conscious choices', 'Signs of weakness', 'Automatic protective reactions', 'Always harmful'], correctIndex: 2, explanation: 'Trauma responses are automatic, neurobiological protective reactions — not choices or character flaws.' },
            ] },
          },
        ],
      },
    ],
  },
  {
    id: 'understanding-anxiety',
    title: 'Understanding Anxiety',
    description: 'Learn the science behind anxiety, understand how it connects to your attachment system, and recognise the difference between helpful and unhelpful anxiety.',
    icon: 'activity',
    order: 7,
    category: 'foundation',
    prerequisites: ['orientation-safety'],
    sessions: [
      {
        id: 'anxiety-basics',
        moduleId: 'understanding-anxiety',
        title: 'The Science of Anxiety',
        description: 'Understand what anxiety is, why it exists, and how it connects to your attachment patterns.',
        estimatedMinutes: 25,
        learningObjectives: ['Understand the anxiety response system', 'Distinguish between helpful and unhelpful anxiety', 'Map your personal anxiety patterns'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'ab-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ab-psychoed', type: 'psychoeducation', title: 'What Is Anxiety?', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [{ heading: 'Anxiety Is a Feature, Not a Bug', text: 'Anxiety is your brain\'s threat detection system. It evolved to keep you alive by scanning for danger and preparing your body to respond. The problem is not that you have anxiety — it is that your threat detector may be miscalibrated, seeing danger where there is none.' }, { heading: 'Attachment Anxiety', text: 'For people with insecure attachment, anxiety often centres on relationships: Will they leave? Did I say the wrong thing? Why have they not replied? This is your attachment system activating your threat response because relationships once meant survival.', keyIdeas: ['Anxiety is a survival mechanism, not a weakness', 'Your anxiety may be accurately detecting past threats in present situations', 'Understanding your anxiety patterns gives you power to respond differently', 'Anxiety is treatable and manageable with the right skills'] }] } },
          { id: 'ab-interactive', type: 'interactive', title: 'Map Your Anxiety', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'checklist', items: ['Racing thoughts or catastrophising', 'Physical tension (jaw, shoulders, stomach)', 'Difficulty sleeping or restless sleep', 'Avoidance of triggering situations', 'Seeking constant reassurance', 'Difficulty concentrating', 'Irritability or restlessness', 'Checking behaviours (phone, social media)'] }, instructions: 'Check the anxiety symptoms you experience most frequently. This helps you recognise your personal anxiety signature.' } },
          { id: 'ab-journal', type: 'journal', title: 'Your Anxiety Story', estimatedMinutes: 5, content: { type: 'journal', prompts: ['When did you first notice anxiety in your life? What was happening at the time?', 'What situations trigger your anxiety most intensely?', 'What does your anxiety tell you it is trying to protect you from?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ab-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'What is the primary function of anxiety?', options: ['To make you miserable', 'To detect threats and prepare your body to respond', 'To prevent you from taking risks', 'To signal a mental illness'], correctIndex: 1, explanation: 'Anxiety is a threat detection system that evolved to keep you safe by preparing your body to respond to perceived danger.' }, { question: 'How does attachment insecurity relate to anxiety?', options: ['They are completely unrelated', 'Attachment insecurity can make the anxiety system hypervigilant about relationships', 'Only avoidant attachment causes anxiety', 'Anxiety always means you have insecure attachment'], correctIndex: 1, explanation: 'Insecure attachment can calibrate the anxiety system to be hypervigilant about relational threats, since relationships were once linked to survival.' }] } },
        ],
      },
      {
        id: 'anxiety-cycle',
        moduleId: 'understanding-anxiety',
        title: 'Breaking the Anxiety Cycle',
        description: 'Understand the self-reinforcing anxiety cycle and learn your first tools for interrupting it.',
        estimatedMinutes: 22,
        learningObjectives: ['Understand the anxiety cycle (trigger-thought-feeling-behaviour)', 'Identify your avoidance patterns', 'Practice breathing to interrupt the cycle'],
        prerequisites: ['anxiety-basics'],
        contraindications: [],
        segments: [
          { id: 'ac-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ac-psychoed', type: 'psychoeducation', title: 'The Anxiety Cycle', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [{ heading: 'How Anxiety Feeds Itself', text: 'Anxiety operates in a cycle: a trigger leads to anxious thoughts, which create physical sensations, which drive avoidance or safety behaviours, which temporarily reduce anxiety but reinforce the cycle. Understanding this loop is the first step to breaking it.' }, { heading: 'The Avoidance Trap', text: 'When anxiety tells you to avoid something, complying provides immediate relief but teaches your brain that the threat was real. Over time, the things you avoid grow, and your world shrinks. Breaking the cycle means gradually facing what anxiety tells you to flee.', keyIdeas: ['Avoidance provides short-term relief but long-term suffering', 'Each time you face anxiety and survive, you recalibrate your threat system', 'The goal is not to eliminate anxiety but to change your relationship with it', 'Small steps of courage build massive resilience over time'] }] } },
          { id: 'ac-breathing', type: 'breathing', title: 'Cycle-Breaking Breath', estimatedMinutes: 5, content: { type: 'breathing', pattern: { inhale: 4, hold: 7, exhale: 8 }, durationSeconds: 180, instruction: 'The 4-7-8 breath is specifically designed to activate the parasympathetic nervous system. Use it when you feel the anxiety cycle starting.' } },
          { id: 'ac-journal', type: 'journal', title: 'Map Your Cycle', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Describe a recent anxiety cycle: What triggered it? What thoughts came up? What did you feel in your body? What did you do?', 'What are you currently avoiding because of anxiety?', 'What is one small thing you could face this week?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ac-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 4, content: { type: 'quiz', items: [{ question: 'What maintains the anxiety cycle?', options: ['Facing your fears', 'Avoidance and safety behaviours that provide short-term relief', 'Talking about your feelings', 'Exercise'], correctIndex: 1, explanation: 'Avoidance and safety behaviours maintain anxiety by providing temporary relief but reinforcing the belief that the threat was real.' }, { question: 'What is the goal of anxiety management?', options: ['To eliminate all anxiety', 'To never feel anxious again', 'To change your relationship with anxiety and reduce avoidance', 'To suppress all emotions'], correctIndex: 2, explanation: 'The goal is not to eliminate anxiety (which is impossible and would be dangerous) but to change how you relate to it and reduce avoidance.' }] } },
        ],
      },
    ],
  },
  {
    id: 'dbt-distress-tolerance',
    title: 'DBT Distress Tolerance',
    description: 'Learn evidence-based skills to survive emotional crises without making things worse. These skills are especially powerful for attachment panic.',
    icon: 'anchor',
    order: 8,
    category: 'skills',
    prerequisites: ['orientation-safety'],
    sessions: [
      {
        id: 'stop-skill',
        moduleId: 'dbt-distress-tolerance',
        title: 'STOP: Interrupt the Panic Spiral',
        description: 'Learn the STOP skill to interrupt attachment activation and create space for a wise choice.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Recognise attachment activation early',
          'Apply STOP and one grounding strategy',
          'Choose an action aligned with values, not urges',
        ],
        prerequisites: [],
        contraindications: ['If you feel at immediate risk, use Crisis Mode'],
        segments: [
          {
            id: 'ss-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
            content: { type: 'safety-check', question: 'How activated do you feel right now?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly activated', value: 3 }, { label: 'Moderately activated', value: 5 }, { label: 'Quite activated', value: 7 }, { label: 'Very distressed', value: 9 }] },
          },
          {
            id: 'ss-psychoed', type: 'psychoeducation', title: 'The STOP Skill', estimatedMinutes: 6,
            content: { type: 'psychoeducation', sections: [
              { heading: 'When Attachment Panic Hits', text: 'The moment you feel that surge — the need to text, call, check their social media, seek reassurance — your attachment system has been activated. In that moment, your brain narrows its focus to one thing: reconnecting at any cost. The STOP skill interrupts this spiral.' },
              { heading: 'S.T.O.P.', text: 'S — Stop. Physically stop what you are doing. Put the phone down. T — Take a breath. Do 6 slow breaths to engage your parasympathetic nervous system. O — Observe. Name what you are feeling, what your body is doing, and what thoughts are running. This is the "Name It to Tame It" step. P — Proceed mindfully. Choose one action from your "Wise Mind" — the place where emotion mind and rational mind overlap. Marsha Linehan (the creator of DBT) teaches that Wise Mind is your inner knowing: it honours what you feel AND what you know to be true.', keyIdeas: ['Pausing interrupts the reinforcement loop', 'The urge will pass — urges are temporary, usually peaking and fading within 20 minutes', 'Wise Mind: "What would I advise a friend to do right now?"', 'You are creating space for a choice rather than a reaction'] },
            ] },
          },
          {
            id: 'ss-interactive', type: 'interactive', title: 'STOP Skill Practice', estimatedMinutes: 6,
            content: { type: 'interactive', component: 'StopStepper', config: {}, instructions: 'Walk through each step of STOP. Take your time with each one.' },
          },
          {
            id: 'ss-breathing', type: 'breathing', title: 'Paced Breathing', estimatedMinutes: 3,
            content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 6 }, durationSeconds: 120, instruction: 'Breathe in for 4 counts, out for 6 counts. The longer exhale calms your nervous system.' },
          },
          {
            id: 'ss-action', type: 'action-plan', title: 'Your Values-Aligned Action', estimatedMinutes: 3,
            content: { type: 'action-plan', prompt: 'The next time you feel the urge to reach out from panic, you will:', options: [{ id: 'delay', label: 'Wait 2 hours before messaging', description: 'Give your nervous system time to settle' }, { id: 'friend', label: 'Reach out to a friend instead', description: 'Seek support, not reassurance' }, { id: 'ground', label: 'Do a grounding activity + short walk', description: 'Move your body and reset' }], timeHorizonDays: 3 },
          },
          {
            id: 'ss-quiz', type: 'quiz', title: 'STOP Skill Check', estimatedMinutes: 3,
            content: { type: 'quiz', items: [
              { question: 'Which part of STOP creates the space for a conscious choice?', options: ['Stop', 'Take a breath', 'Observe', 'Proceed mindfully'], correctIndex: 3, explanation: '"Proceed mindfully" is where you make a conscious, values-aligned choice instead of reacting from panic.' },
              { question: 'True or False: No contact should be used as a tactic to make your ex miss you.', options: ['True', 'False'], correctIndex: 1, explanation: 'No contact is a self-protective boundary for nervous system regulation and breaking reinforcement patterns — not a manipulation tactic.' },
            ] },
          },
        ],
      },
      {
        id: 'tipp-skill',
        moduleId: 'dbt-distress-tolerance',
        title: 'TIPP: Change Your Body Chemistry Fast',
        description: 'Learn the TIPP skill — a DBT technique that uses your body to rapidly change your emotional state when you are in crisis.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Apply each component of the TIPP skill',
          'Understand the physiological mechanisms behind each technique',
          'Build a personal TIPP toolkit for attachment activation',
        ],
        prerequisites: ['stop-skill'],
        contraindications: ['If you have a heart condition, consult your doctor before using cold water techniques. Skip the Temperature step if you have Raynaud\'s syndrome.'],
        segments: [
          { id: 'tipp-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How activated do you feel right now?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly activated', value: 3 }, { label: 'Moderately activated', value: 5 }, { label: 'Quite activated', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'tipp-psychoed', type: 'psychoeducation', title: 'The TIPP Skill', estimatedMinutes: 8,
            content: { type: 'psychoeducation', sections: [
              { heading: 'When Your Body Is in Overdrive', text: 'Sometimes your emotional activation is so high that thinking-based skills like STOP or thought records cannot get through. Your prefrontal cortex is offline and your body is running the show. TIPP works by changing your body chemistry directly, bringing your arousal level down so that cognitive skills become possible. Developed by Marsha Linehan as part of DBT crisis survival skills.' },
              { heading: 'T.I.P.P.', text: 'T — Temperature. Submerge your face in cold water or hold an ice pack to your forehead and cheeks for 30 seconds. This triggers the mammalian dive reflex, instantly slowing your heart rate by up to 25%. I — Intense Exercise. Do 20 minutes of vigorous exercise — running, jumping jacks, burpees, fast walking. This metabolises the stress hormones (adrenaline and cortisol) flooding your body. P — Paced Breathing. Slow your breathing so that your exhale is longer than your inhale (e.g., 4 in, 6 out). This directly activates your parasympathetic nervous system. P — Paired Muscle Relaxation. Tense each muscle group for 5 seconds, then release while exhaling. The release of tension signals safety to your nervous system.', keyIdeas: ['TIPP works on your physiology, not your thoughts — use it when you are too activated to think clearly', 'Temperature is the fastest acting — it can reduce heart rate within seconds', 'You do not need to do all four — even one component can shift your state significantly', 'Build a TIPP kit: ice pack in the freezer, running shoes by the door, a breathing timer on your phone'] },
            ] },
          },
          { id: 'tipp-breathing', type: 'breathing', title: 'Paced Breathing Practice', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 7, holdAfter: 1 }, durationSeconds: 120, instruction: 'Breathe in for 4 counts, then out slowly for 7 counts. The extended exhale activates your vagus nerve — the brake pedal of your nervous system.' } },
          { id: 'tipp-journal', type: 'journal', title: 'Your TIPP Plan', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Which TIPP component do you think would be most effective for you and why?', 'Where could you keep a cold pack or ice for the Temperature step?', 'What form of intense exercise is most accessible to you right now?', 'Describe a recent situation where TIPP could have helped before you reacted.'], privacyNote: 'Your reflections are private.' } },
          { id: 'tipp-action', type: 'action-plan', title: 'Build Your TIPP Kit', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will prepare your TIPP toolkit:', options: [{ id: 'ice-pack', label: 'Put an ice pack or bag of frozen peas in the freezer', description: 'Ready for the Temperature step when you need it' }, { id: 'exercise-plan', label: 'Identify your go-to intense exercise and keep gear ready', description: 'Remove barriers to using Intense Exercise in the moment' }, { id: 'full-tipp', label: 'Practice the full TIPP sequence once this week (not in crisis)', description: 'Rehearsing when calm makes it automatic when activated' }], timeHorizonDays: 7 } },
          { id: 'tipp-quiz', type: 'quiz', title: 'TIPP Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'The cold water technique works because:', options: ['It distracts you from the problem', 'It triggers the mammalian dive reflex, slowing your heart rate', 'It numbs your emotions', 'It is unpleasant enough to stop you crying'], correctIndex: 1, explanation: 'Cold water on the face triggers the dive reflex — a hardwired mammalian response that slows the heart rate and redirects blood to the brain and core organs.' },
            { question: 'TIPP is most useful when:', options: ['You are feeling slightly uneasy', 'You want to understand your thoughts better', 'Your emotional intensity is so high that you cannot think clearly', 'You want to avoid feeling emotions'], correctIndex: 2, explanation: 'TIPP is designed for high-intensity emotional states where cognitive skills cannot get through. It changes your body chemistry to bring arousal down to a level where thinking-based skills become possible.' },
          ] } },
        ],
      },
      {
        id: 'accepts-self-soothe',
        moduleId: 'dbt-distress-tolerance',
        title: 'ACCEPTS & Self-Soothe with Five Senses',
        description: 'Learn the ACCEPTS distraction skill and self-soothing techniques that use your five senses to ride out emotional waves without making things worse.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Apply each component of the ACCEPTS skill for healthy distraction',
          'Design a personalised self-soothing plan using all five senses',
          'Distinguish between healthy distraction and avoidance',
        ],
        prerequisites: ['tipp-skill'],
        contraindications: [],
        segments: [
          { id: 'as-dt-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How activated do you feel right now?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly activated', value: 3 }, { label: 'Moderately activated', value: 5 }, { label: 'Quite activated', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'as-dt-psychoed', type: 'psychoeducation', title: 'ACCEPTS & Self-Soothing', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'ACCEPTS: Healthy Distraction in Crisis', text: 'Marsha Linehan developed the ACCEPTS acronym as a crisis survival strategy for when emotions are too intense to process in the moment. The goal is not to avoid your feelings permanently, but to ride out the peak intensity so you can deal with the situation more effectively later. A — Activities: Engage in an activity that demands attention (puzzle, cleaning, walking, cooking). C — Contributing: Do something for someone else (text a friend something kind, help a neighbour, donate). This shifts focus outward. C — Comparisons: Compare to a time you coped with something harder, or compare to how far you have come. E — Emotions (opposite): Generate an opposite emotion — watch something funny when sad, listen to calming music when angry. P — Pushing away: Mentally put the situation in a box, on a shelf — you will come back to it, but not right now. T — Thoughts: Occupy your mind with a mental task — count backwards from 100 by 7s, name countries alphabetically, recite song lyrics. S — Sensations: Use intense but safe physical sensations — hold ice, snap a rubber band on your wrist, bite into a lemon.', keyIdeas: ['ACCEPTS is for crisis survival, not long-term coping', 'The goal is to get through the moment without making things worse', 'Distraction is healthy when time-limited and intentional', 'Avoidance becomes unhealthy when it replaces processing entirely'] },
            { heading: 'Self-Soothe with Five Senses', text: 'Self-soothing is the adult version of what a good caregiver does for a distressed child — providing comfort through sensory experience. For each sense, identify specific things that genuinely comfort you. Vision: Look at nature, beautiful art, photos that bring peace, candlelight. Hearing: Listen to calming music, nature sounds, a loved one\'s voice, rain. Smell: Use lavender, fresh coffee, essential oils, baking bread, fresh air. Taste: Sip herbal tea, eat a piece of chocolate mindfully, have warm soup. Touch: Wrap in a soft blanket, hold a warm mug, take a warm bath, pet an animal. These are not luxuries or indulgences. Self-soothing is a core emotional regulation skill. If you grew up without consistent soothing from caregivers, this skill may feel unfamiliar or even uncomfortable — that is normal and expected.' },
          ] } },
          { id: 'as-dt-interactive', type: 'interactive', title: 'Build Your Self-Soothe Kit', estimatedMinutes: 8, content: { type: 'interactive', component: 'CopingMenuBuilder', config: { categories: ['Vision (things to look at)', 'Hearing (things to listen to)', 'Smell (comforting scents)', 'Taste (comforting flavours)', 'Touch (comforting textures/temperatures)'] }, instructions: 'Build your personalised self-soothe kit by choosing at least two items for each sense. Think about what is genuinely comforting to YOU, not what you think should be comforting.' } },
          { id: 'as-dt-journal', type: 'journal', title: 'Soothing Reflection', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Which ACCEPTS strategy do you think would be most effective for you? Why?', 'Was self-soothing modelled for you growing up? How does that affect your ability to comfort yourself now?', 'What feels indulgent or hard about self-soothing? Where might that belief come from?', 'Describe a recent crisis where ACCEPTS or self-soothing could have helped you ride out the wave.'], privacyNote: 'Your reflections are private and stored on your device.' } },
          { id: 'as-dt-quiz', type: 'quiz', title: 'ACCEPTS & Self-Soothe Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'What is the primary goal of the ACCEPTS skill?', options: ['To permanently avoid painful emotions', 'To survive the crisis moment without making things worse', 'To replace the need for therapy', 'To suppress all negative feelings'], correctIndex: 1, explanation: 'ACCEPTS is a crisis survival strategy. The goal is to get through the peak of emotional intensity without engaging in behaviours that would make the situation worse. Processing the underlying feelings happens later, when arousal is lower.' },
            { question: 'Why might self-soothing feel uncomfortable for someone with attachment trauma?', options: ['Because self-soothing does not actually work', 'Because they were never taught it and may have learned that comfort is not available or deserved', 'Because it is only for children', 'Because it requires expensive products'], correctIndex: 1, explanation: 'If caregivers did not provide consistent soothing, the child may not have internalised the ability to self-soothe. They may have learned that comfort is unavailable, undeserved, or conditional. Re-learning self-soothing as an adult is a form of reparenting.' },
            { question: 'The "E" in ACCEPTS stands for:', options: ['Exercise', 'Emotions (generate an opposite emotion)', 'Escape the situation', 'Evaluate your thoughts'], correctIndex: 1, explanation: 'The E stands for Emotions — specifically, generating an opposite emotion. If you are feeling sad, watch something funny. If angry, listen to calming music. This leverages the principle that the brain struggles to hold two opposing emotional states simultaneously.' },
          ] } },
          { id: 'as-dt-action', type: 'action-plan', title: 'Your ACCEPTS & Self-Soothe Plan', estimatedMinutes: 2, content: { type: 'action-plan', prompt: 'This week, prepare your self-soothe resources:', options: [{ id: 'soothe-kit', label: 'Assemble a physical self-soothe kit', description: 'Gather items for each sense in one accessible place — blanket, tea, essential oil, playlist, photos' }, { id: 'accepts-card', label: 'Write an ACCEPTS cue card', description: 'Keep a small card listing your personalised ACCEPTS strategies in your wallet or phone case' }, { id: 'practice-soothe', label: 'Practise self-soothing daily for 5 minutes', description: 'Use one soothing activity per day, even when calm, to build the habit' }], timeHorizonDays: 7 } },
        ],
      },
      {
        id: 'pros-cons-radical-acceptance',
        moduleId: 'dbt-distress-tolerance',
        title: 'Pros & Cons and Radical Acceptance',
        description: 'Learn to use the pros and cons technique for urge management and practise radical acceptance — the cornerstone of DBT reality acceptance skills.',
        estimatedMinutes: 30,
        learningObjectives: [
          'Complete a 4-quadrant pros and cons analysis for crisis urges',
          'Define and practise radical acceptance as taught by Linehan',
          'Distinguish radical acceptance from approval or passivity',
        ],
        prerequisites: ['accepts-self-soothe'],
        contraindications: ['If exploring acceptance of a traumatic event feels overwhelming, pause and use grounding. This is advanced material.'],
        segments: [
          { id: 'pc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we begin?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly activated', value: 3 }, { label: 'Moderately activated', value: 5 }, { label: 'Quite activated', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'pc-psychoed', type: 'psychoeducation', title: 'Pros & Cons and Radical Acceptance', estimatedMinutes: 10, content: { type: 'psychoeducation', sections: [
            { heading: 'The 4-Quadrant Pros & Cons', text: 'When you are in crisis and feel the urge to act impulsively — sending an angry text, breaking no contact, self-harming, using substances — Linehan\'s pros and cons technique helps you pause and think it through. Unlike a simple pros/cons list, this uses four quadrants: (1) Pros of acting on the urge (what feels good about it). (2) Cons of acting on the urge (what goes wrong if I do it). (3) Pros of resisting the urge (what I gain by not acting). (4) Cons of resisting the urge (what is hard about not acting). The key insight is that acknowledging the pros of the urge and the cons of resisting makes this exercise honest. Your urges exist for a reason. Validating that while still choosing wisely is Wise Mind in action.' },
            { heading: 'Radical Acceptance', text: 'Radical acceptance is one of Linehan\'s most powerful and most misunderstood concepts. It means fully accepting reality as it is, in this moment, without fighting it. It does NOT mean approving of what happened, giving up on change, or saying what happened was okay. It means stopping the internal war with what already is. Pain is inevitable; suffering is pain plus non-acceptance. When you refuse to accept reality, you add a second layer of suffering: "This should not have happened," "It is not fair," "Why me?" These thoughts keep you trapped in anguish. Radical acceptance says: "This is what happened. I do not like it. I do not approve of it. AND it is real, and fighting reality does not change it." Linehan describes radical acceptance as a practice, not a one-time decision. You may need to radically accept the same thing a thousand times. Each time your mind rebels ("But it should not have happened!"), you gently return to acceptance.', keyIdeas: ['Radical acceptance is not approval — you can accept reality AND work to change the future', 'Pain x Non-acceptance = Suffering. Pain x Acceptance = Pain (which is manageable)', 'You may need to accept the same thing repeatedly — this is normal', 'The body often holds non-acceptance as tension, clenching, or bracing — notice this', 'Turning the mind is the act of choosing acceptance when your mind pulls toward resistance'] },
            { heading: 'Willingness vs Willfulness', text: 'Linehan contrasts willingness and willfulness. Willingness means participating fully in life as it is, doing what is needed in the moment, being open to experience. Willfulness means refusing to accept reality, trying to control what cannot be controlled, sitting on your hands when action is needed, or giving up entirely. Willingness is a posture of openness, like open hands. Willfulness is a posture of resistance, like clenched fists. Notice your hands right now — are they open or closed? Your body often knows before your mind does.' },
          ] } },
          { id: 'pc-interactive', type: 'interactive', title: 'Pros & Cons Practice', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'four-quadrant', labels: ['Pros of Acting on the Urge', 'Cons of Acting on the Urge', 'Pros of Resisting the Urge', 'Cons of Resisting the Urge'] }, instructions: 'Think of a recurring urge you have during emotional distress (e.g., breaking no contact, sending an angry message, checking social media obsessively). Fill in all four quadrants honestly. Be specific and detailed.' } },
          { id: 'pc-breathing', type: 'breathing', title: 'Half-Smile Breathing', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 5, hold: 0, exhale: 5 }, durationSeconds: 120, instruction: 'Linehan teaches half-smile breathing as a radical acceptance practice. Allow a slight, gentle smile — just the corners of your mouth lifting. Relax your face. Breathe slowly. The half-smile sends a signal of acceptance to your brain, even when your mind resists. This is not fake happiness — it is a willingness to be present with what is.' } },
          { id: 'pc-journal', type: 'journal', title: 'Acceptance Reflection', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What is one thing in your life right now that you are fighting to accept? What would it mean to stop fighting it?', 'When you think about radical acceptance, what resistance comes up? What does your mind say?', 'Describe a time you were willing (open, participating) vs willful (resistant, controlling). What was the difference in outcome?', 'Complete this sentence: "I do not have to like it, but I can accept that..."'], privacyNote: 'Your reflections are private and stored on your device.' } },
          { id: 'pc-quiz', type: 'quiz', title: 'Radical Acceptance Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'Radical acceptance means:', options: ['Approving of what happened', 'Giving up and being passive', 'Fully acknowledging reality as it is, without fighting it', 'Pretending everything is fine'], correctIndex: 2, explanation: 'Radical acceptance means fully acknowledging reality without adding the extra suffering of fighting what has already happened. It does not mean approval, passivity, or denial — it means ending the internal war with what is.' },
            { question: 'According to Linehan, the relationship between pain and suffering is:', options: ['Pain and suffering are the same thing', 'Suffering = Pain x Non-acceptance', 'Suffering is always avoidable', 'Pain is caused by suffering'], correctIndex: 1, explanation: 'Linehan teaches that suffering = pain + non-acceptance. Pain is an inevitable part of life, but when we refuse to accept painful realities, we add a second layer of distress. Acceptance does not remove pain but prevents it from becoming prolonged suffering.' },
            { question: 'In the 4-quadrant pros and cons, why is it important to acknowledge the pros of acting on the urge?', options: ['To justify the behaviour', 'To be honest about what drives the urge, which makes the decision more informed and sustainable', 'It is not important — only the cons matter', 'To convince yourself to act on it'], correctIndex: 1, explanation: 'Acknowledging the pros of an urge makes the exercise honest and sustainable. Pretending urges have no appeal is denial. Understanding what the urge offers (relief, connection, control) helps you find healthier ways to meet those needs.' },
          ] } },
        ],
      },
      {
        id: 'crisis-survival-toolkit',
        moduleId: 'dbt-distress-tolerance',
        title: 'Crisis Survival: Your Complete Toolkit',
        description: 'Integrate all distress tolerance skills into a personalised crisis survival plan and practise the full sequence from detection to de-escalation.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Sequence distress tolerance skills from high to low activation',
          'Build a personalised crisis survival card',
          'Practise deciding which skill to use based on arousal level',
        ],
        prerequisites: ['pros-cons-radical-acceptance'],
        contraindications: [],
        segments: [
          { id: 'cs-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How activated do you feel right now?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly activated', value: 3 }, { label: 'Moderately activated', value: 5 }, { label: 'Quite activated', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'cs-psychoed', type: 'psychoeducation', title: 'Sequencing Your Skills', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Matching Skill to Activation Level', text: 'Not every distress tolerance skill works at every activation level. The key insight is matching your tool to your intensity. At very high activation (8-10): Your prefrontal cortex is offline. Use body-based skills first — TIPP (Temperature, Intense exercise). At high activation (6-7): Use STOP to interrupt the spiral, then paced breathing to bring arousal down. At moderate activation (4-5): ACCEPTS and self-soothing become available. Your thinking brain is partially online. At lower activation (2-3): Pros and cons, radical acceptance, and cognitive skills become accessible. Think of it as a staircase: you use body skills to step down from the top floors, then thinking skills become available as you descend.' },
            { heading: 'Your Crisis Survival Sequence', text: 'When crisis hits, follow this order: (1) STOP — interrupt the urge to react immediately. (2) TIPP — if activation is very high, change your body chemistry first. (3) Paced breathing — extend your exhale to engage the parasympathetic nervous system. (4) ACCEPTS or self-soothe — once you can think, use distraction or sensory comfort. (5) Pros and cons — when you can reason, think through consequences before acting. (6) Radical acceptance — when the storm passes, practise accepting reality as it is. You will not always follow every step. Sometimes TIPP alone is enough. Sometimes you jump straight to ACCEPTS. The point is having a sequence you know by heart.', keyIdeas: ['Body skills first, thinking skills second', 'You do not need to use every skill every time', 'Practise the sequence when calm so it is automatic when activated', 'Write your sequence on a card you carry with you', 'Each crisis you survive without making things worse builds distress tolerance'] },
          ] } },
          { id: 'cs-interactive', type: 'interactive', title: 'Build Your Crisis Card', estimatedMinutes: 8, content: { type: 'interactive', component: 'CopingMenuBuilder', config: { categories: ['Very High Activation (body tools)', 'High Activation (interrupt + breathe)', 'Moderate Activation (distraction + soothe)', 'Lower Activation (thinking tools + acceptance)'] }, instructions: 'Build your personalised crisis survival card by selecting your most effective tools for each activation level. Be specific — name the exact ice pack location, the exact exercise, the exact playlist.' } },
          { id: 'cs-breathing', type: 'breathing', title: 'Physiological Sigh', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 2, hold: 0, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'The physiological sigh is the fastest known way to calm yourself in real-time (Stanford research by Andrew Huberman). Take a double inhale through the nose (sniff-sniff), then a long slow exhale through the mouth. This rapidly reinflates the alveoli in your lungs and offloads CO2, immediately reducing arousal.' } },
          { id: 'cs-reflection', type: 'reflection', title: 'Skills Integration', estimatedMinutes: 3, content: { type: 'reflection', prompts: ['Looking back at STOP, TIPP, ACCEPTS, self-soothing, pros/cons, and radical acceptance — which skill resonated most deeply with you?', 'When is your highest-risk moment for acting on crisis urges? What will you do differently now?', 'What would you tell someone who says "I cannot control myself when I am that upset"?'] } },
          { id: 'cs-quiz', type: 'quiz', title: 'Crisis Survival Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'At very high emotional activation, which type of skills should you use first?', options: ['Cognitive skills like thought records', 'Body-based skills like TIPP', 'Talking to someone about the problem', 'Pros and cons analysis'], correctIndex: 1, explanation: 'At very high activation, the prefrontal cortex (thinking brain) is offline. Body-based skills like TIPP work directly on physiology, bringing arousal down to a level where thinking skills become accessible.' },
            { question: 'Each time you survive a crisis without making things worse, you:', options: ['Just get lucky', 'Build distress tolerance capacity and prove to yourself you can cope', 'Avoid your feelings', 'Waste an opportunity to express yourself'], correctIndex: 1, explanation: 'Each crisis survived without destructive behaviour builds your distress tolerance capacity. It provides evidence that urges pass, that you can cope, and that you do not need to act on every impulse — this gradually rewires your brain\'s threat response.' },
          ] } },
        ],
      },
    ],
  },
  {
    id: 'dbt-emotion-regulation',
    title: 'DBT Emotion Regulation',
    description: 'Build skills to understand, name, and regulate your emotions rather than being controlled by them.',
    icon: 'waves',
    order: 9,
    category: 'skills',
    prerequisites: ['dbt-distress-tolerance'],
    sessions: [
      {
        id: 'naming-emotions',
        moduleId: 'dbt-emotion-regulation',
        title: 'Name It to Tame It: The Emotion Model',
        description: 'Learn to identify and label emotions with precision using Linehan\'s emotion model, reducing their intensity through accurate labelling.',
        estimatedMinutes: 25,
        learningObjectives: ['Understand Linehan\'s model of emotions (prompting event, interpretation, experience, action urge)', 'Distinguish between primary and secondary emotions', 'Practice precise emotion labelling', 'Understand the function of difficult emotions'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'ne-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ne-psychoed', type: 'psychoeducation', title: 'The DBT Emotion Model', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Why Name Emotions?', text: 'Dan Siegel coined the phrase "Name It to Tame It" to describe a powerful finding: accurately labelling an emotion reduces its intensity. Research by Matthew Lieberman at UCLA confirmed that putting feelings into words (affect labelling) decreases amygdala activation and increases prefrontal cortex engagement. When you say "I feel anxious" instead of "I feel terrible," you literally shift which part of your brain is in charge.' },
            { heading: 'Linehan\'s Model of Emotions', text: 'In DBT, emotions are understood as a chain of events: (1) Prompting event — something happens (external event or internal thought/memory). (2) Interpretation — your mind makes sense of the event based on beliefs, history, and schemas. (3) Emotional experience — the feeling arises, along with body sensations, facial expressions, and neurochemical changes. (4) Action urge — the emotion creates a pull toward a specific behaviour (flee, fight, withdraw, seek reassurance). (5) Action — what you actually do. Understanding this chain gives you multiple intervention points. You can change the interpretation (checking the facts), change the action (opposite action), or change your vulnerability to emotions (ABC PLEASE).' },
            { heading: 'Primary vs Secondary Emotions', text: 'A primary emotion is the first feeling (e.g., hurt). A secondary emotion is the reaction to that feeling (e.g., anger about feeling hurt). In anxious attachment, the primary emotion is often fear or sadness, but what surfaces is anger, jealousy, or panic.', keyIdeas: ['Anger often masks fear or hurt', 'Jealousy often masks insecurity or shame', 'Finding the primary emotion helps you address the real need', 'Every emotion has a function: fear = danger, sadness = loss, anger = boundary violation, shame = social threat'] },
          ] } },
          { id: 'ne-interactive', type: 'interactive', title: 'Emotion Chain Analysis', estimatedMinutes: 8, content: { type: 'interactive', component: 'EmotionLabeller', config: {}, instructions: 'Think of a recent emotional reaction. Walk through the emotion chain: What was the prompting event? What interpretation did your mind make? What emotion arose? What was the action urge? What did you actually do? Practice identifying the primary emotion beneath the surface.' } },
          { id: 'ne-journal', type: 'journal', title: 'Emotion Awareness', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What emotion are you avoiding right now? What might happen if you allowed yourself to fully feel it?', 'When you feel jealousy or anger in relationships, what is usually underneath (fear, hurt, shame)?', 'Think of a recent strong emotional reaction. Walk through the emotion chain: event, interpretation, feeling, urge, action. Where could you have intervened?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ne-quiz', type: 'quiz', title: 'Emotion Model Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'When someone feels angry after being ignored by their partner, the anger is most likely a:', options: ['Primary emotion', 'Secondary emotion', 'Random reaction', 'Character flaw'], correctIndex: 1, explanation: 'Anger in response to being ignored is typically a secondary emotion. The primary emotion is often fear of abandonment or hurt from feeling unimportant.' },
            { question: 'In Linehan\'s emotion model, the point where you can use "checking the facts" is at the:', options: ['Prompting event', 'Interpretation stage', 'Body sensation', 'After the action'], correctIndex: 1, explanation: 'Checking the facts targets the interpretation stage of the emotion chain. By examining whether your interpretation is accurate, you can change the emotional cascade before it drives action.' },
          ] } },
        ],
      },
      {
        id: 'checking-facts-opposite-action',
        moduleId: 'dbt-emotion-regulation',
        title: 'Checking the Facts & Opposite Action',
        description: 'Learn two core DBT emotion regulation skills: checking whether your emotional response fits the facts, and acting opposite to your emotional urge when the emotion is not justified.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Apply the checking the facts protocol to a current emotional situation',
          'Understand when opposite action is appropriate vs inappropriate',
          'Practise opposite action for fear, anger, sadness, and shame',
        ],
        prerequisites: ['naming-emotions'],
        contraindications: [],
        segments: [
          { id: 'cf-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling right now?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'cf-psychoed', type: 'psychoeducation', title: 'Checking the Facts & Opposite Action', estimatedMinutes: 9, content: { type: 'psychoeducation', sections: [
            { heading: 'Checking the Facts', text: 'Emotions are always valid but not always accurate. Checking the facts is a DBT skill where you systematically examine whether your emotional response matches the actual situation. Ask yourself: (1) What event triggered this emotion? (Describe only the observable facts, not your interpretation.) (2) What are my interpretations or assumptions? (What am I telling myself about what happened?) (3) Am I assuming a threat? What is the actual probability of the threat? (4) What is the worst realistic outcome? Could I cope with it? (5) Does the intensity of my emotion match the actual facts? This is not about invalidating your feelings. It is about separating fact from interpretation so you can respond to what is actually happening, not what your threat system imagines.' },
            { heading: 'Opposite Action', text: 'Every emotion comes with an action urge. Fear urges you to avoid. Anger urges you to attack. Sadness urges you to withdraw. Shame urges you to hide. Opposite action means doing the exact opposite of what the emotion urges — but ONLY when the emotion does not fit the facts or when acting on it would be ineffective. For fear (unjustified): Approach instead of avoid. Do what you are afraid of, repeatedly. For anger (unjustified): Be gentle. Avoid the person kindly, not with aggression. Do something nice. For sadness (unjustified): Get active. Approach, do not withdraw. Increase pleasant activities. For shame (unjustified): Make what you are ashamed of public. Do not hide. Repeat the behaviour if it is not actually harmful. Critical rule: Only use opposite action when the emotion does not fit the facts. If your fear IS justified (real danger), avoidance is appropriate. If your anger IS justified (real boundary violation), assertive action is appropriate.', keyIdeas: ['Check the facts FIRST — opposite action is only for emotions that do not fit the situation', 'All the way opposite: half measures do not change the emotion', 'Opposite action for shame only applies when the shame is unjustified (you have not violated your own values)', 'This skill takes practice — your brain will resist doing the opposite of its urge'] },
          ] } },
          { id: 'cf-interactive', type: 'interactive', title: 'Checking the Facts Practice', estimatedMinutes: 8, content: { type: 'interactive', component: 'ThoughtRecord', config: { variant: 'dbt-check-facts' }, instructions: 'Think of a current situation where you are experiencing a strong emotion. Walk through the checking-the-facts protocol step by step. Be honest about the difference between observable facts and your interpretations.' } },
          { id: 'cf-journal', type: 'journal', title: 'Opposite Action Reflection', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Think of a time when your emotional reaction was bigger than the situation warranted. What interpretation was driving it?', 'Which emotion\'s action urge is hardest for you to resist (fear\'s avoidance, anger\'s attack, sadness\'s withdrawal, shame\'s hiding)?', 'Describe a situation where opposite action could change a pattern in your life right now.', 'When is it important NOT to use opposite action — when IS the emotion justified?'], privacyNote: 'Your reflections are private.' } },
          { id: 'cf-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'You should use opposite action when:', options: ['You feel any negative emotion', 'The emotion does not fit the facts or acting on it would be ineffective', 'Someone tells you your feelings are wrong', 'You want to avoid feeling anything'], correctIndex: 1, explanation: 'Opposite action is specifically for situations where the emotion does not fit the facts, or when acting on the emotional urge would be ineffective or harmful. If the emotion fits the facts (real danger, real boundary violation), acting on it may be appropriate.' },
            { question: 'Checking the facts involves:', options: ['Telling yourself your feelings are wrong', 'Separating observable facts from interpretations and examining the evidence', 'Ignoring your emotions entirely', 'Only focusing on positive aspects'], correctIndex: 1, explanation: 'Checking the facts is about distinguishing between what objectively happened (the facts) and what your mind added (interpretations, assumptions, predictions). This is not invalidating — it is clarifying so you can respond effectively.' },
          ] } },
        ],
      },
      {
        id: 'abc-please',
        moduleId: 'dbt-emotion-regulation',
        title: 'ABC PLEASE: Reducing Vulnerability',
        description: 'Learn the ABC PLEASE skills for building a life that reduces your vulnerability to overwhelming emotions and increases positive experiences.',
        estimatedMinutes: 27,
        learningObjectives: [
          'Apply the Accumulate positives, Build mastery, and Cope ahead framework',
          'Understand how PLEASE skills reduce emotional vulnerability',
          'Create a personalised ABC PLEASE plan',
        ],
        prerequisites: ['checking-facts-opposite-action'],
        contraindications: [],
        segments: [
          { id: 'abc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling today?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'abc-psychoed', type: 'psychoeducation', title: 'ABC PLEASE', estimatedMinutes: 9, content: { type: 'psychoeducation', sections: [
            { heading: 'Building an Emotionally Resilient Life', text: 'Most emotion regulation skills focus on what to do when emotions hit. ABC PLEASE is different — it is about building a life that makes you less vulnerable to emotional crises in the first place. Think of it as preventive medicine for your emotional health.' },
            { heading: 'A — Accumulate Positive Experiences', text: 'Short-term: Do one pleasant thing every day. This is not self-indulgence — it is building an emotional bank account. When your ratio of positive to negative experiences increases, you have more resilience when difficulties arise. Long-term: Build a life worth living by working toward your values and goals. Identify what matters to you (relationships, creativity, health, learning) and take small daily steps. This gives you a life that naturally generates positive experiences.' },
            { heading: 'B — Build Mastery', text: 'Do one thing each day that gives you a sense of competence and achievement. It does not need to be large — learning a new recipe, completing a workout, finishing a work task, practising an instrument. Mastery builds self-efficacy: the belief that you can handle challenges. When your sense of mastery is high, emotional storms feel less threatening because you trust yourself to cope.' },
            { heading: 'C — Cope Ahead', text: 'When you know a difficult situation is coming (a hard conversation, a triggering anniversary, a social event), plan your coping response in advance. The steps: (1) Describe the situation in detail. (2) Identify the emotions likely to arise. (3) Decide which skills you will use. (4) Imagine yourself in the situation, using the skills successfully. (5) Practise relaxation after the visualisation. Cope ahead works because mental rehearsal activates the same neural pathways as actual practice. Athletes call this visualisation; in DBT, it is a core regulation skill.' },
            { heading: 'PLEASE Skills', text: 'PLEASE stands for: PL — treat PhysicaL illness (see a doctor, take prescribed medication). E — balanced Eating (regular meals, adequate nutrition — avoid restricting and binging). A — Avoid mood-altering substances (alcohol, drugs, excessive caffeine — they destabilise emotions). S — balanced Sleep (7-9 hours, consistent schedule, good sleep hygiene). E — Exercise (20-30 minutes most days — the single most evidence-based mood regulator). When your body is depleted, sleep-deprived, poorly nourished, or chemically altered, your emotional vulnerability skyrockets. PLEASE skills are the foundation — without them, all other emotion regulation skills are fighting uphill.', keyIdeas: ['Accumulate positive experiences = build your emotional bank account daily', 'Build mastery = do one competence-building thing per day', 'Cope ahead = mentally rehearse difficult situations with your skills', 'PLEASE = protect the physical foundations of emotional stability', 'These are proactive skills — they prevent crises rather than just managing them'] },
          ] } },
          { id: 'abc-interactive', type: 'interactive', title: 'Your ABC PLEASE Plan', estimatedMinutes: 8, content: { type: 'interactive', component: 'CopingMenuBuilder', config: { categories: ['Daily Pleasant Activities (Accumulate)', 'Mastery Activities (Build Mastery)', 'Upcoming Situations to Cope Ahead For', 'PLEASE: Physical Health Commitments'] }, instructions: 'Build your personalised ABC PLEASE plan. Be specific and realistic — choose activities you will actually do, not aspirational ideals. Start small and build.' } },
          { id: 'abc-journal', type: 'journal', title: 'Values & Vulnerability', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What pleasant activities have you stopped doing since your emotional difficulties began? Which could you bring back?', 'What gives you a genuine sense of mastery or competence? How could you do more of this?', 'Think of an upcoming difficult situation. Walk through the cope-ahead steps: What will happen? What will you feel? What skills will you use?', 'Which PLEASE skill are you most neglecting right now? What is one small step to address it this week?'], privacyNote: 'Your reflections are private.' } },
          { id: 'abc-action', type: 'action-plan', title: 'Your PLEASE Foundation', estimatedMinutes: 2, content: { type: 'action-plan', prompt: 'Choose one PLEASE skill to focus on this week:', options: [{ id: 'sleep', label: 'Sleep: Set a consistent bedtime and wake time', description: 'Even 30 minutes more consistent sleep can reduce emotional reactivity' }, { id: 'exercise', label: 'Exercise: 20 minutes of movement 3x this week', description: 'Walk, stretch, dance — any movement counts' }, { id: 'eating', label: 'Eating: Eat 3 meals at regular times', description: 'Blood sugar crashes are a major trigger for emotional instability' }, { id: 'substances', label: 'Substances: Reduce alcohol or caffeine by one serving per day', description: 'Track the effect on your emotional stability' }], timeHorizonDays: 7 } },
          { id: 'abc-quiz', type: 'quiz', title: 'ABC PLEASE Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'Why does Linehan include "cope ahead" as an emotion regulation skill?', options: ['Because worrying about the future is always productive', 'Because mental rehearsal activates the same neural pathways as actual practice, making skills more accessible in the moment', 'Because you should avoid all difficult situations', 'Because planning eliminates all emotional reactions'], correctIndex: 1, explanation: 'Cope ahead leverages the neuroscience of mental rehearsal. Vividly imagining yourself using skills in a difficult situation strengthens the neural pathways for those skills, making them more automatic when the real situation occurs.' },
            { question: 'PLEASE skills target emotional vulnerability by:', options: ['Directly changing your thoughts', 'Maintaining the physical foundations (sleep, nutrition, exercise, health) that support emotional stability', 'Replacing the need for other skills', 'Eliminating all negative emotions'], correctIndex: 1, explanation: 'PLEASE skills address the physical foundations of emotional health. When your body is depleted, all emotions become more intense and harder to regulate. Maintaining these basics is not optional — it is the platform on which all other skills rest.' },
          ] } },
        ],
      },
      {
        id: 'emotion-regulation-integration',
        moduleId: 'dbt-emotion-regulation',
        title: 'Putting It All Together: Your Emotion Regulation Plan',
        description: 'Integrate the emotion model, checking the facts, opposite action, and ABC PLEASE into a comprehensive personal emotion regulation strategy.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Select the right emotion regulation skill for different situations',
          'Build a comprehensive emotion regulation plan',
          'Practise the full emotion regulation sequence',
        ],
        prerequisites: ['abc-please'],
        contraindications: [],
        segments: [
          { id: 'eri-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'eri-psychoed', type: 'psychoeducation', title: 'The Full Emotion Regulation Toolkit', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Choosing the Right Skill', text: 'You now have a full emotion regulation toolkit. The skill you choose depends on the situation: Want to understand your emotion? Use the emotion model (prompting event, interpretation, emotion, urge, action). Want to check if your reaction fits? Check the facts — separate observable facts from interpretations. Want to change an unjustified emotion? Use opposite action — act opposite to the urge, all the way. Want to prevent emotional crises? Use ABC PLEASE — accumulate positives, build mastery, cope ahead, maintain physical health. Want to survive a crisis in the moment? Use distress tolerance skills (STOP, TIPP, ACCEPTS) first, then emotion regulation once activation decreases.' },
            { heading: 'The Emotion Regulation Sequence', text: 'When a strong emotion arises: (1) Name it — what am I feeling? What is the primary emotion underneath? (2) Check the facts — does my emotion fit the actual situation? Am I interpreting accurately? (3) If the emotion fits: problem-solve or use distress tolerance. (4) If the emotion does not fit: use opposite action, all the way. (5) Regardless: maintain your ABC PLEASE foundations daily. Over time, this sequence becomes automatic. You will catch yourself mid-reaction and have the tools to respond rather than react.', keyIdeas: ['Name it, check it, choose wisely', 'Emotion regulation is a skill — it gets easier with practice', 'The goal is not to eliminate emotions but to have a choice in how you respond', 'Setbacks are normal — they are data, not failure', 'You are building neural pathways that will serve you for life'] },
          ] } },
          { id: 'eri-breathing', type: 'breathing', title: 'Coherent Breathing', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 5, hold: 0, exhale: 5 }, durationSeconds: 180, instruction: 'Coherent breathing (equal inhale and exhale at approximately 5 seconds each) brings your heart rate variability into an optimal range and activates the vagus nerve. This is an excellent daily practice for building baseline emotional regulation capacity. Practise daily for best results.' } },
          { id: 'eri-interactive', type: 'interactive', title: 'Scenario Practice', estimatedMinutes: 6, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'scenario-picker', scenarios: ['Partner is distant', 'Friend cancelled plans', 'Criticism at work', 'Rejection from someone', 'Old memories surfacing'] }, instructions: 'For each scenario, practise the full sequence: name the emotion, check the facts, decide on opposite action or problem-solving. Build your muscle for responding rather than reacting.' } },
          { id: 'eri-journal', type: 'journal', title: 'Integration Reflection', estimatedMinutes: 4, content: { type: 'journal', prompts: ['Which emotion regulation skill has been most transformative for you so far?', 'Describe a recent situation where you used any of these skills. What happened differently?', 'What would your life look like if you could consistently name, check, and choose your emotional responses?'], privacyNote: 'Your reflections are private.' } },
          { id: 'eri-quiz', type: 'quiz', title: 'Emotion Regulation Mastery Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'When should you use opposite action?', options: ['Whenever you feel a negative emotion', 'When the emotion does not fit the facts or acting on it would be ineffective', 'When someone tells you to calm down', 'Never — emotions should always be acted on'], correctIndex: 1, explanation: 'Opposite action is specifically for when the emotion does not fit the facts of the situation, or when acting on the emotional urge would make things worse. If the emotion is justified, problem-solving or assertive action may be more appropriate.' },
            { question: 'ABC PLEASE skills are best described as:', options: ['Emergency crisis tools', 'Proactive skills that reduce vulnerability to emotional crises before they happen', 'Replacement for professional treatment', 'Skills only needed by people with serious mental illness'], correctIndex: 1, explanation: 'ABC PLEASE skills are proactive and preventive. By accumulating positive experiences, building mastery, coping ahead, and maintaining physical health, you reduce your baseline vulnerability to emotional crises — making all other skills more effective.' },
          ] } },
        ],
      },
    ],
  },
  {
    id: 'cbt-thinking-traps',
    title: 'CBT for Thinking Traps',
    description: 'Identify and challenge the cognitive distortions that fuel anxious attachment and relationship anxiety. Based on the work of Aaron Beck and David Burns.',
    icon: 'brain',
    order: 10,
    category: 'skills',
    prerequisites: ['attachment-foundations'],
    sessions: [
      {
        id: 'thought-records',
        moduleId: 'cbt-thinking-traps',
        title: 'Catching Your Thinking Traps',
        description: 'Learn to identify the 12 cognitive distortions identified by Beck and Burns, and understand how they fuel emotional suffering.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify all 12 common cognitive distortions', 'Understand how distortions fuel attachment anxiety', 'Begin noticing distortions in real-time'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'tr2-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'tr2-psychoed', type: 'psychoeducation', title: 'The 12 Thinking Traps', estimatedMinutes: 10, content: { type: 'psychoeducation', sections: [
            { heading: 'Thoughts Are Not Facts', text: 'Aaron Beck, the founder of Cognitive Behavioural Therapy, discovered that emotional suffering is driven not by events themselves but by our interpretation of events. When your attachment system is activated, your brain generates thoughts that feel absolutely true but are systematically distorted. David Burns later categorised these into specific "cognitive distortions" or thinking traps. Recognising them is the first step to freedom.' },
            { heading: 'The Complete List of Cognitive Distortions', text: '1. CATASTROPHISING: Jumping to the worst possible outcome. "If they leave, I will never recover and will be alone forever." 2. MIND READING: Assuming you know what others are thinking without evidence. "They did not reply because they are losing interest in me." 3. FORTUNE TELLING: Predicting the future negatively without evidence. "I know this relationship will end badly, just like all the others." 4. BLACK-AND-WHITE THINKING (All-or-Nothing): Seeing things in extremes with no middle ground. "If they are not completely enthusiastic, they do not care at all." 5. PERSONALISATION: Assuming you are the cause of external events. "Their bad mood must be because of something I did." 6. SHOULD STATEMENTS: Rigid rules about how you or others must behave. "They should know what I need without me having to ask." 7. EMOTIONAL REASONING: Believing something is true because it feels true. "I feel abandoned, so I must actually be being abandoned." 8. MAGNIFICATION/MINIMISATION: Blowing negatives out of proportion while shrinking positives. "One awkward moment means the whole date was terrible." 9. DISQUALIFYING THE POSITIVE: Dismissing positive experiences as flukes. "They said they love me, but they probably do not really mean it." 10. OVERGENERALISATION: Drawing broad conclusions from a single event. "I got rejected once, so I am clearly unlovable." 11. LABELLING: Attaching a global negative label to yourself or others. "I am broken. They are toxic." 12. MENTAL FILTERING: Focusing exclusively on the negative while ignoring the positive. "The entire evening was great except they looked at their phone once — clearly they were bored."', keyIdeas: ['Your brain is trying to protect you, but the alarm is often a false positive', 'Challenging a thought is not dismissing your feelings — it is testing the evidence', 'The goal is balanced thinking, not positive thinking', 'Most distortions contain a grain of truth wrapped in exaggeration', 'Everyone uses these distortions — they are human, not pathological'] },
          ] } },
          { id: 'tr2-interactive', type: 'interactive', title: 'Distortion Spotter', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'distortion-identifier', examples: ['They must think I am boring', 'Everything always goes wrong for me', 'I feel like a failure so I must be one', 'If I cannot do it perfectly I should not bother', 'Sure they complimented me but they were probably just being polite'] }, instructions: 'For each thought, identify which cognitive distortion(s) are at play. Many thoughts contain more than one distortion — see how many you can spot.' } },
          { id: 'tr2-journal', type: 'journal', title: 'Your Thinking Patterns', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Read through the 12 distortions again. Which 2-3 do you fall into most often? Give a specific example of each.', 'When you are feeling anxious in a relationship, what is the thought that plays on repeat? Which distortion(s) does it contain?', 'Think of a belief you hold about yourself that causes pain. Is there a distortion embedded in it?'], privacyNote: 'Your reflections are private.' } },
          { id: 'tr2-quiz', type: 'quiz', title: 'Thinking Traps Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: '"They took 3 hours to reply — they must be losing interest" is an example of:', options: ['Emotional reasoning', 'Mind reading', 'Personalising', 'All of the above could apply'], correctIndex: 3, explanation: 'This thought could involve mind reading (assuming their reason), emotional reasoning (feeling rejected so believing it), and personalising (assuming it is about you). Distortions often overlap.' },
            { question: '"Sure, they said nice things about my work, but they were probably just being polite" is an example of:', options: ['Catastrophising', 'Disqualifying the positive', 'Fortune telling', 'Black-and-white thinking'], correctIndex: 1, explanation: 'Disqualifying the positive involves dismissing positive experiences by insisting they "do not count" for some reason. This maintains negative beliefs even when evidence contradicts them.' },
            { question: '"I messed up that presentation, so I am clearly incompetent" is an example of:', options: ['Labelling and overgeneralisation', 'Mental filtering', 'Fortune telling', 'Should statements'], correctIndex: 0, explanation: 'This combines labelling (attaching the global label "incompetent" to yourself) with overgeneralisation (drawing a sweeping conclusion from a single event). One imperfect presentation does not define your competence.' },
          ] } },
        ],
      },
      {
        id: 'thought-record-mastery',
        moduleId: 'cbt-thinking-traps',
        title: 'The Thought Record: Your Core CBT Tool',
        description: 'Master the 7-column thought record — the foundational CBT tool for examining and restructuring unhelpful thoughts.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Complete a full 7-column thought record',
          'Distinguish between a "hot thought" and other automatic thoughts',
          'Generate genuine balanced alternative thoughts',
        ],
        prerequisites: ['thought-records'],
        contraindications: [],
        segments: [
          { id: 'trm-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'trm-psychoed', type: 'psychoeducation', title: 'The 7-Column Thought Record', estimatedMinutes: 9, content: { type: 'psychoeducation', sections: [
            { heading: 'The Gold Standard of Cognitive Restructuring', text: 'The thought record, developed by Aaron Beck and refined by Christine Padesky, is the most widely used tool in CBT. It helps you catch, examine, and rebalance unhelpful thoughts. The 7 columns are: (1) SITUATION: What happened? When, where, with whom? Just the facts. (2) EMOTIONS: What did you feel? Rate intensity 0-100%. (3) AUTOMATIC THOUGHTS: What went through your mind? Write all of them. (4) HOT THOUGHT: Which automatic thought drives the most emotion? Circle it. (5) EVIDENCE FOR: What supports this hot thought? Only observable facts, not feelings or interpretations. (6) EVIDENCE AGAINST: What contradicts this hot thought? Past experiences, alternative explanations, what you would say to a friend. (7) BALANCED THOUGHT: What is a more realistic, balanced way to see this? Rate belief 0-100%. Re-rate original emotion.' },
            { heading: 'Finding the Hot Thought', text: 'You may have many automatic thoughts in a situation. The hot thought is the one most connected to your emotional pain. It often sounds like a core belief: "I am not enough," "People always leave," "I am unlovable." Targeting the hot thought gives you the biggest emotional shift.', keyIdeas: ['The thought record is not about positive thinking — it is about accurate thinking', 'Evidence for/against must be factual, not emotional', '"What would I tell a friend?" is the most powerful rebalancing question', 'Re-rating emotion after the balanced thought shows you the skill is working', 'Thought records are most effective when done in writing, not just in your head'] },
          ] } },
          { id: 'trm-interactive', type: 'interactive', title: 'Complete Thought Record', estimatedMinutes: 10, content: { type: 'interactive', component: 'ThoughtRecord', config: { columns: 7 }, instructions: 'Think of a recent situation that triggered strong emotions. Walk through all 7 columns. Take extra care with columns 5 and 6 — evidence for and against. Be specific and factual.' } },
          { id: 'trm-journal', type: 'journal', title: 'Restructuring Reflection', estimatedMinutes: 4, content: { type: 'journal', prompts: ['What was your hot thought? How believable does it feel now (0-100%) compared to before the thought record?', 'What pattern do you notice in your hot thoughts? Do they tend to revolve around a core theme (abandonment, inadequacy, unlovability)?', 'What was the most compelling piece of evidence against your hot thought?'], privacyNote: 'Your reflections are private.' } },
          { id: 'trm-quiz', type: 'quiz', title: 'Thought Record Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'What is the "hot thought" in a thought record?', options: ['The first thought that comes to mind', 'The thought most connected to the emotional pain', 'The most rational thought', 'A thought about temperature'], correctIndex: 1, explanation: 'The hot thought is the automatic thought most connected to your emotional distress. It is often linked to a deeper core belief and produces the strongest emotional response. Targeting it gives the biggest shift in mood.' },
            { question: 'In column 5 (Evidence For), which of the following is acceptable evidence?', options: ['"I just feel like they do not care"', '"They cancelled plans twice this month"', '"I know they are pulling away"', '"Everyone eventually leaves me"'], correctIndex: 1, explanation: '"They cancelled plans twice this month" is observable factual evidence. The others are feelings, assumptions, or overgeneralisations — not evidence. A key CBT skill is distinguishing facts from interpretations.' },
          ] } },
        ],
      },
      {
        id: 'cognitive-restructuring-deep',
        moduleId: 'cbt-thinking-traps',
        title: 'Advanced Cognitive Restructuring',
        description: 'Go deeper with Socratic questioning, the downward arrow technique for uncovering core beliefs, and building more flexible thinking patterns.',
        estimatedMinutes: 30,
        learningObjectives: [
          'Use Socratic questioning to examine beliefs',
          'Apply the downward arrow technique to find core beliefs',
          'Understand the relationship between automatic thoughts and core beliefs',
        ],
        prerequisites: ['thought-record-mastery'],
        contraindications: ['If uncovering core beliefs feels overwhelming, use grounding and return when ready.'],
        segments: [
          { id: 'cr-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'cr-psychoed', type: 'psychoeducation', title: 'Core Beliefs and Socratic Questioning', estimatedMinutes: 10, content: { type: 'psychoeducation', sections: [
            { heading: 'The Three Levels of Thinking', text: 'Beck identified three levels of cognition: (1) AUTOMATIC THOUGHTS — the quick, often unconscious thoughts that pop up in situations ("They are ignoring me"). (2) INTERMEDIATE BELIEFS — rules and assumptions that guide your behaviour ("If someone does not respond quickly, it means they do not care"). (3) CORE BELIEFS — deep, global beliefs about yourself, others, and the world ("I am unlovable," "People cannot be trusted," "The world is dangerous"). Automatic thoughts are the surface ripples. Core beliefs are the deep currents underneath. Changing automatic thoughts helps in the moment; identifying and gently updating core beliefs creates lasting change.' },
            { heading: 'The Downward Arrow Technique', text: 'To uncover core beliefs, use the downward arrow: Start with an automatic thought and keep asking "If that were true, what would it mean about me?" Example: "They did not text back" -> "It means they do not care" -> "If they do not care, it means I am not important" -> "If I am not important, it means I am fundamentally unlovable." The deepest answer is usually a core belief. These beliefs were often formed in childhood and feel like absolute truth, but they are learned, not factual.' },
            { heading: 'Socratic Questioning', text: 'Rather than directly challenging a thought (which can feel invalidating), Socratic questioning uses guided discovery. Key questions: What is the evidence for and against? Is there an alternative explanation? What is the worst that could realistically happen, and could I cope? What would I tell a dear friend in this situation? Am I confusing a thought with a fact? Am I confusing certainty with possibility? What will I think about this in 5 years? The goal is not to argue yourself out of feelings but to gently expand your perspective.', keyIdeas: ['Automatic thoughts are symptoms; core beliefs are the root cause', 'Core beliefs were usually formed in childhood and reinforced over years', 'Core beliefs feel like absolute truth but are learned assumptions', 'Socratic questioning guides discovery rather than forcing change', 'You do not need to fully believe the balanced thought yet — practice builds belief'] },
          ] } },
          { id: 'cr-interactive', type: 'interactive', title: 'Downward Arrow Practice', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'downward-arrow', prompt: 'If that were true, what would it mean about me?' }, instructions: 'Start with a recent automatic thought that caused distress. Use the downward arrow: "If that were true, what would it mean?" Keep going until you reach a core belief about yourself. Common core beliefs include: "I am unlovable," "I am not enough," "I am defective," "People always leave," "I do not matter."' } },
          { id: 'cr-breathing', type: 'breathing', title: 'Grounding Breath', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 6 }, durationSeconds: 120, instruction: 'Core belief work can be emotionally intense. Take a moment to ground yourself with this calming breath. Feel your feet on the floor. You are safe. You are learning about old patterns, not being defined by them.' } },
          { id: 'cr-journal', type: 'journal', title: 'Core Belief Exploration', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What core belief did you uncover with the downward arrow? How old does it feel — when did you first learn this?', 'If your best friend held this core belief about themselves, what would you want them to know?', 'What evidence from your adult life contradicts this childhood-formed belief?', 'Write a more balanced version of your core belief. You do not have to fully believe it yet — just write what might be more accurate.'], privacyNote: 'These reflections are deeply personal. They are private and stored on your device.' } },
          { id: 'cr-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'The downward arrow technique helps you:', options: ['Stop thinking negative thoughts', 'Uncover the core beliefs underneath automatic thoughts', 'Avoid feeling emotions', 'Prove that your thoughts are always wrong'], correctIndex: 1, explanation: 'The downward arrow technique is a method for uncovering deeper core beliefs by repeatedly asking "If that were true, what would it mean about me?" This helps identify the foundational beliefs driving surface-level automatic thoughts.' },
            { question: 'Core beliefs are different from automatic thoughts because they are:', options: ['Always accurate', 'Deep, global, and usually formed in childhood', 'Easy to change immediately', 'Only about other people'], correctIndex: 1, explanation: 'Core beliefs are deep, global beliefs about self, others, and the world, typically formed in childhood through early experiences with caregivers. Unlike automatic thoughts, they feel like fundamental truths rather than passing ideas.' },
          ] } },
        ],
      },
      {
        id: 'behavioural-experiments',
        moduleId: 'cbt-thinking-traps',
        title: 'Behavioural Experiments: Testing Your Beliefs',
        description: 'Learn to design and conduct behavioural experiments — the most powerful CBT technique for changing beliefs through direct experience.',
        estimatedMinutes: 27,
        learningObjectives: [
          'Design a behavioural experiment to test a specific belief',
          'Understand why direct experience is more powerful than thought challenging alone',
          'Distinguish between hypothesis-testing and discovery experiments',
        ],
        prerequisites: ['cognitive-restructuring-deep'],
        contraindications: [],
        segments: [
          { id: 'be-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'be-psychoed', type: 'psychoeducation', title: 'Behavioural Experiments', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Beyond Thought Records', text: 'Thought records challenge beliefs at the intellectual level. Behavioural experiments challenge beliefs at the experiential level — through doing. Research consistently shows that behavioural experiments produce larger and more lasting belief changes than cognitive restructuring alone. Why? Because your brain trusts experience more than argument.' },
            { heading: 'How to Design a Behavioural Experiment', text: 'Step 1: IDENTIFY THE BELIEF. Be specific. ("If I do not reply within 5 minutes, people will think I do not care and will leave.") Step 2: MAKE A PREDICTION. If the belief is true, what will happen? ("If I wait 2 hours to reply, they will be angry and pull away.") Step 3: DESIGN THE TEST. What could you do to test this prediction? ("Wait 2 hours before replying to a friend\'s non-urgent message.") Step 4: CONDUCT THE EXPERIMENT. Do it. Notice what actually happens. Step 5: RECORD THE RESULTS. What happened? Was your prediction accurate? Step 6: UPDATE THE BELIEF. What did you learn? How does this change your original belief?' },
            { heading: 'Types of Experiments', text: 'Hypothesis-testing: You have a specific prediction and test it directly (as above). Discovery: You try something new and observe what happens with curiosity, without a specific prediction. Survey: You ask other people for their perspective to test whether your assumption is universal ("Do you get upset if someone takes a few hours to reply to a text?"). Observation: You watch for evidence in daily life that confirms or disconfirms your belief.', keyIdeas: ['Experience changes beliefs faster than thinking alone', 'Start with low-risk experiments and build courage gradually', 'A "failed" experiment (prediction was accurate) is still valuable data', 'Surveys are especially powerful for challenging mind reading', 'Write down results immediately — your mind will rewrite the memory to fit old beliefs'] },
          ] } },
          { id: 'be-interactive', type: 'interactive', title: 'Design Your Experiment', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'experiment-designer', steps: ['My belief to test', 'My specific prediction', 'My experiment design', 'When I will do it', 'How I will record results'] }, instructions: 'Choose a belief that holds you back (especially in relationships). Design a specific, safe, achievable behavioural experiment to test it. Start small — you are building evidence, not taking huge risks.' } },
          { id: 'be-journal', type: 'journal', title: 'Experiment Reflection', estimatedMinutes: 4, content: { type: 'journal', prompts: ['What belief are you most afraid to test? What does that fear tell you about how much power this belief has over your life?', 'Think of a time reality surprised you — when something you feared turned out differently. What did you learn?', 'If you could design a survey to test one of your assumptions about relationships, what question would you ask people?'], privacyNote: 'Your reflections are private.' } },
          { id: 'be-action', type: 'action-plan', title: 'Your Behavioural Experiment', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'Choose one behavioural experiment to conduct this week:', options: [{ id: 'reply-delay', label: 'The Reply Experiment', description: 'Wait longer than usual to reply to a non-urgent message and observe the response' }, { id: 'ask-survey', label: 'The Survey Experiment', description: 'Ask 3 people a question that tests your assumption (e.g., "Do you worry if someone takes time to reply?")' }, { id: 'say-no', label: 'The Boundary Experiment', description: 'Say no to one small request and observe whether the relationship suffers' }, { id: 'vulnerability', label: 'The Vulnerability Experiment', description: 'Share something slightly vulnerable with a trusted person and notice their response' }], timeHorizonDays: 7 } },
          { id: 'be-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'Why are behavioural experiments more powerful than thought records alone?', options: ['Because they are easier', 'Because your brain trusts direct experience more than intellectual argument', 'Because they replace the need for thinking', 'Because they always confirm your beliefs'], correctIndex: 1, explanation: 'Research shows behavioural experiments produce larger and more lasting belief changes because the brain weights direct experiential evidence more heavily than cognitive argument. You can argue with a thought, but it is harder to argue with what you directly experienced.' },
            { question: 'What should you do immediately after conducting a behavioural experiment?', options: ['Forget about it and move on', 'Record the results in writing before your mind can rewrite the memory', 'Only focus on what went wrong', 'Tell everyone about it'], correctIndex: 1, explanation: 'Recording results immediately is critical because the mind has a strong tendency to rewrite memories to fit existing beliefs. If your experiment disconfirmed a belief, your brain may minimise or reinterpret the results over time unless they are recorded.' },
          ] } },
        ],
      },
      {
        id: 'cbt-integration',
        moduleId: 'cbt-thinking-traps',
        title: 'CBT Mastery: Building Cognitive Flexibility',
        description: 'Integrate all CBT skills into a daily practice for building lasting cognitive flexibility and resilience against thinking traps.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Build a daily CBT practice routine',
          'Understand cognitive flexibility as the overarching goal',
          'Troubleshoot common obstacles to cognitive restructuring',
        ],
        prerequisites: ['behavioural-experiments'],
        contraindications: [],
        segments: [
          { id: 'ci-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ci-psychoed', type: 'psychoeducation', title: 'Cognitive Flexibility', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'The Real Goal: Flexible Thinking', text: 'The purpose of CBT is not to replace negative thoughts with positive ones. It is to build cognitive flexibility — the ability to hold multiple perspectives simultaneously, consider alternative explanations, and respond to the full picture rather than one distorted frame. Cognitive flexibility means moving from "They did not reply because they do not care" to "There are many possible reasons they did not reply. I do not have enough information to know which one is true, and I can tolerate that uncertainty." This is not wishy-washy — it is accurate. And it gives you freedom from the tyranny of your first thought.' },
            { heading: 'Common Obstacles and Solutions', text: 'I know the balanced thought is true but I do not feel it: This is normal. Intellectual understanding comes first; emotional shift comes with repeated practice and behavioural experiments. Keep doing thought records even when they do not "feel" right yet. The thought comes back even after I challenge it: Thoughts are like neural pathways — the old path is well-worn. Each thought record is like walking a new path. The old path does not disappear immediately, but the new one gets stronger with use. I cannot do thought records in the moment: Do them after. Even reviewing a triggering situation hours later builds the skill. Eventually, you will catch distortions in real-time. My thought turns out to be true: Then it is not a distortion, and the skill is problem-solving, not restructuring. CBT respects accurate perception.', keyIdeas: ['Cognitive flexibility = holding multiple perspectives, not just one', 'Intellectual change precedes emotional change — keep practising', 'Each thought record strengthens neural pathways for balanced thinking', 'If a thought is accurate, the skill shifts to problem-solving', 'The goal is choice in how you interpret, not a forced positive spin'] },
          ] } },
          { id: 'ci-interactive', type: 'interactive', title: 'CBT Skill Selector', estimatedMinutes: 7, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'scenario-picker', scenarios: ['A friend cancels on you', 'Your partner seems quieter than usual', 'You make a mistake at work', 'Someone criticises something you did', 'You see your ex on social media with someone new'] }, instructions: 'For each scenario, practise the full CBT sequence: (1) What automatic thought arises? (2) Which distortion(s) are present? (3) What questions would you ask (Socratic questioning)? (4) What behavioural experiment could test this belief? Build your cognitive flexibility muscle.' } },
          { id: 'ci-breathing', type: 'breathing', title: 'Observing Thoughts Breath', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 6 }, durationSeconds: 120, instruction: 'As you breathe, practise observing your thoughts without engaging with them. Imagine each thought as a leaf floating down a stream, or a cloud passing through the sky. Notice the thought, let it pass, return to the breath. This mindful observation is the foundation of catching distortions in real-time.' } },
          { id: 'ci-journal', type: 'journal', title: 'CBT Integration', estimatedMinutes: 4, content: { type: 'journal', prompts: ['Which CBT skill has been most valuable for you: spotting distortions, thought records, Socratic questioning, or behavioural experiments?', 'What is your most persistent core belief? Has it shifted at all through this work? If not, what experiment could you design to test it?', 'How would you explain the difference between balanced thinking and positive thinking to someone new to CBT?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ci-quiz', type: 'quiz', title: 'CBT Mastery Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'Cognitive flexibility means:', options: ['Always thinking positively', 'Being able to hold multiple perspectives and choosing the most accurate one', 'Not caring about what happens', 'Changing your mind constantly'], correctIndex: 1, explanation: 'Cognitive flexibility is the ability to consider multiple interpretations of a situation and respond to the most accurate and helpful one, rather than being locked into the first automatic thought your brain generates.' },
            { question: 'If you challenge a thought using a thought record but still "feel" it is true, you should:', options: ['Give up — it means CBT does not work for you', 'Continue practising — intellectual change precedes emotional change', 'Pretend you believe the balanced thought', 'Only use thought records for minor issues'], correctIndex: 1, explanation: 'It is completely normal for the balanced thought to feel unconvincing at first. Research shows that intellectual understanding comes before emotional shift. Continued practice — especially combined with behavioural experiments — gradually builds genuine belief in the more balanced perspective.' },
          ] } },
        ],
      },
    ],
  },
  {
    id: 'anger-management',
    title: 'Understanding & Managing Anger',
    description: 'Understand the role of anger in attachment and trauma, learn to recognise anger triggers and warning signs, and develop healthy ways to express and channel anger.',
    icon: 'flame',
    order: 11,
    category: 'skills',
    prerequisites: ['dbt-emotion-regulation'],
    sessions: [
      {
        id: 'understanding-anger',
        moduleId: 'anger-management',
        title: 'Understanding Your Anger',
        description: 'Explore what anger really is, what it protects, and how it connects to your attachment wounds.',
        estimatedMinutes: 25,
        learningObjectives: ['Understand anger as a secondary emotion', 'Identify what anger is protecting', 'Recognise healthy vs unhealthy anger expression'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'ua-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we explore anger?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ua-psychoed', type: 'psychoeducation', title: 'Anger as a Protector', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [{ heading: 'Anger Is a Messenger', text: 'Anger is rarely the primary emotion. It usually sits on top of more vulnerable feelings — hurt, fear, shame, or grief. When someone crosses a boundary, dismisses your needs, or threatens your sense of safety, anger mobilises you to protect yourself. The problem is not anger itself, but how we express it.' }, { heading: 'Anger and Attachment', text: 'For people with attachment trauma, anger often connects to deep wounds: rage at being abandoned, fury at being betrayed, anger at yourself for not seeing the signs. Understanding what your anger is really about transforms it from a destructive force into valuable information.', keyIdeas: ['Anger is information about boundary violations and unmet needs', 'Suppressed anger often turns inward as depression or self-harm', 'Explosive anger often masks vulnerability and fear', 'Healthy anger is assertive, not aggressive'] }] } },
          { id: 'ua-interactive', type: 'interactive', title: 'What Lives Under Your Anger', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'mapping', categories: ['Hurt', 'Fear', 'Shame', 'Grief', 'Injustice', 'Powerlessness'] }, instructions: 'Think about the last time you felt angry. Try to identify what emotions were underneath. Select all that applied.' } },
          { id: 'ua-journal', type: 'journal', title: 'Your Anger History', estimatedMinutes: 5, content: { type: 'journal', prompts: ['How was anger handled in your family growing up?', 'What is your current relationship with anger? Do you suppress it, explode, or something else?', 'What is your anger trying to protect right now?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ua-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'Why is anger called a secondary emotion?', options: ['Because it is not a real emotion', 'Because it usually sits on top of more vulnerable feelings like hurt or fear', 'Because it is less important than other emotions', 'Because it only appears second in life'], correctIndex: 1, explanation: 'Anger is often called secondary because it typically arises to protect more vulnerable underlying emotions such as hurt, fear, shame, or grief.' }, { question: 'What happens when anger is chronically suppressed?', options: ['It goes away permanently', 'It often turns inward as depression, self-harm, or physical symptoms', 'Nothing — suppression is always healthy', 'It becomes positive energy'], correctIndex: 1, explanation: 'Chronically suppressed anger does not disappear — it often turns inward, manifesting as depression, self-harm, chronic tension, or other physical symptoms.' }] } },
        ],
      },
      {
        id: 'anger-triggers-skills',
        moduleId: 'anger-management',
        title: 'Anger Triggers & Healthy Expression',
        description: 'Identify your anger triggers, learn early warning signs, and practise healthy anger expression techniques.',
        estimatedMinutes: 25,
        learningObjectives: ['Map personal anger triggers', 'Recognise physiological warning signs', 'Practise assertive communication for anger'],
        prerequisites: ['understanding-anger'],
        contraindications: [],
        segments: [
          { id: 'ats-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ats-psychoed', type: 'psychoeducation', title: 'The Anger Escalation Ladder', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [{ heading: 'Your Body Warns You', text: 'Anger builds in stages. Early signs include: jaw clenching, fists tightening, shallow breathing, heat in your face or chest, thoughts speeding up, and a rising sense of injustice. The earlier you catch the escalation, the more choices you have.' }, { heading: 'The RAIN Technique for Anger', text: 'When anger rises, try RAIN: Recognise the anger. Allow it to be present without acting on it. Investigate what is underneath (hurt, fear, boundary violation). Nurture yourself with compassion. This process typically takes 90 seconds to 2 minutes — the time it takes for the neurochemical cascade of anger to pass through your body.', keyIdeas: ['You have about 90 seconds before anger neurochemicals flood your system', 'Pausing during anger is strength, not weakness', 'Assertive expression is the middle ground between aggression and suppression', 'You can be angry AND kind at the same time'] }] } },
          { id: 'ats-breathing', type: 'breathing', title: 'Anger Cool-Down Breath', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 3, hold: 3, exhale: 6, holdAfter: 3 }, durationSeconds: 120, instruction: 'The extended exhale and pause calm your sympathetic nervous system. Use this whenever you feel anger escalating.' } },
          { id: 'ats-journal', type: 'journal', title: 'Trigger Mapping', estimatedMinutes: 5, content: { type: 'journal', prompts: ['List your top 3 anger triggers. What boundary or need is being violated in each?', 'What are your earliest physical warning signs of anger?', 'Describe one situation where you wish you had expressed anger differently. What would healthy expression have looked like?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ats-action', type: 'action-plan', title: 'Your Anger Action Plan', estimatedMinutes: 5, content: { type: 'action-plan', prompt: 'Choose one healthy anger strategy to practise this week:', options: [{ id: 'rain', label: 'RAIN Technique', description: 'Practise Recognise-Allow-Investigate-Nurture when anger arises' }, { id: 'pause', label: '90-Second Pause', description: 'When anger hits, pause for 90 seconds before responding' }, { id: 'body-scan', label: 'Early Warning Body Scan', description: 'Check in with your body 3x daily to catch anger building' }, { id: 'assertive', label: 'Assertive Expression', description: 'Use "I feel... when... because..." format to express anger' }], timeHorizonDays: 7 } },
          { id: 'ats-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'How long does the neurochemical cascade of anger last?', options: ['About 5 seconds', 'About 90 seconds', 'About 10 minutes', 'About an hour'], correctIndex: 1, explanation: 'The initial neurochemical flood of anger lasts about 90 seconds. If anger persists beyond that, it is being re-triggered by ongoing thoughts.' }, { question: 'What does the I in RAIN stand for?', options: ['Ignore', 'Investigate what is underneath the anger', 'Intensify', 'Insulate'], correctIndex: 1, explanation: 'The I in RAIN stands for Investigate — exploring what vulnerable emotions (hurt, fear, shame) are underneath the anger.' }] } },
        ],
      },
      {
        id: 'anger-iceberg',
        moduleId: 'anger-management',
        title: 'The Anger Iceberg: What Lies Beneath',
        description: 'Explore the anger iceberg model in depth — understanding the vulnerable emotions, unmet needs, and cognitive patterns that drive angry reactions.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Map your personal anger iceberg (surface anger and underlying emotions)',
          'Understand the cognitive model of anger (trigger, appraisal, arousal, behaviour)',
          'Identify the connection between anger and unmet needs',
        ],
        prerequisites: ['anger-triggers-skills'],
        contraindications: [],
        segments: [
          { id: 'ai-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we go deeper into anger?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ai-psychoed', type: 'psychoeducation', title: 'The Anger Iceberg & Cognitive Model', estimatedMinutes: 9, content: { type: 'psychoeducation', sections: [
            { heading: 'The Anger Iceberg', text: 'Imagine an iceberg. Above the waterline, visible to others, is anger — the loud, hot, obvious emotion. Below the waterline, hidden from view, are the emotions that actually drive the anger. Common emotions beneath anger include: Hurt ("You wounded me"), Fear ("I might lose you"), Shame ("There is something wrong with me"), Grief ("I have lost something precious"), Helplessness ("I cannot control this"), Betrayal ("You broke my trust"), Rejection ("I am not wanted"), Loneliness ("I am alone in this"), Injustice ("This is not fair"), Overwhelm ("I cannot cope with all of this"). Below even these emotions are unmet needs: the need for safety, respect, belonging, autonomy, validation, fairness, or control. When you can identify the need beneath the anger, you can address it directly rather than through angry outbursts.' },
            { heading: 'The Cognitive Model of Anger', text: 'Beck\'s cognitive model applies to anger just as it does to anxiety and depression. The anger sequence is: (1) TRIGGER — an event occurs (someone cuts you off in traffic, a partner dismisses your feelings). (2) APPRAISAL — your brain interprets the event through the lens of your beliefs and history. Key anger appraisals include: "This is unfair," "They are disrespecting me," "I am being threatened," "My rules have been violated." (3) AROUSAL — the body activates: heart rate increases, muscles tense, adrenaline surges. (4) BEHAVIOUR — you act: yell, withdraw, slam doors, send an angry text, or suppress and seethe. The intervention point is at step 2 — the appraisal. Different appraisals lead to different emotions. If you interpret a partner\'s silence as "They are disrespecting me," you feel anger. If you interpret it as "They might be struggling," you feel concern. Same event, different interpretation, different emotional result.', keyIdeas: ['Anger is the tip of the iceberg — always look beneath', 'Beneath emotions are unmet needs — address the need, not the anger', 'The appraisal (interpretation) is where you have the most power to change your response', 'Ask yourself: What am I really feeling? What do I really need?', 'Anger that is proportionate to the current situation may be carrying weight from past wounds'] },
          ] } },
          { id: 'ai-interactive', type: 'interactive', title: 'Map Your Anger Iceberg', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'iceberg-mapper', levels: ['Visible anger (what others see)', 'Hidden emotions (what you feel underneath)', 'Unmet needs (what you actually require)'] }, instructions: 'Think of a recent anger episode. At the top, describe the visible anger. In the middle, identify the hidden emotions. At the bottom, identify the unmet need. Take your time — the deeper levels require honest reflection.' } },
          { id: 'ai-breathing', type: 'breathing', title: 'Compassionate Breath for Anger', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 6 }, durationSeconds: 120, instruction: 'As you breathe, place one hand on your chest. Imagine breathing compassion toward the vulnerable emotions beneath your anger. The hurt, fear, or shame underneath does not need more anger — it needs understanding.' } },
          { id: 'ai-journal', type: 'journal', title: 'Beneath the Surface', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Map a recent anger episode as an iceberg. What was the visible anger? What emotions were underneath? What was the unmet need?', 'How might your anger patterns connect to early experiences? Did you learn that anger was the only "acceptable" strong emotion?', 'If you could express what is beneath the anger directly (the hurt, fear, or need), what would you say and to whom?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ai-quiz', type: 'quiz', title: 'Anger Iceberg Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'The anger iceberg model teaches that:', options: ['Anger is the only emotion that matters', 'Anger is usually the visible tip of deeper, more vulnerable emotions and unmet needs', 'You should never feel angry', 'Anger has no useful function'], correctIndex: 1, explanation: 'The anger iceberg model illustrates that visible anger is typically driven by deeper, more vulnerable emotions (hurt, fear, shame) and unmet needs (safety, respect, belonging). Understanding what lies beneath anger allows you to address the root cause.' },
            { question: 'In the cognitive model of anger, the most powerful intervention point is:', options: ['The trigger event (avoiding all triggers)', 'The appraisal (how you interpret the event)', 'The arousal (suppressing physical sensations)', 'The behaviour (controlling yourself through willpower alone)'], correctIndex: 1, explanation: 'The appraisal — your interpretation of the event — determines whether you feel anger, concern, sadness, or nothing at all. Changing your appraisal (by checking the facts, considering alternative explanations, or examining your assumptions) changes the emotional cascade.' },
          ] } },
        ],
      },
      {
        id: 'assertive-communication',
        moduleId: 'anger-management',
        title: 'Assertive Communication: The Middle Path',
        description: 'Learn the differences between passive, aggressive, and assertive communication and build skills for expressing anger and needs in a way that is honest, direct, and respectful.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Distinguish between passive, aggressive, passive-aggressive, and assertive styles',
          'Use the DESC script for assertive anger expression',
          'Practise the time-out technique for anger de-escalation',
        ],
        prerequisites: ['anger-iceberg'],
        contraindications: ['If you are in a relationship where assertive communication is met with violence or punishment, safety planning takes priority over assertiveness. See the safety resources.'],
        segments: [
          { id: 'ac-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ac-psychoed', type: 'psychoeducation', title: 'Communication Styles & the Time-Out', estimatedMinutes: 9, content: { type: 'psychoeducation', sections: [
            { heading: 'Four Communication Styles', text: 'PASSIVE: You suppress your needs and feelings to avoid conflict. You say yes when you mean no, avoid expressing anger, and prioritise others at your own expense. Underneath: fear of rejection or abandonment. Cost: resentment builds, needs go unmet, anger turns inward. AGGRESSIVE: You express your needs and feelings at the expense of others. You blame, criticise, yell, intimidate, or use contempt. Underneath: usually vulnerability or fear disguised as power. Cost: damages relationships, creates fear, escalates conflict. PASSIVE-AGGRESSIVE: You express anger indirectly — through sarcasm, silent treatment, procrastination, subtle sabotage. Underneath: anger you feel unable to express directly. Cost: erodes trust, creates confusion, prevents real resolution. ASSERTIVE: You express your needs, feelings, and boundaries clearly, directly, and respectfully — while also respecting the other person. You use "I" statements, describe specific behaviours, and make clear requests. This is the goal.' },
            { heading: 'The DESC Script for Assertive Communication', text: 'D — Describe the situation objectively. Stick to observable facts, not interpretations. ("When I arrive home and the kitchen has not been cleaned as we agreed...") E — Express your feelings using "I" statements. ("I feel frustrated and disrespected.") S — Specify what you need. Be clear and concrete. ("I need us to follow through on the cleaning schedule we made.") C — Consequences. State the positive outcome of meeting the need. ("If we can stick to our agreement, I will feel more relaxed at home and less resentful.")' },
            { heading: 'The Time-Out Technique', text: 'When anger escalates beyond the point where assertive communication is possible, use a structured time-out: (1) Recognise that you (or the other person) are too activated for productive conversation. (2) Say clearly: "I need to take a break. I am not leaving the conversation — I will come back to this." (3) Set a specific time: "I need 30 minutes." (4) Leave the situation physically. Do NOT continue the argument in your head. Use TIPP or paced breathing. (5) Return at the agreed time and re-engage calmly. The time-out is not the silent treatment. The silent treatment punishes the other person. The time-out protects the conversation by pressing pause when your brain cannot think clearly.', keyIdeas: ['Assertive = honest + direct + respectful', 'Aggression is not strength — it is unregulated vulnerability', 'The time-out technique requires a clear return time to distinguish it from the silent treatment', '"I feel..." statements are not about being soft — they are about being accurate', 'Most people oscillate between passive and aggressive — assertiveness is a learned skill'] },
          ] } },
          { id: 'ac-interactive', type: 'interactive', title: 'DESC Script Practice', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'text-transform', prompts: ['Describe a situation where you felt angry (just the facts)', 'Express how it made you feel (I feel... when...)', 'Specify what you need (I need...)', 'State the positive consequence (If we can do this...)'] }, instructions: 'Think of a real situation where you felt angry but did not express it well (or at all). Rewrite the conversation using the DESC script. Focus on being specific, direct, and respectful.' } },
          { id: 'ac-journal', type: 'journal', title: 'Your Communication Style', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Which communication style do you default to most often — passive, aggressive, passive-aggressive, or assertive? Give an example.', 'What does your anger style cost you in relationships? What do you lose by not being assertive?', 'Write a DESC script for a real situation in your life right now. Even if you never deliver it, writing it builds the skill.', 'What is your biggest fear about being assertive? What is the worst that could realistically happen?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ac-action', type: 'action-plan', title: 'Assertiveness Practice', estimatedMinutes: 2, content: { type: 'action-plan', prompt: 'Choose one assertiveness skill to practise this week:', options: [{ id: 'desc', label: 'Use the DESC script in a low-stakes situation', description: 'Practise with a minor complaint or request to build confidence' }, { id: 'timeout', label: 'Practise the time-out technique', description: 'Agree with someone in your life on a time-out protocol before it is needed' }, { id: 'i-statements', label: 'Replace one "you always..." with an "I feel..." statement', description: 'Notice blame language and convert it to assertive expression' }, { id: 'no-practice', label: 'Say no to one small request assertively', description: 'Practise the simplest form of assertiveness: a clear, kind no' }], timeHorizonDays: 7 } },
          { id: 'ac-quiz', type: 'quiz', title: 'Communication Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'What is the key difference between a time-out and the silent treatment?', options: ['There is no difference', 'A time-out includes a clear statement that you will return and a specific time, while the silent treatment is punishment through withdrawal', 'The silent treatment is healthier', 'A time-out means leaving permanently'], correctIndex: 1, explanation: 'A structured time-out includes clear communication ("I need a break, I will come back in 30 minutes"), while the silent treatment withdraws without communication and serves to punish. The time-out protects the conversation; the silent treatment damages it.' },
            { question: 'In the DESC script, why is the Describe step important?', options: ['To blame the other person effectively', 'To establish shared observable facts before discussing feelings, preventing the other person from feeling attacked', 'To avoid talking about feelings', 'To prove you are right'], correctIndex: 1, explanation: 'The Describe step establishes objective, observable facts that both people can agree on. This prevents the conversation from starting with blame or interpretation, which would trigger defensiveness. Facts first, feelings second.' },
          ] } },
        ],
      },
      {
        id: 'anger-de-escalation',
        moduleId: 'anger-management',
        title: 'Physiological De-escalation & Anger Integration',
        description: 'Master body-based techniques for rapidly de-escalating anger and integrate all anger management skills into a comprehensive personal plan.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Use at least three physiological de-escalation techniques for anger',
          'Build a complete anger management sequence from trigger to resolution',
          'Understand the role of physical activity in anger regulation',
        ],
        prerequisites: ['assertive-communication'],
        contraindications: [],
        segments: [
          { id: 'ad-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ad-psychoed', type: 'psychoeducation', title: 'Physiological De-escalation', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Why the Body Comes First', text: 'When anger is high, your sympathetic nervous system is in full fight mode: heart pounding, muscles tensed, breath shallow, blood redirected to limbs. In this state, reasoning is impaired — the prefrontal cortex literally has reduced blood flow. You must de-escalate the body BEFORE attempting to think or communicate clearly. This is not weakness — it is neuroscience.' },
            { heading: 'De-escalation Techniques', text: 'Cold water on face or wrists: The dive reflex rapidly slows heart rate (same as TIPP). Intense physical exertion: Burns off adrenaline and cortisol. Running, push-ups, or hitting a punching bag for 5-10 minutes. Progressive muscle relaxation: Systematically tense each muscle group for 5 seconds then release. The release signals safety. Slow exhale breathing: Any pattern where the exhale is longer than the inhale (e.g., 4 in, 7 out). This activates the vagus nerve. Bilateral movement: Walking, drumming on knees alternating left-right, or bilateral tapping stimulates both brain hemispheres and reduces emotional intensity. Change your environment: Physically leave the space. Go outside if possible. Nature reduces cortisol levels within 20 minutes. Vocal toning: Humming, singing, or making a long "voo" sound activates the vagus nerve through vibration in the chest and throat.' },
            { heading: 'Your Complete Anger Sequence', text: 'Putting it all together: (1) CATCH IT: Notice early warning signs in your body (jaw, fists, heat, racing thoughts). (2) COOL IT: Use physiological de-escalation — cold water, exercise, breathing. Get your heart rate below 100 BPM. (3) CHECK IT: Look beneath the anger (iceberg model). What are you really feeling? What do you need? Check the facts — is your appraisal accurate? (4) COMMUNICATE IT: Use the DESC script. Express assertively, not aggressively. (5) CONTINUE IT: Maintain PLEASE skills and regular exercise to reduce baseline anger vulnerability.', keyIdeas: ['De-escalate the body first, then engage the mind', 'Physical exercise is one of the most effective anger regulation tools', 'You cannot reason with someone (including yourself) whose heart rate is above 100 BPM', 'Cold water and slow exhales are the fastest physiological resets', 'Catch It, Cool It, Check It, Communicate It, Continue It'] },
          ] } },
          { id: 'ad-breathing', type: 'breathing', title: 'Extended Exhale for Anger', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 8 }, durationSeconds: 180, instruction: 'Breathe in for 4 counts, out slowly for 8 counts. The 1:2 ratio (inhale to exhale) is the most effective pattern for activating the parasympathetic nervous system and countering the fight response. Feel the anger leaving your body with each exhale.' } },
          { id: 'ad-interactive', type: 'interactive', title: 'Your Anger Management Plan', estimatedMinutes: 6, content: { type: 'interactive', component: 'CopingMenuBuilder', config: { categories: ['Catch It (early warning signs)', 'Cool It (body de-escalation tools)', 'Check It (what is underneath)', 'Communicate It (assertive expression)', 'Continue It (daily prevention)'] }, instructions: 'Build your complete anger management plan using the 5C sequence. Be specific for each step — what exactly will you do? Where? When? Having a detailed plan makes it far more likely you will use it when activated.' } },
          { id: 'ad-journal', type: 'journal', title: 'Anger Integration', estimatedMinutes: 3, content: { type: 'journal', prompts: ['What is the most important thing you have learned about your anger through this module?', 'If anger is a messenger, what message has it been trying to deliver to you?', 'What would your life look like if you could consistently catch, cool, check, and communicate your anger?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ad-quiz', type: 'quiz', title: 'Final Anger Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'Why should you de-escalate your body before trying to communicate during anger?', options: ['Because talking is not important', 'Because when heart rate exceeds 100 BPM, the prefrontal cortex has reduced blood flow and reasoning is impaired', 'Because you should never express anger', 'Because de-escalation takes only 2 seconds'], correctIndex: 1, explanation: 'Research by John Gottman showed that when heart rate exceeds approximately 100 BPM (a state he called "flooding"), the prefrontal cortex has reduced blood flow and effective communication becomes nearly impossible. Physiological de-escalation must come first.' },
            { question: 'The 5C anger sequence is:', options: ['Calm, Correct, Control, Confront, Celebrate', 'Catch it, Cool it, Check it, Communicate it, Continue it', 'Cry, Cope, Change, Challenge, Close', 'Count, Confront, Compromise, Conclude, Continue'], correctIndex: 1, explanation: 'The 5C sequence provides a comprehensive anger management framework: Catch early warning signs, Cool the body down, Check what is beneath the anger, Communicate assertively, and Continue with prevention practices.' },
          ] } },
        ],
      },
    ],
  },
  {
    id: 'anxiety-coping',
    title: 'Anxiety Management & Coping Skills',
    description: 'Build a practical toolkit for managing anxiety in daily life, including exposure principles, worry management, and somatic regulation.',
    icon: 'anchor',
    order: 12,
    category: 'skills',
    prerequisites: ['understanding-anxiety'],
    sessions: [
      {
        id: 'anxiety-toolkit',
        moduleId: 'anxiety-coping',
        title: 'Your Anxiety Toolkit',
        description: 'Build a comprehensive set of evidence-based tools for managing anxiety in the moment.',
        estimatedMinutes: 25,
        learningObjectives: ['Learn multiple anxiety coping strategies', 'Understand when to use each tool', 'Build a personal anxiety action plan'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'at-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How anxious are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'at-psychoed', type: 'psychoeducation', title: 'Evidence-Based Anxiety Tools', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [{ heading: 'Bottom-Up vs Top-Down', text: 'Anxiety management works from two directions. Bottom-up tools calm the body first (breathing, movement, cold exposure, grounding). Top-down tools change thinking patterns (cognitive restructuring, defusion, worry time). The best toolkit uses both.' }, { heading: 'The Worry Window', text: 'Instead of trying to stop worry (which makes it worse), schedule a 15-minute daily worry window. Outside this window, write worries down and save them. During the window, worry deliberately. Research shows this reduces overall worry by up to 35%.', keyIdeas: ['Match your tool to your activation level — body tools for high activation, mind tools for moderate', 'Having a plan before anxiety hits makes you 3x more likely to use it', 'The worry window technique reduces worry by up to 35%', 'Progressive muscle relaxation reduces anxiety symptoms in as little as 2 weeks'] }] } },
          { id: 'at-breathing', type: 'breathing', title: 'Progressive Relaxation Breath', estimatedMinutes: 5, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 4 }, durationSeconds: 180, instruction: 'Box breathing creates a sense of control and calm. As you breathe, progressively relax your body from your forehead down to your toes.' } },
          { id: 'at-interactive', type: 'interactive', title: 'Build Your Toolkit', estimatedMinutes: 8, content: { type: 'interactive', component: 'CopingMenuBuilder', config: { categories: ['Body Tools (breathing, cold, movement)', 'Mind Tools (restructuring, defusion)', 'Connection Tools (calling someone, grounding)', 'Environment Tools (changing location, nature)'] }, instructions: 'Build your personalised anxiety toolkit. Choose at least one tool from each category.' } },
          { id: 'at-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'When should you use bottom-up (body) tools vs top-down (mind) tools?', options: ['Body tools for high activation, mind tools for moderate activation', 'Mind tools always come first', 'Body tools are only for emergencies', 'They are interchangeable'], correctIndex: 0, explanation: 'When highly activated, the thinking brain is offline. Start with body tools to reduce activation, then use mind tools once you can think more clearly.' }, { question: 'How does the worry window technique work?', options: ['You try to stop worrying completely', 'You schedule a specific time to worry and postpone worries outside that window', 'You write worries 100 times to desensitise', 'You share all worries with friends'], correctIndex: 1, explanation: 'The worry window involves scheduling a daily 15-minute period to worry deliberately, and postponing worries that arise outside this window.' }] } },
        ],
      },
      {
        id: 'worry-management',
        moduleId: 'anxiety-coping',
        title: 'Managing Worry & Rumination',
        description: 'Learn specific techniques for managing the overthinking, rumination, and catastrophising that fuel anxiety.',
        estimatedMinutes: 22,
        learningObjectives: ['Distinguish between productive and unproductive worry', 'Learn cognitive defusion techniques', 'Build a rumination interruption plan'],
        prerequisites: ['anxiety-toolkit'],
        contraindications: [],
        segments: [
          { id: 'wm-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'wm-psychoed', type: 'psychoeducation', title: 'The Rumination Trap', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [{ heading: 'Productive vs Unproductive Worry', text: 'Productive worry leads to a concrete action you can take now. Unproductive worry loops endlessly without resolution. The question to ask: Is there something I can DO about this right now? If yes, do it. If no, this is unproductive worry and you need a different strategy.' }, { heading: 'Cognitive Defusion', text: 'From Acceptance and Commitment Therapy (ACT), defusion means creating distance from your thoughts. Instead of believing "Something terrible will happen," try "I notice I am having the thought that something terrible will happen." This small linguistic shift reduces the power of anxious thoughts by up to 50%.', keyIdeas: ['Ask: Can I do something about this right now?', 'Defusion reduces thought power without fighting the thought', 'Rumination is the mind trying to solve an unsolvable problem', 'Naming the pattern ("There goes my catastrophising brain") creates distance'] }] } },
          { id: 'wm-interactive', type: 'interactive', title: 'Defusion Practice', estimatedMinutes: 7, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'text-transform', prompts: ['Write a recurring anxious thought', 'Now rewrite it as: I notice I am having the thought that...', 'Now say it in a silly voice in your head'] }, instructions: 'Practise cognitive defusion by transforming an anxious thought. This is not about dismissing your feelings — it is about creating healthy distance from unhelpful thought patterns.' } },
          { id: 'wm-journal', type: 'journal', title: 'Your Worry Patterns', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What topics does your mind ruminate on most?', 'When you are caught in a worry spiral, what usually breaks you out of it?', 'Try the defusion technique on a current worry. What shifted?'], privacyNote: 'Your reflections are private.' } },
          { id: 'wm-action', type: 'action-plan', title: 'Rumination Interruption Plan', estimatedMinutes: 4, content: { type: 'action-plan', prompt: 'Choose a rumination interruption technique to practise daily:', options: [{ id: 'defusion', label: 'Cognitive Defusion', description: 'Practise "I notice I am having the thought that..." for recurring worries' }, { id: 'worry-window', label: 'Worry Window', description: 'Set a daily 15-minute worry window and postpone worries outside it' }, { id: 'grounding', label: '5-4-3-2-1 Grounding', description: 'When caught ruminating, do the 5-4-3-2-1 sensory grounding exercise' }, { id: 'movement', label: 'Movement Break', description: 'When rumination starts, do 2 minutes of physical movement to break the loop' }], timeHorizonDays: 7 } },
        ],
      },
      {
        id: 'anxiety-types-somatic',
        moduleId: 'anxiety-coping',
        title: 'Anxiety Types & Somatic Symptoms',
        description: 'Understand the differences between generalised anxiety, panic, and social anxiety, and learn to manage the physical symptoms of anxiety.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Distinguish between GAD, panic disorder, and social anxiety presentations',
          'Understand the somatic (body-based) symptoms of anxiety and why they occur',
          'Learn specific techniques for managing each anxiety subtype',
        ],
        prerequisites: ['worry-management'],
        contraindications: ['If reading about panic symptoms triggers a panic-like response, pause and use paced breathing. You are safe.'],
        segments: [
          { id: 'ats2-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How anxious are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'ats2-psychoed', type: 'psychoeducation', title: 'Types of Anxiety', estimatedMinutes: 10, content: { type: 'psychoeducation', sections: [
            { heading: 'Generalised Anxiety (GAD)', text: 'GAD is characterised by persistent, excessive worry about many different topics — health, finances, relationships, work, the future. The worry feels uncontrollable and is often disproportionate to the actual situation. Key features: chronic muscle tension, restlessness, fatigue, difficulty concentrating, irritability, sleep disruption. GAD is driven by intolerance of uncertainty — the belief that uncertainty is dangerous and unacceptable. The core fear is: "What if something bad happens and I cannot cope?" Treatment focus: building tolerance for uncertainty, the worry window technique, and cognitive restructuring of catastrophic predictions.' },
            { heading: 'Panic Disorder', text: 'Panic attacks are sudden surges of intense fear accompanied by intense physical symptoms: racing heart, chest tightness, shortness of breath, dizziness, tingling, nausea, feelings of unreality, and the overwhelming belief that you are dying, having a heart attack, or losing control. Panic disorder develops when you begin to fear the panic attacks themselves — avoiding situations where one might occur. The key insight: panic attacks are a false alarm. Your body\'s fight-or-flight system activates when there is no actual danger. The physical symptoms are uncomfortable but not dangerous. A panic attack has never killed anyone. The fear of the fear is what maintains the cycle. Treatment focus: psychoeducation about the false alarm, interoceptive exposure (deliberately inducing sensations to reduce fear of them), and breaking avoidance patterns.' },
            { heading: 'Social Anxiety', text: 'Social anxiety involves intense fear of being negatively evaluated, judged, embarrassed, or rejected in social situations. It goes beyond shyness — it involves a deep belief that others will see you as inadequate, strange, or incompetent. Common features: avoidance of social situations, excessive self-monitoring ("Do I look nervous?"), post-event rumination ("I said something stupid"), safety behaviours (avoiding eye contact, rehearsing what to say, drinking to cope). The core fear is: "Others will see the real me and reject me." Treatment focus: reducing safety behaviours, behavioural experiments in social situations, attention training (shifting focus from internal monitoring to external engagement).' },
            { heading: 'Somatic (Body) Symptoms of Anxiety', text: 'Anxiety is a full-body experience. Common somatic symptoms include: chest tightness or pain, shortness of breath, rapid heartbeat, dizziness or lightheadedness, stomach upset (nausea, butterflies, IBS), muscle tension (especially jaw, neck, shoulders), headaches, sweating, trembling, tingling or numbness, fatigue, and difficulty swallowing. These symptoms occur because anxiety activates the sympathetic nervous system, which prepares the body for danger. The body is doing exactly what it is designed to do — the problem is that the alarm is a false positive. Understanding this is powerful: when you know your racing heart is adrenaline, not a heart attack, the fear of the symptom decreases, which reduces the symptom itself.', keyIdeas: ['GAD = chronic worry driven by intolerance of uncertainty', 'Panic = a false alarm in the fight-or-flight system; intense but not dangerous', 'Social anxiety = fear of negative evaluation, maintained by safety behaviours', 'All physical symptoms of anxiety are the body doing what it is designed for — responding to perceived threat', 'Understanding the mechanism reduces the fear of the symptoms'] },
          ] } },
          { id: 'ats2-breathing', type: 'breathing', title: 'Panic Recovery Breath', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 4, hold: 7, exhale: 8 }, durationSeconds: 180, instruction: 'The 4-7-8 technique (developed by Dr Andrew Weil, based on pranayama breathing) is particularly effective for panic symptoms. The extended hold and exhale activate the parasympathetic nervous system and counter hyperventilation. If holding for 7 seconds feels uncomfortable, reduce to a ratio you can sustain comfortably.' } },
          { id: 'ats2-interactive', type: 'interactive', title: 'Identify Your Anxiety Pattern', estimatedMinutes: 6, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'checklist', categories: ['GAD Symptoms (chronic worry, tension, restlessness)', 'Panic Symptoms (sudden attacks, physical fear, avoidance)', 'Social Anxiety Symptoms (evaluation fear, self-monitoring, avoidance)'] }, instructions: 'Check which symptoms you experience regularly. Most people have elements of more than one type — that is normal. Understanding your pattern helps you choose the right tools.' } },
          { id: 'ats2-journal', type: 'journal', title: 'Your Anxiety Profile', estimatedMinutes: 4, content: { type: 'journal', prompts: ['Which type(s) of anxiety do you most identify with? How does it show up in your daily life?', 'What somatic symptoms do you experience most? How do these physical symptoms affect your behaviour (avoidance, safety behaviours)?', 'What is your relationship with uncertainty? Does not knowing what will happen feel dangerous to you?', 'If you experience panic-like symptoms, what belief about the symptoms makes them worse (e.g., "I am having a heart attack," "I am losing control")?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ats2-quiz', type: 'quiz', title: 'Anxiety Types Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'Panic attacks are:', options: ['Evidence of a serious heart condition', 'A false alarm in the fight-or-flight system — intense and uncomfortable but not dangerous', 'Signs that you are going crazy', 'Unique to people with anxiety disorders'], correctIndex: 1, explanation: 'Panic attacks are the body\'s fight-or-flight system activating when there is no actual danger — a false alarm. The physical symptoms (racing heart, breathlessness, dizziness) are uncomfortable but not dangerous. A panic attack has never been fatal.' },
            { question: 'What drives and maintains generalised anxiety (GAD)?', options: ['A specific phobia', 'Intolerance of uncertainty — the belief that not knowing is dangerous', 'Only traumatic experiences', 'Attention-seeking behaviour'], correctIndex: 1, explanation: 'Research shows that intolerance of uncertainty is the core cognitive process driving GAD. People with GAD find uncertainty itself threatening, leading to chronic worry as an attempt to prepare for every possible negative outcome.' },
          ] } },
        ],
      },
      {
        id: 'exposure-uncertainty',
        moduleId: 'anxiety-coping',
        title: 'Exposure & Uncertainty Tolerance',
        description: 'Learn the principles of exposure therapy for anxiety, build a personal exposure hierarchy, and develop tolerance for uncertainty.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Understand the rationale behind exposure-based anxiety treatment',
          'Build a personal exposure hierarchy for feared situations',
          'Learn and practise uncertainty tolerance exercises',
        ],
        prerequisites: ['anxiety-types-somatic'],
        contraindications: ['Exposure should start small and be self-paced. Do not attempt high-level exposures without professional guidance if you have PTSD or severe panic disorder.'],
        segments: [
          { id: 'eu-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'eu-psychoed', type: 'psychoeducation', title: 'Exposure & Uncertainty Tolerance', estimatedMinutes: 9, content: { type: 'psychoeducation', sections: [
            { heading: 'Why Exposure Works', text: 'Avoidance is the engine that keeps anxiety running. Every time you avoid something feared, your brain receives the message: "That was dangerous and I survived by avoiding it." The fear strengthens. Exposure reverses this process. By gradually and voluntarily facing feared situations (without safety behaviours), your brain receives a new message: "I faced this, the feared outcome did not happen (or I coped with it), and I survived." This is called inhibitory learning — you do not erase the old fear but create a new, competing learning that becomes stronger over time.' },
            { heading: 'The Exposure Hierarchy', text: 'An exposure hierarchy (or fear ladder) ranks feared situations from least to most anxiety-provoking on a 0-100 scale (called SUDS — Subjective Units of Distress). For example: Sending a text without re-reading it (SUDS: 20). Attending a small social event for 30 minutes (SUDS: 40). Having a difficult conversation without rehearsing (SUDS: 60). Giving a presentation (SUDS: 80). You start at the bottom and work up gradually. The key principles: stay in the situation until anxiety naturally decreases (habituation), do not use safety behaviours during the exposure, and repeat each level until it becomes manageable.' },
            { heading: 'Building Uncertainty Tolerance', text: 'For people with GAD, the core skill is learning to tolerate uncertainty rather than trying to eliminate it. Uncertainty tolerance exercises include: Making small decisions without extensive research (choosing a restaurant without reading every review). Leaving small tasks slightly imperfect. Sending a text or email without re-reading. Going somewhere without a detailed plan. The worry script technique: Write out your worst-case scenario in vivid detail. Read it daily until the anxiety decreases (this is a form of imaginal exposure). The certainty audit: Notice how many times per day you seek certainty (Googling symptoms, asking for reassurance, checking plans). Challenge yourself to reduce certainty-seeking by 10% per week.', keyIdeas: ['Avoidance makes anxiety stronger; exposure makes it weaker', 'The goal is not zero anxiety — it is learning you can handle it', 'Safety behaviours prevent new learning — gradually drop them', 'Uncertainty tolerance is a skill that improves with deliberate practice', 'Start small: even a SUDS of 20 is a meaningful exposure'] },
          ] } },
          { id: 'eu-interactive', type: 'interactive', title: 'Build Your Fear Ladder', estimatedMinutes: 8, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'hierarchy-builder', levels: 10, label: 'SUDS (0-100)' }, instructions: 'Build your personal exposure hierarchy. List 6-10 situations related to your anxiety, and rate each on a 0-100 SUDS scale. Order them from least to most distressing. You will start with the lowest-rated items.' } },
          { id: 'eu-journal', type: 'journal', title: 'Facing Fear', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What is your most common avoidance behaviour? What does it cost you in terms of life satisfaction?', 'What safety behaviours do you use in anxiety-provoking situations (checking, reassurance-seeking, rehearsing, using alcohol)?', 'Think of a time you faced something feared and it went better than expected. What did you learn?', 'How do you relate to uncertainty? Do you try to control or predict everything? What would it mean to be okay with not knowing?'], privacyNote: 'Your reflections are private.' } },
          { id: 'eu-action', type: 'action-plan', title: 'Your First Exposure', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'Choose one exposure or uncertainty tolerance exercise to try this week:', options: [{ id: 'low-exposure', label: 'Complete the lowest item on your fear ladder', description: 'Start at the bottom — face the least anxiety-provoking situation without safety behaviours' }, { id: 'no-reassurance', label: 'Resist one reassurance-seeking urge per day', description: 'When you want to check, Google, or ask "Are you mad at me?" — sit with the uncertainty instead' }, { id: 'imperfection', label: 'Send a text or email without re-reading', description: 'A small imperfection exposure that builds uncertainty tolerance' }, { id: 'no-plan', label: 'Go somewhere without a detailed plan', description: 'Leave room for uncertainty and notice that you cope' }], timeHorizonDays: 7 } },
          { id: 'eu-quiz', type: 'quiz', title: 'Exposure Knowledge Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'Why does avoidance make anxiety worse?', options: ['Because it is lazy', 'Because each avoidance reinforces the brain\'s belief that the situation was dangerous and you survived by avoiding it', 'Because anxiety always gets worse regardless', 'Because avoidance takes too much energy'], correctIndex: 1, explanation: 'Each act of avoidance sends the brain the message: "That was dangerous and I survived because I avoided it." This reinforces the fear association and makes the anxiety stronger over time. Exposure reverses this process by creating new, competing safety associations.' },
            { question: 'Safety behaviours during exposure are problematic because they:', options: ['Make you feel too comfortable', 'Prevent the brain from learning that you can cope without them, maintaining the belief that the situation is dangerous', 'Are always harmful', 'Should only be used by therapists'], correctIndex: 1, explanation: 'Safety behaviours (like holding a water bottle during a speech "in case my mouth goes dry") prevent full inhibitory learning. The brain attributes survival to the safety behaviour rather than learning that the situation itself is safe. Gradually dropping safety behaviours is essential for exposure to work.' },
          ] } },
        ],
      },
      {
        id: 'anxiety-integration',
        moduleId: 'anxiety-coping',
        title: 'Your Anxiety Management Plan',
        description: 'Integrate all anxiety management skills into a comprehensive, personalised plan for daily anxiety management and long-term resilience.',
        estimatedMinutes: 22,
        learningObjectives: [
          'Build a comprehensive anxiety management plan combining all techniques',
          'Identify which tools to use for different anxiety intensities',
          'Create a maintenance plan for long-term anxiety management',
        ],
        prerequisites: ['exposure-uncertainty'],
        contraindications: [],
        segments: [
          { id: 'aim-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'aim-psychoed', type: 'psychoeducation', title: 'Your Complete Anxiety Plan', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [
            { heading: 'Matching Tools to Intensity', text: 'Your anxiety management plan should cover all levels of intensity. Mild anxiety (SUDS 10-30): Mindful awareness, cognitive defusion ("I notice I am having the thought that..."), grounding. Moderate anxiety (SUDS 30-50): Paced breathing, worry window, thought records, cognitive restructuring. High anxiety (SUDS 50-70): Box breathing, progressive muscle relaxation, TIPP skills, 5-4-3-2-1 grounding. Severe/Panic (SUDS 70-100): Physiological sigh (double inhale, long exhale), cold water on face, intense exercise, crisis support if needed. Daily prevention: Regular exercise, adequate sleep, mindfulness practice, uncertainty tolerance exercises, gradual exposure.' },
            { heading: 'The Anxiety Recovery Paradox', text: 'The paradox of anxiety recovery is that the goal is not to eliminate anxiety — it is to change your relationship with it. Anxiety is a normal human emotion with an important protective function. The suffering comes not from anxiety itself but from: fighting it ("I should not feel this way"), fearing it ("What if the anxiety gets worse?"), and avoiding it ("I cannot handle situations that make me anxious"). Recovery means being willing to feel anxious while doing the things that matter to you. This is the core principle of Acceptance and Commitment Therapy (ACT): living a valued life WITH anxiety, rather than waiting for anxiety to disappear before living.', keyIdeas: ['Match your tool to your SUDS level', 'Prevention (exercise, sleep, mindfulness) is more effective than crisis management', 'The goal is changing your relationship with anxiety, not eliminating it', 'Willingness to feel anxious while doing valued activities is recovery', 'Every exposure — every time you face fear and cope — builds resilience'] },
          ] } },
          { id: 'aim-interactive', type: 'interactive', title: 'Your Complete Plan', estimatedMinutes: 7, content: { type: 'interactive', component: 'CopingMenuBuilder', config: { categories: ['Mild Anxiety (SUDS 10-30)', 'Moderate Anxiety (SUDS 30-50)', 'High Anxiety (SUDS 50-70)', 'Severe/Panic (SUDS 70-100)', 'Daily Prevention'] }, instructions: 'Build your comprehensive anxiety management plan. For each level, list your specific tools — the exact breathing pattern, the exact grounding technique, the exact action you will take. Specificity makes it usable in the moment.' } },
          { id: 'aim-breathing', type: 'breathing', title: 'Anchor Breath', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 6 }, durationSeconds: 120, instruction: 'This is your anchor breath — a simple, reliable technique you can return to anywhere, anytime. 4 counts in, 6 counts out. Practise it enough that it becomes automatic. It is the simplest tool in your kit and often all you need.' } },
          { id: 'aim-reflection', type: 'reflection', title: 'Anxiety Mastery Reflection', estimatedMinutes: 3, content: { type: 'reflection', prompts: ['What is the most important thing you have learned about anxiety through this module?', 'What would your life look like if you could be willing to feel anxious while doing the things that matter to you?', 'What is one thing you have been avoiding because of anxiety that you are now willing to face?'] } },
          { id: 'aim-quiz', type: 'quiz', title: 'Final Anxiety Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'The paradox of anxiety recovery is:', options: ['You need to fight anxiety harder to beat it', 'The goal is not to eliminate anxiety but to change your relationship with it — being willing to feel anxious while living a valued life', 'Anxiety goes away completely with enough practice', 'You should avoid all situations that cause anxiety'], correctIndex: 1, explanation: 'The anxiety recovery paradox is that trying to eliminate anxiety often maintains it. Recovery means changing your relationship with anxiety — being willing to experience it while engaging in the life activities that matter to you.' },
            { question: 'Which daily practice has the most evidence for reducing baseline anxiety?', options: ['Watching TV to relax', 'Regular physical exercise', 'Avoiding all stress', 'Taking supplements'], correctIndex: 1, explanation: 'Regular physical exercise has the strongest evidence base for reducing baseline anxiety. It reduces cortisol, increases GABA and endorphins, and has been shown to be as effective as medication for mild-to-moderate anxiety in multiple meta-analyses.' },
          ] } },
        ],
      },
    ],
  },
  {
    id: 'mindfulness-grounding',
    title: 'Mindfulness & Grounding Practices',
    description: 'Develop a regular mindfulness practice and learn grounding techniques that bring you back to the present moment when triggered.',
    icon: 'sprout',
    order: 13,
    category: 'skills',
    prerequisites: ['orientation-safety'],
    sessions: [
      {
        id: 'mindfulness-basics',
        moduleId: 'mindfulness-grounding',
        title: 'Introduction to Mindfulness',
        description: 'Learn what mindfulness is, why it matters for healing, and practise your first mindful awareness exercise.',
        estimatedMinutes: 22,
        learningObjectives: ['Define mindfulness and its evidence base', 'Understand how mindfulness supports attachment healing', 'Practise basic mindful awareness'],
        prerequisites: [],
        contraindications: ['If sustained internal focus increases dissociation or distress, keep eyes open and focus externally.'],
        segments: [
          { id: 'mb-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'mb-psychoed', type: 'psychoeducation', title: 'What Is Mindfulness?', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [{ heading: 'Present-Moment Awareness', text: 'Mindfulness is paying attention to the present moment, on purpose, without judgement. It is not about clearing your mind or achieving a special state. It is about noticing what is happening right now — thoughts, feelings, sensations — without getting caught up in them.' }, { heading: 'Why Mindfulness for Attachment Healing?', text: 'Research shows mindfulness literally changes your brain. It strengthens the prefrontal cortex (rational thinking), reduces amygdala reactivity (less hijacking by fear), and increases your capacity to observe emotions without being overwhelmed by them. For attachment healing, this means you can notice your patterns in real-time and choose a different response.', keyIdeas: ['Mindfulness changes brain structure in as little as 8 weeks', 'It increases the gap between stimulus and response', 'Regular practice reduces anxiety and depression by 30-40%', 'Even 5 minutes daily has measurable benefits'] }] } },
          { id: 'mb-breathing', type: 'breathing', title: 'Mindful Breathing', estimatedMinutes: 5, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 4 }, durationSeconds: 180, instruction: 'Simply notice your breath. Do not try to change it. When your mind wanders (it will), gently bring attention back. Each time you return your attention is one repetition of the exercise — like a mental bicep curl.' } },
          { id: 'mb-journal', type: 'journal', title: 'Mindfulness Reflection', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What did you notice during the breathing exercise? What was easy? What was hard?', 'When in your daily life could you practise 5 minutes of mindful awareness?', 'What might change if you could observe your attachment reactions without immediately acting on them?'], privacyNote: 'Your reflections are private.' } },
          { id: 'mb-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 4, content: { type: 'quiz', items: [{ question: 'What is mindfulness?', options: ['Clearing your mind of all thoughts', 'Paying attention to the present moment without judgement', 'A religious practice', 'Deep relaxation'], correctIndex: 1, explanation: 'Mindfulness is paying attention to the present moment, on purpose, without judgement. It does not require clearing your mind.' }, { question: 'How does mindfulness support attachment healing?', options: ['It helps you forget painful memories', 'It increases the gap between trigger and response so you can choose differently', 'It replaces the need for relationships', 'It eliminates all negative emotions'], correctIndex: 1, explanation: 'Mindfulness increases the gap between a trigger and your response, allowing you to notice attachment patterns in real-time and choose a different response.' }] } },
        ],
      },
      {
        id: 'grounding-techniques',
        moduleId: 'mindfulness-grounding',
        title: 'Grounding When Triggered',
        description: 'Learn powerful grounding techniques for when you are triggered, dissociating, or overwhelmed.',
        estimatedMinutes: 20,
        learningObjectives: ['Understand what grounding is and when to use it', 'Learn 5-4-3-2-1 and other grounding techniques', 'Practise grounding in a safe context'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'gt-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How present do you feel right now?', options: [{ label: 'Fully present and grounded', value: 1 }, { label: 'Mostly here', value: 3 }, { label: 'A bit spacey or detached', value: 5 }, { label: 'Quite dissociated', value: 7 }, { label: 'Very disconnected — I need support now', value: 9 }] } },
          { id: 'gt-psychoed', type: 'psychoeducation', title: 'The Science of Grounding', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [{ heading: 'What Is Grounding?', text: 'Grounding is any technique that brings you back to the present moment and reconnects you with your body. When you are triggered, your nervous system time-travels — replaying past threats as if they are happening now. Grounding says to your brain: I am here, I am safe, it is now.' }, { heading: 'Types of Grounding', text: 'Sensory grounding uses the five senses (5-4-3-2-1 technique). Physical grounding uses body awareness (feeling your feet on the floor, cold water on wrists). Cognitive grounding uses mental tasks (counting backwards, naming categories). The best approach depends on your activation level.', keyIdeas: ['Grounding works by activating the present-moment brain areas', 'Sensory input is the fastest way to come back to now', 'Practise when calm so it is automatic when triggered', 'Cold temperature is one of the most powerful grounding tools'] }] } },
          { id: 'gt-interactive', type: 'interactive', title: '5-4-3-2-1 Grounding Practice', estimatedMinutes: 6, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'guided-exercise', steps: ['Name 5 things you can SEE right now', 'Name 4 things you can TOUCH right now', 'Name 3 things you can HEAR right now', 'Name 2 things you can SMELL right now', 'Name 1 thing you can TASTE right now'] }, instructions: 'Work through the 5-4-3-2-1 grounding exercise slowly. Take your time with each sense. Notice how your body feels as you complete each step.' } },
          { id: 'gt-breathing', type: 'breathing', title: 'Grounding Breath', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 3, hold: 0, exhale: 5 }, durationSeconds: 120, instruction: 'As you breathe, feel the weight of your body in your chair. Feel your feet on the floor. You are here. You are safe. It is now.' } },
          { id: 'gt-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 2, content: { type: 'quiz', items: [{ question: 'Why does grounding work?', options: ['It distracts you from your problems', 'It activates present-moment brain areas, pulling you out of past-threat processing', 'It suppresses emotions', 'It requires years of practice'], correctIndex: 1, explanation: 'Grounding activates the brain areas responsible for present-moment awareness, pulling you out of the time-travelling threat response.' }, { question: 'What is one of the most powerful grounding tools?', options: ['Watching television', 'Cold temperature (cold water on wrists, ice cube)', 'Eating sugary food', 'Social media'], correctIndex: 1, explanation: 'Cold temperature is one of the most powerful and fastest grounding tools because it creates an intense present-moment sensation that the brain cannot ignore.' }] } },
        ],
      },
      {
        id: 'body-scan-pmr',
        moduleId: 'mindfulness-grounding',
        title: 'Body Scan & Progressive Muscle Relaxation',
        description: 'Learn two of the most evidence-based somatic mindfulness practices: the body scan meditation and progressive muscle relaxation (PMR).',
        estimatedMinutes: 28,
        learningObjectives: [
          'Practise a full body scan meditation',
          'Learn and apply the 16-muscle-group progressive muscle relaxation protocol',
          'Understand how body-based practices reduce anxiety and improve body awareness',
        ],
        prerequisites: ['grounding-techniques'],
        contraindications: ['If you have chronic pain, modify the body scan to gently acknowledge painful areas rather than focusing intensely on them. Skip any muscle groups that cause pain during PMR.'],
        segments: [
          { id: 'bs-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How present do you feel in your body right now?', options: [{ label: 'Connected and grounded', value: 1 }, { label: 'Mostly present', value: 3 }, { label: 'Somewhat disconnected', value: 5 }, { label: 'Quite numb or detached', value: 7 }, { label: 'Very disconnected — I need support now', value: 9 }] } },
          { id: 'bs-psychoed', type: 'psychoeducation', title: 'Body Scan & PMR', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'The Body Scan Meditation', text: 'The body scan, developed by Jon Kabat-Zinn as part of Mindfulness-Based Stress Reduction (MBSR), involves systematically bringing non-judgemental attention to each part of your body, from the top of your head to the tips of your toes. The purpose is not relaxation (though that often happens). The purpose is awareness — learning to notice what is happening in your body without reacting to it. For people with attachment trauma, the body scan can be particularly powerful because trauma often creates disconnection from the body. Reconnecting with body sensations is a form of coming home to yourself. Protocol: Lie down or sit comfortably. Close your eyes or soften your gaze. Begin at the crown of your head. Slowly move attention through: forehead, eyes, jaw (notice tension), neck, shoulders, upper arms, forearms, hands, chest, upper back, belly (notice breathing), lower back, hips, thighs, knees, calves, feet. At each area, simply notice what is there — warmth, tension, tingling, numbness, nothing. There is no right answer. Just notice.' },
            { heading: 'Progressive Muscle Relaxation (PMR)', text: 'Developed by Edmund Jacobson in the 1930s, PMR is one of the oldest and most researched relaxation techniques. Meta-analyses show it significantly reduces anxiety, insomnia, chronic pain, and blood pressure. The principle is simple: deliberately tense a muscle group for 5-7 seconds, then release. The release creates a deeper relaxation than the muscle had before. PMR teaches you to recognise the difference between tension and relaxation — a skill many anxious people lack, as they have normalised chronic tension. The standard sequence (16 muscle groups): (1) Right hand and forearm — make a fist. (2) Right upper arm — bend at elbow. (3) Left hand and forearm. (4) Left upper arm. (5) Forehead — raise eyebrows high. (6) Eyes and cheeks — squeeze eyes shut. (7) Jaw — clench teeth gently. (8) Neck — press head back. (9) Chest and shoulders — pull shoulders back. (10) Stomach — tighten abdominal muscles. (11) Upper back — arch slightly. (12) Lower back — arch gently. (13) Right thigh — tense upper leg. (14) Right calf — point toes up. (15) Left thigh. (16) Left calf.', keyIdeas: ['Body scan builds interoception — the ability to sense internal body states', 'PMR research shows significant anxiety reduction in as little as 2 weeks of daily practice', 'For trauma survivors, body awareness can initially feel uncomfortable — go slowly and stop if needed', 'Tension in the jaw, shoulders, and stomach is often where anxiety and anger are stored', 'Both practices work best as daily habits, not just crisis tools'] },
          ] } },
          { id: 'bs-breathing', type: 'breathing', title: 'Body Scan Breath', estimatedMinutes: 6, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 6 }, durationSeconds: 300, instruction: 'As you breathe, slowly scan your body from head to feet. With each inhale, bring attention to one area. With each exhale, release any tension you find there. Start at the top of your head. Move to your forehead. Your jaw. Your neck. Your shoulders. Your chest. Your belly. Your hips. Your legs. Your feet. There is no right or wrong. Just notice and breathe.' } },
          { id: 'bs-journal', type: 'journal', title: 'Body Awareness Reflection', estimatedMinutes: 4, content: { type: 'journal', prompts: ['What did you notice in your body during the scan? Where did you find tension? Where did you find ease?', 'Are there parts of your body you avoid noticing or tend to disconnect from? What might that be about?', 'After the relaxation practice, how does your body feel compared to before? Rate tension before and after on a 1-10 scale.'], privacyNote: 'Your reflections are private.' } },
          { id: 'bs-action', type: 'action-plan', title: 'Daily Body Practice', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'Choose one body-based practice to do daily this week:', options: [{ id: 'body-scan', label: '5-minute body scan at bedtime', description: 'Scan from head to feet as you lie in bed — this also improves sleep' }, { id: 'pmr-full', label: 'Full 16-muscle PMR once daily', description: 'Takes about 15 minutes — the gold standard for tension reduction' }, { id: 'pmr-mini', label: 'Mini PMR 3x daily (hands, shoulders, jaw)', description: 'Quick tension release for the three most common anxiety tension spots' }, { id: 'scan-check', label: '3x daily body check-in (30 seconds each)', description: 'Briefly scan your body morning, midday, and evening to build awareness' }], timeHorizonDays: 7 } },
          { id: 'bs-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'The purpose of the body scan is:', options: ['To achieve perfect relaxation', 'To build awareness of body sensations without judgement', 'To diagnose physical health problems', 'To fall asleep'], correctIndex: 1, explanation: 'The body scan is primarily about building interoceptive awareness — learning to notice what is happening in your body without reacting to it or judging it. Relaxation is often a welcome side effect, but awareness is the goal.' },
            { question: 'How does PMR work?', options: ['By avoiding all tension', 'By deliberately tensing muscle groups then releasing, which creates deeper relaxation than the baseline state', 'By stretching muscles for long periods', 'By ignoring physical sensations'], correctIndex: 1, explanation: 'PMR works by creating a contrast between deliberate tension and release. The release phase produces a deeper relaxation than the muscle\'s resting state, teaching the body (and mind) the difference between tension and calm.' },
          ] } },
        ],
      },
      {
        id: 'loving-kindness-visualization',
        moduleId: 'mindfulness-grounding',
        title: 'Loving-Kindness & Visualization Practices',
        description: 'Learn loving-kindness meditation, safe place visualization, and container visualization — powerful practices for building inner safety and self-compassion.',
        estimatedMinutes: 28,
        learningObjectives: [
          'Practise loving-kindness meditation (metta)',
          'Learn safe place visualization for creating internal safety',
          'Use container visualization for managing overwhelming thoughts and memories',
        ],
        prerequisites: ['body-scan-pmr'],
        contraindications: ['If directing kindness toward yourself feels distressing, start with directing it toward someone you care about. Self-compassion practices can be activating for those with deep self-criticism patterns — go gently.'],
        segments: [
          { id: 'lk-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'lk-psychoed', type: 'psychoeducation', title: 'Loving-Kindness & Visualization', estimatedMinutes: 9, content: { type: 'psychoeducation', sections: [
            { heading: 'Loving-Kindness Meditation (Metta)', text: 'Loving-kindness meditation, or metta, originated in Buddhist practice and has been extensively researched in clinical psychology. It involves systematically directing wishes of wellbeing toward yourself and others. Research by Barbara Fredrickson at UNC found that even 7 weeks of loving-kindness practice increases positive emotions, social connection, and life satisfaction, while reducing depression and self-criticism. The practice follows a traditional sequence: (1) Yourself: "May I be safe. May I be healthy. May I be happy. May I live with ease." (2) Someone you love: Direct the same wishes toward them. (3) A neutral person: Someone you neither like nor dislike. (4) A difficult person: Someone you find challenging (start mild). (5) All beings: "May all beings be safe, healthy, happy, and live with ease." For people with attachment wounds, the hardest part is often step 1 — directing kindness toward yourself. If this feels impossible, start with someone you love and gradually include yourself over time.' },
            { heading: 'Safe Place Visualization', text: 'Safe place visualization is an evidence-based technique used in EMDR therapy, trauma treatment, and stress management. It involves creating a vivid internal image of a place where you feel completely safe, calm, and at peace. This can be a real place you have been or an entirely imagined one. The protocol: Close your eyes. Imagine a place where you feel safe. It can be real or imagined. Notice what you see (colours, light, shapes). Notice what you hear (sounds, silence). Notice the temperature and textures. Notice how your body feels in this place. Allow safety to settle in your body. Give this place a name or cue word. With practice, simply saying the cue word can begin to activate the calm state. This works because the brain responds to vivid imagery similarly to actual experience — visualising safety activates the parasympathetic nervous system.' },
            { heading: 'Container Visualization', text: 'Container visualization is a stabilisation technique used in trauma therapy. When thoughts, memories, or emotions feel overwhelming, you can mentally place them in an imagined container — a safe, sturdy box, a locked vault, or any strong container you choose. The steps: Imagine a strong, secure container. It has a lid or door that only you can open. Take the overwhelming thought, memory, or feeling and mentally place it inside. Close the container securely. Know that the content is safe and contained — you can return to it when you are ready, with support if needed, but it does not need to be flooding you right now. This is not suppression or avoidance. It is containment — a temporary, intentional choice to put something aside so you can function, with the intention of processing it appropriately later.', keyIdeas: ['Loving-kindness physically changes brain areas associated with empathy and emotional regulation', 'Safe place visualization leverages the brain\'s inability to distinguish vividly imagined from real experiences', 'Container visualization is containment, not suppression — you will return to the content when ready', 'If self-directed kindness feels painful, that pain is itself important data about your self-relationship', 'These practices are most effective with daily repetition — even 5 minutes builds the neural pathways'] },
          ] } },
          { id: 'lk-breathing', type: 'breathing', title: 'Loving-Kindness Breath', estimatedMinutes: 5, content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 4 }, durationSeconds: 240, instruction: 'As you breathe in, imagine breathing in compassion and warmth. As you hold, let it fill your chest. As you breathe out, direct that warmth toward yourself. Silently repeat: "May I be safe. May I be healthy. May I be happy. May I live with ease." If directing kindness to yourself feels hard, start by thinking of someone you love, then gradually include yourself.' } },
          { id: 'lk-interactive', type: 'interactive', title: 'Safe Place Builder', estimatedMinutes: 6, content: { type: 'interactive', component: 'GenericInteractive', config: { type: 'guided-exercise', steps: ['Describe your safe place — what do you see?', 'What do you hear in this place?', 'What do you feel (temperature, textures, sensations)?', 'How does your body feel as you imagine this place?', 'Choose a cue word for this place'] }, instructions: 'Build your personalised safe place visualization. Be as specific and vivid as possible — the more sensory detail, the more effective. This becomes a portable sanctuary you can access anywhere.' } },
          { id: 'lk-journal', type: 'journal', title: 'Compassion Reflection', estimatedMinutes: 4, content: { type: 'journal', prompts: ['What was it like directing kindness toward yourself? Easy, uncomfortable, emotional, impossible? What does your reaction tell you about your relationship with yourself?', 'Describe your safe place in detail. What makes it feel safe? Can you identify what safety feels like in your body?', 'Is there something in your life right now that needs to be placed in a container — not avoided permanently, but set aside until you are ready to process it with support?'], privacyNote: 'Your reflections are private.' } },
          { id: 'lk-quiz', type: 'quiz', title: 'Knowledge Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'If loving-kindness meditation toward yourself feels painful or impossible, this means:', options: ['The meditation does not work for you', 'It reveals important information about your self-relationship and suggests starting with directing kindness toward someone else first', 'You should force yourself to keep going', 'You have a personality flaw'], correctIndex: 1, explanation: 'Difficulty directing kindness toward yourself is common for people with attachment wounds or chronic self-criticism. It is not a failure — it is valuable information about your relationship with yourself. The clinical recommendation is to start with someone you love, then gradually include yourself as the practice becomes less painful.' },
            { question: 'Container visualization differs from avoidance because:', options: ['There is no difference', 'Container visualization is intentional and temporary, with the plan to process the content later, while avoidance is an attempt to never deal with it', 'Container visualization eliminates the memory', 'Avoidance is actually healthier'], correctIndex: 1, explanation: 'Container visualization is a deliberate, temporary containment strategy — you acknowledge the overwhelming content, place it aside intentionally, and plan to return to it when you are ready (often with therapeutic support). Avoidance is an attempt to permanently escape, which paradoxically makes the content more intrusive over time.' },
          ] } },
        ],
      },
      {
        id: 'bilateral-tapping-daily-practice',
        moduleId: 'mindfulness-grounding',
        title: 'Bilateral Tapping & Building a Daily Practice',
        description: 'Learn bilateral stimulation (butterfly tapping) for emotional regulation and build a sustainable daily mindfulness routine.',
        estimatedMinutes: 25,
        learningObjectives: [
          'Learn and practise bilateral tapping (butterfly hug) for self-regulation',
          'Build a sustainable daily mindfulness routine of 5-15 minutes',
          'Understand how to combine different mindfulness practices for different needs',
        ],
        prerequisites: ['loving-kindness-visualization'],
        contraindications: [],
        segments: [
          { id: 'bt-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] } },
          { id: 'bt-psychoed', type: 'psychoeducation', title: 'Bilateral Tapping & Daily Practice', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Bilateral Tapping (The Butterfly Hug)', text: 'Bilateral stimulation — alternating left-right sensory input — is a core component of EMDR therapy. Research shows it reduces emotional distress and improves emotional processing. The butterfly hug (developed by Lucina Artigas for work with trauma survivors after natural disasters) is a self-administered bilateral tapping technique. Protocol: Cross your arms over your chest, with your right hand on your left shoulder and your left hand on your right shoulder. Your hands will look like butterfly wings. Alternately tap left then right, at a comfortable pace (about one tap per second). While tapping, breathe slowly and either: think of your safe place, notice what is happening in your body, or simply breathe. Continue for 2-5 minutes. Why it works: The alternating left-right stimulation activates both brain hemispheres, facilitating emotional processing and integration. It also has a calming effect on the nervous system similar to the bilateral movement of walking.' },
            { heading: 'Building Your Daily Practice', text: 'The most common reason mindfulness fails is trying to do too much too soon. Research shows that consistency matters far more than duration — 5 minutes daily is more effective than 30 minutes once a week. Your daily mindfulness menu (choose based on need): Energised and anxious? Body scan or PMR. Disconnected or numb? Grounding or bilateral tapping. Self-critical or shaming? Loving-kindness meditation. Overwhelmed by thoughts? Mindful breathing or container visualization. Triggered or activated? 5-4-3-2-1 grounding + safe place visualization. General maintenance? Any practice for 5-10 minutes. Start with a habit stack: attach your practice to something you already do. After morning coffee, before bed, during your commute, or after brushing your teeth. The cue-routine-reward loop makes it automatic.', keyIdeas: ['Bilateral tapping activates both brain hemispheres and reduces emotional distress', 'Consistency beats duration: 5 minutes daily > 30 minutes weekly', 'Match your practice to your current need', 'Habit stacking (attaching practice to existing habits) makes it sustainable', 'You now have a full toolkit: mindful breathing, grounding, body scan, PMR, loving-kindness, safe place, container, bilateral tapping'] },
          ] } },
          { id: 'bt-breathing', type: 'breathing', title: 'Bilateral Tapping with Breath', estimatedMinutes: 5, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 4 }, durationSeconds: 180, instruction: 'Cross your arms over your chest in the butterfly hug position. As you breathe in and out, tap alternately left-right at a comfortable pace. Focus on the rhythm of the tapping and the breath together. If emotions arise, let them come and go. You are safe. Continue for 3 minutes.' } },
          { id: 'bt-interactive', type: 'interactive', title: 'Design Your Daily Practice', estimatedMinutes: 5, content: { type: 'interactive', component: 'CopingMenuBuilder', config: { categories: ['Morning Practice (starting the day grounded)', 'Midday Check-In (maintaining awareness)', 'Evening Practice (processing the day and preparing for sleep)', 'Crisis Response (what to use when triggered)'] }, instructions: 'Design your daily mindfulness routine. For each time of day, choose one practice from your toolkit. Keep it realistic — 5 minutes is enough. The goal is consistency, not perfection.' } },
          { id: 'bt-journal', type: 'journal', title: 'Practice Integration', estimatedMinutes: 3, content: { type: 'journal', prompts: ['What did the bilateral tapping feel like? How did your body respond?', 'Which mindfulness practice from this module resonates with you most? Why?', 'What is your realistic daily practice plan? When, where, and for how long?'], privacyNote: 'Your reflections are private.' } },
          { id: 'bt-action', type: 'action-plan', title: 'Your Mindfulness Commitment', estimatedMinutes: 2, content: { type: 'action-plan', prompt: 'Choose your mindfulness commitment for this week:', options: [{ id: 'five-daily', label: '5 minutes of any practice daily', description: 'The minimum effective dose — consistency is the key' }, { id: 'morning-evening', label: '5 minutes morning + 5 minutes evening', description: 'Bookend your day with presence' }, { id: 'habit-stack', label: 'Attach one 3-minute practice to an existing habit', description: 'After coffee, after brushing teeth, or during your commute' }, { id: 'butterfly-daily', label: 'Butterfly tapping for 3 minutes when emotionally activated', description: 'Use bilateral tapping as your go-to regulation tool this week' }], timeHorizonDays: 7 } },
          { id: 'bt-quiz', type: 'quiz', title: 'Mindfulness Mastery Check', estimatedMinutes: 2, content: { type: 'quiz', items: [
            { question: 'The butterfly hug (bilateral tapping) works by:', options: ['Distracting you from emotions', 'Activating both brain hemispheres through alternating left-right stimulation, which facilitates emotional processing', 'Suppressing difficult memories', 'Replacing the need for therapy'], correctIndex: 1, explanation: 'Bilateral stimulation activates both brain hemispheres simultaneously, facilitating emotional processing and integration. Research from EMDR therapy shows this type of stimulation reduces the emotional charge of distressing experiences and promotes calming.' },
            { question: 'What matters most for an effective mindfulness practice?', options: ['Practising for at least 30 minutes each time', 'Achieving a perfectly calm mind', 'Consistency — daily practice, even if brief', 'Only practising during crisis moments'], correctIndex: 2, explanation: 'Research consistently shows that consistency matters more than duration for mindfulness benefits. Five minutes of daily practice builds neural pathways more effectively than occasional long sessions. The brain changes through repeated, consistent practice.' },
          ] } },
        ],
      },
    ],
  },
  // --- Expanded Therapeutic Modules (imported from /modules) ---
  traumaBonding,
  codependencyHealing,
  selfCompassion,
  healthyRelationships,
  trustRebuilding,
  boundariesCommunication,
  griefLoss,
  innerChildWork,
  // --- Integration Module (inline) ---
  {
    id: 'integration-relapse',
    title: 'Integration & Relapse Prevention',
    description: 'Consolidate everything you have learned, build a maintenance plan, and prepare for challenges ahead.',
    icon: 'compass',
    order: 25,
    category: 'integration',
    prerequisites: ['healthy-relationships'],
    sessions: [
      {
        id: 'maintenance-plan',
        moduleId: 'integration-relapse',
        title: 'Your Maintenance Plan',
        description: 'Build a personalised plan for maintaining your growth and catching early warning signs.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify personal early warning signs of relapse', 'Build a concrete maintenance plan', 'Celebrate your growth'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'mp-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we wrap up?', options: [{ label: 'Proud and grounded', value: 1 }, { label: 'Mixed feelings', value: 3 }, { label: 'Anxious about finishing', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'mp-psychoed', type: 'psychoeducation', title: 'Maintaining Your Growth', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Growth Is Not Linear', text: 'Healing is not a straight line. There will be difficult days, old patterns may resurface, and that is completely normal. What matters is that you now have skills and awareness that you did not have before. Every module you completed has given you tools: self-compassion, boundary-setting, grief processing, inner child reparenting, communication skills, trauma awareness, and the ability to recognise and interrupt old patterns.' },
            { heading: 'Early Warning Signs', text: 'A relapse into old patterns usually has warning signs: increased phone checking, rumination spirals, abandoning boundaries, self-criticism returning, isolating from support, people-pleasing escalating, ignoring your own needs, tolerating treatment you know is unacceptable. Catching these early is key. When you notice a warning sign, do not criticise yourself. Instead, get curious: "Which part of me is activated? What does this part need? What skill can I use right now?"', keyIdeas: ['A setback is not a failure — it is information', 'Your window of tolerance is wider now than when you started', 'Skills need ongoing practice to stay sharp', 'You deserve to keep investing in your growth', 'Recovery is not a destination — it is a daily practice'] },
          ] } },
          { id: 'mp-interactive', type: 'interactive', title: 'Build Your Plan', estimatedMinutes: 10, content: { type: 'interactive', component: 'MaintenancePlanBuilder', config: {}, instructions: 'Create a personalised maintenance plan with daily practices (self-check-in, self-compassion break, inner child greeting), weekly practices (boundary review, journal reflection, connection with safe people), and monthly practices (module review, progress assessment, goal-setting).' } },
          { id: 'mp-journal', type: 'journal', title: 'Letter to Your Future Self', estimatedMinutes: 8, content: { type: 'journal', prompts: ['Write a letter to your future self for a difficult day. What do you want to remember about everything you have learned?', 'What are your early relapse signals and what will you do when you notice them?', 'What are you most proud of learning in this program?', 'What would you tell someone who is just beginning this journey?'], privacyNote: 'This is for you — future you, on a hard day.' } },
          { id: 'mp-reflection', type: 'reflection', title: 'Journey Reflection', estimatedMinutes: 5, content: { type: 'reflection', prompts: ['What is the most important thing you have learned?', 'How has your relationship with yourself changed?', 'What is one commitment you are making going forward?'] } },
        ],
      },
    ],
  },
  // 3% Man — Relationships Category
  threePercentMan,
  threePercentManStudyGuide,
]

export function getModuleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id)
}

export function getSessionById(moduleId: string, sessionId: string) {
  const mod = getModuleById(moduleId)
  return mod?.sessions.find((s) => s.id === sessionId)
}

export function getNextSession(moduleId: string, sessionId: string) {
  const mod = getModuleById(moduleId)
  if (!mod) return null
  const idx = mod.sessions.findIndex((s) => s.id === sessionId)
  if (idx < mod.sessions.length - 1) {
    return { moduleId, session: mod.sessions[idx + 1] }
  }
  const nextMod = modules.find((m) => m.order === mod.order + 1)
  if (nextMod && nextMod.sessions.length > 0) {
    return { moduleId: nextMod.id, session: nextMod.sessions[0] }
  }
  return null
}

export function isSessionUnlocked(sessionId: string, completedSessions: string[]): boolean {
  for (const mod of modules) {
    const session = mod.sessions.find((s) => s.id === sessionId)
    if (session) {
      if (session.prerequisites.length === 0) return true
      return session.prerequisites.every((p) => completedSessions.includes(p))
    }
  }
  return false
}

export function isModuleUnlocked(moduleId: string, completedModules: string[]): boolean {
  const mod = getModuleById(moduleId)
  if (!mod) return false
  if (mod.prerequisites.length === 0) return true
  return mod.prerequisites.every((p) => completedModules.includes(p))
}
