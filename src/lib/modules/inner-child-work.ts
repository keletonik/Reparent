import type { Module } from '../types'

const innerChildWork: Module = {
  id: 'inner-child-work',
  title: 'Inner Child Work & Reparenting',
  description: 'Meet the child parts of you that still carry old wounds. Drawing from John Bradshaw\'s inner child work, Richard Schwartz\'s Internal Family Systems (IFS), and Schema Therapy, learn to become the safe, nurturing parent that child needed. Five transformative sessions.',
  icon: 'baby',
  order: 22,
  category: 'growth',
  prerequisites: ['self-compassion'],
  sessions: [
    // SESSION 1: Understanding Parts and the Inner Child
    {
      id: 'parts-inner-child',
      moduleId: 'inner-child-work',
      title: 'Understanding Your Parts: The Inner Child in Therapy',
      description: 'Learn the clinical foundations of inner child work from Bradshaw, IFS (Schwartz), and Schema Therapy. Understand the concept of "parts" and why they matter.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the inner child concept from multiple clinical frameworks',
        'Learn the IFS model: exiles, protectors, and firefighters',
        'Recognise that "parts" are not pathology — they are how the mind organises',
        'Begin identifying your own parts',
      ],
      prerequisites: [],
      contraindications: ['This session may bring up childhood memories and emotions. Have grounding tools ready. Consider working alongside a therapist for deeper parts work.'],
      segments: [
        {
          id: 'pic-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'Inner child work can be one of the most emotional experiences in healing. How are you feeling about beginning?', options: [{ label: 'Ready and grounded', value: 1 }, { label: 'A little nervous but willing', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Not ready — I need support first', value: 9 }] },
        },
        {
          id: 'pic-psychoed', type: 'psychoeducation', title: 'The Inner Child in Clinical Psychology', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Child Who Still Lives Inside You', text: 'The "inner child" is not a metaphor or a New Age concept — it refers to the neural networks, emotional memories, implicit body memories, and attachment patterns formed in childhood that continue to influence your adult responses. When you feel a sudden wave of abandonment panic, shame, desperate neediness, or frozen helplessness, you are often experiencing the world through the lens of the child you once were. Different therapeutic frameworks describe this differently: John Bradshaw calls it the "wounded inner child." Jeffrey Young\'s Schema Therapy calls it the "Vulnerable Child mode." Richard Schwartz\'s Internal Family Systems (IFS) calls these wounded parts "exiles." All are describing the same phenomenon: early emotional experiences that remain alive inside you, driving automatic responses that often make little sense in your adult context but made perfect sense in childhood.' },
            { heading: 'IFS: Exiles, Protectors, and Firefighters', text: 'Schwartz\'s IFS model offers one of the most clinically useful frameworks for understanding inner parts: EXILES: The wounded, vulnerable parts carrying pain, shame, loneliness, and fear from childhood. They are "exiled" because their pain was too overwhelming for the child to bear, so other parts pushed them underground. These are your inner children. PROTECTORS (Managers): Parts that develop to prevent the exile\'s pain from surfacing. They manage your life to avoid triggers: perfectionism, people-pleasing, hypervigilance, control, intellectualisation, emotional numbing. Protectors are not enemies — they are doing their best to keep you safe. FIREFIGHTERS: Parts that activate when exile pain breaks through despite the protectors. They "put out fires" with urgency: impulsive eating, drinking, self-harm, rage, dissociation, binge behaviours. They are desperate measures for desperate moments. THE SELF: Schwartz says that beneath all parts there is a core Self — characterised by compassion, curiosity, calm, clarity, courage, confidence, creativity, and connectedness. This Self is who you really are. It is not a part — it is you.', keyIdeas: [
              'The inner child is a clinically validated concept describing early emotional patterns',
              'IFS identifies three types of parts: exiles (wounded), protectors (managing), and firefighters (emergency)',
              'Every part has a positive intent — even the ones that cause problems',
              'Healing happens when the Self can compassionately witness and care for wounded parts',
              'Bradshaw: "The wounded inner child contaminates adult life until they are claimed and healed"',
            ] },
            { heading: 'Why Parts Work Matters', text: 'When a young part of you is triggered, it hijacks your adult responses. You might react to a partner\'s late text with the panic of a 5-year-old whose parent did not come home. You might people-please compulsively because a 7-year-old part of you learned that was the only way to stay safe. You might rage when feeling vulnerable because a 10-year-old part of you decided that anger was safer than tears. Parts work matters because: you cannot change what you cannot see, understanding your parts reduces shame ("I am not crazy — a young part of me was activated"), it allows you to respond from your adult Self rather than from a triggered part, it creates the conditions for genuine healing rather than just symptom management.' },
          ] },
        },
        {
          id: 'pic-journal', type: 'journal', title: 'Mapping Your Parts', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'Can you identify any "exile" parts — wounded inner children carrying specific pain? What age are they? What are they feeling? When were they first hurt?',
            'What "protector" parts do you recognise in yourself? (Perfectionism, people-pleasing, control, intellectualisation, emotional numbness?) What are they protecting you from?',
            'Do you have any "firefighter" parts — emergency responses that kick in when pain breaks through? (Impulsivity, substances, anger, dissociation?) What triggers them?',
            'When you are at your calmest, wisest, and most compassionate, what is that like? That is your Self. When was the last time you were in Self?',
          ], privacyNote: 'Private. Take your time with this. There is no rush.' },
        },
        {
          id: 'pic-quiz', type: 'quiz', title: 'Parts Work Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'In IFS, "protector" parts develop to:', options: ['Cause problems', 'Prevent the exile\'s pain from surfacing — they are trying to keep you safe', 'Replace the Self', 'Make you seem normal'], correctIndex: 1, explanation: 'Protectors develop as a response to overwhelming childhood pain. Their job is to prevent the exile\'s (inner child\'s) pain from surfacing. They are not enemies — they are parts that learned to protect you in the only way they knew how.' },
            { question: 'According to IFS, the "Self" is characterised by:', options: ['Anxiety and control', 'Compassion, curiosity, calm, and clarity', 'Numbness and detachment', 'Perfectionism and achievement'], correctIndex: 1, explanation: 'The IFS Self is characterised by what Schwartz calls the "8 Cs": compassion, curiosity, calm, clarity, courage, confidence, creativity, and connectedness. It is the core of who you are beneath all the protective parts.' },
          ] },
        },
        {
          id: 'pic-action', type: 'action-plan', title: 'Beginning Parts Awareness', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, begin building awareness of your parts:', options: [
            { id: 'parts-notice', label: 'Notice when a "part" is activated', description: 'Three times this week, when you have an intense emotional reaction, pause and ask: "Is this my adult self responding, or has a younger part been triggered?"' },
            { id: 'protector-thank', label: 'Thank a protector part', description: 'Identify one protective pattern (perfectionism, people-pleasing, etc.) and say to it: "I see what you are doing. Thank you for trying to keep me safe. I understand why you developed."' },
            { id: 'self-access', label: 'Practice accessing Self', description: 'Once daily, use breathing and grounding to access your calm, curious, compassionate Self. Just notice what it feels like to be there.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 2: Meeting Your Wounded Child
    {
      id: 'meeting-inner-child',
      moduleId: 'inner-child-work',
      title: 'Meeting Your Wounded Inner Child',
      description: 'The central practice: gently, safely connecting with the child part of you that carries the deepest wounds. This is the heart of reparenting.',
      estimatedMinutes: 40,
      learningObjectives: [
        'Safely connect with a vulnerable inner child part',
        'Practice approaching the inner child with compassion and curiosity',
        'Begin the reparenting dialogue',
        'Understand the neuroscience of self-reparenting',
      ],
      prerequisites: ['parts-inner-child'],
      contraindications: ['This session may bring up strong emotions or childhood memories. If you experience flashbacks, dissociation, or severe distress, pause immediately and use grounding tools. Deeper inner child work is best done with a trauma-informed therapist.'],
      segments: [
        {
          id: 'mic-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'This session involves connecting with childhood emotions. How are you feeling about this?', options: [{ label: 'Ready and grounded', value: 1 }, { label: 'A little nervous but willing', value: 3 }, { label: 'Anxious — I will proceed carefully', value: 5 }, { label: 'This feels very heavy', value: 7 }, { label: 'Not ready — I need support', value: 9 }] },
        },
        {
          id: 'mic-psychoed', type: 'psychoeducation', title: 'The Art of Meeting Your Inner Child', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Reparenting Is', text: 'Reparenting is the process of becoming your own safe, nurturing, protective parent figure. It means giving your inner child what they needed but did not receive: consistent presence, unconditional acceptance, emotional attunement, and gentle limits. In Schema Therapy, the therapist initially models "limited reparenting" — and then the client internalises this capacity as their "Healthy Adult." In IFS, the Self turns toward the exile with compassion and curiosity, creating an internal relationship of safety. In Bradshaw\'s approach, you literally visualise, write to, and dialogue with your inner child. All approaches share the core principle: you cannot change the past, but you can change the internal relationship you have with the child who experienced it.' },
            { heading: 'The Neuroscience of Self-Reparenting', text: 'When you speak to yourself with warmth and understanding, you activate the same neural pathways as receiving comfort from a caregiver. This is not imagination — fMRI studies show that self-compassion activates the mammalian caregiving system (the left temporal pole and medial prefrontal cortex). Over time, this literally rewires the attachment circuitry in your brain, building what researchers call "earned secure attachment." The internal dialogue you practice with your inner child creates new neural pathways that compete with the old pathways of self-criticism and fear. Each time you turn toward your younger self with kindness, you strengthen these new pathways. This is neuroplasticity in action.', keyIdeas: [
              'Reparenting is not about blaming your parents — it is about meeting unmet needs now',
              'Your inner child\'s reactions made sense in the context they were formed',
              'Self-reparenting activates the same neural circuits as receiving parental care',
              'Earned secure attachment is built through this practice',
              'Reparenting is a practice, not a destination — it happens one moment at a time',
            ] },
            { heading: 'How to Approach the Inner Child', text: 'Approaching your inner child requires the same qualities a good parent would bring to a frightened child: Slow down. The inner child is wary — they have been hurt before. Approach with curiosity, not agenda. Ask: "What are you feeling? What do you need?" Listen. Do not rush to fix, explain, or rationalise. Just be present with what comes. Validate. Whatever the child feels, it makes sense. "Of course you feel that way. That was really hard." Reassure. "I am here now. I am your adult self, and I will protect you. You are not alone anymore." Do not force. If the inner child is not ready to be seen, respect that. Protector parts may need to be acknowledged first.' },
          ] },
        },
        {
          id: 'mic-breathing', type: 'breathing', title: 'Grounding Before Inner Child Contact', estimatedMinutes: 3,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'Before we connect with younger parts, ground your adult self first. Feel your feet on the floor. Notice your adult body. You are safe. You are here. You are an adult with choices, resources, and agency. From this grounded place, you will turn toward the child inside.' },
        },
        {
          id: 'mic-journal', type: 'journal', title: 'Meeting Your Inner Child', estimatedMinutes: 15,
          content: { type: 'journal', prompts: [
            'Close your eyes for a moment and picture yourself as a child (around age 5-8). What do you see? What is the child wearing? Where are they? What is their facial expression? What are they feeling?',
            'What did that child learn about love, safety, and their own worth? What messages did they receive about whether their emotions and needs were acceptable?',
            'If you could go back and sit with that child right now, what would you say to them? What do they most need to hear from a safe, loving adult?',
            'Write a letter from your Healthy Adult self to your inner child. Begin with: "Dear little one, I want you to know..."',
          ], privacyNote: 'This is deeply personal work. Take your time. Pause if you need to. Your entries are private and stored only on your device.' },
        },
        {
          id: 'mic-reflection', type: 'reflection', title: 'Closing Reflection', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What was it like to connect with your inner child today? Name the emotions that came up.',
            'What did your inner child need most? Were you able to offer it?',
            'How will you stay connected to this younger part of yourself going forward?',
          ] },
        },
        {
          id: 'mic-quiz', type: 'quiz', title: 'Reparenting Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: '"Reparenting" in therapy means:', options: ['Blaming your parents for your problems', 'Becoming the safe, nurturing parent to yourself that your inner child needed', 'Cutting off contact with your family', 'Pretending your childhood was fine'], correctIndex: 1, explanation: 'Reparenting is the process of giving your inner child — the wounded part that still carries old pain — the consistent safety, warmth, and attunement they needed. It is about meeting unmet needs, not assigning blame.' },
            { question: '"Earned secure attachment" means:', options: ['Attachment security you were born with', 'Security that develops despite insecure early experiences, through therapy and practice', 'Attachment from finding the right partner', 'Something with no research support'], correctIndex: 1, explanation: 'Earned security is one of the most hopeful findings in attachment research. It shows that people can develop secure attachment patterns despite insecure beginnings, through therapeutic relationships, self-compassion, and intentional practice.' },
          ] },
        },
      ],
    },

    // SESSION 3: Working with Protector Parts
    {
      id: 'protector-parts',
      moduleId: 'inner-child-work',
      title: 'Working with Protector Parts',
      description: 'Learn to appreciate, understand, and gently negotiate with the protector parts that developed to keep your inner child safe — including perfectionism, people-pleasing, and emotional walls.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Understand protector parts as adaptive responses, not enemies',
        'Learn to engage protector parts with gratitude and curiosity',
        'Begin negotiating with protectors to allow access to wounded parts',
        'Recognise your specific protector strategies',
      ],
      prerequisites: ['meeting-inner-child'],
      contraindications: [],
      segments: [
        {
          id: 'pp-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Curious and open', value: 1 }, { label: 'A bit defensive', value: 3 }, { label: 'Somewhat guarded', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'pp-psychoed', type: 'psychoeducation', title: 'Befriending Your Protectors', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Your Protectors Were Brilliant Adaptations', text: 'In IFS, protector parts are not pathology — they are brilliant adaptations that developed when you were too young to protect yourself any other way. The perfectionist part formed because being perfect reduced criticism from a demanding parent. The people-pleasing part formed because appeasement reduced the threat of an angry caregiver. The emotional wall formed because vulnerability was too dangerous. The intellectual part formed because thinking was safer than feeling. The controlling part formed because chaos was terrifying. Each protector carries a burden — a belief like "If I am not perfect, I will be rejected" — and a job that it has been performing tirelessly since childhood. They do not know the emergency is over. They need to be told — gently — by the adult Self.' },
            { heading: 'How to Work with Protectors', text: 'The IFS approach to protectors is counterintuitive: instead of fighting them or trying to override them, you befriend them. Step 1: Notice the protector in action ("I notice a part of me that needs to be perfect right now"). Step 2: Acknowledge and appreciate ("Thank you for trying to protect me. I understand why you developed"). Step 3: Get curious ("What are you afraid will happen if you relax? What are you protecting me from?"). Step 4: Reassure ("I am an adult now. I have resources and choices that the child did not have. You can rest a little. I will keep us safe"). Protectors often relax when they feel seen, appreciated, and reassured. They do not need to be eliminated — they need to be updated. They are still running childhood software in an adult world.', keyIdeas: [
              'Protector parts are not your enemies — they are exhausted workers doing an outdated job',
              'Fighting protectors makes them stronger; befriending them allows them to relax',
              'Each protector carries a burden (a fear or belief) that needs to be heard',
              'Protectors relax when they trust that the adult Self can keep things safe',
              'Schwartz: "Every part has a positive intent, even when its strategy causes problems"',
            ] },
          ] },
        },
        {
          id: 'pp-interactive', type: 'interactive', title: 'Protector Dialogue', estimatedMinutes: 10,
          content: { type: 'interactive', component: 'ProtectorDialogue', config: {}, instructions: 'Choose one of your protector parts (perfectionism, people-pleasing, emotional walls, control, etc.). Write a dialogue between your Self and this protector. Thank it, ask what it fears, and offer reassurance.' },
        },
        {
          id: 'pp-journal', type: 'journal', title: 'Letters to Your Protectors', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Choose your most active protector part. Write it a letter of appreciation: what has it been protecting you from? How has it kept you safe?',
            'Ask the protector: "What are you afraid will happen if you let go a little?" Write down what comes up.',
            'What would it look like if this protector could relax just 10%? What would become possible?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'pp-quiz', type: 'quiz', title: 'Protectors Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'The IFS approach to protector parts is to:', options: ['Fight them and override them', 'Befriend them — acknowledge, appreciate, and reassure them', 'Ignore them', 'Eliminate them completely'], correctIndex: 1, explanation: 'IFS approaches protectors with curiosity and gratitude rather than conflict. Fighting protectors makes them stronger. Acknowledging, appreciating, and reassuring them allows them to relax and update their outdated strategies.' },
          ] },
        },
      ],
    },

    // SESSION 4: Chair Work and Letter Writing
    {
      id: 'chair-work-letters',
      moduleId: 'inner-child-work',
      title: 'Therapeutic Techniques: Chair Work & Letter Writing',
      description: 'Learn adapted versions of chair work and letter writing — powerful therapeutic techniques for inner child healing that can be practiced solo.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Learn adapted chair work techniques for solo practice',
        'Practice multiple forms of therapeutic letter writing',
        'Understand how externalising parts facilitates healing',
        'Deepen the reparenting relationship through practice',
      ],
      prerequisites: ['protector-parts'],
      contraindications: ['If intense emotions arise during these exercises, pause and ground yourself. These techniques are powerful.'],
      segments: [
        {
          id: 'cwl-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Ready to go deeper', value: 1 }, { label: 'A bit apprehensive', value: 3 }, { label: 'Nervous but willing', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'cwl-psychoed', type: 'psychoeducation', title: 'Experiential Techniques for Healing', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Adapted Chair Work', text: 'Chair work is one of the most powerful techniques in experiential therapy (Gestalt, Schema Therapy, EFT). In traditional chair work, the therapist guides the client to move between chairs, speaking as different parts. In solo practice, you can adapt this: Technique 1 — Two Chairs: Place two chairs facing each other. Sit in one as your adult self. Imagine your inner child in the other chair. Speak to them directly. Then move to the other chair and respond as the child. Technique 2 — Empty Chair for the Parent: Place an empty chair and imagine your parent sitting there. Say what you need to say — what you could never say. You do not need to send this message. You are giving your inner child a voice. Technique 3 — Parts Dialogue: Sit in one chair as Self. Move to another chair to speak as a protector part. Move to a third chair to speak as the wounded child. Let the conversation flow.' },
            { heading: 'Therapeutic Letter Writing', text: 'Letter writing bypasses the intellectual defences that often block emotional processing. Types of letters: Letter FROM your adult self TO your inner child: Offering the reassurance, protection, and love the child needed. Letter FROM your inner child TO your adult self: Letting the child express what they feel, need, and want. Letter TO a parent you could not speak to honestly: Saying everything you needed to say — without needing to send it. Letter FROM your ideal parent TO the child: Writing what a perfect, attuned parent would have said to you.', keyIdeas: [
              'Chair work externalises internal dialogue, making it more emotionally accessible',
              'You do not need a therapist for basic chair work — but complex trauma work benefits from professional support',
              'Letter writing bypasses intellectual defences and accesses emotion directly',
              'None of these letters need to be sent — they are for you',
              'Bradshaw: "In order to heal the wounded inner child, we must first reclaim them"',
            ] },
          ] },
        },
        {
          id: 'cwl-journal', type: 'journal', title: 'Therapeutic Letters', estimatedMinutes: 15,
          content: { type: 'journal', prompts: [
            'Write a letter FROM your inner child TO you. Let the child write in their own voice — their real feelings, without censoring. What does the child want you to know?',
            'Write a letter TO a parent (or caregiver) expressing what you could never say out loud. Say everything. This is for you, not for them.',
            'Write a letter FROM your ideal, attuned parent TO the child you were. What would the perfect parent have said when you were hurting? What did you need to hear?',
          ], privacyNote: 'These letters are sacred and private. They do not need to be sent. They are a conversation between the parts of you that need to speak and be heard.' },
        },
        {
          id: 'cwl-reflection', type: 'reflection', title: 'Processing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What came up during the letter writing? What surprised you?',
            'Which letter was the hardest to write? Why?',
            'What does your inner child need from you going forward?',
          ] },
        },
        {
          id: 'cwl-action', type: 'action-plan', title: 'Deepening the Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one technique to practice this week:', options: [
            { id: 'daily-letter', label: 'Write to your inner child daily', description: 'Each morning or evening, write a brief message to your inner child. Just 2-3 sentences of reassurance and love.' },
            { id: 'chair-work-try', label: 'Try adapted chair work once this week', description: 'Set up two chairs and practice a dialogue between your adult self and your inner child. Even 5 minutes is powerful.' },
            { id: 'unsent-letter', label: 'Complete one unsent letter', description: 'Write a full letter to someone who shaped your childhood — expressing everything you need to say. Keep it in a safe place.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 5: Nurturing the Wounded Child — Ongoing Reparenting
    {
      id: 'ongoing-reparenting',
      moduleId: 'inner-child-work',
      title: 'Nurturing the Wounded Child: Ongoing Reparenting',
      description: 'Build a sustainable daily reparenting practice. Learn to respond to triggered inner child parts in real-time and create the internal safety your younger self never had.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Build a daily reparenting practice',
        'Learn to respond to triggered child parts in real-time',
        'Understand reparenting as the foundation of earned security',
        'Integrate inner child work into ongoing life',
      ],
      prerequisites: ['chair-work-letters'],
      contraindications: [],
      segments: [
        {
          id: 'or-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we integrate this work?', options: [{ label: 'Grounded and hopeful', value: 1 }, { label: 'A mix of emotions', value: 3 }, { label: 'Somewhat tender', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'or-psychoed', type: 'psychoeducation', title: 'Daily Reparenting Practice', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Reparenting in Real Time', text: 'The ultimate goal of inner child work is not a single transformative experience — it is a daily practice of turning toward your younger self with compassion in ordinary moments. When you feel a wave of anxiety about a text message, pause and say: "I see you, little one. You are afraid of being abandoned. I am here. I am not leaving." When shame floods you after a mistake, place your hand on your heart: "You are not bad. You made a mistake. That is human. I still love you." When you feel the pull to people-please, notice: "A young part of me is afraid that saying no will mean being unloved. I can hold that fear and choose differently now." This is reparenting in action: the Healthy Adult turning toward the Vulnerable Child with the presence, warmth, and attunement that were missing in childhood.' },
            { heading: 'A Daily Reparenting Routine', text: 'Morning: Check in with your inner child. "Good morning, little one. How are you feeling today? What do you need from me?" Take a moment to offer reassurance. Throughout the day: When strong emotions arise, pause and ask: "Is this my adult self, or has a younger part been triggered?" If a child part is active, turn toward it with compassion. Evening: Before sleep, offer your inner child a goodnight message: "You did well today. You are safe tonight. I am proud of you." This may feel strange at first — even silly. That discomfort often comes from the part of you that was taught that your needs do not matter. The practice of attending to your inner child IS the healing.', keyIdeas: [
              'Reparenting is a daily practice, not a one-time event',
              'Real-time reparenting means turning toward triggered child parts as they arise',
              'The Healthy Adult and the Vulnerable Child build an internal secure attachment',
              'Each moment of attunement to your inner child strengthens earned security',
              'The discomfort of being kind to yourself is the edge where growth happens',
            ] },
            { heading: 'Reparenting and Earned Security', text: 'Attachment research shows that earned secure attachment — security built through later healing — is as robust as original secure attachment. The mechanism is consistent, attuned, responsive care. Originally, this came from a caregiver. In earned security, it comes from you (the Healthy Adult) caring for you (the Vulnerable Child), supported by safe relationships and therapeutic experiences. You are literally rewiring your attachment circuitry. Each time you turn toward your inner child with warmth, you build the neural infrastructure of security. This is not a metaphor. It is measurable, verifiable brain change.' },
          ] },
        },
        {
          id: 'or-interactive', type: 'interactive', title: 'Reparenting Scenarios', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'ReparentingPractice', config: {}, instructions: 'For each scenario (anxiety about a text, shame after a mistake, the urge to people-please, feeling unlovable), practice the reparenting response: notice the child part, acknowledge their feeling, offer reassurance from the Healthy Adult.' },
        },
        {
          id: 'or-journal', type: 'journal', title: 'Your Reparenting Commitment', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Write your morning reparenting check-in for today. What does your inner child need right now?',
            'Think of a recent moment when a child part was triggered. How did you respond? How would the Healthy Adult respond if you could replay that moment?',
            'Write a commitment from your Healthy Adult to your inner child: "I promise to..."',
            'What does earned secure attachment look like for you? What will life feel like when you have built an internal secure base?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'or-reflection', type: 'reflection', title: 'Module Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What has this inner child work opened up for you?',
            'How has your relationship with yourself changed through this module?',
            'What is one thing your inner child wants you to remember?',
          ] },
        },
        {
          id: 'or-quiz', type: 'quiz', title: 'Module Review', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Earned secure attachment is built through:', options: ['Finding the perfect partner', 'Consistent, attuned, responsive self-care — the Healthy Adult turning toward the Vulnerable Child', 'Forgetting childhood experiences', 'Willpower and determination'], correctIndex: 1, explanation: 'Earned security is built through the same mechanism as original security: consistent, attuned, responsive care. In reparenting, this comes from your Healthy Adult self turning toward your Vulnerable Child with warmth and reliability.' },
            { question: 'When a child part is triggered in daily life, the reparenting response is:', options: ['Ignore it and push through', 'Criticise yourself for being emotional', 'Pause, notice the child part, acknowledge their feeling, and offer reassurance', 'Wait until therapy to address it'], correctIndex: 2, explanation: 'Real-time reparenting means pausing when a child part is triggered, noticing and acknowledging their feeling, and offering the reassurance they need from the Healthy Adult. This is the daily practice that builds earned security.' },
          ] },
        },
        {
          id: 'or-action', type: 'action-plan', title: 'Ongoing Reparenting', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose your ongoing reparenting practice:', options: [
            { id: 'daily-checkin-child', label: 'Morning and evening inner child check-in', description: 'Each morning, ask your inner child how they are feeling and what they need. Each evening, offer gratitude and reassurance.' },
            { id: 'triggered-practice', label: 'Practice in triggered moments', description: 'When strong emotions arise, pause and ask: "Is a younger part active?" Turn toward that part with the reparenting response.' },
            { id: 'therapy-explore', label: 'Explore IFS or schema therapy', description: 'If this work has resonated deeply, consider working with a therapist trained in IFS or Schema Therapy for guided parts work.' },
          ], timeHorizonDays: 30 },
        },
      ],
    },
  ],
}

export default innerChildWork
