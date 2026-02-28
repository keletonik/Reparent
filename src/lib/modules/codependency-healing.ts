import type { Module } from '../types'

const codependencyHealing: Module = {
  id: 'codependency-healing',
  title: 'Healing Codependency',
  description: 'Understand codependent patterns rooted in childhood survival, reclaim your sense of self, and learn to love without losing yourself. Build interdependence instead of enmeshment through six evidence-based sessions drawing from Mellody, Beattie, and Walker.',
  icon: 'users',
  order: 15,
  category: 'skills',
  prerequisites: ['attachment-foundations'],
  sessions: [
    // SESSION 1: What Is Codependency?
    {
      id: 'codependency-understanding',
      moduleId: 'codependency-healing',
      title: 'What Is Codependency?',
      description: 'Learn what codependency actually is, how it develops in childhood, and why it feels like love even when it costs you everything.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Define codependency using Mellody\'s five core symptoms framework',
        'Distinguish codependency from healthy caregiving',
        'Trace codependent patterns back to childhood origins',
        'Identify personal codependent patterns without shame',
      ],
      prerequisites: [],
      contraindications: ['If you are in a relationship involving domestic violence, please access DV resources first. This module is educational and does not replace a safety plan.'],
      segments: [
        {
          id: 'cu-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we explore this topic? Codependency touches on deep relational patterns, and it is normal for this to bring up emotions.', options: [{ label: 'Calm and curious', value: 1 }, { label: 'A little uneasy but okay', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Quite distressed', value: 7 }, { label: 'Very distressed — I need support now', value: 9 }] },
        },
        {
          id: 'cu-psychoed', type: 'psychoeducation', title: 'Understanding Codependency', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Codependency Really Means', text: 'Codependency is a pattern where your sense of self, worth, and emotional stability becomes excessively dependent on another person. You organise your life around managing their feelings, fixing their problems, or preventing their disapproval — often at the expense of your own needs, identity, and wellbeing. Pia Mellody, one of the pioneering researchers in this field, identified five core symptoms of codependency: (1) Difficulty experiencing appropriate levels of self-esteem — your worth comes from external sources. (2) Difficulty setting functional boundaries — you either have no boundaries or build walls. (3) Difficulty owning your own reality — you second-guess your perceptions, needs, and feelings. (4) Difficulty acknowledging and meeting your own needs and wants — you may not even know what you need. (5) Difficulty expressing your reality moderately — you swing between extremes of under-sharing and emotional flooding.' },
            { heading: 'How Codependency Develops in Childhood', text: 'Codependency typically develops when a child learns that love is conditional — that they must earn it by being useful, managing a parent\'s emotions, or suppressing their own needs. Melody Beattie, author of "Codependent No More," describes how children in dysfunctional families learn to focus outward because focusing inward is either dangerous or futile. In families affected by addiction, mental illness, narcissism, or chronic conflict, the child often takes on a caretaking role far too early. They become the "parentified child" — the little adult who monitors everyone\'s emotional temperature and adjusts their behaviour to keep the peace. The child learns a devastating equation: "I am valuable when I am needed. I am loveable when I am useful. I am safe when I am invisible." This becomes the template for all future relationships.', keyIdeas: [
              'Codependency is a learned survival strategy, not a character flaw',
              'It often develops in families with addiction, mental illness, narcissism, or emotional neglect',
              'The "helper" role can feel like identity rather than a choice',
              'Codependency and anxious attachment frequently overlap',
              'Mellody: codependency is a disease of "lost selfhood"',
            ] },
            { heading: 'Caretaking vs Caregiving', text: 'There is a crucial difference between caretaking and caregiving. Caregiving is healthy: you offer support from a place of fullness, with clear boundaries, and you respect the other person\'s autonomy. Caretaking is codependent: you take over another person\'s responsibilities, you give from a place of emptiness or fear, you feel resentful but cannot stop, and you need the other person to need you. Caregiving says: "I see you are struggling. How can I support you?" Caretaking says: "I will fix this for you because I cannot tolerate your discomfort — and because being needed is how I feel worthy."' },
            { heading: 'External Referencing', text: 'One of the hallmark features of codependency is "external referencing" — the habit of looking outside yourself to determine how you feel, what you think, and what you should do. Instead of checking in with your own internal compass, you scan the faces of others, read the room, and calibrate yourself accordingly. This develops when a child\'s internal experience was consistently invalidated, dismissed, or punished. Over time, the child learns that their own perceptions are unreliable, and they must rely on external cues to navigate the world. Recovery from codependency fundamentally involves learning to trust your own internal experience again.' },
          ] },
        },
        {
          id: 'cu-interactive', type: 'interactive', title: 'Codependency Pattern Check', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'CodependencyReflection', config: { patterns: ['I feel responsible for other people\'s feelings', 'I have difficulty identifying what I feel or need', 'I say yes when I mean no', 'I feel guilty when I do something for myself', 'I attract people who need rescuing', 'I feel empty or lost when I am not in a relationship', 'I try to control situations to feel safe', 'I tolerate treatment I know is unacceptable', 'I apologise excessively', 'I have difficulty making decisions without consulting others'] }, instructions: 'Reflect on these common codependent patterns. Rate each from 0 (not at all like me) to 5 (very much like me). This is not a diagnosis — it is an invitation to honest self-awareness. There are no right or wrong answers.' },
        },
        {
          id: 'cu-journal', type: 'journal', title: 'Your Codependency Story', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Do you tend to feel responsible for other people\'s emotions? When did this pattern start? Can you trace it back to a specific relationship or family dynamic?',
            'What happens to your sense of self when you are not in a relationship or not needed by someone? Describe the feeling in your body.',
            'What needs of your own have you been ignoring or minimising? If you struggle to answer this, that itself is important information.',
            'Mellody describes codependency as "lost selfhood." What parts of yourself have you lost or hidden in order to maintain relationships?',
          ], privacyNote: 'These reflections are deeply personal and stored only on your device. No one will see them unless you choose to share.' },
        },
        {
          id: 'cu-quiz', type: 'quiz', title: 'Codependency Awareness Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Codependency is best described as:', options: ['Being a caring person', 'Organising your life around managing another person at the expense of yourself', 'A personality disorder listed in the DSM', 'Being in a committed relationship'], correctIndex: 1, explanation: 'Codependency is a relational pattern where your identity and worth become excessively tied to managing another person\'s life and emotions, at the cost of your own needs. It is not a formal diagnosis but a well-documented clinical pattern.' },
            { question: 'According to Pia Mellody, which is NOT one of the five core symptoms of codependency?', options: ['Difficulty with self-esteem', 'Difficulty setting boundaries', 'Excessive self-confidence', 'Difficulty owning your own reality'], correctIndex: 2, explanation: 'Mellody\'s five core symptoms are: difficulty with self-esteem, difficulty setting boundaries, difficulty owning your own reality, difficulty meeting your own needs, and difficulty expressing yourself moderately. Excessive self-confidence is actually the opposite of the self-esteem difficulties seen in codependency.' },
            { question: 'The key difference between caretaking and caregiving is:', options: ['Caretaking is more generous', 'Caregiving respects autonomy and comes from fullness; caretaking comes from fear and need', 'There is no real difference', 'Caregiving means you do less for others'], correctIndex: 1, explanation: 'Caregiving is healthy support offered from a place of choice and fullness, respecting the other person\'s autonomy. Caretaking is driven by fear, enmeshment, and the need to be needed — it often disrespects both people\'s boundaries.' },
          ] },
        },
        {
          id: 'cu-action', type: 'action-plan', title: 'First Steps in Awareness', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, begin building awareness of your codependent patterns:', options: [
            { id: 'body-check', label: 'Check in with yourself 3 times daily', description: 'Set reminders to ask yourself: "What am I feeling right now? What do I need?" — without consulting anyone else.' },
            { id: 'notice-caretaking', label: 'Notice one caretaking moment each day', description: 'When you catch yourself fixing, rescuing, or managing someone else\'s emotions, pause and note it without judgement.' },
            { id: 'external-ref', label: 'Track external referencing', description: 'Notice when you look to others to decide how you should feel or what you should do. Simply observe the pattern.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 2: Enmeshment vs Interdependence
    {
      id: 'reclaiming-self',
      moduleId: 'codependency-healing',
      title: 'Reclaiming Your Self: Enmeshment vs Interdependence',
      description: 'Rebuild your identity outside of caretaking roles and learn the critical difference between enmeshment and healthy interdependence.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Identify where you have lost yourself in relationships',
        'Understand enmeshment vs interdependence as a spectrum',
        'Begin rebuilding a sense of self separate from others',
        'Recognize the body sensations of enmeshment',
      ],
      prerequisites: ['codependency-understanding'],
      contraindications: [],
      segments: [
        {
          id: 'rs-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling today?', options: [{ label: 'Calm and grounded', value: 1 }, { label: 'A bit nervous', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'rs-psychoed', type: 'psychoeducation', title: 'Enmeshment vs Interdependence', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Is Enmeshment?', text: 'Enmeshment is when the boundaries between you and another person are so blurred that you cannot tell where you end and they begin. Their mood becomes your mood. Their problems become your emergency. Their approval becomes your oxygen. Salvador Minuchin, the family therapist who coined the term, described enmeshed family systems as ones where individuality is sacrificed for the illusion of closeness. Enmeshment feels like love — it even feels like the deepest kind of love — but it is actually a loss of self. The intensity of enmeshment is often mistaken for intimacy. But true intimacy requires two separate people choosing to be close. Enmeshment involves two people who have merged into one — with one person usually doing most of the disappearing.' },
            { heading: 'The Interdependence Alternative', text: 'Interdependence means two whole people choosing to share their lives while maintaining their individual identities, needs, and boundaries. You can be close without being consumed. You can love without disappearing. The healthy relationship spectrum runs from isolation (complete disconnection) through independence (functional but limited closeness) to interdependence (healthy closeness with maintained identity) to enmeshment (merged identity, lost boundaries). Most people healing from codependency initially swing from enmeshment to isolation, believing that distance equals safety. The goal is to find the middle ground of interdependence.', keyIdeas: [
              'Enmeshment: "I need you to be okay so I can be okay"',
              'Interdependence: "I care about your wellbeing AND I am responsible for my own"',
              'You cannot pour from an empty cup — this is not a cliche, it is a clinical fact',
              'Healthy love does not require self-abandonment',
              'Interdependence requires knowing who you are separate from your relationships',
            ] },
            { heading: 'Signs You Have Lost Yourself', text: 'You cannot name your own hobbies or interests outside the relationship. You feel guilty when you spend time alone. You automatically defer to the other person\'s preferences. You feel empty or purposeless when they are not around. You monitor their mood to decide how you should feel. You have difficulty answering "What do you want?" without considering someone else first. You feel responsible for fixing their problems. You apologise for having needs. You feel selfish when you prioritise yourself, even in small ways.' },
            { heading: 'Self-Abandonment Patterns', text: 'Codependency researcher Ross Rosenberg describes the core of codependency as "self-love deficit disorder" — a chronic pattern of abandoning yourself in favour of others. Self-abandonment shows up in many forms: ignoring your physical needs (hunger, rest, health), suppressing your emotions to keep the peace, betraying your values to maintain a relationship, giving up activities and friendships that matter to you, tolerating treatment you know is unacceptable, telling yourself your needs do not matter. Each act of self-abandonment reinforces the childhood belief: "I am not worth protecting."' },
          ] },
        },
        {
          id: 'rs-breathing', type: 'breathing', title: 'Centering Breath — Coming Home to Yourself', estimatedMinutes: 3,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'This breath helps you return to yourself. As you breathe, notice that you are a separate person with your own body, your own breath, your own life. Place one hand on your chest. This is YOUR body. These are YOUR lungs. This is YOUR life. You exist independently of anyone else.' },
        },
        {
          id: 'rs-journal', type: 'journal', title: 'Rediscovering You', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Who were you before you started organising your life around others? What did you enjoy? What were you passionate about?',
            'What are three things you want, need, or feel right now — without considering anyone else\'s reaction? If this question is hard, notice that difficulty.',
            'Where in your life are you currently abandoning yourself? What would it look like to stop?',
            'What would your life look like if you gave yourself the same care, attention, and loyalty you give to others?',
          ], privacyNote: 'Your reflections are private.' },
        },
        {
          id: 'rs-quiz', type: 'quiz', title: 'Interdependence Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: '"I need them to be okay so I can be okay" is an example of:', options: ['Healthy empathy', 'Interdependence', 'Enmeshment', 'Deep love'], correctIndex: 2, explanation: 'When your emotional state is entirely dependent on another person\'s wellbeing, that is enmeshment — a loss of boundaries between self and other. Healthy empathy allows you to care without absorbing.' },
            { question: 'Self-abandonment in codependency looks like:', options: ['Taking a day off work', 'Consistently ignoring your own needs to manage another person\'s emotions', 'Setting healthy boundaries', 'Asking for help when you need it'], correctIndex: 1, explanation: 'Self-abandonment is the chronic pattern of suppressing, ignoring, or betraying your own needs, feelings, and values in order to maintain a relationship or keep someone else comfortable.' },
          ] },
        },
        {
          id: 'rs-action', type: 'action-plan', title: 'One Step Back to You', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, take one step toward reclaiming your identity:', options: [
            { id: 'solo-activity', label: 'Do one activity alone that you enjoy', description: 'Reconnect with your own interests without seeking approval or company. Notice how it feels.' },
            { id: 'need-expression', label: 'Express one need without apologising', description: 'Practice stating what you want clearly and without guilt. "I need..." not "Sorry, but could you maybe..."' },
            { id: 'mood-separation', label: 'Notice when you absorb someone else\'s mood and name it', description: 'Say to yourself: "That is their feeling, not mine. I can care without carrying."' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 3: The Fawn Response and People-Pleasing
    {
      id: 'fawn-response-codep',
      moduleId: 'codependency-healing',
      title: 'The Fawn Response & People-Pleasing',
      description: 'Understand how the fawn trauma response drives people-pleasing as a survival strategy and learn to distinguish fear-based compliance from genuine generosity.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Identify the fawn response as a trauma survival strategy (Walker)',
        'Distinguish genuine kindness from fear-based compliance',
        'Map personal people-pleasing patterns to their origins',
        'Understand the neurobiological basis of the fawn response',
      ],
      prerequisites: ['reclaiming-self'],
      contraindications: [],
      segments: [
        {
          id: 'fr-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we explore people-pleasing patterns?', options: [{ label: 'Calm and ready', value: 1 }, { label: 'A little anxious but willing', value: 3 }, { label: 'Somewhat uncomfortable', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'fr-psychoed', type: 'psychoeducation', title: 'Understanding the Fawn Response', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Fourth Survival Response', text: 'Pete Walker, author of "Complex PTSD: From Surviving to Thriving," identified the fawn response as the fourth survival response alongside fight, flight, and freeze. When a child faces a threatening caregiver, their nervous system evaluates options: Fight — confront the threat (may result in escalation and punishment). Flight — run away (not possible for a child who depends on the caregiver). Freeze — shut down, go numb (protects from pain but does not resolve the threat). Fawn — appease the threatening person by becoming whatever they want you to be. For many children, especially those with narcissistic, volatile, or addicted caregivers, fawning becomes the primary survival strategy because it is the only one that actually works. The child cannot fight a parent, cannot flee their home, and freezing does not stop the parent\'s behaviour — but becoming pleasing, helpful, and compliant often reduces the threat.' },
            { heading: 'People-Pleasing vs Genuine Kindness', text: 'Genuine kindness comes from overflow — you give because you want to, from a place of fullness. People-pleasing comes from fear — you give because you are afraid of what will happen if you do not. The key questions to distinguish them: Do I have a genuine choice here, or does saying no feel impossible? Am I giving from desire or from dread? Would I still do this if there were no consequences for saying no? Do I feel energised or depleted after giving? Kindness includes the freedom to say no. People-pleasing feels compulsive — driven by anxiety about rejection, abandonment, conflict, or someone being upset with you.', keyIdeas: [
              'The fawn response is a nervous system survival strategy, not weakness or cowardice',
              'People-pleasers are often the most perceptive people in the room — that hypervigilance kept them safe',
              'Walker: "Fawn types seek safety by merging with the wishes, needs, and demands of others"',
              'The cost: chronic resentment, burnout, lost identity, inauthentic relationships',
              'Recovery involves learning that you can survive someone else\'s displeasure',
            ] },
            { heading: 'The Neurobiology of Fawning', text: 'When the fawn response is triggered, the brain\'s social engagement system (mediated by the ventral vagal nerve) is being hijacked for survival purposes. Instead of using social skills for genuine connection, the person uses them as a defence. The amygdala signals threat, and the prefrontal cortex calculates that appeasement is the safest option. Over time, this pathway becomes automatic — you may not even recognise you are doing it. The body\'s stress response (cortisol, adrenaline) is activated, but instead of fighting or fleeing, the energy is channelled into reading the room, anticipating needs, and performing agreeability. This is why people-pleasers often feel physically exhausted: their nervous system is in chronic low-grade survival mode, even in ordinary social situations.' },
            { heading: 'External Referencing as Hypervigilance', text: 'Walker describes the codependent/fawn type as someone who has become "an expert at reading others." This is not a gift — it is a survival skill born of necessity. The child had to become a human radar system, constantly scanning for signs of their caregiver\'s mood so they could adjust their behaviour in time. In adulthood, this shows up as: chronic monitoring of other people\'s facial expressions and tone, difficulty making decisions without first consulting others, changing your opinion to match the room, feeling that your identity shifts depending on who you are with, difficulty knowing what you actually think or feel when alone.' },
          ] },
        },
        {
          id: 'fr-interactive', type: 'interactive', title: 'People-Pleasing Pattern Mapper', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'PatternMapper', config: { scenarios: ['A friend asks you for a favour when you are exhausted', 'Your partner expresses disappointment', 'A colleague takes credit for your work', 'Someone gives you a compliment', 'You need to cancel plans', 'You disagree with someone you respect'] }, instructions: 'For each scenario, notice your automatic response. Is your first impulse to manage the other person\'s feelings? Rate how hard it would be to respond authentically versus appeasingly.' },
        },
        {
          id: 'fr-journal', type: 'journal', title: 'Your People-Pleasing Story', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Think of a recent time you said yes when you wanted to say no. What were you afraid would happen if you declined? Name the specific fear.',
            'Who in your childhood did you most need to please to feel safe? What did you learn about your own needs from that relationship?',
            'Walker describes the fawn type as someone whose identity "becomes an amalgam of the preferences of those around them." Does this resonate? When are you most yourself, and when are you most performing?',
            'If you could speak honestly to someone you often people-please for, what would you say? Write it here, uncensored.',
          ], privacyNote: 'Your reflections are completely private and stored only on your device.' },
        },
        {
          id: 'fr-quiz', type: 'quiz', title: 'Fawn Response Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'The fawn response is best described as:', options: ['A personality weakness', 'A survival strategy developed in response to threat', 'Something only women experience', 'Ordinary good manners'], correctIndex: 1, explanation: 'The fawn response is a nervous system survival strategy, not a personality trait. It develops when a child learns that pleasing others is the safest way to avoid harm or gain love.' },
            { question: 'The key difference between kindness and people-pleasing is:', options: ['Kind people are nicer', 'People-pleasers give more', 'Kindness includes the freedom to say no; people-pleasing feels compulsive', 'There is no real difference'], correctIndex: 2, explanation: 'Genuine kindness comes from choice and overflow. People-pleasing is driven by fear and lacks the freedom to decline without guilt or anxiety.' },
            { question: 'Pete Walker identifies the fawn response as:', options: ['A personality disorder', 'The fourth survival response alongside fight, flight, and freeze', 'A sign of emotional intelligence', 'A healthy relationship skill'], correctIndex: 1, explanation: 'Walker identified fawn as the fourth survival response, describing how some individuals cope with threat by automatically merging with the wishes and demands of others to ensure safety.' },
          ] },
        },
      ],
    },

    // SESSION 4: Recovery — Rebuilding Your Internal Reference Point
    {
      id: 'codep-recovery-internal',
      moduleId: 'codependency-healing',
      title: 'Recovery: Rebuilding Your Internal Reference Point',
      description: 'Learn the stages of codependency recovery and begin the practice of internal referencing — learning to trust your own perceptions, feelings, and needs.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the stages of codependency recovery',
        'Begin practicing internal referencing',
        'Learn to identify and name your own emotions',
        'Understand the role of grief in codependency recovery',
      ],
      prerequisites: ['fawn-response-codep'],
      contraindications: [],
      segments: [
        {
          id: 'cri-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we explore recovery?', options: [{ label: 'Hopeful and grounded', value: 1 }, { label: 'A mix of hopeful and scared', value: 3 }, { label: 'Somewhat overwhelmed', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'cri-psychoed', type: 'psychoeducation', title: 'The Stages of Recovery', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Recovery Is a Process, Not an Event', text: 'Melody Beattie describes codependency recovery as happening in stages. Stage 1: Awareness — You begin to recognise your codependent patterns. This is where you are now. It can be painful because you start seeing how much of your life has been organised around others. Stage 2: Grief — You mourn the childhood you did not have, the relationships that were not what you thought, and the years spent in self-abandonment. This stage is essential but often skipped. Stage 3: Core Work — You actively rebuild your sense of self, learn to set boundaries, and develop the capacity for healthy intimacy. Stage 4: Integration — You begin to live from a new foundation of self-awareness and self-worth. Old patterns still surface, but you catch them faster and choose differently. Recovery is not linear. You will cycle through these stages multiple times, each time going deeper.' },
            { heading: 'Learning to Trust Your Own Experience', text: 'The foundational task of codependency recovery is learning to become your own reference point — what therapists call "internal referencing." This means learning to check in with yourself to determine: What am I feeling right now? What do I need? What do I think about this situation? Is this okay with me? For codependents, these questions can feel genuinely impossible at first, because the neural pathways for self-awareness have been neglected in favour of the hypervigilance pathways used to monitor others. This is normal. It takes practice to rebuild these pathways.', keyIdeas: [
              'Recovery begins with awareness — and awareness can be uncomfortable',
              'Grief is a necessary part of recovery, not a setback',
              'You are rebuilding neural pathways — this takes time and patience',
              'Internal referencing is a skill that strengthens with practice',
              'Beattie: "Detaching does not mean not caring. It means learning to love, care, and be involved without going crazy."',
            ] },
            { heading: 'The HALT Check', text: 'A simple but powerful internal referencing tool is the HALT check. Several times a day, pause and ask yourself: Am I Hungry? Am I Angry? Am I Lonely? Am I Tired? Codependents are often so disconnected from their own physical and emotional needs that these basic signals go unnoticed. Learning to attend to HALT needs is the foundation of self-care — and self-care is the antidote to self-abandonment.' },
            { heading: 'The Grief of Recovery', text: 'One of the most painful aspects of codependency recovery is the grief. You may grieve: the childhood you deserved but did not get, the parent you needed but did not have, the years spent in self-abandonment, the relationships you thought were love but were enmeshment, the identity you built around being needed. This grief is not a sign that something is wrong. It is a sign that something is right — you are finally seeing clearly, and what you see is painful. Allow the grief. It is the doorway to genuine healing.' },
          ] },
        },
        {
          id: 'cri-breathing', type: 'breathing', title: 'Self-Connection Breath', estimatedMinutes: 3,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 6 }, durationSeconds: 120, instruction: 'Place one hand on your heart and one on your belly. As you breathe, direct your attention inward. Ask yourself gently: "What am I feeling right now?" There is no wrong answer. Simply notice.' },
        },
        {
          id: 'cri-journal', type: 'journal', title: 'Internal Referencing Practice', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Right now, without checking with anyone else: What are you feeling? What do you need? If these questions feel hard, describe that difficulty.',
            'What stage of recovery do you think you are in right now? Awareness, grief, core work, or integration? What tells you this?',
            'What do you need to grieve as part of your recovery? What losses have you been avoiding?',
            'Beattie writes that codependents "learn to take care of themselves, no matter what." What would genuine self-care look like for you today — not the Instagram version, but the real, unglamorous kind?',
          ], privacyNote: 'Private and stored only on your device.' },
        },
        {
          id: 'cri-quiz', type: 'quiz', title: 'Recovery Knowledge Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'The first stage of codependency recovery is:', options: ['Setting perfect boundaries', 'Awareness — recognising your patterns', 'Ending all relationships', 'Forgetting the past'], correctIndex: 1, explanation: 'Recovery begins with awareness — seeing your codependent patterns clearly, often for the first time. This awareness is the foundation for all other recovery work.' },
            { question: 'Internal referencing means:', options: ['Checking with others before making decisions', 'Looking inward to determine your own feelings, needs, and perceptions', 'Ignoring other people\'s opinions completely', 'Being selfish'], correctIndex: 1, explanation: 'Internal referencing is the practice of consulting your own experience — feelings, needs, perceptions — rather than automatically deferring to others. It is the antidote to the external referencing that characterises codependency.' },
          ] },
        },
        {
          id: 'cri-action', type: 'action-plan', title: 'Internal Referencing This Week', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one internal referencing practice for this week:', options: [
            { id: 'halt-daily', label: 'HALT check three times daily', description: 'Set reminders to check: Am I Hungry, Angry, Lonely, or Tired? Attend to whatever you discover.' },
            { id: 'feeling-pause', label: 'The 10-second pause', description: 'Before answering any question or request, pause for 10 seconds and check in with yourself first. "What do I actually want here?"' },
            { id: 'grief-space', label: 'Create space for grief', description: 'Set aside 15 minutes this week to sit with whatever grief arises about your codependency patterns. You do not need to fix it — just feel it.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 5: Detachment with Love
    {
      id: 'codep-detachment',
      moduleId: 'codependency-healing',
      title: 'Detachment with Love',
      description: 'Learn the practice of healthy detachment — releasing responsibility for others without withdrawing love. Understand the difference between detachment and abandonment.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Define healthy detachment as a codependency recovery skill',
        'Distinguish detachment from abandonment and coldness',
        'Practice releasing outcomes you cannot control',
        'Understand enabling vs supporting',
      ],
      prerequisites: ['codep-recovery-internal'],
      contraindications: [],
      segments: [
        {
          id: 'cd-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A little uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'cd-psychoed', type: 'psychoeducation', title: 'The Practice of Healthy Detachment', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Detachment Is (and Is Not)', text: 'Beattie describes detachment as "releasing, or detaching from, a person or problem in love." It does not mean you stop caring. It means you stop taking responsibility for things that are not yours to carry. Detachment IS: allowing people to experience the consequences of their own choices, recognising what you can and cannot control, keeping your own emotional centre even when others are in chaos, loving someone without managing their life. Detachment IS NOT: coldness, cruelty, or indifference; abandoning someone in crisis; punishing someone by withdrawing; building walls to avoid intimacy. The difference is intention. Detachment comes from a place of love and self-respect. Withdrawal comes from a place of punishment or self-protection through isolation.' },
            { heading: 'Enabling vs Supporting', text: 'Enabling is doing for others what they could and should do for themselves. It removes the natural consequences of their behaviour and prevents growth. Supporting is offering help that empowers the other person\'s autonomy and growth. Enabling says: "I will fix this for you" (because I cannot tolerate your discomfort). Supporting says: "I believe in your ability to handle this. How can I help?" The hardest part: enabling often feels like love. It feels generous and selfless. But it actually communicates: "I do not believe you are capable." It keeps the other person dependent and yourself indispensable — which is exactly what the codependent pattern requires.', keyIdeas: [
              'Detachment is an act of respect — for yourself and for the other person',
              'You can love someone and refuse to manage their life',
              'Enabling prevents growth in both people',
              'The serenity prayer captures the essence: accept what you cannot change, change what you can',
              'Detachment gets easier with practice — the guilt decreases over time',
            ] },
            { heading: 'The Three Circles', text: 'A practical detachment tool is the Three Circles exercise. Draw three concentric circles. The inner circle is "Things I can control" (your behaviour, your words, your boundaries, your self-care). The middle circle is "Things I can influence" (offering perspective, modelling healthy behaviour, making requests). The outer circle is "Things I cannot control" (other people\'s feelings, choices, reactions, growth). Codependents spend most of their energy in the outer circle. Recovery means redirecting that energy to the inner circle.' },
          ] },
        },
        {
          id: 'cd-reflection', type: 'reflection', title: 'What Is Yours to Carry?', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'Think of a relationship where you feel responsible for the other person\'s wellbeing. What in that situation is truly yours to manage, and what belongs to them?',
            'Where in your life are you enabling rather than supporting? What would change if you stepped back?',
            'What would it feel like to love someone fully without managing their life? What comes up for you?',
          ] },
        },
        {
          id: 'cd-journal', type: 'journal', title: 'Practicing Detachment', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Write about a situation where you are currently over-functioning for someone. What would healthy detachment look like? What fears arise when you imagine stepping back?',
            'Beattie writes: "Let go of your expectations for other people." What expectations are you holding onto? What would releasing them feel like?',
            'Complete this sentence three times: "It is not my responsibility to..."',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'cd-quiz', type: 'quiz', title: 'Detachment Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Healthy detachment means:', options: ['Not caring about anyone', 'Releasing responsibility for things that are not yours while maintaining love', 'Punishing someone by withdrawing', 'Never helping anyone'], correctIndex: 1, explanation: 'Detachment is the practice of releasing responsibility for things you cannot control — other people\'s feelings, choices, and growth — while maintaining love and connection. It is not coldness; it is respect.' },
            { question: 'Enabling differs from supporting because:', options: ['Enabling gives more help', 'Supporting is selfish', 'Enabling removes natural consequences and prevents growth; supporting empowers autonomy', 'There is no meaningful difference'], correctIndex: 2, explanation: 'Enabling does for others what they should do for themselves, removing consequences and preventing growth. Supporting offers help that empowers the other person\'s own capacity and autonomy.' },
          ] },
        },
        {
          id: 'cd-action', type: 'action-plan', title: 'Detachment Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, practice healthy detachment:', options: [
            { id: 'three-circles', label: 'Use the Three Circles daily', description: 'Each morning, sort your concerns into "can control," "can influence," and "cannot control." Focus your energy on the inner circle.' },
            { id: 'enabling-stop', label: 'Identify one enabling behaviour and pause it', description: 'Find one thing you regularly do for someone that they could do for themselves. Step back and let them handle it.' },
            { id: 'outcome-release', label: 'Practice releasing one outcome', description: 'Choose a situation where you are trying to control the outcome. Consciously say: "I release the outcome. This is not mine to manage."' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 6: Building Interdependent Relationships
    {
      id: 'codep-interdependence',
      moduleId: 'codependency-healing',
      title: 'Building Interdependent Relationships',
      description: 'Apply everything you have learned to build genuinely interdependent relationships where both people thrive. Learn the markers of healthy relating after codependency.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Identify the markers of genuinely interdependent relationships',
        'Understand what healthy closeness looks like after codependency',
        'Build a personal recovery maintenance plan for codependency',
        'Practice communicating needs without caretaking the other person\'s response',
      ],
      prerequisites: ['codep-detachment'],
      contraindications: [],
      segments: [
        {
          id: 'ci-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we bring this module together?', options: [{ label: 'Grounded and hopeful', value: 1 }, { label: 'Mixed feelings', value: 3 }, { label: 'Somewhat overwhelmed', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'ci-psychoed', type: 'psychoeducation', title: 'What Interdependence Looks Like', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Markers of Interdependence', text: 'An interdependent relationship has identifiable markers: Both people maintain separate identities, interests, and friendships. Both people can spend time alone without anxiety or guilt. Disagreements are resolved through dialogue, not through one person abandoning their position. Both people take responsibility for their own emotions while remaining empathic to each other. Needs are expressed directly, not through hints, tests, or manipulation. Both people can tolerate the other person\'s separateness without feeling abandoned. There is mutual respect for boundaries. Help is offered, not imposed. Love does not require self-sacrifice.' },
            { heading: 'Red Flags in Recovery', text: 'As you recover from codependency, watch for these patterns in new or existing relationships: Feeling drawn to someone because they "need" you. Confusing intensity with intimacy. Moving very fast emotionally or physically. Difficulty maintaining your recovery practices when you are in a relationship. Finding yourself reverting to external referencing. Feeling that the relationship cannot survive if you set boundaries. Mistaking someone\'s dependence on you for love.', keyIdeas: [
              'Interdependence feels less intense than enmeshment — and that is a good sign',
              'Healthy love can feel "boring" to someone accustomed to chaos',
              'Recovery is not about finding the right person — it is about becoming the right you',
              'You teach people how to treat you by what you tolerate',
              'Beattie: "The surest way to make yourself crazy is to get involved in other people\'s business"',
            ] },
            { heading: 'Communicating Needs After Codependency', text: 'One of the most challenging skills in codependency recovery is learning to state your needs clearly without then immediately caretaking the other person\'s reaction. The pattern: "I need more alone time" → (panic) → "But it is fine, never mind, I do not want to upset you." The practice: "I need more alone time." Full stop. Sit with the discomfort. Let the other person have their reaction. Their reaction is theirs to manage. Your need is yours to honour.' },
          ] },
        },
        {
          id: 'ci-interactive', type: 'interactive', title: 'Needs Communication Practice', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'NeedsCommunicator', config: {}, instructions: 'Practice stating a need using the format: "I need [specific need]" — without explaining, apologising, or adding qualifiers. Then notice the urge to caretake the imagined response.' },
        },
        {
          id: 'ci-journal', type: 'journal', title: 'Your Interdependence Vision', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Describe your ideal interdependent relationship. What does a Tuesday evening look like? A disagreement? A moment of closeness?',
            'What codependent patterns are you most likely to fall back into under stress? What is your plan when this happens?',
            'Write a compassionate letter to yourself from the future — from the version of you who has built genuinely healthy, interdependent relationships. What does that person want you to know?',
          ], privacyNote: 'Private and stored on your device.' },
        },
        {
          id: 'ci-quiz', type: 'quiz', title: 'Codependency Module Review', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'In an interdependent relationship:', options: ['One person always compromises', 'Both people maintain separate identities while choosing closeness', 'Partners share all interests and friendships', 'One person manages the other\'s emotions'], correctIndex: 1, explanation: 'Interdependence means two whole people choosing closeness while maintaining their individual identities, needs, boundaries, and sense of self. Neither person disappears for the relationship.' },
            { question: 'A sign that codependency recovery is working is:', options: ['You no longer care about anyone', 'Healthy relationships feel less intense — and that feels okay', 'You have perfect boundaries at all times', 'You never feel the pull toward old patterns'], correctIndex: 1, explanation: 'Recovery does not mean the absence of old patterns — it means healthy relationships feel less chaotically intense than enmeshed ones, and you learn to recognise that calm closeness is actually more connected than dramatic intensity.' },
          ] },
        },
        {
          id: 'ci-action', type: 'action-plan', title: 'Your Recovery Commitment', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'As you complete this module, choose one ongoing recovery practice:', options: [
            { id: 'daily-checkin', label: 'Daily self-check-in practice', description: 'Spend 5 minutes each day asking yourself: What am I feeling? What do I need? Is there anything I am abandoning in myself right now?' },
            { id: 'boundary-weekly', label: 'Weekly boundary review', description: 'Each week, review your boundaries. Where did you hold them? Where did you let them slide? What do you want to do differently?' },
            { id: 'support-group', label: 'Seek codependency support', description: 'Consider joining a CODA (Codependents Anonymous) group, reading Beattie\'s "Codependent No More," or exploring therapy with a codependency-informed therapist.' },
          ], timeHorizonDays: 30 },
        },
      ],
    },
  ],
}

export default codependencyHealing
