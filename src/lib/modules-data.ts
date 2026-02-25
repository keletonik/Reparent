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
      {
        id: 'grounding-toolkit',
        moduleId: 'orientation-safety',
        title: 'Building Your Grounding Toolkit',
        description: 'Learn and practise multiple grounding techniques so you always have a tool available when emotions get intense.',
        estimatedMinutes: 30,
        learningObjectives: ['Master the 5-4-3-2-1 grounding technique', 'Complete a guided body scan', 'Build a personalised grounding plan'],
        prerequisites: ['window-of-tolerance'],
        contraindications: [],
        segments: [
          { id: 'gt-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling right now?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A little unsettled', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'gt-psychoed', type: 'psychoeducation', title: 'The Science of Grounding', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Why Grounding Works', text: 'When your attachment system fires — that rush of panic, the desperate need to check your phone, the spiral of "what if" — your prefrontal cortex goes partially offline. Grounding techniques work by redirecting attention to sensory input, which activates different neural circuits and gives your thinking brain time to come back online. This is not avoidance — it is strategic re-engagement with the present moment.' },
            { heading: 'The 5-4-3-2-1 Technique', text: 'Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This technique works because it forces your brain to process concrete sensory data, pulling you out of the abstract threat-detection loop that drives anxiety.', keyIdeas: ['Grounding brings you back to the present moment', 'It works by engaging your senses — which are always in the present', 'The more you practise, the faster it works', 'You can do it anywhere, anytime, without anyone knowing'] },
            { heading: 'Body-Based Grounding', text: 'Your body is always in the present, even when your mind is in the past or future. Techniques like progressive muscle relaxation (tensing and releasing each muscle group), body scanning (systematically noticing sensations throughout your body), and bilateral stimulation (tapping alternate knees or crossing arms to tap shoulders) all work by anchoring attention in physical sensation.' },
          ] } },
          { id: 'gt-interactive', type: 'interactive', title: 'Guided Body Scan', estimatedMinutes: 10, content: { type: 'interactive', component: 'BodyScanExercise', config: {}, instructions: 'Scan through each body region, noticing tension and sensations. There are no wrong answers — just awareness.' } },
          { id: 'gt-breathing', type: 'breathing', title: 'Box Breathing', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 4, holdAfter: 4 }, durationSeconds: 120, instruction: 'Box breathing (equal counts of inhale, hold, exhale, hold) is used by Navy SEALs to stay calm under extreme stress. Follow the circle.' } },
          { id: 'gt-journal', type: 'journal', title: 'Your Grounding Plan', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Which grounding techniques worked best for you today?', 'Where do you tend to hold tension in your body?', 'What is one grounding technique you will keep in your back pocket for the next time you feel activated?'], privacyNote: 'Your reflections are private.' } },
          { id: 'gt-quiz', type: 'quiz', title: 'Grounding Knowledge Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Grounding techniques work because they:', options: ['Distract you from your problems', 'Redirect attention to sensory input, helping your thinking brain come back online', 'Make you forget what upset you', 'Suppress your emotions'], correctIndex: 1, explanation: 'Grounding works by engaging sensory processing circuits, which helps re-engage your prefrontal cortex and reduce amygdala hijacking.' },
            { question: 'The 5-4-3-2-1 technique uses:', options: ['Five deep breaths', 'Five of your senses in descending order', 'Five positive affirmations', 'Five minutes of meditation'], correctIndex: 1, explanation: 'The 5-4-3-2-1 technique systematically engages all five senses to anchor you in the present moment.' },
          ] } },
        ],
      },
      {
        id: 'values-compass',
        moduleId: 'orientation-safety',
        title: 'Your Values Compass',
        description: 'Identify your core values and learn to use them as a compass when emotions try to steer you off course.',
        estimatedMinutes: 25,
        learningObjectives: ['Identify your top 5 core values', 'Understand how values differ from urges', 'Create a values-based decision framework'],
        prerequisites: ['grounding-toolkit'],
        contraindications: [],
        segments: [
          { id: 'vc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A little uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'vc-psychoed', type: 'psychoeducation', title: 'Values vs Urges', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [
            { heading: 'What Are Values?', text: 'Values are your chosen directions in life — what matters to you most deeply. Unlike goals (which can be achieved), values are ongoing directions you move toward. Unlike urges (which are temporary emotional impulses), values represent your considered, deliberate choices about who you want to be.' },
            { heading: 'Values as a Compass', text: 'When your attachment system fires, urges take over: text them, check their Instagram, seek reassurance, push them away. Your values compass asks a different question: "What would the person I want to be do right now?" ACT (Acceptance and Commitment Therapy) teaches that psychological flexibility — the ability to act on values even when experiencing difficult emotions — is the core of wellbeing.', keyIdeas: ['Urges are temporary; values are enduring', 'You can feel an urge AND choose a values-aligned action', 'Values-aligned living builds self-respect over time', 'Ask: "Will this action move me toward or away from my values?"'] },
          ] } },
          { id: 'vc-interactive', type: 'interactive', title: 'Values Card Sort', estimatedMinutes: 8, content: { type: 'interactive', component: 'ValuesCardSort', config: {}, instructions: 'Select the values that matter most to you and rank them. These become your compass for difficult moments.' } },
          { id: 'vc-journal', type: 'journal', title: 'Living Your Values', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What are your top 3 values and why do they matter to you?', 'Think of a recent situation where you acted from an urge rather than a value. What happened?', 'How might that situation have gone differently if you had checked your values compass first?'], privacyNote: 'Your reflections are private.' } },
          { id: 'vc-action', type: 'action-plan', title: 'Values in Action', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, when you feel a strong urge, you will:', options: [{ id: 'pause-values', label: 'Pause and ask "What would the person I want to be do?"', description: 'Use your values compass before acting on the urge' }, { id: 'values-card', label: 'Write your top 3 values on a card and keep it in your phone case', description: 'Physical reminder of what matters most' }, { id: 'values-journal', label: 'End each day by noting one values-aligned action you took', description: 'Build awareness of when you live your values' }], timeHorizonDays: 7 } },
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
      {
        id: 'attachment-in-action',
        moduleId: 'attachment-foundations',
        title: 'Attachment Patterns in Daily Life',
        description: 'See how attachment patterns play out in everyday situations — from texting anxiety to conflict styles.',
        estimatedMinutes: 30,
        learningObjectives: ['Recognise attachment patterns in real scenarios', 'Identify your personal triggers', 'Understand the protest-withdraw cycle'],
        prerequisites: ['attachment-reflection'],
        contraindications: [],
        segments: [
          { id: 'aia-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'aia-psychoed', type: 'psychoeducation', title: 'The Protest-Withdraw Cycle', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'When Anxious Meets Avoidant', text: 'Sue Johnson, creator of Emotionally Focused Therapy (EFT), describes the most common relationship dance as the "protest-withdraw" or "pursue-withdraw" cycle. The anxious partner senses disconnection and protests — by reaching out more, asking questions, seeking reassurance, or expressing frustration. The avoidant partner feels overwhelmed by this intensity and withdraws — going quiet, needing space, or shutting down emotionally. This withdrawal confirms the anxious partner\'s worst fear (abandonment), intensifying their protest. This confirms the avoidant partner\'s worst fear (engulfment), deepening their withdrawal. Neither partner is the villain — both are caught in a cycle driven by their attachment systems.' },
            { heading: 'Everyday Attachment Triggers', text: 'Attachment patterns do not only appear in dramatic moments. They show up in the mundane: how you feel when a text goes unanswered, how you react when plans change, whether you can say "I need you" without shame, how you handle a partner spending time with friends.', keyIdeas: ['Texting patterns are a modern attachment battleground', 'Social media checking is often attachment-seeking behaviour', 'Conflict avoidance is an avoidant attachment strategy, not "being easygoing"', 'Protest behaviours (repeated calling, jealousy, testing) are attempts to get a response, not manipulation'] },
            { heading: 'Breaking the Cycle', text: 'The first step to breaking any cycle is recognising it. When you can say "I am protesting right now because I feel disconnected" or "I am withdrawing because I feel overwhelmed," you create a tiny space for choice. That space is where healing happens.' },
          ] } },
          { id: 'aia-interactive', type: 'interactive', title: 'Trigger Mapping', estimatedMinutes: 8, content: { type: 'interactive', component: 'TriggerMapper', config: {}, instructions: 'Identify your personal attachment triggers and the patterns they activate.' } },
          { id: 'aia-journal', type: 'journal', title: 'Your Patterns in Action', estimatedMinutes: 6, content: { type: 'journal', prompts: ['Describe a recent situation where you felt your attachment system activate. What triggered it?', 'Were you in a protest or withdraw pattern? What was the other person doing?', 'What would a "secure" response to that situation look like?'], privacyNote: 'Private reflections.' } },
          { id: 'aia-quiz', type: 'quiz', title: 'Pattern Recognition', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'In the protest-withdraw cycle, the anxious partner protests because they:', options: ['Want to start a fight', 'Are trying to re-establish connection', 'Are manipulative', 'Enjoy conflict'], correctIndex: 1, explanation: 'Protest behaviour is an attempt to re-establish connection when the attachment system senses disconnection. It is driven by fear, not malice.' },
            { question: 'The avoidant partner withdraws because they:', options: ['Do not care about the relationship', 'Feel overwhelmed and are trying to regulate', 'Are being cruel', 'Have no emotions'], correctIndex: 1, explanation: 'Withdrawal is a self-regulation strategy for people with avoidant attachment. They DO have strong emotions — they manage them by creating distance.' },
          ] } },
        ],
      },
      {
        id: 'earned-security',
        moduleId: 'attachment-foundations',
        title: 'The Path to Earned Security',
        description: 'Discover the research on "earned security" — the evidence that attachment patterns can fundamentally change.',
        estimatedMinutes: 30,
        learningObjectives: ['Understand earned secure attachment', 'Identify your personal growth areas', 'Build hope through research evidence'],
        prerequisites: ['attachment-in-action'],
        contraindications: [],
        segments: [
          { id: 'es-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit nervous', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'es-psychoed', type: 'psychoeducation', title: 'Earned Security: The Research', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Your Attachment Story Can Change', text: 'One of the most hopeful findings in psychology is the concept of "earned security." Mary Main and colleagues at Berkeley discovered that some adults with difficult childhoods had somehow developed secure attachment patterns. They called this "earned security" — security that was not given in childhood but built through later experiences: therapy, a secure partner, self-awareness, or intentional skill practice.' },
            { heading: 'What Makes Earned Security Possible', text: 'The key factor was not what happened to these people — it was how they made sense of it. People with earned security could tell a coherent narrative about their past: acknowledging the pain without being overwhelmed by it, understanding their parents\' limitations without excusing harm, and integrating their history rather than denying or being consumed by it. This is exactly what you are doing in this program.', keyIdeas: ['Attachment patterns exist on a spectrum, not in fixed boxes', 'Neuroplasticity means your brain can form new attachment circuits at any age', 'The Adult Attachment Interview shows that coherent narratives predict security', 'Earned security is just as stable and protective as "original" security', 'Every skill you practise in this program strengthens your earned security'] },
            { heading: 'The Neuroscience of Change', text: 'Neuroscientist Louis Cozolino explains in The Neuroscience of Human Relationships that "neurons that fire together wire together." Every time you practise a new response — pausing instead of reacting, self-soothing instead of seeking reassurance, communicating a need directly instead of testing — you literally build new neural pathways. Over time, the new pathways become stronger than the old ones.' },
          ] } },
          { id: 'es-interactive', type: 'interactive', title: 'Relationship Pattern Check', estimatedMinutes: 8, content: { type: 'interactive', component: 'RelationshipPatternQuiz', config: {}, instructions: 'Explore your attachment tendencies through everyday scenarios. Remember: these are tendencies, not fixed traits.' } },
          { id: 'es-journal', type: 'journal', title: 'Your Path Forward', estimatedMinutes: 6, content: { type: 'journal', prompts: ['Where have you already grown in your attachment patterns? What is different now compared to 5 years ago?', 'What aspect of secure attachment do you most want to build?', 'What gives you hope that change is possible for you?'], privacyNote: 'Private reflections.' } },
          { id: 'es-quiz', type: 'quiz', title: 'Earned Security Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Earned security is:', options: ['Less stable than "natural" security', 'Only possible through therapy', 'Just as protective as security from childhood, built through later experiences', 'A theoretical concept with no research support'], correctIndex: 2, explanation: 'Research shows earned security is just as stable and protective as security developed in childhood. It can be built through therapy, relationships, and intentional practice.' },
          ] } },
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
      {
        id: 'schema-modes',
        moduleId: 'childhood-schemas',
        title: 'Understanding Schema Modes',
        description: 'Learn about the different "modes" that activate when you are triggered — Vulnerable Child, Angry Child, Punitive Parent, and Healthy Adult.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify schema modes from Jeffrey Young\'s model', 'Recognise which modes activate in your life', 'Strengthen the Healthy Adult mode'],
        prerequisites: ['inner-working-models'],
        contraindications: ['If this material causes significant distress, pause and use grounding.'],
        segments: [
          { id: 'sm-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling about exploring your inner modes?', options: [{ label: 'Curious and ready', value: 1 }, { label: 'A bit cautious', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Not ready', value: 9 }] } },
          { id: 'sm-psychoed', type: 'psychoeducation', title: 'Your Inner Modes', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'What Are Schema Modes?', text: 'Jeffrey Young\'s Schema Therapy identifies "modes" — emotional states that activate when your schemas are triggered. Think of modes as different parts of you that take the steering wheel at different times. The Vulnerable Child carries the original pain — the scared, sad, lonely child who learned the world was unsafe. When this mode is active, you feel small, helpless, and desperately in need of comfort. The Angry Child protests against unmet needs — they rage, act out, or demand what they need. This part is not "bad" — they are fighting for needs that were not met. The Punitive Parent attacks you for having needs at all — "You are too needy," "You are being ridiculous," "No one could love you." This voice often sounds like a critical caregiver. The Detached Protector numbs, avoids, and disconnects to avoid feeling the pain. This mode might look calm on the outside but is actually in shutdown.' },
            { heading: 'The Healthy Adult', text: 'The Healthy Adult is the mode we are building. This part can comfort the Vulnerable Child, set limits on the Angry Child, silence the Punitive Parent, and gently invite the Detached Protector to re-engage. It is the part of you that can say: "I am hurting, AND I can handle this. I have needs, AND I can meet them in healthy ways."', keyIdeas: ['You are not "crazy" for having these modes — everyone has them', 'Recognising which mode is active gives you choice', 'The Healthy Adult gets stronger every time you practise new responses', 'Schema Therapy has strong evidence for personality disorders, CPTSD, and chronic relational patterns'] },
          ] } },
          { id: 'sm-interactive', type: 'interactive', title: 'Window of Tolerance Tracker', estimatedMinutes: 8, content: { type: 'interactive', component: 'WindowOfToleranceTracker', config: {}, instructions: 'Map your personal experience across the zones of arousal. Identify what each zone feels like in your body, emotions, and thoughts.' } },
          { id: 'sm-journal', type: 'journal', title: 'Meeting Your Modes', estimatedMinutes: 8, content: { type: 'journal', prompts: ['Which schema mode is most active in your life right now?', 'What does your Punitive Parent say to you? Whose voice does it sound like?', 'What would your Healthy Adult say to your Vulnerable Child right now?', 'What triggers your Detached Protector to take over?'], privacyNote: 'Private and stored on your device.' } },
          { id: 'sm-quiz', type: 'quiz', title: 'Schema Modes Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'The voice that says "You are too needy — no one could love you" is most likely:', options: ['The Vulnerable Child', 'The Angry Child', 'The Punitive Parent', 'The Healthy Adult'], correctIndex: 2, explanation: 'The Punitive Parent mode attacks you for having needs. It often echoes the voice of a critical caregiver from childhood.' },
            { question: 'The Healthy Adult mode:', options: ['Has no emotions', 'Can comfort the Vulnerable Child while making wise choices', 'Ignores all pain', 'Is only available through therapy'], correctIndex: 1, explanation: 'The Healthy Adult can hold space for the pain of the Vulnerable Child while still making thoughtful, values-aligned decisions.' },
          ] } },
        ],
      },
      {
        id: 'updating-beliefs',
        moduleId: 'childhood-schemas',
        title: 'Updating Your Core Beliefs',
        description: 'Begin the process of challenging and updating the core beliefs that were written in childhood.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify core beliefs that no longer serve you', 'Use evidence-based techniques to test old beliefs', 'Write updated, balanced beliefs'],
        prerequisites: ['schema-modes'],
        contraindications: [],
        segments: [
          { id: 'ub-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A little cautious', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ub-psychoed', type: 'psychoeducation', title: 'Beliefs Are Not Facts', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Core Beliefs Feel Like Facts', text: 'A core belief like "I am unlovable" or "People always leave" feels like an absolute truth — not an opinion. This is because it was formed during a period of life when you did not have the cognitive capacity to question it. A child who is neglected does not think "My parent has a substance use problem that impairs their caregiving." They think: "I am not worth caring for."' },
            { heading: 'Testing Old Beliefs', text: 'CBT uses a technique called "examining the evidence." For any core belief, you ask: What evidence supports this belief? What evidence contradicts it? Would I apply this belief to someone else in my situation? What would a kinder, wiser version of me say? Then you write a new, balanced belief — not blindly positive, but more accurate.', keyIdeas: ['Old beliefs were adaptive in childhood — they are not signs of weakness', 'Updating a belief is not denying your pain — it is honouring your growth', 'New beliefs feel uncomfortable at first — that does not mean they are wrong', 'Writing new beliefs down and reading them daily strengthens the neural pathway'] },
          ] } },
          { id: 'ub-interactive', type: 'interactive', title: 'Thought Record Practice', estimatedMinutes: 10, content: { type: 'interactive', component: 'ThoughtRecord', config: {}, instructions: 'Take a core belief and run it through the thought record. Test the evidence.' } },
          { id: 'ub-journal', type: 'journal', title: 'Rewriting Your Story', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What is one core belief from childhood that you suspect is no longer accurate?', 'What evidence from your adult life contradicts this belief?', 'Write a new, updated belief that honours your experience while reflecting who you are now.'], privacyNote: 'Private.' } },
          { id: 'ub-action', type: 'action-plan', title: 'Belief Update Practice', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, when you notice an old core belief activate:', options: [{ id: 'notice-belief', label: 'Write it down and ask: "Is this a fact or a belief from childhood?"', description: 'Build awareness of when old beliefs are driving your reactions' }, { id: 'evidence-check', label: 'Find three pieces of evidence that contradict the belief', description: 'Actively challenge the belief with current evidence' }, { id: 'new-belief', label: 'Read your updated belief aloud once per day', description: 'Strengthen the new neural pathway through repetition' }], timeHorizonDays: 7 } },
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
      {
        id: 'polyvagal-ladder',
        moduleId: 'nervous-system',
        title: 'Your Polyvagal Ladder',
        description: 'Deep dive into Deb Dana\'s polyvagal ladder — understanding your nervous system\'s three states and how to move between them.',
        estimatedMinutes: 30,
        learningObjectives: ['Map the three polyvagal states in your own body', 'Understand glimmers and triggers', 'Build a personal regulation menu'],
        prerequisites: ['trauma-responses'],
        contraindications: [],
        segments: [
          { id: 'pl-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How is your nervous system right now?', options: [{ label: 'Safe and social (ventral vagal)', value: 1 }, { label: 'A little on edge', value: 3 }, { label: 'Fight or flight activated', value: 5 }, { label: 'Feeling shutdown', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'pl-psychoed', type: 'psychoeducation', title: 'The Polyvagal Ladder', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Three States of Your Nervous System', text: 'Deb Dana, author of The Polyvagal Theory in Therapy, adapted Stephen Porges\' polyvagal theory into a practical framework called the "polyvagal ladder." Think of your nervous system as having three rungs. Top: Ventral Vagal (safe and social) — you feel connected, curious, calm, playful, and able to engage. This is your window of tolerance. Middle: Sympathetic (mobilised) — fight or flight is activated. You feel anxious, angry, restless, on edge. Your body is preparing for action. Bottom: Dorsal Vagal (immobilised) — freeze, shutdown, collapse. You feel numb, disconnected, foggy, helpless, or "not real." Your body has given up on fighting or fleeing.' },
            { heading: 'Glimmers and Triggers', text: 'Dana introduced the concept of "glimmers" — the opposite of triggers. A trigger is a cue of danger that moves you down the ladder. A glimmer is a micro-moment of safety that moves you up: a warm smile, sunlight on your skin, a favourite song, the sound of a loved one\'s voice. Building a life rich in glimmers expands your capacity to stay in ventral vagal.', keyIdeas: ['You move up and down this ladder many times per day', 'The goal is not to stay at the top permanently — that is impossible', 'The goal is to notice where you are and have skills to climb back up', 'Co-regulation (another person\'s calm presence) is the fastest way up', 'Glimmers are free, available everywhere, and stack over time'] },
          ] } },
          { id: 'pl-interactive', type: 'interactive', title: 'Map Your Ladder', estimatedMinutes: 8, content: { type: 'interactive', component: 'WindowOfToleranceTracker', config: {}, instructions: 'Map what each state of the polyvagal ladder feels like for you personally — in your body, emotions, and thoughts.' } },
          { id: 'pl-breathing', type: 'breathing', title: 'Vagal Toning Breath', estimatedMinutes: 4, content: { type: 'breathing', pattern: { inhale: 4, hold: 0, exhale: 8 }, durationSeconds: 120, instruction: 'This extended exhale directly tones your vagus nerve — the nerve that connects your brain to your gut and controls your rest-and-digest system. A longer exhale is one of the fastest ways to climb up the polyvagal ladder.' } },
          { id: 'pl-journal', type: 'journal', title: 'Your Glimmers', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What are your personal "glimmers" — micro-moments of safety and connection?', 'What moves you down the ladder fastest? What moves you back up?', 'Who in your life helps you co-regulate? What do they do that helps?'], privacyNote: 'Private.' } },
          { id: 'pl-quiz', type: 'quiz', title: 'Polyvagal Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'The dorsal vagal state feels like:', options: ['Anxiety and restlessness', 'Calm and connected', 'Numbness, shutdown, and disconnection', 'Excitement and motivation'], correctIndex: 2, explanation: 'Dorsal vagal is the shutdown/freeze state — characterised by numbness, disconnection, fog, and collapse. It is the nervous system\'s last resort when fight and flight have failed.' },
            { question: '"Glimmers" are:', options: ['Warning signs of dysregulation', 'Micro-moments of safety that help your nervous system feel safe', 'A type of cognitive distortion', 'Only possible in therapy'], correctIndex: 1, explanation: 'Glimmers are the opposite of triggers — small cues of safety that help your nervous system move toward the ventral vagal (safe and social) state.' },
          ] } },
        ],
      },
      {
        id: 'somatic-awareness',
        moduleId: 'nervous-system',
        title: 'Listening to Your Body',
        description: 'Your body keeps the score. Learn somatic awareness skills to read your body\'s signals and use them for healing.',
        estimatedMinutes: 30,
        learningObjectives: ['Develop interoceptive awareness', 'Complete a full body scan', 'Understand the body-emotion connection'],
        prerequisites: ['polyvagal-ladder'],
        contraindications: ['If body awareness triggers dissociation, go slowly and stay grounded.'],
        segments: [
          { id: 'sa-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling in your body right now?', options: [{ label: 'Comfortable', value: 1 }, { label: 'Slightly tense', value: 3 }, { label: 'Noticeably activated', value: 5 }, { label: 'Quite uncomfortable', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'sa-psychoed', type: 'psychoeducation', title: 'The Body Keeps the Score', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Why the Body Matters', text: 'Bessel van der Kolk\'s landmark book The Body Keeps the Score explains that trauma is stored not just in memory but in the body itself — in muscle tension, breathing patterns, posture, and gut sensations. This is why you can "know" something intellectually (like "they are probably just busy") but your body screams otherwise. Peter Levine, creator of Somatic Experiencing, teaches that healing requires completing the body\'s interrupted defensive responses. When we freeze instead of fighting or fleeing, that energy stays trapped in the body until it is released.' },
            { heading: 'Interoception: Your Inner Sense', text: 'Interoception is your ability to sense what is happening inside your body — your heartbeat, gut sensations, muscle tension, temperature. Research shows that people with better interoceptive awareness can regulate emotions more effectively. It is a skill you can develop.', keyIdeas: ['Your body often knows you are triggered before your mind does', 'Gut feelings are real — they are interoceptive signals', 'Chronic tension often corresponds to specific emotions or memories', 'Body awareness is the foundation of emotional regulation'] },
          ] } },
          { id: 'sa-interactive', type: 'interactive', title: 'Full Body Scan', estimatedMinutes: 10, content: { type: 'interactive', component: 'BodyScanExercise', config: {}, instructions: 'Scan through each body region slowly. Rate tension and notice sensations. There are no wrong answers.' } },
          { id: 'sa-breathing', type: 'breathing', title: 'Grounding Breath', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 6 }, durationSeconds: 90, instruction: 'Breathe slowly and notice the physical sensations of breathing — the air in your nostrils, your chest rising, your belly expanding. This is interoception in action.' } },
          { id: 'sa-journal', type: 'journal', title: 'Body Wisdom', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What did you learn from the body scan? Were there any surprises?', 'Where does your body first signal that you are getting activated?', 'What is one way you could check in with your body more regularly?'], privacyNote: 'Private.' } },
          { id: 'sa-quiz', type: 'quiz', title: 'Body Awareness Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Interoception is:', options: ['The ability to read other people\'s emotions', 'The ability to sense what is happening inside your own body', 'A type of cognitive distortion', 'The same as proprioception'], correctIndex: 1, explanation: 'Interoception is your inner body sense — the ability to detect internal signals like heartbeat, gut sensations, and muscle tension.' },
          ] } },
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
        id: 'radical-acceptance',
        moduleId: 'dbt-distress-tolerance',
        title: 'Radical Acceptance',
        description: 'Learn Marsha Linehan\'s radical acceptance — the skill of accepting reality as it is, without approval, to stop suffering from fighting what cannot be changed.',
        estimatedMinutes: 30,
        learningObjectives: ['Define radical acceptance and distinguish it from approval', 'Understand how non-acceptance creates suffering', 'Practice turning the mind toward acceptance'],
        prerequisites: ['tipp-skill'],
        contraindications: [],
        segments: [
          { id: 'ra-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly activated', value: 3 }, { label: 'Moderately activated', value: 5 }, { label: 'Quite activated', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ra-psychoed', type: 'psychoeducation', title: 'What Is Radical Acceptance?', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Pain vs Suffering', text: 'Marsha Linehan teaches: "Pain is inevitable. Suffering is pain plus non-acceptance." When you refuse to accept reality as it is — "This should not be happening," "They should not have left," "It is not fair" — you add a layer of suffering on top of the original pain. Radical acceptance means fully acknowledging reality without fighting it. It does NOT mean you approve of what happened or that you will not work to change things. It means you stop torturing yourself by insisting reality should be different than it is.' },
            { heading: 'Turning the Mind', text: 'Acceptance is not a one-time event — it is a practice. Linehan calls it "turning the mind" toward acceptance, over and over. You might need to turn your mind 100 times in a single day. Each time your mind says "This should not be happening," you gently redirect: "This IS happening. I do not have to like it. I do need to deal with it as it is."', keyIdeas: ['Radical acceptance is not approval, forgiveness, or passivity', 'Non-acceptance keeps you stuck in anger, bitterness, and "what if"', 'Acceptance frees up energy you were spending on fighting reality', 'You can accept something AND work to change it at the same time', 'Acceptance often needs to be practised many times for the same event'] },
          ] } },
          { id: 'ra-breathing', type: 'breathing', title: 'Acceptance Breath', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6 }, durationSeconds: 90, instruction: 'As you breathe in, acknowledge what IS. As you breathe out, release what you wish were different. This IS what is happening. I can handle this moment.' } },
          { id: 'ra-journal', type: 'journal', title: 'What Are You Fighting?', estimatedMinutes: 7, content: { type: 'journal', prompts: ['What reality are you currently refusing to accept?', 'What does non-acceptance cost you? (energy, sleep, peace, relationships)', 'If you fully accepted this reality (without approving of it), what would change? What would become possible?', 'Write one "turning the mind" statement you can use: "This IS happening. I do not like it AND I can..."'], privacyNote: 'Private.' } },
          { id: 'ra-quiz', type: 'quiz', title: 'Radical Acceptance Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Radical acceptance means:', options: ['Approving of what happened', 'Giving up and doing nothing', 'Fully acknowledging reality without adding suffering through non-acceptance', 'Pretending everything is fine'], correctIndex: 2, explanation: 'Radical acceptance means stopping the fight with reality. It does not mean approval — it means acknowledging what IS so you can deal with it effectively.' },
            { question: '"Turning the mind" means:', options: ['Ignoring your feelings', 'Repeatedly redirecting yourself toward acceptance when your mind fights reality', 'Thinking positive thoughts', 'Distracting yourself'], correctIndex: 1, explanation: 'Turning the mind is the ongoing practice of redirecting yourself toward acceptance each time your mind insists "This should not be happening."' },
          ] } },
        ],
      },
      {
        id: 'self-soothing-skills',
        moduleId: 'dbt-distress-tolerance',
        title: 'Self-Soothing Through the Five Senses',
        description: 'Build a personalised self-soothing toolkit using all five senses — a DBT crisis survival skill.',
        estimatedMinutes: 25,
        learningObjectives: ['Distinguish soothing from numbing', 'Build a 5-sense self-soothing kit', 'Practice one soothing activity mindfully'],
        prerequisites: ['radical-acceptance'],
        contraindications: [],
        segments: [
          { id: 'sss-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A little tense', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'sss-psychoed', type: 'psychoeducation', title: 'Soothing vs Numbing', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [
            { heading: 'The Difference That Matters', text: 'Self-soothing is intentional, present, and nourishing. Numbing is automatic, dissociative, and depleting. Sipping tea mindfully while feeling your emotions is soothing. Scrolling social media for 3 hours to avoid feeling anything is numbing. The key question: "Am I moving toward my feelings or running from them?"' },
            { heading: 'Five Senses Soothing', text: 'Linehan teaches self-soothing through each of the five senses because sensory input directly affects your nervous system. Sight: looking at something beautiful. Sound: listening to calming music. Touch: wrapping in a soft blanket. Taste: drinking warm tea mindfully. Smell: lighting a candle or using essential oils.', keyIdeas: ['Self-soothing is parenting yourself — giving your nervous system what it needs', 'Having a pre-built kit means you do not have to think when you are distressed', 'Soothing is not indulgent — it is a clinical skill', 'Pair soothing with acceptance for maximum effect'] },
          ] } },
          { id: 'sss-interactive', type: 'interactive', title: 'Build Your Soothing Kit', estimatedMinutes: 8, content: { type: 'interactive', component: 'SelfSoothingKit', config: {}, instructions: 'Build your personalised self-soothing kit across all five senses. Choose what genuinely calms YOUR nervous system.' } },
          { id: 'sss-action', type: 'action-plan', title: 'Soothing in Practice', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will practise self-soothing:', options: [{ id: 'daily-soothe', label: 'Use one self-soothing activity per day, even on good days', description: 'Build the habit when you are calm so it is automatic when distressed' }, { id: 'soothe-kit', label: 'Assemble a physical self-soothing kit (blanket, tea, candle, playlist)', description: 'Have everything ready for when you need it' }, { id: 'soothe-journal', label: 'After each soothing activity, note what you felt and what shifted', description: 'Track which activities work best for your nervous system' }], timeHorizonDays: 7 } },
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
            { heading: 'Why Name Emotions?', text: 'Dan Siegel coined the phrase "Name It to Tame It" to describe a powerful finding: accurately labelling an emotion reduces its intensity. Research by Matthew Lieberman at UCLA confirmed that putting feelings into words (affect labelling) decreases amygdala activation and increases prefrontal cortex engagement. When you say "I feel anxious" instead of "I feel terrible," you literally shift which part of your brain is in charge.' },
            { heading: 'Primary vs Secondary Emotions', text: 'A primary emotion is the first feeling (e.g., hurt). A secondary emotion is the reaction to that feeling (e.g., anger about feeling hurt). In anxious attachment, the primary emotion is often fear or sadness, but what surfaces is anger, jealousy, or panic.', keyIdeas: ['Anger often masks fear or hurt', 'Jealousy often masks insecurity or shame', 'Finding the primary emotion helps you address the real need'] },
            { heading: 'The Function of Emotions', text: 'Every emotion has a function: fear alerts you to danger, sadness signals loss, anger signals a boundary violation. The emotion is not the problem — it is data about what you need.' },
          ] } },
          { id: 'ne-interactive', type: 'interactive', title: 'Emotion Labelling Practice', estimatedMinutes: 8, content: { type: 'interactive', component: 'EmotionLabeller', config: {}, instructions: 'Practice identifying the primary emotion beneath common relationship scenarios.' } },
          { id: 'ne-journal', type: 'journal', title: 'Emotion Awareness', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What emotion are you avoiding right now?', 'When you feel jealousy or anger in relationships, what is usually underneath?', 'What would change if you could sit with the primary emotion instead of reacting?'], privacyNote: 'Your reflections are private.' } },
          { id: 'ne-quiz', type: 'quiz', title: 'Emotion Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'When someone feels angry after being ignored by their partner, the anger is most likely a:', options: ['Primary emotion', 'Secondary emotion', 'Random reaction', 'Character flaw'], correctIndex: 1, explanation: 'Anger in response to being ignored is typically a secondary emotion. The primary emotion is often fear of abandonment or hurt from feeling unimportant.' }] } },
        ],
      },
      {
        id: 'emotion-wheel',
        moduleId: 'dbt-emotion-regulation',
        title: 'The Emotion Wheel',
        description: 'Explore the full spectrum of human emotions using Plutchik\'s wheel. Build emotional granularity — the ability to make fine-grained distinctions between feelings.',
        estimatedMinutes: 25,
        learningObjectives: ['Navigate Plutchik\'s emotion wheel', 'Distinguish between primary, secondary, and tertiary emotions', 'Increase emotional granularity'],
        prerequisites: ['naming-emotions'],
        contraindications: [],
        segments: [
          { id: 'ew-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A little uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ew-psychoed', type: 'psychoeducation', title: 'Emotional Granularity', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Why Precision Matters', text: 'Lisa Feldman Barrett\'s research on "emotional granularity" shows that people who can make fine-grained distinctions between emotions (e.g., "irritated" vs "frustrated" vs "resentful" vs "bitter") regulate their emotions more effectively. They are also less likely to react impulsively. When you can say "I feel apprehensive" instead of just "I feel bad," you give your brain more specific information to work with.' },
            { heading: 'Plutchik\'s Emotion Wheel', text: 'Robert Plutchik identified eight primary emotions arranged in opposing pairs: joy/sadness, trust/disgust, fear/anger, surprise/anticipation. Each primary emotion has varying intensities (e.g., annoyance → anger → rage) and can blend with others to create complex emotions (e.g., joy + trust = love; fear + surprise = alarm).', keyIdeas: ['Most people use fewer than 10 emotion words regularly', 'Expanding your emotion vocabulary literally improves regulation', 'Complex emotions (like jealousy) are blends of simpler ones', '"I feel bad" is a starting point, not a destination'] },
          ] } },
          { id: 'ew-interactive', type: 'interactive', title: 'Explore the Emotion Wheel', estimatedMinutes: 8, content: { type: 'interactive', component: 'EmotionWheelExplorer', config: {}, instructions: 'Explore the emotion families. Select primary emotions to see their secondary and tertiary forms.' } },
          { id: 'ew-journal', type: 'journal', title: 'Your Emotional Landscape', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What emotions do you feel most often? Be as specific as possible.', 'Which emotions are hardest for you to feel or express?', 'When you say "I feel anxious" — what more specific emotion might be underneath?'], privacyNote: 'Private.' } },
          { id: 'ew-quiz', type: 'quiz', title: 'Emotion Wheel Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Emotional granularity refers to:', options: ['Having no emotions', 'The ability to make fine-grained distinctions between emotions', 'Feeling emotions very intensely', 'Being able to suppress emotions'], correctIndex: 1, explanation: 'Emotional granularity is the ability to make specific distinctions between emotions. People with higher granularity regulate their emotions more effectively.' },
          ] } },
        ],
      },
      {
        id: 'opposite-action',
        moduleId: 'dbt-emotion-regulation',
        title: 'Opposite Action & Checking the Facts',
        description: 'Learn when to trust your emotions and when to act opposite to them. Two of DBT\'s most powerful emotion regulation skills.',
        estimatedMinutes: 30,
        learningObjectives: ['Use "Check the Facts" to test whether an emotion fits the situation', 'Apply Opposite Action when the emotion does not fit the facts', 'Distinguish between emotions to act on and emotions to regulate'],
        prerequisites: ['emotion-wheel'],
        contraindications: [],
        segments: [
          { id: 'oa-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly activated', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'oa-psychoed', type: 'psychoeducation', title: 'Check the Facts & Opposite Action', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'Does the Emotion Fit the Facts?', text: 'Every emotion has a "fitting" context. Fear fits when there is genuine threat. Anger fits when a boundary is actually being violated. Sadness fits when there is actual loss. The skill of "Check the Facts" asks: Is my emotion justified by what is actually happening? Or is my attachment system interpreting neutral cues as threats?' },
            { heading: 'Opposite Action', text: 'When an emotion does NOT fit the facts, Linehan teaches Opposite Action: do the opposite of what the emotion urges you to do. Fear urges avoidance → approach the feared situation. Shame urges hiding → share your experience with someone safe. Anger urges attacking → be gentle and step back. Sadness urges withdrawal → get active and reach out. For anxious attachment, the most powerful opposite action is often: the urge to seek reassurance → sit with the uncertainty and self-soothe.', keyIdeas: ['Opposite Action only applies when the emotion DOES NOT fit the facts', 'If the emotion fits (e.g., real danger), trust it and act accordingly', 'Opposite Action must be done "all the way" — half-heartedly doing it does not work', 'This is not suppression — you still feel the emotion while choosing a different action'] },
          ] } },
          { id: 'oa-journal', type: 'journal', title: 'Applying Opposite Action', estimatedMinutes: 7, content: { type: 'journal', prompts: ['Think of a recent emotional reaction. Did the emotion fit the facts of the situation?', 'What was the emotion urging you to do? What would the opposite action have been?', 'What is the emotion you most need to practise opposite action with?'], privacyNote: 'Private.' } },
          { id: 'oa-quiz', type: 'quiz', title: 'Opposite Action Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'You should use Opposite Action when:', options: ['Every time you feel an emotion', 'When the emotion does not fit the facts of the situation', 'When you want to suppress an emotion', 'Never — always trust your emotions'], correctIndex: 1, explanation: 'Opposite Action is used when an emotion does not fit the facts. If fear is justified (real danger), you should trust it. If fear is unjustified (catastrophizing), use opposite action.' },
            { question: 'The opposite action for shame is:', options: ['Hide and isolate', 'Share your experience with someone safe', 'Get angry at the person who shamed you', 'Ignore the feeling completely'], correctIndex: 1, explanation: 'Shame urges hiding. The opposite action is to share your experience with a safe, non-judgemental person. This breaks shame\'s power.' },
          ] } },
        ],
      },
      {
        id: 'abc-please',
        moduleId: 'dbt-emotion-regulation',
        title: 'ABC PLEASE: Reducing Vulnerability',
        description: 'Reduce your vulnerability to emotional dysregulation through lifestyle skills: accumulating positives, building mastery, and taking care of your body.',
        estimatedMinutes: 25,
        learningObjectives: ['Apply the ABC skills for positive experiences', 'Understand PLEASE skills for physical wellbeing', 'Build daily practices that protect your emotional baseline'],
        prerequisites: ['opposite-action'],
        contraindications: [],
        segments: [
          { id: 'ap-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit low', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ap-psychoed', type: 'psychoeducation', title: 'ABC PLEASE', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Reducing Emotional Vulnerability', text: 'You are more likely to be emotionally reactive when your baseline is compromised. Linehan\'s ABC PLEASE skills are preventative — they build resilience before crises hit. A = Accumulate Positive Experiences (do pleasant things daily). B = Build Mastery (do something that makes you feel competent). C = Cope Ahead (mentally rehearse how you will handle upcoming challenges).' },
            { heading: 'PLEASE Skills', text: 'PL = treat Physical iLlness (attend to health needs). E = balanced Eating (regular, nutritious meals). A = avoid mood-Altering substances (drugs and alcohol lower your window of tolerance). S = balanced Sleep (protect your sleep — poor sleep makes everything harder). E = Exercise (regular movement regulates your nervous system).', keyIdeas: ['These are not optional wellness tips — they are clinical skills', 'Poor sleep alone can cut your window of tolerance in half', 'Accumulating positives is not frivolous — it builds your emotional reserves', 'Coping Ahead is like a fire drill — you rehearse so you are ready'] },
          ] } },
          { id: 'ap-interactive', type: 'interactive', title: 'Gratitude Practice', estimatedMinutes: 8, content: { type: 'interactive', component: 'GratitudeJournalBuilder', config: {}, instructions: 'Build the habit of noticing positive experiences. Gratitude is accumulating positives in action.' } },
          { id: 'ap-action', type: 'action-plan', title: 'Your ABC PLEASE Plan', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will practise ABC PLEASE by:', options: [{ id: 'daily-pleasant', label: 'Schedule one pleasant activity per day (Accumulate Positives)', description: 'It does not have to be big — a walk, a favourite meal, calling a friend' }, { id: 'cope-ahead', label: 'Cope Ahead for one upcoming challenge this week', description: 'Mentally rehearse: What might happen? How will I handle it? What skills will I use?' }, { id: 'please-audit', label: 'Do a PLEASE audit — rate your sleep, eating, exercise, and substance use', description: 'Identify which physical area most needs attention' }], timeHorizonDays: 7 } },
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
            { heading: 'Common Traps in Anxious Attachment', text: 'Aaron Beck and David Burns identified cognitive distortions that fuel emotional suffering. The ones most active in attachment anxiety include: Mind Reading: "They did not reply because they are losing interest." Catastrophising: "If they leave, I will never recover." Personalising: "Their bad mood is about me." All-or-Nothing: "If they are not enthusiastic, they must not care." Emotional Reasoning: "I feel abandoned, so I must be being abandoned." Should Statements: "They should know what I need without me having to ask." Magnification: Blowing one small sign into proof of rejection. Fortune-Telling: "I know this will end badly." Discounting the Positive: "They said they love me, but they probably do not mean it."', keyIdeas: ['Your brain is trying to protect you, but the alarm is often false', 'Challenging a thought is not dismissing your feelings — it is testing the evidence', 'The goal is balanced thinking, not positive thinking', 'Most distortions contain a grain of truth wrapped in exaggeration'] },
          ] } },
          { id: 'tr2-interactive', type: 'interactive', title: 'Thought Record Builder', estimatedMinutes: 10, content: { type: 'interactive', component: 'ThoughtRecord', config: {}, instructions: 'Think of a recent situation where you felt triggered. Walk through the thought record to find a more balanced perspective.' } },
          { id: 'tr2-journal', type: 'journal', title: 'Your Thinking Patterns', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What thinking trap do you fall into most often?', 'If a friend had this thought, what would you say to them?', 'What evidence exists against your most common anxious thought?'], privacyNote: 'Private reflections.' } },
          { id: 'tr2-quiz', type: 'quiz', title: 'Thinking Traps Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: '"They took 3 hours to reply — they must be losing interest" is an example of:', options: ['Emotional reasoning', 'Mind reading', 'Personalising', 'All of the above could apply'], correctIndex: 3, explanation: 'This thought could involve mind reading (assuming their reason), emotional reasoning (feeling rejected so believing it), and personalising (assuming it is about you).' }] } },
        ],
      },
      {
        id: 'distortion-detective',
        moduleId: 'cbt-thinking-traps',
        title: 'Becoming a Distortion Detective',
        description: 'Sharpen your ability to spot cognitive distortions in real time with interactive scenario practice.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify 8 common cognitive distortions rapidly', 'Practise spotting distortions in realistic scenarios', 'Build automatic distortion recognition'],
        prerequisites: ['thought-records'],
        contraindications: [],
        segments: [
          { id: 'dd-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit edgy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'dd-psychoed', type: 'psychoeducation', title: 'Distortion Deep Dive', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Building Pattern Recognition', text: 'The more you practise spotting distortions, the faster you catch them in real time. The goal is not to eliminate all distorted thoughts — that is impossible. The goal is to develop an "inner observer" that can say "Ah, that is mind reading again" before the thought drives your behaviour. Over time, this creates a buffer between trigger and reaction.' },
            { heading: 'The 8 Most Common Distortions in Attachment', text: 'Mind Reading: assuming you know what others think. Catastrophizing: jumping to the worst case. Emotional Reasoning: treating feelings as facts. Personalization: assuming it is about you. Should Statements: rigid rules about how things "must" be. All-or-Nothing: black and white thinking. Discounting the Positive: dismissing good evidence. Fortune Telling: predicting negative futures.', keyIdeas: ['Most distortions overlap — a single thought can contain several', 'The distortion is the lens, not the emotion itself', 'Catching the distortion does not mean the emotion is invalid', 'Speed of recognition improves dramatically with practice'] },
          ] } },
          { id: 'dd-interactive', type: 'interactive', title: 'Distortion Spotter Challenge', estimatedMinutes: 10, content: { type: 'interactive', component: 'CognitiveDistortionSpotter', config: {}, instructions: 'Read each thought and identify which cognitive distortion is at work. See how many you can spot correctly.' } },
          { id: 'dd-journal', type: 'journal', title: 'Your Distortion Diary', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What was your most common distortion in the exercise?', 'Think of a recurring anxious thought. Which distortions fuel it?', 'What is a balanced alternative to your most frequent distorted thought?'], privacyNote: 'Private.' } },
          { id: 'dd-quiz', type: 'quiz', title: 'Distortion Detective Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: '"I feel worthless, so I must be worthless" is an example of:', options: ['Mind Reading', 'Emotional Reasoning', 'Fortune Telling', 'Personalization'], correctIndex: 1, explanation: 'Emotional Reasoning is treating a feeling as evidence of a fact. Feeling worthless does not make you worthless — it means you are in pain.' },
          ] } },
        ],
      },
      {
        id: 'behavioral-experiments',
        moduleId: 'cbt-thinking-traps',
        title: 'Behavioral Experiments',
        description: 'The most powerful CBT tool: testing your anxious predictions in real life through safe, structured experiments.',
        estimatedMinutes: 25,
        learningObjectives: ['Design safe behavioral experiments', 'Test anxious predictions against reality', 'Build evidence for new beliefs'],
        prerequisites: ['distortion-detective'],
        contraindications: [],
        segments: [
          { id: 'be-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly nervous', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'be-psychoed', type: 'psychoeducation', title: 'Testing Your Predictions', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'From Thinking to Doing', text: 'Challenging thoughts on paper is valuable, but the deepest belief change comes from testing predictions in real life. A behavioral experiment is a structured way to test an anxious prediction: you state the prediction clearly, design a safe test, carry it out, and compare the result to your prediction. For example, if you believe "If I do not reply instantly, they will think I do not care," the experiment might be to wait 2 hours before replying and observe what actually happens.' },
            { heading: 'How to Design an Experiment', text: 'State your prediction specifically and measurably. Rate your belief in it (0-100%). Design a safe test. Predict the outcome. Carry out the experiment. Record what actually happened. Re-rate your belief.', keyIdeas: ['Behavioral experiments create evidence that no amount of talking can match', 'Start with low-stakes experiments and build up', 'Even if the feared outcome occurs, you learn you can cope', 'Each experiment builds your "evidence bank" against anxious predictions'] },
          ] } },
          { id: 'be-journal', type: 'journal', title: 'Design Your Experiment', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What is one anxious prediction you would like to test?', 'How could you test this safely? Describe the experiment.', 'What do you predict will happen? Rate your belief 0-100%.', 'After you carry out the experiment, come back and write what actually happened.'], privacyNote: 'Private.' } },
          { id: 'be-action', type: 'action-plan', title: 'Your First Experiment', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will run one behavioral experiment:', options: [{ id: 'delay-response', label: 'Delay responding to a message by 1-2 hours and observe the result', description: 'Test the prediction that delay = rejection' }, { id: 'express-need', label: 'Express one need directly instead of hinting and observe the response', description: 'Test the prediction that asking = burdening' }, { id: 'say-no', label: 'Say no to one request without over-explaining and observe the result', description: 'Test the prediction that boundaries = abandonment' }], timeHorizonDays: 7 } },
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
      {
        id: 'leaving-safely',
        moduleId: 'trauma-bonding',
        title: 'Planning to Leave Safely',
        description: 'Practical guidance on building a safety net and planning an exit from an unsafe dynamic.',
        estimatedMinutes: 30,
        learningObjectives: ['Build a support network map', 'Understand safety planning principles', 'Identify resources for leaving unsafe situations'],
        prerequisites: ['bond-vs-love'],
        contraindications: ['If you are in immediate danger, contact emergency services or a domestic violence hotline before continuing.'],
        segments: [
          { id: 'ls-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'This session discusses leaving unsafe dynamics. How are you feeling?', options: [{ label: 'Ready to learn', value: 1 }, { label: 'Cautious but okay', value: 3 }, { label: 'Somewhat triggered', value: 5 }, { label: 'Very activated', value: 7 }, { label: 'Not safe', value: 9 }] } },
          { id: 'ls-psychoed', type: 'psychoeducation', title: 'Why Leaving Is So Hard', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'The Neuroscience of Leaving', text: 'Leaving a trauma bond is neurobiologically similar to withdrawal from a substance. The intermittent reinforcement has wired your dopamine system to crave the "highs" of reconciliation. When you leave, you may experience: intense craving to return, idealising the good times, minimising the bad, physical symptoms (anxiety, insomnia, nausea), and an overwhelming sense that you cannot survive alone. These are withdrawal symptoms, not evidence that you should go back.' },
            { heading: 'Building Your Safety Net', text: 'Before leaving an unsafe dynamic, you need a safety net: people you can call, a place you can go, resources you can access. This is not about having a perfect plan — it is about having enough support that the withdrawal does not pull you back.', keyIdeas: ['On average, it takes 7 attempts to leave an abusive relationship', 'Each "failed" attempt builds knowledge and strength for the next', 'Safety planning is not betrayal — it is self-preservation', 'You deserve safety, not perfection'] },
          ] } },
          { id: 'ls-interactive', type: 'interactive', title: 'Map Your Safe People', estimatedMinutes: 8, content: { type: 'interactive', component: 'SafePersonMapper', config: {}, instructions: 'Identify the safe people in your life across different support categories. Notice where your support network is strong and where there are gaps.' } },
          { id: 'ls-journal', type: 'journal', title: 'Your Safety Reflection', estimatedMinutes: 7, content: { type: 'journal', prompts: ['What keeps you in the situation? Be completely honest.', 'What would your life look like 6 months after leaving?', 'What do you need to have in place before you can leave safely?'], privacyNote: 'If someone has access to your device, consider writing these reflections on paper instead.' } },
          { id: 'ls-quiz', type: 'quiz', title: 'Safety Planning Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'The average number of attempts to leave an abusive relationship is:', options: ['1', '3', '7', '10'], correctIndex: 2, explanation: 'Research shows it takes an average of 7 attempts to leave. Each attempt builds strength — a "failed" attempt is not failure, it is learning.' },
          ] } },
        ],
      },
      {
        id: 'grief-after-leaving',
        moduleId: 'trauma-bonding',
        title: 'Grief After Leaving',
        description: 'Understand the grief process after leaving an unhealthy relationship — including grieving what was good, what you hoped for, and who you thought they were.',
        estimatedMinutes: 30,
        learningObjectives: ['Normalise grief after leaving an unhealthy relationship', 'Understand withdrawal symptoms of trauma bonds', 'Develop a post-leaving support plan'],
        prerequisites: ['leaving-safely'],
        contraindications: [],
        segments: [
          { id: 'gal-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Sad but okay', value: 3 }, { label: 'Quite activated', value: 5 }, { label: 'Very distressed', value: 7 }, { label: 'Need support now', value: 9 }] } },
          { id: 'gal-psychoed', type: 'psychoeducation', title: 'The Many Faces of Grief', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'You Are Allowed to Grieve', text: 'After leaving an unhealthy or abusive relationship, you may grieve intensely — and feel confused about why. You are not grieving the abuse. You are grieving the good parts that were real, the future you imagined, the person you thought they were, and the version of yourself you were in that relationship. All of this grief is valid.' },
            { heading: 'Withdrawal Is Real', text: 'The first weeks and months after leaving a trauma bond can feel like detox. You may experience: obsessive thoughts about the person, romanticising the relationship, physical pain (chest tightness, nausea, fatigue), a powerful urge to make contact, and bargaining ("Maybe it was not that bad"). These are neurological withdrawal symptoms.', keyIdeas: ['Grief does not mean you made the wrong decision', 'Withdrawal peaks around 2-4 weeks and gradually decreases', 'No contact is not a game — it is a neurological necessity for breaking the bond', 'You are grieving a fantasy as much as a reality, and that grief is still real'] },
          ] } },
          { id: 'gal-breathing', type: 'breathing', title: 'Soothing Breath for Grief', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'Grief lives in the body. As you breathe, imagine breathing into the heaviness. You do not have to fix the grief — just give it space.' } },
          { id: 'gal-journal', type: 'journal', title: 'Honest Grief', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What are you grieving? Be specific — there may be multiple losses.', 'What did the relationship represent to you? (Security? Identity? Hope?)', 'Write a letter to the relationship (not the person) — say everything you need to say.', 'What do you want to build in the space this relationship occupied?'], privacyNote: 'Private and deeply personal.' } },
          { id: 'gal-reflection', type: 'reflection', title: 'Moving Forward', estimatedMinutes: 5, content: { type: 'reflection', prompts: ['What is one kind thing you can do for yourself today?', 'What support do you need right now that you have not asked for?', 'What would you tell a friend who was going through this?'] } },
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
      {
        id: 'needs-vs-wants',
        moduleId: 'codependency-healing',
        title: 'Your Needs Are Not Negotiable',
        description: 'Identify your core emotional needs and learn that meeting them is not selfish — it is essential.',
        estimatedMinutes: 30,
        learningObjectives: ['Distinguish needs from wants', 'Identify your most unmet emotional needs', 'Begin advocating for your needs without guilt'],
        prerequisites: ['reclaiming-self'],
        contraindications: [],
        segments: [
          { id: 'nvw-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit uncomfortable', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'nvw-psychoed', type: 'psychoeducation', title: 'Needs Are Legitimate', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Your Needs Are Not Too Much', text: 'If you grew up in an environment where your emotional needs were shamed, ignored, or used against you, you may have learned to minimise or deny them entirely. You might think "I should not need this" or "I am being too needy." But emotional needs are universal and non-negotiable: every human needs safety, validation, belonging, autonomy, appreciation, and understanding. These are not luxury items — they are requirements for psychological health.' },
            { heading: 'Needs vs Wants vs Strategies', text: 'A need is universal (e.g., safety). A want is a specific form (e.g., wanting your partner to check in). A strategy is how you try to meet the need (e.g., texting repeatedly when anxious). The problem is rarely the need itself — it is the strategy. When you can name the underlying need, you can find healthier strategies to meet it.', keyIdeas: ['Having needs does not make you needy — it makes you human', 'Codependency often means meeting everyone\'s needs except your own', 'Naming unmet needs is the first step to meeting them', 'You can learn to meet many of your own needs AND ask others for help'] },
          ] } },
          { id: 'nvw-interactive', type: 'interactive', title: 'Needs Inventory', estimatedMinutes: 10, content: { type: 'interactive', component: 'NeedsInventory', config: {}, instructions: 'Rate how well each of your core emotional needs is currently being met. Identify the gaps.' } },
          { id: 'nvw-journal', type: 'journal', title: 'Honoring Your Needs', estimatedMinutes: 6, content: { type: 'journal', prompts: ['Which of your emotional needs have you been minimising or denying?', 'Where did you learn that your needs were "too much"?', 'What is one need you will commit to honouring this week?'], privacyNote: 'Private.' } },
          { id: 'nvw-action', type: 'action-plan', title: 'Meeting Your Needs', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will begin meeting one unmet need:', options: [{ id: 'self-meet', label: 'Identify one need you can meet for yourself and do it daily', description: 'e.g., If you need validation, practise self-validation each morning' }, { id: 'ask-directly', label: 'Ask one person directly for something you need', description: 'Practice saying "I need..." without apologising or minimising' }, { id: 'need-boundary', label: 'Set one boundary that protects an emotional need', description: 'e.g., "I need honesty, so I will not accept being lied to"' }], timeHorizonDays: 7 } },
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
      {
        id: 'shame-resilience',
        moduleId: 'self-compassion',
        title: 'Shame Resilience',
        description: 'Understand shame, distinguish it from guilt, and build resilience using Brene Brown\'s shame resilience theory.',
        estimatedMinutes: 30,
        learningObjectives: ['Distinguish shame from guilt', 'Understand shame triggers and shields', 'Build shame resilience through connection and self-compassion'],
        prerequisites: ['inner-child-reparenting'],
        contraindications: ['If exploring shame feels overwhelming, pause and use grounding.'],
        segments: [
          { id: 'sr-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling about exploring shame?', options: [{ label: 'Ready', value: 1 }, { label: 'A bit guarded', value: 3 }, { label: 'Uncomfortable', value: 5 }, { label: 'Very uncomfortable', value: 7 }, { label: 'Not ready', value: 9 }] } },
          { id: 'sr-psychoed', type: 'psychoeducation', title: 'Shame vs Guilt', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'The Difference That Changes Everything', text: 'Brene Brown defines the crucial difference: Guilt says "I did something bad." Shame says "I AM bad." Guilt is about behaviour — it can motivate change. Shame is about identity — it paralyses, isolates, and reinforces the belief that you are fundamentally flawed. In attachment wounding, shame is the core emotion: "There is something wrong with me that makes me unlovable."' },
            { heading: 'How Shame Operates', text: 'Shame thrives in secrecy, silence, and judgement. It cannot survive being spoken to someone who responds with empathy. This is why shame drives isolation — and why the antidote is always connection. Shame has three "shields" (defences): Moving Away (hiding, withdrawing, keeping secrets), Moving Toward (people-pleasing, seeking approval to overcome the feeling of defectiveness), and Moving Against (attacking, shaming others, using aggression to protect vulnerability).', keyIdeas: ['Shame is universal — every human experiences it', 'Shame resilience is not about eliminating shame — it is about recovering from it faster', 'The antidote to shame is empathy and connection', 'Shame cannot survive being spoken aloud to a safe person', 'Warning: "shame spirals" can be triggered by this material — use grounding if needed'] },
            { heading: 'Building Shame Resilience', text: 'Brown\'s four elements of shame resilience: 1) Recognise shame and its triggers. 2) Practise critical awareness — question the expectations that fuel shame. 3) Reach out — share your story with someone safe. 4) Speak shame — name it out loud. "I am feeling shame right now because..."' },
          ] } },
          { id: 'sr-breathing', type: 'breathing', title: 'Self-Compassion Breath', estimatedMinutes: 3, content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6 }, durationSeconds: 90, instruction: 'As you breathe, repeat silently: "This is a moment of suffering. Suffering is part of being human. May I be kind to myself in this moment."' } },
          { id: 'sr-journal', type: 'journal', title: 'Your Shame Story', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What is a core shame message you carry? (e.g., "I am too much," "I am not enough," "I am unlovable")', 'Where did this message originate? Who or what taught you this?', 'Which shame shield do you use most: moving away, moving toward, or moving against?', 'If you could share this shame with one safe person, who would it be? What stops you?'], privacyNote: 'This is deeply personal work. Your reflections are private.' } },
          { id: 'sr-quiz', type: 'quiz', title: 'Shame Resilience Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'The key difference between shame and guilt is:', options: ['There is no difference', 'Guilt says "I did something bad"; shame says "I AM bad"', 'Guilt is worse than shame', 'Shame is always healthy'], correctIndex: 1, explanation: 'Guilt is about behaviour (I did bad) and can motivate change. Shame is about identity (I am bad) and leads to isolation and paralysis.' },
            { question: 'The antidote to shame is:', options: ['Willpower and self-discipline', 'Avoiding shame triggers', 'Empathy and connection — sharing with a safe person', 'Proving yourself worthy'], correctIndex: 2, explanation: 'Shame cannot survive empathy. Sharing your shame with someone who responds with understanding and acceptance is the most powerful antidote.' },
          ] } },
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
            { heading: 'Boundaries Are What You Will Do, Not What Others Must Do', text: 'A boundary is not a demand you place on another person. It is a statement about what you will do to protect your wellbeing. "I need you to stop yelling" is a request. "If yelling continues, I will leave the room" is a boundary. There are several types of boundaries: Physical (your personal space, touch, body), Emotional (how much emotional labour you take on, what feelings you absorb), Time (how you allocate your time and energy), Digital (social media checking, phone availability, response expectations), and Material (your possessions, money, resources). For people with anxious attachment, the hardest boundaries are usually emotional and digital — because these are where the attachment system pulls hardest.' },
            { heading: 'DEAR MAN: A DBT Communication Framework', text: 'Describe the situation factually. Express how you feel using "I" statements. Assert what you need clearly. Reinforce why this matters for both people. Stay Mindful of your goal. Appear confident even if you feel nervous. Negotiate where possible.', keyIdeas: ['Boundaries protect relationships — they do not destroy them', 'Guilt about boundaries is normal but not a reason to abandon them', 'Start with small boundaries and build confidence'] },
          ] } },
          { id: 'bb-interactive', type: 'interactive', title: 'DEAR MAN Practice', estimatedMinutes: 10, content: { type: 'interactive', component: 'DearManBuilder', config: {}, instructions: 'Choose a boundary you want to set and build a DEAR MAN script for communicating it.' } },
          { id: 'bb-journal', type: 'journal', title: 'Your Non-Negotiables', estimatedMinutes: 6, content: { type: 'journal', prompts: ['What are your non-negotiables in a relationship?', 'Where have you historically struggled to hold boundaries? What happened?', 'What would change in your life if you consistently held your boundaries?'], privacyNote: 'Private.' } },
          { id: 'bb-quiz', type: 'quiz', title: 'Boundary Check', estimatedMinutes: 3, content: { type: 'quiz', items: [{ question: 'A healthy boundary is:', options: ['A punishment for bad behaviour', 'A demand that others change', 'An action you take to protect your wellbeing', 'Something that should cause no discomfort'], correctIndex: 2, explanation: 'A boundary is an action you take to protect yourself, not a demand or punishment placed on someone else.' }] } },
        ],
      },
      {
        id: 'boundary-practice',
        moduleId: 'boundaries-communication',
        title: 'Boundary Practice Scenarios',
        description: 'Practise setting boundaries in realistic scenarios with model answers. Build your boundary muscle in a safe space.',
        estimatedMinutes: 30,
        learningObjectives: ['Practise writing boundary statements', 'Compare your statements to model answers', 'Build confidence in boundary-setting'],
        prerequisites: ['boundary-basics'],
        contraindications: [],
        segments: [
          { id: 'bp-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit nervous', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'bp-psychoed', type: 'psychoeducation', title: 'Boundary Language', estimatedMinutes: 6, content: { type: 'psychoeducation', sections: [
            { heading: 'The Structure of a Boundary Statement', text: 'A well-formed boundary has three parts: 1) Name the behaviour (factual, not judgmental). 2) Express the impact on you (using "I" language). 3) State what you will do (your boundary action, not a demand). Example: "When you raise your voice [behaviour], I feel unsafe [impact]. I will leave the room and come back when things are calm [boundary action]."' },
            { heading: 'Common Boundary Mistakes', text: 'Threatening instead of informing. Making ultimatums you will not follow through on. Over-explaining or justifying (which invites negotiation). Apologising for having the boundary. Setting boundaries in anger rather than clarity.', keyIdeas: ['Boundaries work best when stated calmly, not in the heat of the moment', 'You do not need to explain or justify your boundary', 'Following through is more important than the words you use', 'Guilt after setting a boundary is normal — it passes'] },
          ] } },
          { id: 'bp-interactive', type: 'interactive', title: 'Scenario Practice', estimatedMinutes: 12, content: { type: 'interactive', component: 'BoundaryScenarioBuilder', config: {}, instructions: 'Practise writing boundary statements for 5 common scenarios. After writing yours, compare with a model answer.' } },
          { id: 'bp-journal', type: 'journal', title: 'Boundary Reflection', estimatedMinutes: 5, content: { type: 'journal', prompts: ['Which scenario felt hardest? What made it difficult?', 'What boundary do you need to set in your actual life right now?', 'What is stopping you? What would help?'], privacyNote: 'Private.' } },
          { id: 'bp-action', type: 'action-plan', title: 'Boundary in Action', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will practise one real boundary:', options: [{ id: 'small-boundary', label: 'Set one small boundary with a low-stakes person', description: 'Build confidence with something manageable before tackling harder ones' }, { id: 'digital-boundary', label: 'Set one digital boundary (screen time, notifications, response time)', description: 'Digital boundaries are often the easiest to start with' }, { id: 'say-no', label: 'Say no to one request without explaining or apologising', description: '"No" is a complete sentence' }], timeHorizonDays: 7 } },
        ],
      },
      {
        id: 'assertive-communication',
        moduleId: 'boundaries-communication',
        title: 'Assertive Communication',
        description: 'Learn the difference between passive, aggressive, passive-aggressive, and assertive communication — and practise the one that builds healthy relationships.',
        estimatedMinutes: 30,
        learningObjectives: ['Identify the four communication styles', 'Assess your own conflict style', 'Practise assertive communication'],
        prerequisites: ['boundary-practice'],
        contraindications: [],
        segments: [
          { id: 'ac-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'ac-psychoed', type: 'psychoeducation', title: 'Four Communication Styles', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'How Do You Communicate Under Stress?', text: 'Passive: You suppress your needs to avoid conflict. You say "It is fine" when it is not. You hint instead of asking directly. You feel resentful but say nothing. Aggressive: You pursue your needs at the expense of others. You criticise, blame, or intimidate. You win the argument but lose the relationship. Passive-Aggressive: You express anger indirectly — sarcasm, the silent treatment, "forgetting" commitments, weaponised compliance. Assertive: You express your needs clearly, directly, and respectfully. You honour both your needs AND the other person\'s dignity.' },
            { heading: 'Assertiveness Is a Skill', text: 'Assertiveness is not personality — it is a skill you can learn. The formula: "I feel [emotion] when [behaviour] because [impact]. I need [specific request]." For example: "I feel hurt when my texts go unanswered for days because I start to worry. I need us to agree on a reasonable response time."', keyIdeas: ['Passive communication feeds codependency', 'Aggressive communication feeds the pursue-withdraw cycle', 'Assertive communication builds trust AND self-respect', 'Most people default to one style under stress — knowing yours is power'] },
          ] } },
          { id: 'ac-interactive', type: 'interactive', title: 'Conflict Style Assessment', estimatedMinutes: 8, content: { type: 'interactive', component: 'ConflictStyleAssessment', config: {}, instructions: 'Discover your default conflict style through a series of forced-choice scenarios.' } },
          { id: 'ac-journal', type: 'journal', title: 'Your Communication Patterns', estimatedMinutes: 5, content: { type: 'journal', prompts: ['What is your default communication style under stress?', 'Think of a recent conflict. Which style did you use? What was the result?', 'Rewrite one thing you said or did using assertive communication instead.'], privacyNote: 'Private.' } },
          { id: 'ac-quiz', type: 'quiz', title: 'Communication Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Saying "It is fine" when it is not fine is an example of:', options: ['Assertive communication', 'Passive communication', 'Aggressive communication', 'Honest communication'], correctIndex: 1, explanation: 'Suppressing your true feelings and saying everything is fine when it is not is passive communication. It avoids conflict in the moment but builds resentment over time.' },
            { question: 'The silent treatment is a form of:', options: ['Healthy space-taking', 'Passive-aggressive communication', 'Assertive boundary-setting', 'Self-care'], correctIndex: 1, explanation: 'The silent treatment uses withdrawal as punishment. Healthy space-taking involves communicating: "I need some time to calm down. I will come back to this conversation in an hour."' },
          ] } },
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
      {
        id: 'vulnerability-practice',
        moduleId: 'secure-relating',
        title: 'The Courage of Vulnerability',
        description: 'Brene Brown taught the world that vulnerability is not weakness — it is the birthplace of connection, belonging, and love.',
        estimatedMinutes: 30,
        learningObjectives: ['Redefine vulnerability as courage', 'Build a graduated vulnerability plan', 'Practise vulnerability in safe contexts'],
        prerequisites: ['bids-for-connection'],
        contraindications: ['Practise vulnerability only with safe people. Do not use these skills with someone who has been abusive.'],
        segments: [
          { id: 'vp-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How do you feel about being vulnerable?', options: [{ label: 'Open to it', value: 1 }, { label: 'Cautious', value: 3 }, { label: 'Quite resistant', value: 5 }, { label: 'Very uncomfortable', value: 7 }, { label: 'Terrified', value: 9 }] } },
          { id: 'vp-psychoed', type: 'psychoeducation', title: 'Vulnerability Is Courage', estimatedMinutes: 8, content: { type: 'psychoeducation', sections: [
            { heading: 'The Vulnerability Paradox', text: 'Brene Brown\'s research found a paradox: the people with the strongest connections were those most willing to be vulnerable. They did not enjoy uncertainty, emotional exposure, or risk — but they believed it was necessary and worth it. Brown defines vulnerability as "uncertainty, risk, and emotional exposure." Asking someone on a date. Saying "I love you" first. Admitting you were wrong. Asking for help. Sharing something you are ashamed of. Every act of genuine connection requires vulnerability.' },
            { heading: 'Graduated Vulnerability', text: 'You do not need to bare your soul to everyone. Vulnerability should be graduated — shared incrementally with people who have earned your trust. Test with small disclosures first. Notice how the person responds. If they respond with empathy, you can share more. If they respond with judgement, that tells you something about their capacity, not your worth.', keyIdeas: ['Vulnerability is not oversharing — it is appropriate sharing with safe people', 'The people worth being vulnerable with are those who hold your story gently', 'Avoidance of vulnerability protects you from pain but also from connection', 'Every relationship is built on accumulated moments of mutual vulnerability'] },
          ] } },
          { id: 'vp-interactive', type: 'interactive', title: 'Build Your Vulnerability Ladder', estimatedMinutes: 8, content: { type: 'interactive', component: 'FearLadderBuilder', config: {}, instructions: 'Build a graduated vulnerability ladder — from small acts of openness to deeper emotional exposure. Start at the bottom.' } },
          { id: 'vp-journal', type: 'journal', title: 'Your Vulnerability Edge', estimatedMinutes: 6, content: { type: 'journal', prompts: ['What is the scariest thing about being vulnerable for you?', 'Who in your life has earned the right to see your vulnerability?', 'What is one small act of vulnerability you could practise this week?'], privacyNote: 'Private.' } },
          { id: 'vp-action', type: 'action-plan', title: 'Vulnerability in Action', estimatedMinutes: 3, content: { type: 'action-plan', prompt: 'This week, you will practise one act of graduated vulnerability:', options: [{ id: 'small-share', label: 'Share one honest feeling with someone safe ("I felt hurt when...")', description: 'Start with a small, specific feeling' }, { id: 'ask-help', label: 'Ask for help with something you usually handle alone', description: 'Letting someone help is an act of trust' }, { id: 'imperfect', label: 'Let someone see something imperfect about you without compensating', description: 'Resist the urge to manage their perception of you' }], timeHorizonDays: 7 } },
          { id: 'vp-quiz', type: 'quiz', title: 'Vulnerability Check', estimatedMinutes: 3, content: { type: 'quiz', items: [
            { question: 'Vulnerability is:', options: ['Weakness that should be avoided', 'Oversharing your problems with everyone', 'Uncertainty, risk, and emotional exposure — the foundation of connection', 'Only for people in therapy'], correctIndex: 2, explanation: 'Brown defines vulnerability as uncertainty, risk, and emotional exposure. It is not weakness — it is the foundation of every meaningful connection.' },
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
      {
        id: 'skills-review',
        moduleId: 'integration-relapse',
        title: 'Skills Review & Consolidation',
        description: 'Review all the major skills and concepts from the program. Test your knowledge and identify areas for continued growth.',
        estimatedMinutes: 35,
        learningObjectives: ['Review key skills from all modules', 'Identify strongest and weakest skill areas', 'Build a continued learning plan'],
        prerequisites: ['maintenance-plan'],
        contraindications: [],
        segments: [
          { id: 'skr-safety', type: 'safety-check', title: 'Final Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling as we review your journey?', options: [{ label: 'Proud and grounded', value: 1 }, { label: 'Mixed but okay', value: 3 }, { label: 'A bit sad it is ending', value: 5 }, { label: 'Anxious about the future', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'skr-psychoed', type: 'psychoeducation', title: 'What You Have Built', estimatedMinutes: 7, content: { type: 'psychoeducation', sections: [
            { heading: 'Your Toolkit', text: 'Over this program, you have built an impressive toolkit: STOP and TIPP for crisis moments. Grounding and breathing for activation. Thought records for cognitive distortions. Radical acceptance for pain you cannot change. Self-soothing for comfort. DEAR MAN for communication. Repair skills for ruptures. Self-compassion for shame. Values compass for decisions. And perhaps most importantly — self-awareness about your patterns, triggers, and needs.' },
            { heading: 'Skills Fade Without Practice', text: 'Neuroplasticity works both ways. The new pathways you have built will strengthen with use and weaken without it. Think of your skills like a garden — they need ongoing tending. The good news: you do not need to do everything every day. Even 5 minutes of intentional practice keeps the pathways alive.', keyIdeas: ['Review skills regularly — re-read your journal entries, revisit key modules', 'Teach what you have learned to someone else — teaching consolidates learning', 'Join a support community for ongoing practice', 'Return to specific modules when you face specific challenges', 'Celebrate how far you have come'] },
          ] } },
          { id: 'skr-quiz', type: 'quiz', title: 'Comprehensive Skills Review', estimatedMinutes: 8, content: { type: 'quiz', items: [
            { question: 'The STOP skill stands for:', options: ['Stay calm, Think, Observe, Plan', 'Stop, Take a breath, Observe, Proceed mindfully', 'Stop, Talk, Open up, Proceed', 'Slow down, Think twice, Observe others, Pause'], correctIndex: 1, explanation: 'STOP: Stop what you are doing, Take a breath, Observe what you are feeling and thinking, Proceed mindfully with a values-aligned choice.' },
            { question: 'Earned secure attachment is:', options: ['A myth', 'Only achieved through years of therapy', 'Security built through awareness, practice, and intentional skill-building despite insecure beginnings', 'The same as having a perfect childhood'], correctIndex: 2, explanation: 'Earned security is built through making sense of your story, practising new skills, and developing secure relationships — exactly what this program teaches.' },
            { question: 'When your attachment system fires, the most helpful first step is:', options: ['Immediately text the person', 'Pause and use a grounding or regulation skill', 'Analyse what they are thinking', 'Ignore your feelings'], correctIndex: 1, explanation: 'Pausing and regulating before acting creates space for a conscious, values-aligned choice instead of an automatic, fear-driven reaction.' },
            { question: 'Self-compassion involves:', options: ['Self-pity and victimhood', 'Self-kindness, common humanity, and mindful awareness', 'Ignoring your faults', 'Putting yourself above others'], correctIndex: 1, explanation: 'Kristin Neff\'s three components of self-compassion: treating yourself kindly, remembering you are not alone in your suffering, and holding your pain with balanced awareness.' },
          ] } },
          { id: 'skr-journal', type: 'journal', title: 'Growth Inventory', estimatedMinutes: 8, content: { type: 'journal', prompts: ['What skill has been most transformative for you?', 'What area do you still want to grow in?', 'What would you tell the version of you who started this program?', 'What does your life look like when you are consistently living from earned security?'], privacyNote: 'Private.' } },
        ],
      },
      {
        id: 'letter-to-self',
        moduleId: 'integration-relapse',
        title: 'Letter to Your Future Self',
        description: 'The final session. Write a deep, meaningful letter to your future self — a message of hope, wisdom, and commitment for the road ahead.',
        estimatedMinutes: 30,
        learningObjectives: ['Consolidate your learning into a personal message', 'Create a tangible resource for difficult days', 'Celebrate your journey and commit to continued growth'],
        prerequisites: ['skills-review'],
        contraindications: [],
        segments: [
          { id: 'lts-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2, content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Proud and grounded', value: 1 }, { label: 'Mixed emotions', value: 3 }, { label: 'Nervous about finishing', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] } },
          { id: 'lts-psychoed', type: 'psychoeducation', title: 'You Have Done Something Remarkable', estimatedMinutes: 5, content: { type: 'psychoeducation', sections: [
            { heading: 'A Letter from Reparent', text: 'You have completed this program. That is not a small thing. You have faced your patterns, examined your past, built new skills, and committed to growth. You have done the hardest work there is — the work of honest self-examination. Whatever brought you here — a breakup, a pattern you wanted to change, a childhood you are making peace with — you chose to face it. That choice took courage. Everything you have learned is yours to keep. The awareness, the skills, the self-compassion. They do not expire. They grow stronger with practice. And on the days when old patterns resurface (and they will), remember: a setback is not a failure. It is a signal to use your tools. You are not the same person who started this program. You have earned something real.' },
          ] } },
          { id: 'lts-interactive', type: 'interactive', title: 'Letter to Your Inner Child', estimatedMinutes: 10, content: { type: 'interactive', component: 'InnerChildLetter', config: {}, instructions: 'Write one final letter — from your wise, compassionate adult self to the child who carried all that pain. Give them what they needed to hear.' } },
          { id: 'lts-journal', type: 'journal', title: 'Letter to Future You', estimatedMinutes: 10, content: { type: 'journal', prompts: ['Write a letter to your future self for a difficult day. Remind them of what they have learned, what they are worth, and what to do when old patterns call.', 'What are the three most important things you want to carry forward from this program?', 'What is your commitment to yourself going forward?'], privacyNote: 'Save this letter. Re-read it on hard days.' } },
          { id: 'lts-reflection', type: 'reflection', title: 'Final Reflection', estimatedMinutes: 5, content: { type: 'reflection', prompts: ['What are you most proud of?', 'What do you want to say to the version of you who started this journey?', 'What does "earned security" mean to you now?'] } },
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
