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
                  text: 'Humans are wired for connection. From birth, we rely on caregivers for safety, comfort, and survival. This is not weakness — it is biology. The attachment system evolved to keep us close to people who can protect and support us.',
                },
                {
                  heading: 'Attachment Is Dimensional, Not Categorical',
                  text: 'Modern research shows attachment is best understood on two dimensions: attachment anxiety (fear of abandonment, need for reassurance) and attachment avoidance (discomfort with closeness, preference for independence). Everyone falls somewhere on each dimension — it is not a fixed "type".',
                  keyIdeas: [
                    'High anxiety + low avoidance = anxious-preoccupied tendencies',
                    'Low anxiety + high avoidance = dismissive tendencies',
                    'High anxiety + high avoidance = fearful-avoidant tendencies',
                    'Low anxiety + low avoidance = secure tendencies',
                    'These patterns can shift with awareness and practice',
                  ],
                },
                {
                  heading: 'Change Is Possible',
                  text: 'While early experiences shape our initial patterns, longitudinal research shows that attachment can change throughout life. Therapy, healthy relationships, and intentional skill practice can all move someone toward greater security.',
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
    id: 'childhood-schemas',
    title: 'Childhood Experiences & Schemas',
    description: 'Explore how early experiences shaped your beliefs about yourself, others, and relationships — and begin to update those beliefs.',
    icon: 'sprout',
    order: 3,
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
              { heading: 'Common Schemas', text: 'Schemas are deep patterns of belief. Some common ones include: Abandonment ("People I love will leave"), Defectiveness ("There is something fundamentally wrong with me"), Emotional Deprivation ("My needs will never be met"), and Mistrust ("People will hurt or betray me").', keyIdeas: ['Schemas feel like facts, but they are beliefs', 'They were formed when you had less power and fewer options', 'Identifying them is the first step to updating them'] },
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
    order: 4,
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
              { heading: 'Your Body\'s Protection System', text: 'When your nervous system perceives threat, it activates survival responses. These are not conscious choices — they are automatic protective reactions. In relationships, these responses can be triggered by perceived abandonment, criticism, or conflict.' },
              { heading: 'Fight, Flight, Freeze, Fawn', text: 'Fight: arguing, criticising, becoming controlling. Flight: leaving, avoiding, distracting, over-working. Freeze: shutting down, going numb, dissociating. Fawn: people-pleasing, abandoning your own needs, over-accommodating to avoid conflict.', keyIdeas: ['These responses kept you safe at some point', 'They become problematic when they fire in safe situations', 'Recognising your default response is the first step to changing it', 'You may use different responses in different contexts'] },
              { heading: 'CPTSD and Ongoing Trauma', text: 'ICD-11 recognises Complex PTSD, which includes PTSD symptoms plus disturbances in emotion regulation, self-concept, and relationships. This is particularly relevant for those who experienced ongoing childhood trauma. If this resonates strongly, professional support from a trauma-informed clinician is recommended.' },
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
    id: 'dbt-distress-tolerance',
    title: 'DBT Distress Tolerance',
    description: 'Learn evidence-based skills to survive emotional crises without making things worse. These skills are especially powerful for attachment panic.',
    icon: 'anchor',
    order: 5,
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
              { heading: 'S.T.O.P.', text: 'S — Stop. Physically stop what you are doing. Put the phone down. T — Take a breath. Do 6 slow breaths to engage your calming nervous system. O — Observe. Name what you are feeling, what your body is doing, and what thoughts are running. P — Proceed mindfully. Choose one action aligned with your values, not your panic.', keyIdeas: ['Pausing interrupts the reinforcement loop', 'The urge will pass — urges are temporary', 'You are creating space for a choice'] },
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
    ],
  },
  {
    id: 'dbt-emotion-regulation',
    title: 'DBT Emotion Regulation',
    description: 'Build skills to understand, name, and regulate your emotions rather than being controlled by them.',
    icon: 'waves',
    order: 6,
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
            { heading: 'Why Name Emotions?', text: 'Research shows that accurately labelling an emotion reduces its intensity. When you say "I feel anxious" instead of "I feel terrible," you activate your prefrontal cortex and create distance between you and the feeling.' },
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
    order: 7,
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
            { heading: 'Common Traps in Anxious Attachment', text: 'Mind Reading: "They did not reply because they are losing interest." Catastrophising: "If they leave, I will never recover." Personalising: "Their bad mood is about me." All-or-Nothing: "If they are not enthusiastic, they must not care." Emotional Reasoning: "I feel abandoned, so I must be being abandoned."', keyIdeas: ['Your brain is trying to protect you, but the alarm is often false', 'Challenging a thought is not dismissing your feelings', 'The goal is balanced thinking, not positive thinking'] },
          ] } },
          { id: 'tr2-interactive', type: 'interactive', title: 'Thought Record Builder', estimatedMinutes: 10, content: { type: 'interactive', component: 'ThoughtRecord', config: {}, instructions: 'Think of a recent situation where you felt triggered. Walk through the thought record to find a more balanced perspective.' } },
          { id: 'tr2-journal', type: 'journal', title: 'Your Thinking Patterns', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What thinking trap do you fall into most often?', 'If a friend had this thought, what would you say to them?', 'What evidence exists against your most common anxious thought?'], privacyNote: 'Private reflections.' } },
          { id: 'tr2-quiz', type: 'quiz', title: 'Thinking Traps Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: '"They took 3 hours to reply — they must be losing interest" is an example of:', options: ['Emotional reasoning', 'Mind reading', 'Personalising', 'All of the above could apply'], correctIndex: 3, explanation: 'This thought could involve mind reading (assuming their reason), emotional reasoning (feeling rejected so believing it), and personalising (assuming it is about you).' }] } },
        ],
      },
    ],
  },
  {
    id: 'trauma-bonding',
    title: 'Trauma Bonding & Leaving Unsafe Dynamics',
    description: 'Understand the difference between anxious attachment and trauma bonding, recognise abuse patterns, and build a safety plan.',
    icon: 'unlink',
    order: 8,
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
            { heading: 'Trauma Bonding Is Not Love', text: 'Trauma bonding occurs when attachment is strengthened by two factors: power imbalance and intermittent reinforcement (unpredictable cycles of good and bad treatment). This creates an addictive-like bond that feels like intense love but is driven by fear and relief.' },
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
    order: 9,
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
    id: 'self-compassion',
    title: 'Self-Compassion & Self-Respect',
    description: 'Build a relationship with yourself based on kindness rather than criticism. Learn to meet shame with compassion.',
    icon: 'flower',
    order: 10,
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
            { heading: 'The Problem with Self-Criticism', text: 'Self-criticism feels productive but actually maintains shame, anxiety, and unhealthy relationship patterns. When you attack yourself ("I am too needy," "I am unlovable"), you reinforce the very beliefs that drive anxious attachment.' },
            { heading: 'Three Components of Self-Compassion', text: 'Self-Kindness: Treating yourself as you would treat a good friend. Common Humanity: Remembering that suffering and imperfection are shared human experiences. Mindful Awareness: Holding difficult feelings with balance rather than over-identifying with them.', keyIdeas: ['Self-compassion is not self-pity', 'It is not letting yourself off the hook', 'Research shows it reduces self-criticism and improves distress outcomes', 'It is a skill that strengthens with practice'] },
          ] } },
          { id: 'ic-interactive', type: 'interactive', title: 'Compassionate Letter', estimatedMinutes: 10, content: { type: 'interactive', component: 'CompassionateLetter', config: {}, instructions: 'Write a brief letter to yourself from the perspective of a deeply caring, wise friend who knows everything you have been through.' } },
          { id: 'ic-journal', type: 'journal', title: 'Your Self-Talk', estimatedMinutes: 6, content: { type: 'journal', prompts: ['Where do you attack yourself most harshly? What words do you use?', 'Whose voice does your inner critic sound like?', 'What do you actually need to hear right now?'], privacyNote: 'Private.' } },
          { id: 'ic-quiz', type: 'quiz', title: 'Self-Compassion Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'Self-compassion is:', options: ['Self-pity and letting yourself off the hook', 'Treating yourself with the same kindness you would offer a friend', 'Ignoring your faults', 'Thinking you are better than others'], correctIndex: 1, explanation: 'Self-compassion means extending the same kindness and understanding to yourself that you would naturally offer to a good friend in pain.' }] } },
        ],
      },
    ],
  },
  {
    id: 'boundaries-communication',
    title: 'Boundaries & Needs Communication',
    description: 'Learn to set healthy boundaries, communicate needs without threats, and practise assertiveness from a place of self-respect.',
    icon: 'fence',
    order: 11,
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
            { heading: 'Boundaries Are What You Will Do, Not What Others Must Do', text: 'A boundary is not a demand you place on another person. It is a statement about what you will do to protect your wellbeing. "I need you to stop yelling" is a request. "If yelling continues, I will leave the room" is a boundary.' },
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
    order: 12,
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
            { heading: 'All Relationships Have Ruptures', text: 'Healthy relationships are not defined by the absence of conflict but by the ability to repair. Research shows that securely attached couples experience just as many disagreements as insecurely attached ones — the difference is in how they repair.' },
            { heading: 'A Repair Sequence', text: '1. Pause and regulate (use STOP). 2. Acknowledge the rupture ("I know that hurt"). 3. Take responsibility for your part. 4. Express the underlying need ("When we fight, my fear is... my need is..."). 5. Make a specific, actionable commitment.', keyIdeas: ['Repair builds trust over time', 'You can only repair your side', 'Repair is not about being right or wrong', 'Consistent repair is what creates earned security'] },
          ] } },
          { id: 'rs-interactive', type: 'interactive', title: 'Repair Template', estimatedMinutes: 10, content: { type: 'interactive', component: 'RepairBuilder', config: {}, instructions: 'Think of a recent conflict or rupture. Build a repair statement using the template.' } },
          { id: 'rs-journal', type: 'journal', title: 'Repair Reflections', estimatedMinutes: 5, content: { type: 'journal', prompts: ['When we fight, my deepest fear is...', 'What I really need in those moments is...', 'One repair attempt I could make this week is...'], privacyNote: 'Private.' } },
          { id: 'rs-quiz', type: 'quiz', title: 'Repair Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'Healthy relationships are defined by:', options: ['Never having conflict', 'The ability to repair after ruptures', 'Always agreeing', 'Avoiding difficult topics'], correctIndex: 1, explanation: 'Research consistently shows that the ability to repair, not the absence of conflict, defines healthy, secure relationships.' }] } },
        ],
      },
    ],
  },
  {
    id: 'integration-relapse',
    title: 'Integration & Relapse Prevention',
    description: 'Consolidate everything you have learned, build a maintenance plan, and prepare for challenges ahead.',
    icon: 'compass',
    order: 13,
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
