import type { Module } from '../types'

const boundariesCommunication: Module = {
  id: 'boundaries-communication',
  title: 'Boundaries & Needs Communication',
  description: 'Learn to set healthy boundaries across every domain of life — physical, emotional, digital, time, material, and sexual. Understand porous, rigid, and healthy boundaries, practice saying no without guilt, and master the DEAR MAN framework. Five sessions from foundational understanding to real-world application.',
  icon: 'fence',
  order: 20,
  category: 'growth',
  prerequisites: ['self-compassion'],
  sessions: [
    // SESSION 1: What Boundaries Actually Are
    {
      id: 'boundary-basics',
      moduleId: 'boundaries-communication',
      title: 'What Boundaries Actually Are',
      description: 'Understand boundaries as self-care actions (not punishments), learn the types of boundaries, and distinguish between porous, rigid, and healthy boundaries.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Define boundaries as actions you take, not demands you make',
        'Learn the six types of boundaries',
        'Distinguish porous, rigid, and healthy boundaries',
        'Understand why boundaries are especially hard for people with insecure attachment',
      ],
      prerequisites: [],
      contraindications: ['If you are in a relationship where setting boundaries has resulted in punishment, threats, or violence, please access domestic violence resources. This is education about healthy relationships, not a safety plan for abusive ones.'],
      segments: [
        {
          id: 'bb-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring boundaries?', options: [{ label: 'Calm and ready', value: 1 }, { label: 'A bit nervous', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'bb-psychoed', type: 'psychoeducation', title: 'Boundaries Are Self-Care', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Boundaries Are What YOU Will Do', text: 'A boundary is not a demand you place on another person. It is a statement about what you will do to protect your wellbeing. "I need you to stop yelling" is a request. "If yelling continues, I will leave the room" is a boundary. This distinction matters because boundaries you can enforce do not require the other person\'s cooperation. You cannot control what others do, but you can control what you accept, tolerate, and participate in. Boundaries are not walls — they are fences with gates. They do not block connection; they define the conditions under which connection is safe.' },
            { heading: 'Six Types of Boundaries', text: 'Physical boundaries: Your body, personal space, touch preferences, sleep needs, physical safety. "I am not comfortable being hugged by people I do not know well." Emotional boundaries: How much emotional labour you take on, what feelings you absorb, when you engage in heavy conversations. "I care about you, but I cannot be your only emotional support." Digital boundaries: Phone checking behaviour, social media interactions, texting response expectations, online privacy. "I am not going to check my ex\'s social media." Time boundaries: How you allocate your time, when you are available, how you protect rest and recovery. "I do not take work calls after 7pm." Material boundaries: Your possessions, money, resources, lending and borrowing. "I am not able to lend money right now." Sexual boundaries: Your consent, preferences, comfort levels, and limits. "I need to feel emotionally safe before being physically intimate."' },
            { heading: 'Porous, Rigid, and Healthy', text: 'Porous boundaries (too open): You say yes to everything. You absorb others\' emotions. You share too much too quickly. You tolerate disrespect because confrontation feels worse. You have difficulty saying no. Common in: anxious attachment, codependency, fawn response. Rigid boundaries (too closed): You shut people out. You rarely share personal information. You keep everyone at arm\'s length. You say no to everything, including support. You interpret all requests as demands. Common in: avoidant attachment, post-trauma hypervigilance. Healthy boundaries (flexible): You can say yes AND no based on the situation. You share appropriately with appropriate people. You protect yourself without building walls. You can be close without losing yourself. You adjust boundaries based on the relationship and context.', keyIdeas: [
              'A boundary is an action you take, not a demand you make',
              'Boundaries protect relationships — they do not destroy them',
              'Porous boundaries lose you; rigid boundaries isolate you; healthy boundaries protect you while allowing connection',
              'For anxious attachment, the hardest boundaries are usually emotional and digital',
              'Guilt about boundaries is normal — it is not a reason to abandon them',
            ] },
            { heading: 'Why Boundaries Are Hard', text: 'For people with insecure attachment, boundaries are hard because: Anxious attachment learned that closeness requires surrender — any distance feels like a threat to the bond. Avoidant attachment learned that walls equal safety — flexible boundaries feel dangerously vulnerable. Codependency learned that being needed IS your identity — boundaries mean losing your purpose. The fawn response learned that other people\'s needs come first — your own needs are selfish. In all cases, setting boundaries requires tolerating the discomfort that the attachment system generates. The guilt, the fear, the anxiety — these are your nervous system\'s old programming, not evidence that you are doing something wrong.' },
          ] },
        },
        {
          id: 'bb-interactive', type: 'interactive', title: 'Boundary Type Assessment', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'BoundaryAssessment', config: { types: ['physical', 'emotional', 'digital', 'time', 'material', 'sexual'] }, instructions: 'For each type of boundary, rate yourself from "very porous" to "very rigid." Notice where you tend toward each extreme and where you find a healthy middle ground.' },
        },
        {
          id: 'bb-journal', type: 'journal', title: 'Your Boundary Story', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Which type of boundary is hardest for you? (Physical, emotional, digital, time, material, sexual?) Why?',
            'Were boundaries modelled or respected in your childhood? What did you learn about saying no?',
            'Think of a relationship where your boundaries are consistently porous. What are you afraid will happen if you set a firm boundary?',
            'What would your life look like if you consistently held healthy boundaries in all six areas?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'bb-quiz', type: 'quiz', title: 'Boundary Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'A healthy boundary is:', options: ['A punishment for bad behaviour', 'A demand that others change', 'An action you take to protect your wellbeing', 'Something that should cause no discomfort'], correctIndex: 2, explanation: 'A boundary is an action you take to protect yourself, not a demand or punishment placed on someone else. Boundaries often cause discomfort (especially guilt), but that discomfort is not a reason to abandon them.' },
            { question: 'Porous boundaries are common in:', options: ['Secure attachment', 'Anxious attachment and codependency', 'Only in children', 'People who are selfish'], correctIndex: 1, explanation: 'Porous boundaries — saying yes to everything, absorbing others\' emotions, tolerating disrespect — are common in anxious attachment and codependency because these patterns prioritise maintaining the bond over protecting the self.' },
            { question: 'Boundaries protect relationships because:', options: ['They keep people at a safe distance', 'They define the conditions under which connection can be safe and sustainable', 'They punish bad behaviour', 'They do not actually protect relationships'], correctIndex: 1, explanation: 'Boundaries protect relationships by defining what is acceptable, preventing resentment from building, and ensuring both people can show up authentically. Relationships without boundaries breed resentment and burnout.' },
          ] },
        },
      ],
    },

    // SESSION 2: Saying No Without Guilt
    {
      id: 'saying-no',
      moduleId: 'boundaries-communication',
      title: 'Saying No Without Guilt',
      description: 'Build the capacity to say no, tolerate the guilt that follows, and learn practical scripts for boundary-setting in common situations.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand guilt as a normal part of boundary-setting, not a stop sign',
        'Learn practical no-saying techniques and scripts',
        'Practice tolerating boundary-setting discomfort',
        'Distinguish people-pleasing guilt from genuine moral concern',
      ],
      prerequisites: ['boundary-basics'],
      contraindications: [],
      segments: [
        {
          id: 'sn-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Ready', value: 1 }, { label: 'A bit anxious', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'sn-psychoed', type: 'psychoeducation', title: 'The Guilt Is Not a Stop Sign', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Why Saying No Feels Dangerous', text: 'For people-pleasers and codependents, saying no triggers the same neural alarm system that was activated in childhood when displeasing a caregiver meant danger. The guilt, anxiety, and dread you feel when setting a boundary are your nervous system\'s old survival programming — not evidence that you are doing something wrong. The thought "I should not feel guilty" makes it worse. Instead, try: "Of course I feel guilty — I was trained to believe that my needs are less important than everyone else\'s. The guilt is my old programming. It is not a stop sign. It is a sign that I am doing something new."' },
            { heading: 'Guilt vs Moral Intuition', text: 'People-pleasers often confuse guilt with moral guidance. Genuine moral concern: "This action would cause real harm to someone." People-pleasing guilt: "Someone might be disappointed in me." "They might think I am selfish." "They might not like me anymore." The test: Would you feel guilty if a friend did this same thing? If your friend said "I cannot come to the party tonight, I need rest," would you think they were selfish? Probably not. The standard you apply to yourself is different from the standard you apply to others. That gap is the codependency.', keyIdeas: [
              'Guilt after setting boundaries is normal — it is not evidence of wrongdoing',
              'The guilt decreases with practice — the first boundaries are the hardest',
              'You can feel guilty AND hold the boundary',
              'A boundary without guilt is easy; a boundary despite guilt is brave',
              'The people who get upset when you set boundaries are the ones who benefited from your lack of them',
            ] },
            { heading: 'Practical No-Saying Scripts', text: 'The Simple No: "No, I cannot do that. Thank you for thinking of me." No explanation needed. The Delayed No: "Let me think about that and get back to you." This buys time for people who automatically say yes. The Partial No: "I cannot do X, but I could do Y." This offers an alternative without sacrificing your boundary. The No with Validation: "I can see this matters to you. I am not able to help with this right now." The Firm No: "I have said no, and I need that to be respected." For repeated boundary violations. The key: you do not need to explain, justify, apologise for, or defend your no. "No" is a complete sentence.' },
            { heading: 'Building the No Muscle', text: 'Like any skill, saying no gets easier with practice. Start with low-stakes situations: decline a minor invitation, let a call go to voicemail, choose a restaurant you actually want. Each small no builds the neural pathways that make larger boundaries possible. Track your no-saying: each time you say no, note it. Notice the guilt. Notice that the world did not end. Notice that the relationship survived (and if it did not, that relationship was built on your compliance, not your personhood).' },
          ] },
        },
        {
          id: 'sn-interactive', type: 'interactive', title: 'No-Saying Practice', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'NoSayingPractice', config: { scenarios: ['A friend asks to borrow money', 'Your partner wants to go out when you need rest', 'A family member criticises your life choices', 'A colleague asks you to take on extra work', 'Someone you are dating pushes a physical boundary'] }, instructions: 'For each scenario, practice choosing an appropriate no-saying script. Notice the discomfort that arises and practice sitting with it.' },
        },
        {
          id: 'sn-journal', type: 'journal', title: 'Your Relationship with No', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'When was the last time you said no and felt guilty? What happened? Did the feared consequence actually occur?',
            'Is there a no you need to say right now that you have been avoiding? What is stopping you? What would saying it cost? What is not saying it costing?',
            'Complete this sentence: "If I said no more often, I am afraid that..." Now examine that fear. Is it your inner child talking or your adult assessment?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'sn-quiz', type: 'quiz', title: 'No-Saying Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'The guilt after setting a boundary is:', options: ['A sign you are being selfish', 'Normal — it is old programming from a time when your compliance was necessary for safety', 'A reason to withdraw the boundary', 'Evidence you should not have said no'], correctIndex: 1, explanation: 'Boundary-setting guilt is your nervous system\'s old programming — not evidence of wrongdoing. The guilt diminishes with practice as you build evidence that setting boundaries does not lead to the catastrophe your inner child fears.' },
            { question: 'When saying no, you need to:', options: ['Provide a detailed justification', 'Apologise profusely', 'Simply say no — "no" is a complete sentence', 'Offer an alternative every time'], correctIndex: 2, explanation: 'You do not need to explain, justify, or apologise for your no. "No" is a complete sentence. Over-explaining often comes from the belief that your needs require permission from others.' },
          ] },
        },
        {
          id: 'sn-action', type: 'action-plan', title: 'No Practice This Week', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Practice saying no this week:', options: [
            { id: 'three-nos', label: 'Say three small nos', description: 'Decline three minor requests or invitations this week. Notice the guilt. Notice the world does not end.' },
            { id: 'delayed-no', label: 'Use the "delayed no" three times', description: 'When someone asks something of you, say "Let me think about it" instead of immediately saying yes. Check in with yourself before responding.' },
            { id: 'firm-no', label: 'Set one boundary you have been avoiding', description: 'Identify one boundary you have been meaning to set. Use a no-saying script. Hold it.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 3: The DEAR MAN Framework
    {
      id: 'dear-man',
      moduleId: 'boundaries-communication',
      title: 'DEAR MAN: Communicating Boundaries Effectively',
      description: 'Master DBT\'s DEAR MAN framework for setting boundaries assertively, clearly, and with self-respect. Learn to communicate needs without threats or over-explaining.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Master the DEAR MAN interpersonal effectiveness framework',
        'Practice building DEAR MAN scripts for real situations',
        'Understand how to maintain boundaries when they are challenged',
        'Learn the difference between assertive, passive, and aggressive boundary-setting',
      ],
      prerequisites: ['saying-no'],
      contraindications: [],
      segments: [
        {
          id: 'dm-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Ready to practice', value: 1 }, { label: 'A bit nervous', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'dm-psychoed', type: 'psychoeducation', title: 'The DEAR MAN Framework', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'DEAR MAN: Your Boundary-Setting Script', text: 'DEAR MAN comes from Dialectical Behaviour Therapy (DBT) and provides a structured framework for assertive communication: D — Describe: State the facts of the situation objectively, without judgement. "When I receive texts at 11pm asking me to solve a work problem..." E — Express: Share how you feel using "I" statements. "I feel overwhelmed and like I cannot disconnect from work." A — Assert: Clearly state what you want or need. "I need my evenings to be work-free after 8pm." R — Reinforce: Explain the positive outcome for both people. "This will help me be more focused and effective during work hours, which benefits both of us." M — (stay) Mindful: Stay focused on your goal. Do not get sidetracked by the other person\'s deflections, guilt trips, or counter-complaints. A — Appear confident: Even if you feel anxious inside, use a calm, steady voice, make eye contact, and stand or sit up straight. Your body language communicates as much as your words. N — Negotiate: Be willing to find a middle ground where possible. "Would it work to text me about urgent issues, and save non-urgent things for the morning?"' },
            { heading: 'When Boundaries Are Challenged', text: 'When you set a boundary, the other person may: push back or argue, try to guilt you, dismiss or minimise your need, get angry, give you the silent treatment, or test the boundary to see if you will fold. This does not mean your boundary was wrong. It means the other person is adjusting to a new reality. Hold the boundary anyway. Repeat your position calmly if needed (the "broken record" technique). You do not need to argue, defend, or justify. If the person consistently violates your boundaries despite clear communication, that is information about the relationship, not about the validity of your boundary.', keyIdeas: [
              'DEAR MAN provides structure when boundary-setting feels overwhelming',
              'Describe facts, not interpretations. Express feelings, not accusations',
              'Stay mindful of your goal — do not get pulled into tangential arguments',
              'Appearing confident communicates that you take your own needs seriously',
              'The "broken record" technique: calmly repeat your boundary without escalating',
            ] },
            { heading: 'Boundary-Setting Communication Styles', text: 'Passive: "I guess it is fine... never mind." (No boundary set. Resentment builds.) Aggressive: "You have no right to call me at 11pm! What is wrong with you?" (Boundary set through attack. Relationship damaged.) Passive-aggressive: "Sure, I will just be available 24/7 since apparently my time does not matter." (Resentment disguised as compliance.) Assertive (DEAR MAN): "When I receive late-night texts about work, I feel overwhelmed. I need evenings free after 8pm. This will help me be more effective during work hours." The assertive style is the only one that protects both you and the relationship.' },
          ] },
        },
        {
          id: 'dm-interactive', type: 'interactive', title: 'DEAR MAN Script Builder', estimatedMinutes: 10,
          content: { type: 'interactive', component: 'DearManBuilder', config: {}, instructions: 'Choose a boundary you need to set — with a partner, friend, family member, or colleague. Build a complete DEAR MAN script. Then practice saying it aloud (even if just to yourself). Hearing your own voice set the boundary is part of the training.' },
        },
        {
          id: 'dm-journal', type: 'journal', title: 'Assertive Communication Practice', estimatedMinutes: 7,
          content: { type: 'journal', prompts: [
            'Write a DEAR MAN script for a boundary you need to set. Include all seven elements.',
            'Which part of DEAR MAN is hardest for you? Assert (stating what you need)? Appear confident (when you feel anxious)? Negotiate (without caving)?',
            'Think of a time someone challenged a boundary you set. How did you respond? How would you respond now, using what you have learned?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'dm-quiz', type: 'quiz', title: 'DEAR MAN Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'In DEAR MAN, the "M" stands for:', options: ['Make demands', 'Stay Mindful — focused on your goal without getting sidetracked', 'Manage the other person', 'Minimise conflict'], correctIndex: 1, explanation: 'The M in DEAR MAN stands for "stay Mindful" — remaining focused on your goal and not getting pulled into tangential arguments, guilt trips, or deflections.' },
            { question: 'When someone challenges your boundary, you should:', options: ['Abandon the boundary to keep the peace', 'Escalate to aggression', 'Calmly repeat your position without arguing or defending (broken record technique)', 'Never speak to them again'], correctIndex: 2, explanation: 'The "broken record" technique involves calmly, firmly repeating your boundary without escalating, defending, or engaging in arguments. If someone consistently violates your boundaries, that is information about the relationship.' },
          ] },
        },
        {
          id: 'dm-action', type: 'action-plan', title: 'DEAR MAN Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Apply DEAR MAN this week:', options: [
            { id: 'dm-real', label: 'Use DEAR MAN to set one real boundary', description: 'Identify a boundary you need to set. Write the script. Deliver it. Notice what happens — both externally and in your body.' },
            { id: 'dm-practice-mirror', label: 'Practice DEAR MAN in the mirror', description: 'Build three DEAR MAN scripts for different situations. Practice saying them aloud in the mirror. Work on appearing confident even when you feel anxious.' },
            { id: 'dm-challenge-response', label: 'Prepare for boundary challenges', description: 'For the boundary you plan to set, write out 3 possible push-back responses you might receive. Prepare your calm, firm response to each.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 4: Boundary Violations and Responses
    {
      id: 'boundary-violations',
      moduleId: 'boundaries-communication',
      title: 'When Boundaries Are Violated',
      description: 'Learn to recognise and respond to boundary violations, understand escalation patterns, and develop consequences that protect your wellbeing.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Recognise different types of boundary violations',
        'Understand the difference between boundaries and ultimatums',
        'Learn graduated responses to violations',
        'Know when a boundary violation signals an unsafe relationship',
      ],
      prerequisites: ['dear-man'],
      contraindications: ['If boundary violations in your relationship involve threats, violence, or coercion, please access DV resources.'],
      segments: [
        {
          id: 'bv-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Grounded', value: 1 }, { label: 'A bit tense', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'bv-psychoed', type: 'psychoeducation', title: 'Responding to Violations', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Types of Boundary Violations', text: 'Boundary violations range from minor to severe: Unintentional: The person genuinely did not know or forgot. Response: Restate the boundary clearly and kindly. "I want to remind you that I need evenings free." Testing: The person pushes the boundary to see if you will enforce it. Response: Hold the boundary firmly. "I mentioned I need evenings free. That has not changed." Dismissive: The person acknowledges the boundary but does not take it seriously. Response: Name the pattern. "I have stated this boundary three times. I need you to take it seriously." Deliberate: The person knowingly and intentionally violates the boundary. Response: Enforce consequences. "Because this boundary continues to be violated, I am going to..."' },
            { heading: 'Boundaries vs Ultimatums', text: 'A boundary says: "This is what I will do to protect my wellbeing." An ultimatum says: "This is what will happen to you if you do not comply." The difference is locus of control. A boundary is about your behaviour; an ultimatum is about controlling theirs. Boundary: "If you continue to yell, I will leave the room." Ultimatum: "If you yell at me, I will leave you." However, there is a point where boundaries and consequences naturally overlap. If someone repeatedly violates a fundamental boundary (fidelity, safety, respect), the consequence may include ending the relationship. That is not an ultimatum — it is the natural outcome of their choices.', keyIdeas: [
              'Graduated responses prevent over-reaction AND under-reaction',
              'Boundaries are about your behaviour; ultimatums are about controlling theirs',
              'Consistent enforcement teaches people that your boundaries are real',
              'If someone repeatedly violates boundaries despite clear communication, that is diagnostic',
              'You cannot set a boundary with someone and simultaneously guarantee they will like it',
            ] },
            { heading: 'When Violations Signal Danger', text: 'Some boundary violations are red flags for unsafe relationships: the person becomes threatening or violent when you set a boundary, they punish you for having boundaries (silent treatment, rage, withdrawal of affection), they systematically undermine your boundaries while appearing to accept them, they use your vulnerability against you, they escalate when you try to enforce consequences. In healthy relationships, people may initially push back on new boundaries but ultimately respect them. In unhealthy relationships, boundary-setting is met with punishment. If setting a boundary puts you in danger, your priority is safety, not the boundary. Seek professional support.' },
          ] },
        },
        {
          id: 'bv-journal', type: 'journal', title: 'Your Boundary Violations', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Think of a boundary that is regularly violated. Which type of violation is it? (Unintentional, testing, dismissive, or deliberate?) What is the appropriate response?',
            'Have you ever confused a boundary with an ultimatum? How can you reframe it?',
            'What are your non-negotiable boundaries — the ones that, if violated repeatedly, would lead you to exit the relationship? Name them clearly.',
            'How do the people in your life typically respond when you set boundaries? What does their response tell you about the relationship?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'bv-quiz', type: 'quiz', title: 'Violation Response Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'The difference between a boundary and an ultimatum is:', options: ['There is no difference', 'A boundary is about your behaviour; an ultimatum is about controlling theirs', 'Boundaries are passive; ultimatums are aggressive', 'Ultimatums are always wrong'], correctIndex: 1, explanation: 'A boundary focuses on what you will do to protect yourself. An ultimatum focuses on controlling the other person\'s behaviour. The locus of control is the key distinction.' },
            { question: 'When someone is deliberately violating your boundaries, the appropriate response is:', options: ['Give up and accept it', 'Escalate to aggression', 'Enforce previously stated consequences', 'Pretend it did not happen'], correctIndex: 2, explanation: 'Deliberate, repeated boundary violations require the enforcement of consequences. This is not punishment — it is the natural outcome of the other person\'s choice to disregard your clearly stated needs.' },
          ] },
        },
      ],
    },

    // SESSION 5: Boundaries as a Lifestyle
    {
      id: 'boundaries-lifestyle',
      moduleId: 'boundaries-communication',
      title: 'Boundaries as a Lifestyle: Integration',
      description: 'Integrate boundary skills into your daily life. Learn to set digital boundaries, protect your energy, and build a personal boundaries maintenance plan.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Set and maintain digital boundaries',
        'Build an energy and time protection plan',
        'Integrate boundaries into all relationship contexts',
        'Create a personal boundaries maintenance plan',
      ],
      prerequisites: ['boundary-violations'],
      contraindications: [],
      segments: [
        {
          id: 'bl-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we integrate?', options: [{ label: 'Confident', value: 1 }, { label: 'Hopeful', value: 3 }, { label: 'A bit overwhelmed', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'bl-psychoed', type: 'psychoeducation', title: 'Living with Boundaries', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Digital Boundaries', text: 'For people with anxious attachment or codependency, digital boundaries are often the most challenging and most important. Common digital boundary struggles: compulsive phone checking (waiting for replies), social media monitoring of ex-partners or current partners, feeling obligated to respond immediately to every message, sharing too much too quickly in digital communication, using digital communication to avoid face-to-face conversations. Healthy digital boundaries include: specific "phone-free" times (meals, bedtime), not checking social media of people you are trying to distance from, allowing a response time that feels comfortable rather than reactive, being intentional about what you share and with whom online, turning off notifications that trigger anxiety.' },
            { heading: 'Energy and Time Protection', text: 'Boundaries are not just about relationships — they are about how you protect your energy, time, and inner peace. Energy boundaries: Limiting time with people who drain you. Saying no to emotional labour you did not agree to. Protecting recovery time. Not absorbing the news cycle. Time boundaries: Scheduling rest as non-negotiable. Protecting creative or reflective time. Not overcommitting. Building buffer time between obligations. Inner peace boundaries: Limiting exposure to content that triggers you. Not engaging in arguments that will not resolve anything. Choosing which battles are worth your energy.', keyIdeas: [
              'Digital boundaries are especially critical for anxious attachment and codependency',
              'Boundaries extend to how you protect your time, energy, and inner peace',
              'Boundaries are a practice — some days you will hold them well, other days less so',
              'Self-compassion is essential when boundaries slip — criticising yourself helps no one',
              'The people who respect your boundaries are the people who deserve your energy',
            ] },
            { heading: 'Your Boundaries Maintenance Plan', text: 'Like any skill, boundaries need ongoing maintenance. Weekly: Review your boundaries. Where did you hold them? Where did they slip? What needs adjusting? Monthly: Assess whether your boundaries are serving you. Are they too rigid? Too porous? Adjust as needed. Ongoing: Practice self-compassion when boundaries are imperfect. Notice the guilt and let it pass. Celebrate every boundary you hold, especially the hard ones. Remember: boundaries are not about being perfect. They are about being intentional about what you accept and participate in.' },
          ] },
        },
        {
          id: 'bl-interactive', type: 'interactive', title: 'Personal Non-Negotiables', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'NonNegotiablesBuilder', config: {}, instructions: 'Build your list of non-negotiable boundaries — the ones you commit to holding regardless of who pushes back. Include at least one from each category: physical, emotional, digital, time, material.' },
        },
        {
          id: 'bl-journal', type: 'journal', title: 'Module Integration', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'What are your top 5 non-negotiable boundaries going forward? Write them clearly.',
            'What digital boundaries do you need to implement? Be specific.',
            'How has your understanding of boundaries changed through this module?',
            'Write a commitment to yourself: "I am worth protecting. I commit to..."',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'bl-reflection', type: 'reflection', title: 'Module Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What is the most important thing you learned about boundaries?',
            'What is one boundary you are proud of setting recently?',
            'What ongoing practice will help you maintain healthy boundaries?',
          ] },
        },
        {
          id: 'bl-quiz', type: 'quiz', title: 'Module Review', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Boundaries are best maintained through:', options: ['Perfect enforcement at all times', 'Regular review, self-compassion when they slip, and ongoing practice', 'Never thinking about them', 'Rigid rules that never change'], correctIndex: 1, explanation: 'Boundaries are a practice, not a perfection. They need regular review, adjustment based on context, and self-compassion when they inevitably slip. The goal is consistent intention, not flawless execution.' },
          ] },
        },
        {
          id: 'bl-action', type: 'action-plan', title: 'Your Boundaries Going Forward', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose your ongoing boundaries practice:', options: [
            { id: 'weekly-review', label: 'Weekly boundary review', description: 'Each week, review your boundaries: Where did you hold them? Where did they slip? What needs adjusting? No judgement — just awareness.' },
            { id: 'digital-reset', label: 'Implement one digital boundary', description: 'Choose one digital boundary to implement this week: phone-free meals, no social media checking of specific people, a response-time policy for texts.' },
            { id: 'non-negotiables-card', label: 'Carry your non-negotiables', description: 'Write your top 5 non-negotiable boundaries on a card or note in your phone. Read them daily as a reminder of what you will protect.' },
          ], timeHorizonDays: 30 },
        },
      ],
    },
  ],
}

export default boundariesCommunication
