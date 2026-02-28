import type { Module } from '../types'

const traumaBonding: Module = {
  id: 'trauma-bonding',
  title: 'Trauma Bonding & Leaving Unsafe Dynamics',
  description: 'Understand the neurobiological mechanisms of trauma bonding, recognise abuse patterns including intermittent reinforcement and power imbalance, navigate the stages of leaving, and build safety. Drawing from Dutton & Painter, Patrick Carnes, and current neuroscience.',
  icon: 'unlink',
  order: 14,
  category: 'skills',
  prerequisites: ['attachment-foundations'],
  sessions: [
    // SESSION 1: What Is Trauma Bonding?
    {
      id: 'bond-vs-love',
      moduleId: 'trauma-bonding',
      title: 'Bond vs Love: Understanding Trauma Bonds',
      description: 'Learn what trauma bonding is, how it differs from anxious attachment, and why the bond feels so powerful that leaving seems impossible.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Define trauma bonding and its core mechanisms',
        'Distinguish trauma bonds from anxious attachment',
        'Understand power imbalance and intermittent reinforcement',
        'Recognise the role of cognitive dissonance in maintaining the bond',
      ],
      prerequisites: [],
      contraindications: ['If you are currently in an abusive relationship, please access domestic violence resources. This is education, not a safety plan replacement. Your safety comes first.'],
      segments: [
        {
          id: 'bvl-safety', type: 'safety-check', title: 'Safety Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'This session discusses abuse dynamics. These topics can be activating. How are you feeling right now?', options: [{ label: 'Ready to learn — I feel safe', value: 1 }, { label: 'Cautious but okay to proceed', value: 3 }, { label: 'Somewhat triggered — I will go slowly', value: 5 }, { label: 'Very activated — this is hard', value: 7 }, { label: 'Not safe to continue right now', value: 9 }] },
        },
        {
          id: 'bvl-psychoed', type: 'psychoeducation', title: 'What Is Trauma Bonding?', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Trauma Bonding Is Not Love', text: 'Patrick Carnes first described the "betrayal bond" — what we now call trauma bonding. Dutton and Painter\'s research identified the two key factors that create a trauma bond: (1) a power imbalance between the people involved, and (2) intermittent reinforcement — unpredictable cycles of good and bad treatment. When these two factors are present, the attachment that forms is not love. It is a survival bond — the brain\'s desperate attempt to find safety in an unsafe person. The "love" you feel in a trauma bond is actually your attachment system in overdrive, clinging to the source of danger as though it were the source of safety. This paradox — attaching more strongly to someone who hurts you — is one of the most confusing aspects of trauma bonding.' },
            { heading: 'Intermittent Reinforcement: The Slot Machine Effect', text: 'Intermittent reinforcement is the most powerful schedule of reinforcement in behavioural psychology. It is the same mechanism that makes gambling addictive. When rewards are unpredictable, the brain\'s dopamine system responds more intensely than it would to consistent rewards. In an abusive relationship, the "good times" are unpredictable and interspersed with pain, fear, and control. This makes the good times feel extraordinarily intense — almost euphoric. The relief you feel when the abuser becomes kind again is not reconciliation. It is the dopamine hit of an unpredictable reward after a period of deprivation. Your brain is responding to the pattern, not to love.' },
            { heading: 'How Trauma Bonds Differ from Anxious Attachment', text: 'Anxious attachment involves fear of abandonment in relationships that may be imperfect but fundamentally safe. There is no power imbalance or abuse pattern. Trauma bonding involves actual danger — abuse, coercion, control, or violence. The key diagnostic questions: Is there a genuine power imbalance? Is the "good" behaviour used strategically to maintain control? Are there patterns of abuse, control, isolation, or violence? Does the person alternate between extreme warmth and extreme cruelty? Do you feel you cannot survive without them — not just emotionally, but practically (financial control, isolation from support)?', keyIdeas: [
              'Anxious attachment: fear of losing a safe-enough person',
              'Trauma bond: attachment to someone who is actively harmful',
              'The "high" after a bad period is intermittent reinforcement, not reconciliation',
              'Leaving feels impossible because the bond is neurological, not just emotional',
              'Dutton & Painter: the power imbalance creates a dynamic similar to Stockholm syndrome',
            ] },
            { heading: 'Cognitive Dissonance: Why Your Mind Protects the Abuser', text: 'Cognitive dissonance occurs when you hold two conflicting beliefs simultaneously: "This person loves me" and "This person hurts me." The psychological discomfort of holding both truths is so intense that the mind typically resolves it by minimising or denying one. Common thought patterns that maintain cognitive dissonance in trauma bonds: "They only hurt me because they are stressed/had a bad childhood/are dealing with a lot." "It is not that bad — other people have it worse." "When it is good, it is really good — maybe if I just try harder." "They would not act this way if I did not provoke them." "They need me. If I leave, they will fall apart." These are not signs of weakness. They are the mind\'s attempt to make an unbearable reality bearable.' },
          ] },
        },
        {
          id: 'bvl-breathing', type: 'breathing', title: 'Grounding Breath', estimatedMinutes: 3,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'If this material has activated you, take a moment to ground yourself. Feel your feet on the floor. You are here, in this moment. You are safe right now.' },
        },
        {
          id: 'bvl-journal', type: 'journal', title: 'Honest Assessment', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Is there a relationship in your life (past or present) where you recognise intermittent reinforcement — unpredictable cycles of good and bad treatment? What was the "high" of the good times like?',
            'Are there power imbalances in any of your relationships? Who sets the rules? Who adjusts? Who is afraid?',
            'What cognitive dissonance do you carry about a relationship? What conflicting truths are you holding?',
            'If your closest friend described this relationship to you, what would you say to them? Write that advice here.',
          ], privacyNote: 'These reflections are deeply private. If this content resonates with your current situation, please access domestic violence resources available through the crisis button.' },
        },
        {
          id: 'bvl-quiz', type: 'quiz', title: 'Trauma Bond Awareness', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Trauma bonding is driven by:', options: ['True love that endures hardship', 'Power imbalance and intermittent reinforcement', 'Mutual respect during difficult times', 'Shared trauma history'], correctIndex: 1, explanation: 'Trauma bonding is driven by power imbalance and intermittent reinforcement — the unpredictable cycle of good and bad treatment creates an addictive-like attachment that feels like love but is actually a survival bond.' },
            { question: 'The intense relief after a bad period in an abusive relationship is:', options: ['A sign the relationship is improving', 'Intermittent reinforcement strengthening the bond', 'Proof they really love you', 'Normal relationship dynamics'], correctIndex: 1, explanation: 'The relief after abuse is a form of intermittent reinforcement. The dopamine spike of the "good period" is made more intense by the preceding pain, strengthening the trauma bond rather than the relationship.' },
            { question: 'Cognitive dissonance in trauma bonds means:', options: ['Thinking clearly about the relationship', 'Holding two conflicting beliefs — "they love me" and "they hurt me" — simultaneously', 'Remembering events differently from your partner', 'Having different opinions'], correctIndex: 1, explanation: 'Cognitive dissonance is the uncomfortable psychological state of holding contradictory beliefs. In trauma bonds, the mind often resolves this by minimising the abuse or blaming yourself, in order to maintain the attachment.' },
          ] },
        },
      ],
    },

    // SESSION 2: The Biochemistry of Trauma Bonds
    {
      id: 'trauma-bond-brain',
      moduleId: 'trauma-bonding',
      title: 'Your Brain on Trauma Bonds: The Biochemistry',
      description: 'Understand the neurochemical mechanisms that make trauma bonds feel like addiction — and why willpower alone is not enough to break them.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Understand the cortisol-dopamine-oxytocin cycle in trauma bonds',
        'Recognise why trauma bonds mirror substance addiction',
        'Understand the role of the stress response in maintaining bonds',
        'Learn why willpower alone is insufficient for leaving',
      ],
      prerequisites: ['bond-vs-love'],
      contraindications: ['If you are currently in an abusive relationship, please access DV resources first.'],
      segments: [
        {
          id: 'tbb-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How activated are you feeling as we continue this topic?', options: [{ label: 'Grounded and ready', value: 1 }, { label: 'A bit unsettled', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Very activated', value: 7 }, { label: 'Not safe to continue', value: 9 }] },
        },
        {
          id: 'tbb-psychoed', type: 'psychoeducation', title: 'The Biochemistry of Trauma Bonds', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Cortisol-Dopamine-Oxytocin Cycle', text: 'Trauma bonds are maintained by a powerful neurochemical cycle. Phase 1 — Tension and Abuse (Cortisol): During abusive episodes, your body floods with cortisol and adrenaline. Your stress response is fully activated. You are in survival mode — hypervigilant, terrified, dissociated, or frozen. Phase 2 — Reconciliation (Dopamine): When the abuser becomes kind, loving, or remorseful, your brain releases a massive dopamine surge. This is the "reward" signal. Because it follows a period of deprivation and fear, the dopamine hit is far more intense than it would be in a stable relationship. This is identical to the mechanism that makes gambling addictive. Phase 3 — Honeymoon (Oxytocin): During the calm period, oxytocin (the "bonding" hormone) is released through physical affection, intimacy, and apparent closeness. This deepens the attachment bond, making separation feel physiologically unbearable. Phase 4 — Tension builds again (Cortisol rising): The cycle repeats, each time deepening the neurochemical grooves.' },
            { heading: 'Why It Feels Like Addiction', text: 'Neuroscience research shows that trauma bonds activate the same brain regions as substance addiction — particularly the nucleus accumbens and the ventral tegmental area (the brain\'s reward circuitry). The withdrawal symptoms when you try to leave are not metaphorical. They are real: intense anxiety, physical pain, obsessive thoughts about the person, desperate urges to return, sleep disruption, appetite changes. Understanding this is crucial because it removes the self-blame. You are not staying because you are weak or stupid. You are staying because your brain has been hijacked by a neurochemical cycle that is designed to keep you attached. Breaking a trauma bond requires the same kind of support, compassion, and structured approach as breaking an addiction.', keyIdeas: [
              'Trauma bonds involve real neurochemical addiction — this is not a metaphor',
              'The dopamine response is strongest when rewards are unpredictable (intermittent reinforcement)',
              'Oxytocin released during "good times" deepens attachment, making separation physically painful',
              'Cortisol from chronic stress impairs decision-making and executive function',
              'Breaking a trauma bond is a withdrawal process — it needs support, not willpower alone',
            ] },
            { heading: 'Stockholm Syndrome: The Ultimate Survival Bond', text: 'In extreme cases, trauma bonding can resemble Stockholm syndrome — where the victim develops positive feelings toward the captor as a survival mechanism. This is not pathological — it is the brain\'s desperate attempt to survive. If you are trapped with someone who controls your access to basic needs (safety, food, shelter, social connection), forming an attachment to them is adaptive. It reduces the threat response and increases compliance, which increases your chances of survival. Understanding this removes the shame. Your brain was protecting you in the only way it knew how.' },
          ] },
        },
        {
          id: 'tbb-journal', type: 'journal', title: 'Your Neurochemical Awareness', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Can you identify the cortisol-dopamine-oxytocin cycle in a past or present relationship? What did each phase feel like in your body?',
            'Have you experienced "withdrawal" symptoms when trying to distance yourself from someone? Describe them. Knowing they are neurochemical, does that change how you see them?',
            'How does understanding the biochemistry of trauma bonds change how you feel about yourself? Does it reduce self-blame?',
          ], privacyNote: 'Private and stored on your device. If you need support, use the crisis resources available on every screen.' },
        },
        {
          id: 'tbb-quiz', type: 'quiz', title: 'Biochemistry Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'The "high" during the honeymoon phase of a trauma bond is driven by:', options: ['True love', 'Dopamine and oxytocin release following a cortisol-flooded period', 'Normal relationship bonding', 'Conscious choice'], correctIndex: 1, explanation: 'The honeymoon phase involves massive dopamine release (reward) and oxytocin release (bonding) that follow periods of cortisol-driven stress. This cycle is what makes trauma bonds feel like addiction — because they literally are.' },
            { question: 'Why is willpower alone usually insufficient for breaking a trauma bond?', options: ['Because the person is weak', 'Because the bond involves real neurochemical addiction that requires structured support to overcome', 'Because they do not want to leave', 'Because they enjoy the abuse'], correctIndex: 1, explanation: 'Trauma bonds involve genuine neurochemical dependency. The same brain circuits involved in substance addiction are activated. Breaking free requires support, strategy, and compassion — not just determination.' },
          ] },
        },
      ],
    },

    // SESSION 3: Why Victims Return & Stages of Leaving
    {
      id: 'leaving-stages',
      moduleId: 'trauma-bonding',
      title: 'Why Victims Return: The Stages of Leaving',
      description: 'Understand why it takes an average of 7 attempts to leave an abusive relationship, the psychological stages of leaving, and how to build a safety foundation.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the stages of leaving an abusive relationship',
        'Remove self-blame about returning or difficulty leaving',
        'Identify the psychological barriers to leaving',
        'Learn about safety planning fundamentals',
      ],
      prerequisites: ['trauma-bond-brain'],
      contraindications: ['If you are currently in danger, please contact emergency services or a domestic violence hotline before continuing.'],
      segments: [
        {
          id: 'ls-safety', type: 'safety-check', title: 'Safety Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'This session discusses the process of leaving unsafe relationships. How are you feeling?', options: [{ label: 'Grounded and ready', value: 1 }, { label: 'Cautious but okay', value: 3 }, { label: 'This is bringing things up', value: 5 }, { label: 'Very activated', value: 7 }, { label: 'I need support now', value: 9 }] },
        },
        {
          id: 'ls-psychoed', type: 'psychoeducation', title: 'The Reality of Leaving', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Why Leaving Is So Difficult', text: 'Research shows that it takes an average of 7 attempts to leave an abusive relationship permanently. Each "failed" attempt is not a failure — it is part of the process. The reasons people stay or return are complex and intersecting: Neurochemical addiction (the trauma bond itself), fear of retaliation (the most dangerous time is immediately after leaving), financial dependence, isolation from support (the abuser has often systematically cut off friends and family), normalisation ("This is just how relationships are"), cognitive dissonance ("But they can be so wonderful"), children and family pressure, housing and practical barriers, shame and self-blame ("If I were better, this would not happen"), trauma bonding with the "good" version of the person, the sunk cost fallacy ("I have invested so much"), and genuine love for the person alongside fear of the abuse.' },
            { heading: 'The Stages of Leaving', text: 'Researcher Prochaska\'s Stages of Change model applies to leaving abusive relationships: Pre-contemplation: You do not yet recognise the relationship as abusive. You minimise, deny, or blame yourself. Contemplation: You begin to recognise the pattern. You have moments of clarity alternating with doubt. This stage can last years. Preparation: You start quietly making plans — gathering resources, confiding in someone, researching options. Action: You make a concrete move to leave. This is the highest-risk period. Maintenance: You sustain the change, resist the urge to return, and rebuild your life. Relapse: You return. This is common and does not mean failure. Each cycle builds awareness and strength. Understanding these stages helps remove the self-blame. You are not failing to leave. You are moving through a process.', keyIdeas: [
              'Leaving is a process, not an event — it takes an average of 7 attempts',
              'Each attempt builds strength and awareness, even if you return',
              'The most dangerous time is immediately after leaving — safety planning is critical',
              'Returning does not mean the abuse was not real or bad enough',
              'Shame and self-blame are tools the abuser uses to keep you trapped',
            ] },
            { heading: 'Why People Return', text: 'Understanding why victims return removes judgement: The neurochemical withdrawal is unbearable. The abuser love-bombs with promises of change. Fear of being alone (the abuser has trained you to believe you cannot survive without them). Practical barriers (nowhere to go, no money). Pressure from family or community. Missing the "good" version of the person. The abuser threatens self-harm. Guilt and misplaced responsibility. Believing you can fix or save them (codependency). The grief of ending a relationship — even an abusive one — is real.' },
            { heading: 'Safety Planning Basics', text: 'If you recognise yourself in this material and are in an unsafe situation, safety planning is the priority. A safety plan includes: identifying trusted people you can contact, keeping important documents accessible, having a packed bag ready, knowing the number for your local DV hotline, having a safe place to go, a code word with a friend, access to emergency funds. This program is educational — if you need a safety plan, please contact a domestic violence service. They can help you create one that accounts for your specific situation.' },
          ] },
        },
        {
          id: 'ls-journal', type: 'journal', title: 'Your Experience', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'If you have tried to leave a relationship and returned, can you identify which stage of change you were in each time? Can you see the growth between attempts?',
            'What psychological barriers have kept you (or someone you know) in an unsafe relationship? Which ones feel most powerful?',
            'What would you need in order to feel safe enough to leave (or to stay gone)? Name the practical, emotional, and relational support you would need.',
          ], privacyNote: 'If this content reflects your current reality, please reach out to a DV service. You deserve safety. Your entries are stored only on your device.' },
        },
        {
          id: 'ls-quiz', type: 'quiz', title: 'Leaving Process Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'On average, how many attempts does it take to leave an abusive relationship?', options: ['1 — you just need to decide', '3 attempts', '7 attempts', 'Once is always enough'], correctIndex: 2, explanation: 'Research shows it takes an average of 7 attempts to leave permanently. Each attempt builds awareness and strength. Returning is part of the process, not a failure.' },
            { question: 'The most dangerous time in an abusive relationship is:', options: ['During the honeymoon phase', 'Immediately after the victim leaves', 'When things are calm', 'When the abuser is remorseful'], correctIndex: 1, explanation: 'Research consistently shows that the period immediately after leaving is the most dangerous, as the abuser feels they are losing control. This is why safety planning is critical.' },
          ] },
        },
        {
          id: 'ls-action', type: 'action-plan', title: 'Building Your Foundation', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one step toward building your safety foundation:', options: [
            { id: 'trusted-person', label: 'Identify one trusted person', description: 'Name one person you could confide in about your situation. You do not need to tell them everything yet — just know who they are.' },
            { id: 'dv-resource', label: 'Save a DV hotline number', description: 'Save the number for your local domestic violence service in your phone under a discreet name.' },
            { id: 'self-compassion-tb', label: 'Practice self-compassion about your situation', description: 'Write yourself a letter that says: "What I am experiencing is real. My reactions make sense. I deserve safety."' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 4: Breaking the Bond — Recovery from Trauma Bonding
    {
      id: 'breaking-trauma-bond',
      moduleId: 'trauma-bonding',
      title: 'Breaking the Bond: Recovery Strategies',
      description: 'Learn evidence-based strategies for breaking a trauma bond, managing withdrawal, and rebuilding your sense of reality after gaslighting and abuse.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Learn practical strategies for breaking a trauma bond',
        'Understand and manage the withdrawal process',
        'Rebuild trust in your own perceptions after gaslighting',
        'Build a recovery support system',
      ],
      prerequisites: ['leaving-stages'],
      contraindications: ['This session is most relevant for those who have already left or are actively planning to leave an unsafe relationship.'],
      segments: [
        {
          id: 'btb-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Ready and hopeful', value: 1 }, { label: 'Cautiously optimistic', value: 3 }, { label: 'Struggling but here', value: 5 }, { label: 'Very activated', value: 7 }, { label: 'Need support now', value: 9 }] },
        },
        {
          id: 'btb-psychoed', type: 'psychoeducation', title: 'Breaking Free', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'No Contact: The Foundation of Recovery', text: 'The most effective way to break a trauma bond is no contact — complete cessation of communication and exposure. This is not punishment; it is neurological necessity. Every contact reactivates the trauma bond circuitry. Every text, call, or social media check triggers the dopamine-cortisol cycle. No contact allows the neurochemical withdrawal to actually complete. Without it, you are essentially "using" again each time you make contact. If no contact is impossible (shared children, work), the goal is "grey rock" — making yourself as uninteresting and unresponsive as possible. Flat, factual, unemotional communication about practical matters only.' },
            { heading: 'Managing Withdrawal', text: 'Trauma bond withdrawal is real and it is painful. Common symptoms include: intense anxiety and panic, obsessive thoughts about the person, physical symptoms (nausea, chest pain, difficulty sleeping), idealising the person ("Maybe it was not that bad"), urges to contact them, depression and hopelessness, difficulty concentrating. What helps: Name it as withdrawal, not love ("This is my brain in withdrawal, not my heart telling me to go back"). Ride the waves — urges peak and pass, usually within 15-30 minutes. Use the HALT check — am I Hungry, Angry, Lonely, or Tired? Lean on your support system. Write a "reality list" — a factual list of the abuse that you can read when your mind starts idealising.', keyIdeas: [
              'No contact is the foundation of trauma bond recovery',
              'Withdrawal symptoms are neurological — they are not evidence that you should go back',
              'The idealisation that occurs after leaving is your brain\'s withdrawal talking',
              'A "reality list" can anchor you when cognitive dissonance pulls you back',
              'The acute withdrawal phase typically lasts 4-8 weeks, with gradual improvement after',
            ] },
            { heading: 'Rebuilding Reality After Gaslighting', text: 'If you have been gaslit — told that your perceptions are wrong, that things did not happen the way you remember, that you are "crazy" or "too sensitive" — rebuilding trust in your own experience is critical. Practices that help: Keep a factual journal (write down what happened, as it happened, without interpretation). Ask trusted people to reality-check your experiences. Practise saying "I know what I experienced." Pay attention to your body — your nervous system knows the truth even when your mind has been manipulated. Work with a trauma-informed therapist who can help you distinguish between gaslit reality and actual reality.' },
            { heading: 'Building Your Recovery Support System', text: 'You cannot recover from a trauma bond alone. This is not weakness — it is neuroscience. Your attachment system needs safe connections to rewire. Recovery support includes: a therapist trained in trauma and abuse dynamics, a domestic violence support group, trusted friends and family, this program for psychoeducation and skill-building, journaling to maintain contact with your own reality, body-based practices (yoga, somatic experiencing) to process stored trauma. Research by Judith Herman (Trauma and Recovery) emphasises that recovery from trauma occurs in relationship — in safe, consistent, trustworthy connections that provide what the abusive relationship did not.' },
          ] },
        },
        {
          id: 'btb-journal', type: 'journal', title: 'Your Recovery Foundation', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'If you have left an unsafe relationship (or are planning to), what does no contact look like for you? What makes it hard? What would support look like?',
            'Write the beginning of your "reality list" — factual things that happened that you want to remember clearly, even when your mind tries to minimise them.',
            'Who are the safe people in your life? Name them. What makes them safe? If you cannot name anyone, what is one step you could take to find safe connection?',
            'What would rebuilding trust in your own perceptions look like? Complete this: "I know what I experienced. What happened was real. I am not..."',
          ], privacyNote: 'Private. These reflections may be useful to revisit when you are struggling with the urge to return.' },
        },
        {
          id: 'btb-quiz', type: 'quiz', title: 'Recovery Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'No contact after a trauma bond is important because:', options: ['It punishes the abuser', 'Each contact reactivates the neurochemical cycle that maintains the bond', 'It proves you are strong', 'It is not actually necessary'], correctIndex: 1, explanation: 'No contact is not about punishment — it is about neurological recovery. Every contact reactivates the dopamine-cortisol-oxytocin cycle, making it impossible for the brain to complete the withdrawal process.' },
            { question: 'The idealisation of an abuser after leaving is:', options: ['A sign you should go back', 'A normal part of neurochemical withdrawal that will pass', 'Evidence the relationship was good', 'Uncommon'], correctIndex: 1, explanation: 'Idealisation after leaving is a predictable part of the withdrawal process. The brain, in withdrawal, amplifies positive memories and minimises negative ones. This is why a "reality list" is so important.' },
          ] },
        },
        {
          id: 'btb-action', type: 'action-plan', title: 'Recovery Steps', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one recovery step to focus on:', options: [
            { id: 'reality-list', label: 'Create your reality list', description: 'Write a factual, chronological list of harmful events. Keep it somewhere accessible for when your mind tries to minimise or idealise.' },
            { id: 'support-system', label: 'Reach out to one safe person', description: 'Contact one person you trust and let them know what you are going through, even if you only share a small amount.' },
            { id: 'no-contact-plan', label: 'Build a no-contact support plan', description: 'Identify what to do when the urge to contact hits: who to call, what to read, where to go, what to remind yourself.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 5: Healing and Rebuilding After Trauma Bonds
    {
      id: 'healing-after-trauma-bond',
      moduleId: 'trauma-bonding',
      title: 'Healing and Rebuilding After Trauma Bonds',
      description: 'Focus on long-term healing: processing grief, rebuilding identity, understanding your vulnerability to future trauma bonds, and learning what healthy love actually feels like.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Process grief related to the abusive relationship',
        'Rebuild identity after enmeshment with an abuser',
        'Understand vulnerability factors for future trauma bonding',
        'Learn to recognise healthy love and distinguish it from trauma bonds',
      ],
      prerequisites: ['breaking-trauma-bond'],
      contraindications: [],
      segments: [
        {
          id: 'hatb-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Grounded', value: 1 }, { label: 'Cautiously hopeful', value: 3 }, { label: 'Somewhat heavy', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'hatb-psychoed', type: 'psychoeducation', title: 'Rebuilding After the Bond', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Grieving the Relationship', text: 'Even abusive relationships involve real grief when they end. You may grieve: the person you thought they were (the "good" version), the future you imagined together, the time and energy you invested, the version of yourself you lost in the relationship, the innocence of believing it was love. This grief is valid. Allowing it does not mean the abuse was acceptable. It means you are human, and humans grieve loss — even complicated loss. The grief may come in waves, often triggered by the idealisation that is part of withdrawal. Let it come. It is part of healing.' },
            { heading: 'Rebuilding Your Identity', text: 'After a trauma bond, many people struggle with the question "Who am I?" The abuser often systematically dismantled your identity — criticising your interests, isolating you from friends, making you doubt your perceptions. Rebuilding starts with small acts of reclamation: Reconnect with activities you enjoyed before the relationship. Re-establish contact with people you were isolated from. Make small decisions for yourself without consulting anyone. Pay attention to what you like, want, and feel — your preferences matter.', keyIdeas: [
              'Grief after an abusive relationship is valid and necessary',
              'You are grieving what you hoped the relationship would be, not the abuse itself',
              'Identity rebuilding starts with small acts of autonomy',
              'Your vulnerability to future trauma bonds decreases as you heal your attachment wounds',
              'Healthy love feels calm and safe — if it feels like a roller coaster, pay attention',
            ] },
            { heading: 'Understanding Your Vulnerability', text: 'You are not to blame for being trauma bonded. However, understanding what made you vulnerable can protect you in the future. Common vulnerability factors include: insecure attachment from childhood (especially anxious attachment), previous experiences of abuse or neglect, codependency patterns, low self-esteem or external referencing, isolation or limited support systems, a belief that love should be intense and dramatic. Addressing these underlying factors through therapy, this program, and intentional self-work is the best protection against future trauma bonds.' },
            { heading: 'What Healthy Love Actually Feels Like', text: 'After a trauma bond, healthy love can feel "boring" or "flat" because your nervous system has been calibrated to chaos. Healthy love feels like: safety, not excitement born of fear; consistency, not unpredictability; respect for your boundaries, not testing of them; encouragement of your independence, not isolation; accountability for mistakes, not blame-shifting; calm, not walking on eggshells. If it feels too calm, that may be a good sign. Your nervous system needs to recalibrate to recognise safety as desirable rather than boring.' },
          ] },
        },
        {
          id: 'hatb-journal', type: 'journal', title: 'Healing Reflections', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'What do you need to grieve about this relationship? Let yourself name it without minimising.',
            'Who were you before this relationship? What did you enjoy? What were your dreams? How can you begin to reconnect with that person?',
            'What vulnerability factors do you recognise in yourself? How might you address them?',
            'Describe what you now know healthy love looks like. How does it differ from what you experienced in the trauma bond?',
          ], privacyNote: 'Private and stored on your device.' },
        },
        {
          id: 'hatb-reflection', type: 'reflection', title: 'Module Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What is the most important thing you have learned in this module?',
            'How has your understanding of your experience changed?',
            'What is one act of kindness you can offer yourself right now?',
          ] },
        },
        {
          id: 'hatb-quiz', type: 'quiz', title: 'Module Review', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Healthy love, compared to a trauma bond, typically feels:', options: ['More exciting and intense', 'Calm, safe, and consistent', 'Boring and not worth having', 'Exactly the same'], correctIndex: 1, explanation: 'Healthy love is characterised by safety, consistency, and respect. After a trauma bond, this can initially feel "boring" because the nervous system has been calibrated to chaos. The calm is actually the goal, not a problem.' },
            { question: 'Grieving an abusive relationship:', options: ['Means the abuse was not that bad', 'Is a sign of weakness', 'Is a valid and necessary part of healing', 'Should be avoided'], correctIndex: 2, explanation: 'Grief after an abusive relationship is valid. You grieve the person you thought they were, the future you imagined, and the parts of yourself you lost. Allowing this grief is essential for healing.' },
          ] },
        },
        {
          id: 'hatb-action', type: 'action-plan', title: 'Your Healing Path', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one healing action to focus on:', options: [
            { id: 'identity-reclaim', label: 'One act of identity reclamation', description: 'Do one thing this week that reconnects you with who you were before the relationship — an old hobby, a friend, a place you loved.' },
            { id: 'therapy-research', label: 'Research trauma-informed therapy', description: 'Look into therapists who specialise in trauma bonds and abuse recovery. You deserve professional support.' },
            { id: 'safe-love-list', label: 'Write your "what I deserve" list', description: 'Write a list of what you deserve in a relationship. Read it daily.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },
  ],
}

export default traumaBonding
