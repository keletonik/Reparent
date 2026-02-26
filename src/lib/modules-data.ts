import type { Module } from './types'

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
        title: 'Name It to Tame It',
        description: 'Learn to identify and label emotions with precision, reducing their intensity.',
        estimatedMinutes: 25,
        learningObjectives: ['Distinguish between primary and secondary emotions', 'Practice precise emotion labelling', 'Understand the function of difficult emotions'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'ne-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ne-psychoed', type: 'psychoeducation', title: 'Emotions Are Information', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Why Name Emotions?', text: 'Dan Siegel coined the phrase "Name It to Tame It" to describe a powerful finding: accurately labelling an emotion reduces its intensity. Research by Matthew Lieberman at UCLA confirmed that putting feelings into words (affect labelling) decreases amygdala activation and increases prefrontal cortex engagement. When you say "I feel anxious" instead of "I feel terrible," you literally shift which part of your brain is in charge.' },
            { heading: 'Primary vs Secondary Emotions', text: 'A primary emotion is the first feeling (e.g., hurt). A secondary emotion is the reaction to that feeling (e.g., anger about feeling hurt). In anxious attachment, the primary emotion is often fear or sadness, but what surfaces is anger, jealousy, or panic.', keyIdeas: ['Anger often masks fear or hurt', 'Jealousy often masks insecurity or shame', 'Finding the primary emotion helps you address the real need'] },
            { heading: 'The Function of Emotions', text: 'Every emotion has a function: fear alerts you to danger, sadness signals loss, anger signals a boundary violation. The emotion is not the problem — it is data about what you need.' },
          ] } },
          { id: 'ne-interactive', type: 'interactive', title: 'Emotion Labelling Practice', estimatedMinutes: 8, content: { type: 'interactive', component: 'EmotionLabeller', config: {}, instructions: 'Practice identifying the primary emotion beneath common relationship scenarios.' } },
          { id: 'ne-journal', type: 'journal', title: 'Emotion Awareness', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What emotion are you avoiding right now?', 'When you feel jealousy or anger in relationships, what is usually underneath?', 'What would change if you could sit with the primary emotion instead of reacting?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ne-quiz', type: 'quiz', title: 'Emotion Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'When someone feels angry after being ignored by their partner, the anger is most likely a:', options: ['Primary emotion', 'Secondary emotion', 'Random reaction', 'Character flaw'], correctIndex: 1, explanation: 'Anger in response to being ignored is typically a secondary emotion. The primary emotion is often fear of abandonment or hurt from feeling unimportant.' }] } },
        ],
      },
    ],
  },
  {
    id: 'cbt-thinking-traps',
    title: 'CBT for Thinking Traps',
    description: 'Identify and challenge the cognitive distortions that fuel anxious attachment and relationship anxiety.',
    icon: 'brain',
    order: 10,
    category: 'skills',
    prerequisites: ['attachment-foundations'],
    sessions: [
      {
        id: 'thought-records',
        moduleId: 'cbt-thinking-traps',
        title: 'Catching Your Thinking Traps',
        description: 'Learn to identify cognitive distortions and build balanced thinking.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify common attachment-related thinking traps', 'Complete a thought record', 'Generate balanced alternative thoughts'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'tr2-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'tr2-psychoed', type: 'psychoeducation', title: 'Common Thinking Traps', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Thoughts Are Not Facts', text: 'When your attachment system is activated, your brain generates thoughts that feel absolutely true but are often distorted. These "thinking traps" fuel anxiety and drive reactive behaviours.' },
            { heading: 'Common Traps in Anxious Attachment', text: 'Aaron Beck and David Burns identified cognitive distortions that fuel emotional suffering. The ones most active in attachment anxiety include: Mind Reading: "They did not reply because they are losing interest." Catastrophising: "If they leave, I will never recover." Personalising: "Their bad mood is about me." All-or-Nothing: "If they are not enthusiastic, they must not care." Emotional Reasoning: "I feel abandoned, so I must be being abandoned." Should Statements: "They should know what I need without me having to ask." Magnification: Blowing one small sign into proof of rejection. Fortune-Telling: "I know this will end badly." Discounting the Positive: "They said they love me, but they probably do not mean it."', keyIdeas: ['Your brain is trying to protect you, but the alarm is often false', 'Challenging a thought is not dismissing your feelings — it is testing the evidence', 'The goal is balanced thinking, not positive thinking', 'Most distortions contain a grain of truth wrapped in exaggeration'] },
          ] } },
          { id: 'tr2-interactive', type: 'interactive', title: 'Thought Record Builder', estimatedMinutes: 10, content: { type: 'interactive', component: 'ThoughtRecord', config: {}, instructions: 'Think of a recent situation where you felt triggered. Walk through the thought record to find a more balanced perspective.' } },
          { id: 'tr2-journal', type: 'journal', title: 'Your Thinking Patterns', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What thinking trap do you fall into most often?', 'If a friend had this thought, what would you say to them?', 'What evidence exists against your most common anxious thought?'], privacyNote: 'Private reflections.' } },
          { id: 'tr2-quiz', type: 'quiz', title: 'Thinking Traps Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: '"They took 3 hours to reply — they must be losing interest" is an example of:', options: ['Emotional reasoning', 'Mind reading', 'Personalising', 'All of the above could apply'], correctIndex: 3, explanation: 'This thought could involve mind reading (assuming their reason), emotional reasoning (feeling rejected so believing it), and personalising (assuming it is about you).' }] } },
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
    ],
  },
  {
    id: 'trauma-bonding',
    title: 'Trauma Bonding & Leaving Unsafe Dynamics',
    description: 'Understand the difference between anxious attachment and trauma bonding, recognise abuse patterns, and build a safety plan.',
    icon: 'unlink',
    order: 14,
    category: 'skills',
    prerequisites: ['attachment-foundations'],
    sessions: [
      {
        id: 'bond-vs-love',
        moduleId: 'trauma-bonding',
        title: 'Bond vs Love: Understanding Trauma Bonds',
        description: 'Learn what trauma bonding is, how it differs from anxious attachment, and why leaving feels so hard.',
        estimatedMinutes: 30,
        learningObjectives: ['Define trauma bonding and its mechanisms', 'Distinguish trauma bonds from anxious attachment', 'Identify power imbalance and intermittent reinforcement'],
        prerequisites: [],
        contraindications: ['If you are currently in an abusive relationship, please access domestic violence resources. This is education, not a safety plan replacement.'],
        segments: [
          { id: 'bvl-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'This session discusses abuse dynamics. How are you feeling about this topic?', options: [{ label: 'Ready to learn', value: 1 }, { label: 'Cautious but okay', value: 3 }, { label: 'Somewhat triggered', value: 5 }, { label: 'Very activated', value: 7 }, { label: 'Not safe to continue', value: 9 }] } },
          { id: 'bvl-psychoed', type: 'psychoeducation', title: 'What Is Trauma Bonding?', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Trauma Bonding Is Not Love', text: 'Patrick Carnes first described the "betrayal bond" — what we now call trauma bonding. It occurs when attachment is strengthened by two factors: power imbalance and intermittent reinforcement (unpredictable cycles of good and bad treatment). This creates an addictive-like bond because the brain\'s dopamine system responds most powerfully to unpredictable rewards. The "highs" of the good periods feel more intense precisely because they are sandwiched between fear and pain. Neurobiologically, this mirrors substance addiction — the bond is chemical, not just emotional, which is why willpower alone is often not enough to leave.' },
            { heading: 'How It Differs from Anxious Attachment', text: 'Anxious attachment involves fear of abandonment in relationships that may be imperfect but safe. Trauma bonding involves actual danger — abuse, coercion, control, or violence. The key question: Is there a genuine power imbalance? Is the "good" behaviour used to maintain control?', keyIdeas: ['Anxious attachment: fear of losing a safe-enough person', 'Trauma bond: attachment to someone who is actively harmful', 'The "high" after a bad period is reinforcement, not reconciliation', 'Leaving feels impossible because the bond is neurological, not just emotional'] },
            { heading: 'Red Flags', text: 'Isolation from friends/family, monitoring your behaviour, punishment for "wrong" responses, love-bombing followed by withdrawal, making you question your reality (gaslighting), threats when you try to leave.' },
          ] } },
          { id: 'bvl-journal', type: 'journal', title: 'Honest Assessment', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What keeps you tethered to this person or pattern? What are the costs?', 'Are there power imbalances in your relationship? Who sets the rules?', 'If your closest friend described this relationship to you, what would you say to them?'], privacyNote: 'These reflections are deeply private. Consider a safety plan if this resonates.' } },
          { id: 'bvl-quiz', type: 'quiz', title: 'Trauma Bond Awareness', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Trauma bonding is driven by:', options: ['True love', 'Power imbalance and intermittent reinforcement', 'Mutual respect', 'Shared interests'], correctIndex: 1, explanation: 'Trauma bonding is driven by power imbalance and intermittent reinforcement — the unpredictable cycle of good and bad treatment creates an addictive-like attachment.' },
            { question: 'The intense relief after a bad period in an abusive relationship is:', options: ['A sign the relationship is improving', 'Intermittent reinforcement strengthening the bond', 'Proof they really love you', 'Normal relationship dynamics'], correctIndex: 1, explanation: 'The relief after abuse is a form of intermittent reinforcement — it strengthens the trauma bond, not the relationship.' },
          ] } },
        ],
      },
    ],
  },
  {
    id: 'codependency-healing',
    title: 'Healing Codependency',
    description: 'Understand codependent patterns, reclaim your sense of self, and learn to love without losing yourself. Build interdependence instead of enmeshment.',
    icon: 'users',
    order: 15,
    category: 'skills',
    prerequisites: ['attachment-foundations'],
    sessions: [
      {
        id: 'codependency-understanding',
        moduleId: 'codependency-healing',
        title: 'What Is Codependency?',
        description: 'Learn what codependency actually is, how it develops, and why it feels like love even when it hurts.',
        estimatedMinutes: 30,
        learningObjectives: [
          'Define codependency and its origins',
          'Distinguish codependency from healthy caregiving',
          'Identify personal codependent patterns',
        ],
        prerequisites: [],
        contraindications: ['If you are in a relationship involving domestic violence, please access DV resources first'],
        segments: [
          {
            id: 'cu-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
            content: { type: 'safety-check', question: 'How are you feeling as we explore this topic?', options: [{ label: 'Calm and curious', value: 1 }, { label: 'A little uneasy', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
          },
          {
            id: 'cu-psychoed', type: 'psychoeducation', title: 'Understanding Codependency', estimatedMinutes: 8,
            content: { type: 'psychoeducation', sections: [
              { heading: 'What Codependency Really Means', text: 'Codependency is a pattern where your sense of self, worth, and emotional stability becomes excessively dependent on another person. You organise your life around managing their feelings, fixing their problems, or preventing their disapproval — often at the expense of your own needs, identity, and wellbeing.' },
              { heading: 'How It Develops', text: 'Codependency typically develops in childhood when a child learns that love is conditional — that they must earn it by being useful, managing a parent\'s emotions, or suppressing their own needs. The child learns: "I am valuable when I am needed." This becomes the template for all future relationships.', keyIdeas: [
                'Codependency is a learned survival strategy, not a character flaw',
                'It often develops in families with addiction, mental illness, or emotional neglect',
                'The "helper" role can feel like identity rather than a choice',
                'Codependency and anxious attachment frequently overlap',
              ] },
              { heading: 'Love vs Codependency', text: 'Healthy love says: "I care about you AND I care about me." Codependency says: "I will abandon myself to keep you." The key difference is whether you can maintain your own identity, boundaries, and needs within the relationship — or whether the relationship requires you to erase them.' },
            ] },
          },
          {
            id: 'cu-interactive', type: 'interactive', title: 'Codependency Pattern Check', estimatedMinutes: 8,
            content: { type: 'interactive', component: 'CodependencyReflection', config: {}, instructions: 'Reflect on these common codependent patterns. This is not a diagnosis — it is an invitation to honest self-awareness.' },
          },
          {
            id: 'cu-journal', type: 'journal', title: 'Your Codependency Story', estimatedMinutes: 7,
            content: { type: 'journal', prompts: [
              'Do you tend to feel responsible for other people\'s emotions? When did this pattern start?',
              'What happens to your sense of self when you are not in a relationship or not needed by someone?',
              'What needs of your own have you been ignoring or minimising?',
            ], privacyNote: 'These reflections are deeply personal and stored only on your device.' },
          },
          {
            id: 'cu-quiz', type: 'quiz', title: 'Codependency Awareness Check', estimatedMinutes: 3,
            content: { type: 'quiz', items: [
              { question: 'Codependency is best described as:', options: ['Being a caring person', 'Organising your life around managing another person at the expense of yourself', 'A personality disorder', 'Being in a relationship'], correctIndex: 1, explanation: 'Codependency is a pattern where your identity and worth become excessively tied to managing another person\'s life and emotions, at the cost of your own needs.' },
              { question: 'Codependency often develops because:', options: ['You are too kind', 'You learned in childhood that love required you to suppress your own needs', 'You chose the wrong partner', 'You are weak'], correctIndex: 1, explanation: 'Codependency is a learned survival strategy, typically rooted in childhood experiences where love felt conditional on being useful or managing others\' emotions.' },
            ] },
          },
        ],
      },
      {
        id: 'reclaiming-self',
        moduleId: 'codependency-healing',
        title: 'Reclaiming Your Self',
        description: 'Rebuild your identity outside of caretaking roles and learn the difference between interdependence and enmeshment.',
        estimatedMinutes: 30,
        learningObjectives: [
          'Identify where you have lost yourself in relationships',
          'Understand enmeshment vs interdependence',
          'Begin rebuilding a sense of self separate from others',
        ],
        prerequisites: ['codependency-understanding'],
        contraindications: [],
        segments: [
          {
            id: 'rs2-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
            content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit nervous', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
          },
          {
            id: 'rs2-psychoed', type: 'psychoeducation', title: 'Enmeshment vs Interdependence', estimatedMinutes: 8,
            content: { type: 'psychoeducation', sections: [
              { heading: 'What Is Enmeshment?', text: 'Enmeshment is when the boundaries between you and another person are so blurred that you cannot tell where you end and they begin. Their mood becomes your mood. Their problems become your emergency. Their approval becomes your oxygen. This feels like closeness, but it is actually a loss of self.' },
              { heading: 'The Interdependence Alternative', text: 'Interdependence means two whole people choosing to share their lives while maintaining their individual identities, needs, and boundaries. You can be close without being consumed. You can love without disappearing.', keyIdeas: [
                'Enmeshment: "I need you to be okay so I can be okay"',
                'Interdependence: "I care about your wellbeing AND I am responsible for my own"',
                'You cannot pour from an empty cup',
                'Healthy love does not require self-abandonment',
              ] },
              { heading: 'Signs You Have Lost Yourself', text: 'You cannot name your own hobbies or interests outside the relationship. You feel guilty when you spend time alone. You automatically defer to the other person\'s preferences. You feel empty or purposeless when they are not around. You monitor their mood to decide how you should feel.' },
            ] },
          },
          {
            id: 'rs2-breathing', type: 'breathing', title: 'Centering Breath', estimatedMinutes: 3,
            content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'This breath helps you return to yourself. As you breathe, notice that you are a separate person with your own body, your own breath, your own life.' },
          },
          {
            id: 'rs2-journal', type: 'journal', title: 'Rediscovering You', estimatedMinutes: 8,
            content: { type: 'journal', prompts: [
              'Who were you before you started organising your life around others? What did you enjoy?',
              'What are three things you want, need, or feel right now — without considering anyone else\'s reaction?',
              'What would your life look like if you gave yourself the same care and attention you give to others?',
            ], privacyNote: 'Your reflections are private.' },
          },
          {
            id: 'rs2-action', type: 'action-plan', title: 'One Step Back to You', estimatedMinutes: 3,
            content: { type: 'action-plan', prompt: 'This week, you will take one step toward reclaiming your identity:', options: [
              { id: 'solo-activity', label: 'Do one activity alone that you enjoy', description: 'Reconnect with your own interests without seeking approval' },
              { id: 'need-expression', label: 'Express one need without apologising', description: 'Practice stating what you want clearly and without guilt' },
              { id: 'mood-separation', label: 'Notice when you absorb someone else\'s mood and name it', description: 'Build awareness of emotional enmeshment in real time' },
            ], timeHorizonDays: 7 },
          },
          {
            id: 'rs2-quiz', type: 'quiz', title: 'Interdependence Check', estimatedMinutes: 3,
            content: { type: 'quiz', items: [
              { question: '"I need them to be okay so I can be okay" is an example of:', options: ['Healthy empathy', 'Interdependence', 'Enmeshment', 'Love'], correctIndex: 2, explanation: 'When your emotional state is entirely dependent on another person\'s wellbeing, that is enmeshment — a loss of boundaries between self and other.' },
              { question: 'The goal of healing codependency is to:', options: ['Stop caring about people', 'Become completely independent and need no one', 'Build interdependence — closeness without self-abandonment', 'Avoid all relationships'], correctIndex: 2, explanation: 'Healing codependency means building interdependence: the ability to maintain your identity, needs, and boundaries while still being close to others.' },
            ] },
          },
        ],
      },
    ],
  },
  {
    id: 'people-pleasing',
    title: 'People-Pleasing & Fawn Response',
    description: 'Understand the fawn trauma response and how people-pleasing develops as a survival strategy. Learn to honour your own needs without guilt.',
    icon: 'hand',
    order: 16,
    category: 'growth',
    prerequisites: ['codependency-healing'],
    sessions: [
      {
        id: 'fawn-response',
        moduleId: 'people-pleasing',
        title: 'The Fawn Response — Why You Say Yes When You Mean No',
        description: 'Understand the neuroscience of the fawn response and how it develops in childhood as a survival strategy.',
        estimatedMinutes: 25,
        order: 1,
        learningObjectives: ['Identify the fawn response as a trauma survival strategy', 'Recognise your personal people-pleasing patterns', 'Understand the difference between genuine kindness and fear-based compliance'],
        prerequisites: [],
        contraindications: ['active-suicidal-ideation'],
        segments: [
          { id: 'fr-safety', type: 'safety-check', title: 'Safety Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we explore people-pleasing patterns?', options: [{ label: 'I am safe and ready to learn', value: 5 }, { label: 'A little anxious but willing', value: 4 }, { label: 'Somewhat uncomfortable', value: 3 }, { label: 'Distressed — I may need support', value: 1 }] } },
          { id: 'fr-psychoed', type: 'psychoeducation', title: 'Understanding the Fawn Response', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'What Is the Fawn Response?', text: 'You have probably heard of fight, flight, and freeze. But there is a fourth survival response that is less well-known: fawn. The fawn response is when your nervous system decides that the safest way to survive a threatening situation is to please the person who threatens you. It is an automatic, unconscious strategy — not a character flaw.' },
            { heading: 'How Fawning Develops in Childhood', text: 'Children who grow up with unpredictable, emotionally volatile, or narcissistic caregivers often learn that the safest way to avoid punishment or gain love is to anticipate and meet the caregiver\'s needs. Over time, this becomes automatic. The child loses touch with their own needs, desires, and even identity, because survival depended on focusing entirely on the other person.' },
            { heading: 'People-Pleasing vs Genuine Kindness', text: 'Genuine kindness comes from overflow — you give because you want to, from a place of fullness. People-pleasing comes from fear — you give because you are afraid of what will happen if you do not. The key difference is choice. Kindness includes the freedom to say no. People-pleasing feels compulsive, driven by anxiety about rejection, abandonment, or conflict.' },
            { heading: 'The Cost of Chronic Fawning', text: 'When you spend years prioritising everyone else\'s needs, you lose touch with your own. Many people-pleasers struggle to answer the question "What do you want?" because they have been trained to suppress their own desires. This can lead to chronic resentment, burnout, loss of identity, and difficulty maintaining authentic relationships.' },
          ] } },
          { id: 'fr-interactive', type: 'interactive', title: 'People-Pleasing Pattern Mapper', estimatedMinutes: 8, content: { type: 'interactive', component: 'PatternMapper', config: {}, instructions: 'Identify your personal people-pleasing patterns. For each scenario, notice whether your "yes" comes from genuine desire or from fear of consequences.' } },
          { id: 'fr-journal', type: 'journal', title: 'Your People-Pleasing Story', estimatedMinutes: 7, content: { type: 'journal', prompts: ['Think of a recent time you said yes when you wanted to say no. What were you afraid would happen if you declined?', 'Who in your childhood did you most need to please to feel safe? What did you learn about your own needs from that relationship?', 'If you could speak honestly to someone you often people-please for, what would you say?'], privacyNote: 'Your reflections are completely private and stored only on your device.' } },
          { id: 'fr-quiz', type: 'quiz', title: 'Fawn Response Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'The fawn response is best described as:', options: ['A personality weakness', 'A survival strategy developed in response to threat', 'Something only women experience', 'Ordinary good manners'], correctIndex: 1, explanation: 'The fawn response is a nervous system survival strategy, not a personality trait. It develops when a child learns that pleasing others is the safest way to avoid harm or gain love.' },
            { question: 'The key difference between kindness and people-pleasing is:', options: ['Kind people are nicer', 'People-pleasers give more', 'Kindness includes the freedom to say no; people-pleasing feels compulsive', 'There is no real difference'], correctIndex: 2, explanation: 'Genuine kindness comes from choice and overflow. People-pleasing is driven by fear and lacks the freedom to decline without guilt or anxiety.' },
          ] } },
        ],
      },
      {
        id: 'reclaiming-no',
        moduleId: 'people-pleasing',
        title: 'Reclaiming Your No — Building Authentic Responses',
        description: 'Practical strategies for setting boundaries, tolerating guilt, and building authentic relationships free from the fawn response.',
        estimatedMinutes: 25,
        order: 2,
        learningObjectives: ['Practise saying no without over-explaining', 'Build tolerance for the guilt that accompanies boundary-setting', 'Develop a framework for authentic decision-making'],
        prerequisites: ['fawn-response'],
        contraindications: ['active-suicidal-ideation'],
        segments: [
          { id: 'rn-safety', type: 'safety-check', title: 'Safety Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we work on boundary skills?', options: [{ label: 'I feel safe and motivated', value: 5 }, { label: 'A bit nervous but ready', value: 4 }, { label: 'Somewhat overwhelmed', value: 3 }, { label: 'I need support right now', value: 1 }] } },
          { id: 'rn-psychoed', type: 'psychoeducation', title: 'The Guilt Is Not a Stop Sign', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Why Saying No Feels Dangerous', text: 'For people-pleasers, saying no triggers the same neural alarm system that was activated in childhood when displeasing a caregiver meant danger. The guilt, anxiety, and dread you feel when setting a boundary are your nervous system\'s old survival programming — not evidence that you are doing something wrong.' },
            { heading: 'Guilt vs Intuition', text: 'People-pleasers often confuse guilt with moral guidance. True moral intuition says "This action harms someone." People-pleasing guilt says "Someone might be disappointed in me." Learning to distinguish between these two signals is essential for recovery.' },
            { heading: 'The No Muscle', text: 'Saying no is a skill that strengthens with practice. Start small — decline a minor request, let a call go to voicemail, choose a restaurant you actually want. Each small no builds the neural pathways that make larger boundaries possible.' },
            { heading: 'From Fawn to Authentic', text: 'The goal is not to become selfish or uncaring. It is to develop the ability to check in with yourself before responding to others. A simple practice: when someone asks you for something, pause and ask yourself "Do I genuinely want to do this, or am I afraid of what happens if I don\'t?" That pause is the beginning of freedom.' },
          ] } },
          { id: 'rn-breathing', type: 'breathing', title: 'Boundary-Setting Breath', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfterExhale: 0 }, durationSeconds: 120, instruction: 'This breathing pattern activates your ventral vagal system, helping you stay grounded when the guilt of saying no feels overwhelming. Breathe in for 4, hold for 4, breathe out slowly for 6.' } },
          { id: 'rn-action', type: 'action-plan', title: 'Your Authentic Response Plan', estimatedMinutes: 6, content: { type: 'action-plan', prompt: 'Choose one area where you will practise saying no or expressing your genuine preference this week.', options: ['Decline one social invitation I do not genuinely want to attend', 'Express my actual preference when someone asks "What do you want to do?"', 'Let a non-urgent request sit for 24 hours before responding', 'Tell someone "I need to think about it" instead of immediately saying yes'], timeHorizonDays: 7 } },
          { id: 'rn-reflection', type: 'reflection', title: 'Closing Reflection', estimatedMinutes: 5, content: { type: 'reflection', prompts: ['What does it feel like in your body when you imagine saying no to someone important to you?', 'What would your life look like if you only said yes to things you genuinely wanted?', 'What is one compassionate thing you can tell yourself when the guilt of a boundary feels unbearable?'] } },
        ],
      },
    ],
  },
  {
    id: 'self-compassion',
    title: 'Self-Compassion & Self-Respect',
    description: 'Build a relationship with yourself based on kindness rather than criticism. Learn to meet shame with compassion.',
    icon: 'flower',
    order: 17,
    category: 'growth',
    prerequisites: ['orientation-safety'],
    sessions: [
      {
        id: 'inner-critic',
        moduleId: 'self-compassion',
        title: 'Meeting Your Inner Critic',
        description: 'Understand self-criticism, its origins, and begin to respond with self-compassion.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify self-critical patterns', 'Understand the three components of self-compassion', 'Practice one self-compassion exercise'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'ic-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ic-psychoed', type: 'psychoeducation', title: 'Self-Compassion, Not Self-Esteem', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'The Problem with Self-Criticism', text: 'Self-criticism feels productive but actually maintains shame, anxiety, and unhealthy relationship patterns. When you attack yourself ("I am too needy," "I am unlovable"), you reinforce the very beliefs that drive anxious attachment. Research by Dr Paul Gilbert shows that self-criticism activates the brain\'s threat system, keeping you in a state of fight-or-flight.' },
            { heading: 'Three Components of Self-Compassion', text: 'Dr Kristin Neff\'s research identifies three core components. Self-Kindness: Treating yourself as you would treat a good friend — actively soothing and comforting yourself rather than attacking. Common Humanity: Remembering that suffering and imperfection are shared human experiences — you are not alone in your pain. Mindful Awareness: Holding difficult feelings with balance rather than over-identifying with them or suppressing them.', keyIdeas: ['Self-compassion is not self-pity — research shows it increases motivation and resilience', 'It is not letting yourself off the hook — it increases personal responsibility (Breines & Chen, 2012)', 'Thousands of peer-reviewed studies link self-compassion to reduced anxiety, depression, and shame', 'It is a skill that strengthens with practice, like a muscle', 'Warning: "Backdraft" — when you first practise self-compassion, pain may initially increase as your defences soften. This is normal and temporary. Go slowly and use grounding if needed.'] },
          ] } },
          { id: 'ic-interactive', type: 'interactive', title: 'Compassionate Letter', estimatedMinutes: 10, content: { type: 'interactive', component: 'CompassionateLetter', config: {}, instructions: 'Write a brief letter to yourself from the perspective of a deeply caring, wise friend who knows everything you have been through.' } },
          { id: 'ic-journal', type: 'journal', title: 'Your Self-Talk', estimatedMinutes: 6, content: { type: 'journal', prompts: ['Where do you attack yourself most harshly? What words do you use?', 'Whose voice does your inner critic sound like?', 'What do you actually need to hear right now?'], privacyNote: 'Private.' } },
          { id: 'ic-quiz', type: 'quiz', title: 'Self-Compassion Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'Self-compassion is:', options: ['Self-pity and letting yourself off the hook', 'Treating yourself with the same kindness you would offer a friend', 'Ignoring your faults', 'Thinking you are better than others'], correctIndex: 1, explanation: 'Self-compassion means extending the same kindness and understanding to yourself that you would naturally offer to a good friend in pain.' }] } },
        ],
      },
      {
        id: 'inner-child-reparenting',
        moduleId: 'self-compassion',
        title: 'Inner Child Work & Reparenting',
        description: 'Meet the child part of you that still carries old wounds. Learn to become the safe, nurturing parent that child needed — this is the heart of reparenting.',
        estimatedMinutes: 35,
        learningObjectives: [
          'Understand the concept of the inner child in clinical psychology',
          'Connect with your vulnerable child part with compassion',
          'Practice a reparenting dialogue',
          'Understand how reparenting relates to earned secure attachment',
        ],
        prerequisites: ['inner-critic'],
        contraindications: ['This session may bring up strong emotions or childhood memories. If you experience flashbacks, dissociation, or severe distress, pause immediately and use grounding tools. Consider working with a trauma-informed therapist for deeper inner child work.'],
        segments: [
          { id: 'icr-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'This session explores childhood experiences. How are you feeling about this?', options: [{ label: 'Ready and grounded', value: 1 }, { label: 'A little nervous but willing', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Not ready — I need support', value: 9 }] } },
          { id: 'icr-psychoed', type: 'psychoeducation', title: 'What Is the Inner Child?', estimatedMinutes: 8,
            content: { type: 'psychoeducation', sections: [
              { heading: 'The Child Who Still Lives Inside You', text: 'The "inner child" is not a metaphor — it refers to the neural networks, emotional memories, and attachment patterns formed in childhood that continue to influence your adult responses. When you feel a sudden wave of abandonment panic, shame, or desperate need for reassurance, you are often experiencing the world through the lens of the child you once were. Jeffrey Young\'s Schema Therapy calls this the "Vulnerable Child mode," and Richard Schwartz\'s Internal Family Systems (IFS) calls these wounded "parts" or "exiles."' },
              { heading: 'What Is Reparenting?', text: 'Reparenting is the process of becoming your own safe, nurturing, protective parent figure. It means giving your inner child what they needed but did not receive: consistent presence, unconditional acceptance, emotional attunement, and gentle limits. In Schema Therapy, the therapist initially models "limited reparenting" — and then the client internalises this capacity as their "Healthy Adult." This is what we are building: a Healthy Adult part of you that can turn toward the scared, hurt child inside with warmth rather than criticism.', keyIdeas: ['Reparenting is not about blaming your parents — it is about meeting unmet needs now', 'Your inner child\'s reactions made sense in the context they were formed', 'You can learn to give yourself what you needed — this is the foundation of earned security', 'IFS teaches us that every "part" has a positive intent, even the ones that cause problems', 'Reparenting is a practice, not a destination — it happens one moment at a time'] },
              { heading: 'The Neuroscience of Self-Reparenting', text: 'When you speak to yourself with warmth and understanding, you activate the same neural pathways as receiving comfort from a caregiver. This is not imagination — fMRI studies show that self-compassion activates the mammalian caregiving system (the left temporal pole and medial prefrontal cortex). Over time, this literally rewires the attachment circuitry in your brain, building what researchers call "earned secure attachment."' },
            ] },
          },
          { id: 'icr-breathing', type: 'breathing', title: 'Grounding Before Inner Child Work', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 90, instruction: 'Before we connect with younger parts, let us ground your adult self first. Breathe slowly and feel your feet on the ground. You are safe, you are here, you are an adult with choices.' } },
          { id: 'icr-journal', type: 'journal', title: 'Meeting Your Inner Child', estimatedMinutes: 12,
            content: { type: 'journal', prompts: [
              'Close your eyes for a moment and picture yourself as a child (around age 5-8). What do you see? What is the child feeling? What do they need?',
              'What did that child learn about love, safety, and their own worth? What messages did they receive about whether their emotions and needs were acceptable?',
              'If you could go back and sit with that child right now, what would you say to them? What do they need to hear from a safe, protective adult?',
              'Write a brief message from your Healthy Adult self to your inner child. Begin with: "Dear little one, I want you to know..."',
            ], privacyNote: 'This is deeply personal work. Your reflections are private and stored only on your device.' },
          },
          { id: 'icr-quiz', type: 'quiz', title: 'Reparenting Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: '"Reparenting" in therapy means:', options: ['Blaming your parents for your problems', 'Becoming the safe, nurturing parent to yourself that your inner child needed', 'Cutting off contact with your family', 'Pretending your childhood was fine'], correctIndex: 1, explanation: 'Reparenting is the process of giving your inner child — the wounded part of you that still carries old pain — the consistent safety, warmth, and attunement they needed. It is about meeting unmet needs, not assigning blame.' },
            { question: '"Earned secure attachment" means:', options: ['Attachment security you were born with', 'Security that develops despite insecure early experiences, through therapy and intentional practice', 'Attachment that comes from finding the right partner', 'A theoretical concept with no research support'], correctIndex: 1, explanation: 'Earned security is one of the most hopeful findings in attachment research. It shows that people can develop secure attachment patterns despite insecure beginnings, through therapeutic relationships, self-compassion practice, and intentional skill-building — exactly what this program teaches.' },
          ] } },
          { id: 'icr-reflection', type: 'reflection', title: 'Closing Reflection', estimatedMinutes: 5, content: { type: 'reflection', prompts: ['What was it like to connect with your inner child today?', 'What is one thing your inner child needs from you going forward?', 'How might your daily life change if you treated yourself the way a loving parent would?'] } },
        ],
      },
    ],
  },
  {
    id: 'boundaries-communication',
    title: 'Boundaries & Needs Communication',
    description: 'Learn to set healthy boundaries, communicate needs without threats, and practise assertiveness from a place of self-respect.',
    icon: 'fence',
    order: 20,
    category: 'growth',
    prerequisites: ['self-compassion'],
    sessions: [
      {
        id: 'boundary-basics',
        moduleId: 'boundaries-communication',
        title: 'What Boundaries Actually Are',
        description: 'Understand boundaries as self-care, not punishment. Learn to set and hold them with clarity and kindness.',
        estimatedMinutes: 30,
        learningObjectives: ['Define boundaries as self-care actions', 'Identify personal non-negotiables', 'Practice the DEAR MAN communication framework'],
        prerequisites: [],
        contraindications: [],
        segments: [
          { id: 'bb-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'bb-psychoed', type: 'psychoeducation', title: 'Boundaries Are Self-Care', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Boundaries Are What You Will Do, Not What Others Must Do', text: 'A boundary is not a demand you place on another person. It is a statement about what you will do to protect your wellbeing. "I need you to stop yelling" is a request. "If yelling continues, I will leave the room" is a boundary. There are several types of boundaries: Physical (your personal space, touch, body), Emotional (how much emotional labour you take on, what feelings you absorb), Time (how you allocate your time and energy), Digital (social media checking, phone availability, response expectations), and Material (your possessions, money, resources). For people with anxious attachment, the hardest boundaries are usually emotional and digital — because these are where the attachment system pulls hardest.' },
            { heading: 'DEAR MAN: A DBT Communication Framework', text: 'Describe the situation factually. Express how you feel using "I" statements. Assert what you need clearly. Reinforce why this matters for both people. Stay Mindful of your goal. Appear confident even if you feel nervous. Negotiate where possible.', keyIdeas: ['Boundaries protect relationships — they do not destroy them', 'Guilt about boundaries is normal but not a reason to abandon them', 'Start with small boundaries and build confidence'] },
          ] } },
          { id: 'bb-interactive', type: 'interactive', title: 'DEAR MAN Practice', estimatedMinutes: 10, content: { type: 'interactive', component: 'DearManBuilder', config: {}, instructions: 'Choose a boundary you want to set and build a DEAR MAN script for communicating it.' } },
          { id: 'bb-journal', type: 'journal', title: 'Your Non-Negotiables', estimatedMinutes: 6, content: { type: 'journal', prompts: ['What are your non-negotiables in a relationship?', 'Where have you historically struggled to hold boundaries? What happened?', 'What would change in your life if you consistently held your boundaries?'], privacyNote: 'Private.' } },
          { id: 'bb-quiz', type: 'quiz', title: 'Boundary Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'A healthy boundary is:', options: ['A punishment for bad behaviour', 'A demand that others change', 'An action you take to protect your wellbeing', 'Something that should cause no discomfort'], correctIndex: 2, explanation: 'A boundary is an action you take to protect yourself, not a demand or punishment placed on someone else.' }] } },
        ],
      },
    ],
  },
  {
    id: 'secure-relating',
    title: 'Secure Relating & Repair',
    description: 'Learn the skills of secure attachment: responding to bids, repairing ruptures, and building trust through consistent, safe behaviour.',
    icon: 'handshake',
    order: 24,
    category: 'growth',
    prerequisites: ['boundaries-communication'],
    sessions: [
      {
        id: 'repair-skills',
        moduleId: 'secure-relating',
        title: 'The Art of Repair',
        description: 'Learn that healthy relationships are not conflict-free — they are repair-capable.',
        estimatedMinutes: 30,
        learningObjectives: ['Understand that rupture and repair build trust', 'Learn a repair sequence', 'Practice de-escalation skills'],
        prerequisites: [],
        contraindications: ['Do not attempt repair with someone who is actively abusive'],
        segments: [
          { id: 'rs-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'rs-psychoed', type: 'psychoeducation', title: 'Rupture and Repair', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'All Relationships Have Ruptures', text: 'John Gottman\'s research at the Love Lab found that healthy relationships are not defined by the absence of conflict but by the ability to repair. Securely attached couples experience just as many disagreements as insecurely attached ones — the difference is in how quickly and effectively they repair. Gottman found that "masters" of relationships make repair attempts early and often, and their partners accept those attempts. "Disasters" either fail to attempt repair or reject their partner\'s attempts.' },
            { heading: 'A Repair Sequence', text: '1. Pause and regulate (use STOP). 2. Acknowledge the rupture ("I know that hurt"). 3. Take responsibility for your part. 4. Express the underlying need ("When we fight, my fear is... my need is..."). 5. Make a specific, actionable commitment.', keyIdeas: ['Repair builds trust over time', 'You can only repair your side', 'Repair is not about being right or wrong', 'Consistent repair is what creates earned security'] },
          ] } },
          { id: 'rs-interactive', type: 'interactive', title: 'Repair Template', estimatedMinutes: 10, content: { type: 'interactive', component: 'RepairBuilder', config: {}, instructions: 'Think of a recent conflict or rupture. Build a repair statement using the template.' } },
          { id: 'rs-journal', type: 'journal', title: 'Repair Reflections', estimatedMinutes: 5, content: { type: 'journal', prompts: ['When we fight, my deepest fear is...', 'What I really need in those moments is...', 'One repair attempt I could make this week is...'], privacyNote: 'Private.' } },
          { id: 'rs-quiz', type: 'quiz', title: 'Repair Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'Healthy relationships are defined by:', options: ['Never having conflict', 'The ability to repair after ruptures', 'Always agreeing', 'Avoiding difficult topics'], correctIndex: 1, explanation: 'Research consistently shows that the ability to repair, not the absence of conflict, defines healthy, secure relationships.' }] } },
        ],
      },
      {
        id: 'bids-for-connection',
        moduleId: 'secure-relating',
        title: 'Bids for Connection & Co-Regulation',
        description: 'Learn Gottman\'s research on "bids" — the fundamental unit of emotional connection — and how co-regulation builds secure attachment.',
        estimatedMinutes: 30,
        learningObjectives: [
          'Recognise bids for connection in everyday interactions',
          'Understand turning toward, turning away, and turning against',
          'Learn how co-regulation builds secure attachment',
          'Practice recognising and responding to bids',
        ],
        prerequisites: ['repair-skills'],
        contraindications: [],
        segments: [
          { id: 'bc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and open', value: 1 }, { label: 'A little guarded', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'bc-psychoed', type: 'psychoeducation', title: 'Bids and Co-Regulation', estimatedMinutes: 8,
            content: { type: 'psychoeducation', sections: [
              { heading: 'What Are Bids for Connection?', text: 'John Gottman discovered that relationships are built and broken in tiny moments he calls "bids for connection." A bid is any attempt — verbal or non-verbal — to get your partner\'s attention, affection, affirmation, or connection. It can be as small as "Look at this sunset" or as direct as "I need a hug." Gottman\'s research found that in stable relationships, partners turn toward each other\'s bids 86% of the time. In relationships that fail, that number drops to 33%. The difference between relationship success and failure is not grand gestures — it is thousands of small moments of turning toward.' },
              { heading: 'Three Responses to a Bid', text: 'Turning Toward: Engaging with the bid. "Oh wow, that is a beautiful sunset." This builds the "emotional bank account." Turning Away: Missing or ignoring the bid. Continuing to scroll your phone without looking up. This erodes connection through neglect. Turning Against: Rejecting the bid with hostility. "I am busy, stop bothering me." This actively damages trust. For those with anxious attachment, unrecognised bids can feel devastating — because each missed bid echoes the original experience of a caregiver not attuning to your needs.', keyIdeas: ['Most bids are subtle — they are easy to miss if you are not paying attention', 'Learning to recognise bids is a skill that dramatically improves relationships', 'You can also learn to make clearer bids yourself, rather than testing whether someone will notice', 'Couples who divorced missed bids 67% of the time; couples who stayed together caught them 86% of the time'] },
              { heading: 'Co-Regulation: How We Calm Each Other', text: 'Before we can self-regulate, we must learn to co-regulate — to use another person\'s calm nervous system to soothe our own. This is what a parent does for an infant: holding, rocking, speaking softly. As adults, co-regulation still happens: through eye contact, synchronised breathing, gentle touch, and the felt sense of being with someone who is calm and present. Polyvagal theory explains that our nervous systems are constantly reading each other — a calm person can literally shift the physiology of a distressed person through their presence alone. Building a network of people with whom you can co-regulate is one of the most powerful things you can do for your attachment healing.' },
            ] },
          },
          { id: 'bc-journal', type: 'journal', title: 'Your Bids and Connections', estimatedMinutes: 8,
            content: { type: 'journal', prompts: [
              'Think of a recent interaction with someone you care about. Can you identify any bids for connection — from either of you? Were they turned toward, away from, or against?',
              'How do you typically make bids for connection? Are they clear and direct, or do you test and hint?',
              'Who in your life helps you co-regulate? When you are with them, what happens to your nervous system?',
              'What would change in your relationships if you turned toward bids 86% of the time?',
            ], privacyNote: 'Your reflections are private.' },
          },
          { id: 'bc-action', type: 'action-plan', title: 'Practice Turning Toward', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will intentionally practice turning toward bids:', options: [{ id: 'notice-bids', label: 'Notice and respond to 3 bids per day from someone you care about', description: 'Build awareness of the tiny moments that build connection' }, { id: 'clear-bids', label: 'Make 1 clear, direct bid for connection each day instead of hinting', description: 'Practice asking for what you need without testing' }, { id: 'co-regulate', label: 'Spend 10 minutes in calm, present connection with someone (no screens)', description: 'Practice co-regulation through simple presence' }], timeHorizonDays: 7 } },
          { id: 'bc-quiz', type: 'quiz', title: 'Connection Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'In Gottman\'s research, couples who stayed together turned toward bids for connection:', options: ['50% of the time', '67% of the time', '86% of the time', '100% of the time'], correctIndex: 2, explanation: 'Gottman found that "masters" of relationships turned toward their partner\'s bids 86% of the time, while "disasters" only turned toward 33% of the time. The difference is not perfection — it is consistency.' },
            { question: 'Co-regulation means:', options: ['Controlling another person\'s emotions', 'Using another person\'s calm presence to help soothe your own nervous system', 'Never needing to self-regulate', 'Being codependent'], correctIndex: 1, explanation: 'Co-regulation is the healthy, biological process of using another person\'s regulated nervous system to help calm your own. It is the foundation of secure attachment and is different from codependency because both people maintain their individual identity.' },
          ] } },
        ],
      },
    ],
  },
  {
    id: 'integration-relapse',
    title: 'Integration & Relapse Prevention',
    description: 'Consolidate everything you have learned, build a maintenance plan, and prepare for challenges ahead.',
    icon: 'compass',
    order: 25,
    category: 'integration',
    prerequisites: ['secure-relating'],
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
            { heading: 'Growth Is Not Linear', text: 'Healing is not a straight line. There will be difficult days, old patterns may resurface, and that is completely normal. What matters is that you now have skills and awareness that you did not have before.' },
            { heading: 'Early Warning Signs', text: 'A relapse into old patterns usually has warning signs: increased phone checking, rumination spirals, abandoning boundaries, self-criticism returning, isolating from support. Catching these early is key.', keyIdeas: ['A setback is not a failure', 'Your window of tolerance is wider now', 'Skills need ongoing practice to stay sharp', 'You deserve to keep investing in your growth'] },
          ] } },
          { id: 'mp-interactive', type: 'interactive', title: 'Build Your Plan', estimatedMinutes: 10, content: { type: 'interactive', component: 'MaintenancePlanBuilder', config: {}, instructions: 'Create a personalised maintenance plan with daily, weekly, and monthly practices.' } },
          { id: 'mp-journal', type: 'journal', title: 'Letter to Your Future Self', estimatedMinutes: 8, content: { type: 'journal', prompts: ['Write a letter to your future self for a difficult day. What do you want to remember?', 'What are your early relapse signals and what will you do when you notice them?', 'What are you most proud of learning in this program?'], privacyNote: 'This is for you.' } },
          { id: 'mp-reflection', type: 'reflection', title: 'Journey Reflection', estimatedMinutes: 5, content: { type: 'reflection', prompts: ['What is the most important thing you have learned?', 'How has your relationship with yourself changed?', 'What is one commitment you are making going forward?'] } },
        ],
      },
    ],
  },
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
