import type { Module } from '../types'

const selfCompassion: Module = {
  id: 'self-compassion',
  title: 'Self-Compassion & Compassionate Mind',
  description: 'Build a relationship with yourself based on kindness rather than criticism. Drawing from Kristin Neff\'s three components of self-compassion, Paul Gilbert\'s compassion-focused therapy, and the neuroscience of the threat/drive/soothe systems. Five sessions that transform your inner relationship.',
  icon: 'flower',
  order: 17,
  category: 'growth',
  prerequisites: ['orientation-safety'],
  sessions: [
    // SESSION 1: Meeting Your Inner Critic
    {
      id: 'inner-critic',
      moduleId: 'self-compassion',
      title: 'Meeting Your Inner Critic',
      description: 'Understand self-criticism, its origins in the threat system, and begin to respond with self-compassion using Neff\'s three-component framework.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Identify self-critical patterns and their origins',
        'Understand Neff\'s three components of self-compassion',
        'Learn the neuroscience of why self-criticism is counterproductive',
        'Practice one self-compassion exercise',
      ],
      prerequisites: [],
      contraindications: ['Warning: When you first practice self-compassion, you may experience "backdraft" — an initial increase in pain as defences soften. This is normal. Go slowly and use grounding if needed.'],
      segments: [
        {
          id: 'ic-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'ic-psychoed', type: 'psychoeducation', title: 'Self-Compassion vs Self-Criticism', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Problem with Self-Criticism', text: 'Self-criticism feels productive — as though beating yourself up will motivate you to be better. But neuroscience tells a different story. When you attack yourself ("I am too needy," "I am unlovable," "What is wrong with me?"), you activate the brain\'s threat detection system — the same system that responds to physical danger. Your amygdala fires, cortisol and adrenaline flood your system, and your prefrontal cortex (responsible for clear thinking and problem-solving) goes offline. Self-criticism puts you into fight-or-flight — against yourself. Research by Paul Gilbert shows that self-criticism is not merely unhelpful; it actively maintains depression, anxiety, shame, and unhealthy relationship patterns. For people with insecure attachment, self-criticism often echoes the voice of a critical, shaming, or dismissive caregiver — internalised as the "inner critic."' },
            { heading: 'Three Components of Self-Compassion (Neff)', text: 'Dr Kristin Neff\'s research identifies three interacting components of self-compassion: 1. Self-Kindness (vs Self-Judgement): Treating yourself as you would treat a good friend — actively soothing and comforting yourself rather than attacking. Instead of "What is wrong with you?" try "This is hard. What do you need right now?" 2. Common Humanity (vs Isolation): Remembering that suffering and imperfection are shared human experiences. You are not the only one who struggles. Suffering does not mean you are broken — it means you are human. 3. Mindful Awareness (vs Over-Identification): Holding difficult feelings with balanced awareness rather than being consumed by them or suppressing them. "I notice I am feeling shame" rather than "I AM shameful."', keyIdeas: [
              'Self-criticism activates the brain\'s threat system — it is neurologically counterproductive',
              'Self-compassion is NOT self-pity, self-indulgence, or letting yourself off the hook',
              'Research shows self-compassion INCREASES motivation and personal responsibility (Breines & Chen, 2012)',
              'Over 4,000 peer-reviewed studies link self-compassion to reduced anxiety, depression, and shame',
              'It is a skill that strengthens with practice, like a muscle',
            ] },
            { heading: 'Self-Compassion vs Self-Esteem', text: 'Self-esteem says: "I am good." Self-compassion says: "I am human." The problem with self-esteem is that it requires you to feel special or better than average — and it crumbles in the face of failure. Self-compassion is available in every moment, especially the worst moments, because it does not depend on performance. Neff\'s research shows that self-compassion provides the same emotional benefits as high self-esteem (reduced anxiety, increased wellbeing) without the downsides (narcissism, fragility, contingent self-worth). Self-compassion is particularly important for attachment healing because it provides the internal warmth that an attuned caregiver would have provided. You become your own secure base.' },
            { heading: 'The Backdraft Warning', text: 'When you first practice self-compassion, you may experience what Christopher Germer calls "backdraft" — an initial increase in emotional pain. This happens because self-compassion opens the door that self-criticism was keeping locked. When you offer yourself kindness for the first time, you may feel the full weight of how long you have been harsh with yourself, and grief or pain may flood in. This is not a sign that self-compassion is not working. It IS self-compassion working — softening armour that has been rigid for years. Go slowly. Use grounding tools. If backdraft is intense, it may be helpful to work with a therapist who can hold space for this process.' },
          ] },
        },
        {
          id: 'ic-interactive', type: 'interactive', title: 'Compassionate Letter', estimatedMinutes: 10,
          content: { type: 'interactive', component: 'CompassionateLetter', config: {}, instructions: 'Write a brief letter to yourself from the perspective of a deeply caring, wise friend who knows everything you have been through. This friend sees your struggles, understands your history, and holds no judgement — only warmth. Let them speak to you now.' },
        },
        {
          id: 'ic-journal', type: 'journal', title: 'Your Self-Talk', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'What does your inner critic say most often? Write down the specific phrases. Then ask: whose voice does the inner critic sound like?',
            'How would you respond if a friend said those same things about themselves? What would you say to them? Now — can you say that to yourself?',
            'Neff asks: "What do I actually need to hear right now?" Answer from your wisest, most compassionate self.',
            'If self-compassion feels uncomfortable or scary, explore that. What do you believe will happen if you stop being hard on yourself?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'ic-quiz', type: 'quiz', title: 'Self-Compassion Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Self-compassion differs from self-esteem because:', options: ['Self-compassion means you think you are better than others', 'Self-compassion is available in moments of failure, while self-esteem requires success', 'Self-esteem is healthier', 'There is no difference'], correctIndex: 1, explanation: 'Self-compassion is available in every moment — especially the worst moments — because it does not depend on performance or feeling special. Self-esteem requires positive evaluation and crumbles when you fail.' },
            { question: '"Backdraft" in self-compassion practice is:', options: ['A sign that self-compassion is dangerous', 'The initial increase in emotional pain as defences soften — a normal part of the process', 'Evidence that you should return to self-criticism', 'A rare and unusual experience'], correctIndex: 1, explanation: 'Backdraft is the normal experience of feeling more pain initially when you offer yourself kindness, because self-compassion opens the door that self-criticism was keeping closed. It is a sign the process is working, not failing.' },
            { question: 'The three components of self-compassion (Neff) are:', options: ['Self-esteem, optimism, and resilience', 'Self-kindness, common humanity, and mindful awareness', 'Positivity, confidence, and determination', 'Forgiveness, acceptance, and gratitude'], correctIndex: 1, explanation: 'Neff\'s three components are: self-kindness (treating yourself as you would a friend), common humanity (remembering suffering is shared), and mindful awareness (holding feelings in balance without over-identifying or suppressing).' },
          ] },
        },
      ],
    },

    // SESSION 2: Gilbert's Three Systems
    {
      id: 'three-systems',
      moduleId: 'self-compassion',
      title: 'Threat, Drive & Soothe: Your Three Emotion Systems',
      description: 'Learn Paul Gilbert\'s model of the three emotion regulation systems and understand why people with difficult childhoods live primarily in the threat system.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand Gilbert\'s three emotion regulation systems',
        'Identify which system dominates your life',
        'Learn how childhood shapes system balance',
        'Begin activating the soothing system deliberately',
      ],
      prerequisites: ['inner-critic'],
      contraindications: [],
      segments: [
        {
          id: 'ts-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'A bit on edge', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'ts-psychoed', type: 'psychoeducation', title: 'The Three Emotion Systems', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Three Systems That Run Your Life', text: 'Paul Gilbert, founder of Compassion-Focused Therapy (CFT), identified three major emotion regulation systems that evolved to help us survive and thrive: 1. The Threat System (red): Detects and responds to danger. Emotions: anxiety, anger, disgust, shame. Purpose: protect you from harm. Neurotransmitters: cortisol, adrenaline. 2. The Drive System (blue): Motivates pursuit of resources, achievement, and rewards. Emotions: excitement, ambition, desire, wanting. Purpose: acquire resources and status. Neurotransmitters: dopamine. 3. The Soothing System (green): Promotes rest, safety, connection, and contentment. Emotions: calm, peace, warmth, contentment. Purpose: rest, digest, connect, and recover. Neurotransmitters: oxytocin, endorphins. In a healthy, balanced life, all three systems function and interact. But for many people — especially those with difficult childhoods — the systems are out of balance.' },
            { heading: 'How Childhood Distorts the Balance', text: 'In secure attachment, the caregiver activates the child\'s soothing system through warmth, touch, and attuned responsiveness. This teaches the child that they can return to calm, that distress is temporary, and that connection is safe. When this does not happen — when the caregiver is the source of threat, or is unreliable, or is emotionally absent — the child\'s soothing system remains underdeveloped. Instead, the threat system becomes dominant and hyperactive, constantly scanning for danger. The drive system may also become overdeveloped as a compensatory strategy (achieving, performing, earning love through success). Many adults healing from attachment wounds live in a permanent state of threat-system activation — anxious, hypervigilant, shame-prone — with a soothing system they cannot access.', keyIdeas: [
              'The threat system is for protection; the drive system is for acquisition; the soothing system is for rest and connection',
              'Insecure attachment often creates an overdeveloped threat system and underdeveloped soothing system',
              'Self-criticism activates the threat system; self-compassion activates the soothing system',
              'The soothing system can be deliberately activated and strengthened through practice',
              'Gilbert: "Compassion is the antidote to shame because shame lives in the threat system and compassion activates the soothing system"',
            ] },
            { heading: 'Activating the Soothing System', text: 'The soothing system is activated by: safe physical touch (self-soothing touch, hugs, warm bath), warm vocal tone (including self-talk in a gentle voice), imagery (visualising a safe place, a compassionate figure, or warm light), slow breathing (especially exhale-dominant patterns), connection with safe people, nature and gentle movement, kindness — both received and given. The practice of self-compassion is essentially the deliberate activation of the soothing system in moments when the threat system has taken over. Over time, this strengthens the soothing system\'s neural pathways, making it easier to access calm and connection.' },
          ] },
        },
        {
          id: 'ts-breathing', type: 'breathing', title: 'Soothing System Activation', estimatedMinutes: 4,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 2, exhale: 7, holdAfter: 2 }, durationSeconds: 180, instruction: 'This breath deliberately activates your soothing system through the longer exhale. Place one hand on your heart and one on your belly. As you breathe, imagine warmth spreading from your hands through your body. You are safe in this moment.' },
        },
        {
          id: 'ts-journal', type: 'journal', title: 'Your System Balance', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Which of the three systems dominates your daily life? Threat (anxiety, vigilance, shame), drive (striving, achieving, restlessness), or soothe (calm, contentment, connection)?',
            'How was your soothing system shaped in childhood? Was it nurtured by a safe caregiver, or left underdeveloped?',
            'What activates your threat system most powerfully? What activates your soothing system?',
            'If you could spend more time in your soothing system, what would daily life feel like? What becomes possible from that place?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'ts-quiz', type: 'quiz', title: 'Three Systems Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'The soothing system is associated with:', options: ['Cortisol and adrenaline', 'Dopamine and ambition', 'Oxytocin, endorphins, calm, and connection', 'Anxiety and vigilance'], correctIndex: 2, explanation: 'The soothing system is mediated by oxytocin and endorphins, and produces feelings of calm, safety, warmth, and connection. It is the system that attuned caregivers activate in their children.' },
            { question: 'People with insecure attachment often have:', options: ['A balanced system', 'An overdeveloped soothing system', 'An overdeveloped threat system and underdeveloped soothing system', 'No emotion regulation systems'], correctIndex: 2, explanation: 'Insecure attachment often leads to a dominant threat system (chronic anxiety, hypervigilance, shame) because the caregiver did not adequately activate and develop the child\'s soothing system.' },
          ] },
        },
        {
          id: 'ts-action', type: 'action-plan', title: 'Soothing System Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, deliberately activate your soothing system:', options: [
            { id: 'soothe-daily', label: 'Three-minute soothing practice daily', description: 'Use the soothing breath, gentle self-touch, or compassionate self-talk for three minutes each morning. Build the neural pathways.' },
            { id: 'system-tracker', label: 'Track your system states', description: 'Three times daily, check: Am I in threat (anxious, tense), drive (striving, restless), or soothe (calm, connected)? Simply notice.' },
            { id: 'compassionate-voice', label: 'Change one self-critical statement daily', description: 'Catch one self-critical thought each day and respond with the voice of a compassionate friend.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 3: Compassion-Focused Therapy Exercises
    {
      id: 'cft-exercises',
      moduleId: 'self-compassion',
      title: 'Compassionate Mind Training',
      description: 'Practice core exercises from Compassion-Focused Therapy: the compassionate self, compassionate imagery, and the self-compassion break.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Practice the Compassionate Self exercise (Gilbert)',
        'Learn the Self-Compassion Break (Neff)',
        'Develop a compassionate inner voice',
        'Apply compassion to specific shame and self-criticism triggers',
      ],
      prerequisites: ['three-systems'],
      contraindications: ['If backdraft (increased pain) arises, pause, ground yourself, and go slower. You are not doing anything wrong.'],
      segments: [
        {
          id: 'ce-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Ready', value: 1 }, { label: 'A bit guarded', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'ce-psychoed', type: 'psychoeducation', title: 'Compassionate Mind Exercises', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Compassionate Self (Gilbert)', text: 'In Compassion-Focused Therapy, the "Compassionate Self" is a version of you that embodies wisdom, strength, warmth, and non-judgement. It is not imaginary — it is an aspect of you that you are learning to access deliberately. The practice: Close your eyes. Take slow, soothing breaths. Imagine your body filling with warmth, strength, and wisdom. You have experienced suffering, so you understand it. You have survived, so you are strong. You have the capacity for kindness. From this place — the Compassionate Self — turn toward whatever is causing you pain. What would this wise, warm, strong part of you say? How would they hold this situation? The Compassionate Self is not about being perfect. It is about approaching your own suffering with the same quality of attention you would offer someone you love.' },
            { heading: 'The Self-Compassion Break (Neff)', text: 'Neff\'s Self-Compassion Break is a simple practice you can use in any moment of suffering. It has three steps, corresponding to the three components: Step 1 — Mindfulness: "This is a moment of suffering." (Acknowledge the pain without over-identifying.) Step 2 — Common Humanity: "Suffering is part of being human. I am not alone in this." Step 3 — Self-Kindness: Place your hand on your heart and say: "May I be kind to myself in this moment. May I give myself what I need." You can adapt the phrases to whatever resonates: "This is really hard right now. Other people feel this way too. May I be gentle with myself."', keyIdeas: [
              'The Compassionate Self is not imaginary — it is an aspect of you that you can access',
              'The Self-Compassion Break can be used in any moment of suffering',
              'Physical touch (hand on heart) activates the soothing system physiologically',
              'These practices rewire the brain over time — they are not just nice ideas',
              'Neff: "With self-compassion, we give ourselves the same kindness we would give to a good friend"',
            ] },
            { heading: 'Applying Compassion to Shame', text: 'Shame is the primary emotion that self-compassion targets. Shame says: "I AM wrong. I am fundamentally flawed. If people saw the real me, they would reject me." Self-compassion responds: "I am a human being who has experienced pain. My responses make sense given my history. I deserve understanding, not attack." Gilbert\'s key insight: shame lives in the threat system. Compassion activates the soothing system. You cannot shame yourself into growth. You can only compassion yourself into it. When shame arises, the practice is: notice it (mindfulness), normalise it (common humanity: "Every human feels shame"), and respond to it with kindness (self-kindness: "What do I need right now?").' },
          ] },
        },
        {
          id: 'ce-interactive', type: 'interactive', title: 'Self-Compassion Break Practice', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'SelfCompassionBreak', config: {}, instructions: 'Think of something that is causing you pain right now. It does not need to be the biggest thing — start with moderate difficulty. Guide yourself through the three steps: 1. "This is a moment of suffering." 2. "Suffering is part of being human." 3. Place your hand on your heart: "May I be kind to myself."' },
        },
        {
          id: 'ce-journal', type: 'journal', title: 'Your Compassionate Voice', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Write from the perspective of your Compassionate Self to the part of you that is most struggling right now. What does your wise, warm self want that struggling part to know?',
            'What is the most shame-inducing thought you carry about yourself? Now respond to it using the three components: mindfulness, common humanity, and self-kindness.',
            'If compassion feels uncomfortable or fake, explore that. What do you believe about yourself that makes kindness feel undeserved?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'ce-quiz', type: 'quiz', title: 'Compassion Practice Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Gilbert\'s "Compassionate Self" exercise involves:', options: ['Pretending to be someone else', 'Accessing the wise, warm, strong part of yourself to approach suffering', 'Ignoring pain', 'Being perfect'], correctIndex: 1, explanation: 'The Compassionate Self exercise involves deliberately accessing the part of you that has wisdom (from experience), strength (from surviving), and warmth (from the capacity for kindness) to approach your own suffering with compassion.' },
            { question: 'Shame lives in the ___ system; compassion activates the ___ system:', options: ['Drive; threat', 'Soothe; drive', 'Threat; soothe', 'Drive; soothe'], correctIndex: 2, explanation: 'Shame is a threat-system emotion. Self-compassion activates the soothing system. This is why you cannot shame yourself into growth — but you can compassion yourself into it.' },
          ] },
        },
        {
          id: 'ce-action', type: 'action-plan', title: 'Compassion Practice Plan', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose your compassion practice for this week:', options: [
            { id: 'sc-break-daily', label: 'Self-Compassion Break once daily', description: 'Use Neff\'s three-step practice at least once each day when you notice suffering: mindfulness, common humanity, self-kindness.' },
            { id: 'compassionate-self-am', label: 'Morning Compassionate Self practice', description: 'Each morning, spend 3 minutes accessing your Compassionate Self. Start the day from warmth rather than threat.' },
            { id: 'shame-response', label: 'Respond to one shame moment with compassion', description: 'When shame arises this week, catch it and respond: "This is shame. Many people feel this. What do I need right now?"' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 4: Self-Compassion in Difficult Moments
    {
      id: 'sc-difficult-moments',
      moduleId: 'self-compassion',
      title: 'Self-Compassion When It Matters Most',
      description: 'Apply self-compassion to the hardest moments: when you have made a mistake, when old patterns resurface, when you feel unlovable, and when shame is overwhelming.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Apply self-compassion to real-life triggers',
        'Practice "soften, soothe, allow" for body-based shame',
        'Learn to respond to setbacks with compassion instead of criticism',
        'Understand self-compassion as an ongoing practice, not a destination',
      ],
      prerequisites: ['cft-exercises'],
      contraindications: [],
      segments: [
        {
          id: 'sdm-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Grounded', value: 1 }, { label: 'A bit raw', value: 3 }, { label: 'Somewhat heavy', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'sdm-psychoed', type: 'psychoeducation', title: 'Compassion for the Hard Moments', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'When You Have Made a Mistake', text: 'Self-compassion is not about avoiding accountability. In fact, Neff\'s research shows that self-compassionate people take MORE responsibility for their mistakes — because they are not so afraid of the shame that they need to deny, minimise, or blame-shift. The self-critical response to a mistake: "What is wrong with me? I always mess things up. I am a terrible person." The self-compassionate response: "I made a mistake. That feels bad. Making mistakes is human. What can I learn from this, and how can I make it right?" Self-compassion allows you to face your imperfections honestly because you know the inner critic will not destroy you for them.' },
            { heading: 'Soften, Soothe, Allow', text: 'Neff and Germer developed a body-based self-compassion practice for moments of intense emotion: SOFTEN: Locate the distress in your body. Where is it? Throat, chest, stomach? Gently soften around that area. Do not try to fix it — just release the tension around it. SOOTHE: Place your hand on the area or on your heart. Speak to yourself kindly: "This is hard. I care about this suffering. I am here for you." ALLOW: Allow the emotion to be present without trying to push it away or fix it. "I allow this feeling to be here. It will not destroy me. Feelings are visitors."', keyIdeas: [
              'Self-compassion INCREASES personal responsibility, not decreases it',
              '"Soften, soothe, allow" works with body-based shame and distress',
              'Self-compassion in setbacks prevents the "second arrow" — the suffering we add to suffering',
              'The practice is not about feeling good — it is about being with what is, with kindness',
              'Every moment of self-criticism is an opportunity to practice self-compassion',
            ] },
            { heading: 'When Old Patterns Return', text: 'In attachment healing, old patterns will resurface — guaranteed. You will catch yourself people-pleasing, or spiralling into anxious attachment, or building walls. The self-critical response: "I have not changed at all. All this work was for nothing." The self-compassionate response: "An old pattern showed up. That makes sense — these patterns are deeply wired. I notice it, which means I have grown. I will be gentle with myself as I redirect." Noticing the pattern IS progress. Responding to the relapse with compassion IS the practice. You are not failing — you are learning to catch yourself earlier and respond differently each time.' },
          ] },
        },
        {
          id: 'sdm-journal', type: 'journal', title: 'Compassion for Your Real Life', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'Think of a recent mistake or setback. Write the self-critical version of what happened. Then write the self-compassionate version. Notice the difference in how each feels in your body.',
            'Practice "soften, soothe, allow" with something you are carrying right now. Where does the distress live in your body? What does it need?',
            'When old attachment patterns resurface, what does your inner critic say? Rewrite that message from your Compassionate Self.',
            'The Buddhist idea of the "second arrow" says: the first arrow is the pain (unavoidable); the second arrow is the suffering we add to it through self-criticism (optional). Where are you shooting second arrows at yourself?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'sdm-quiz', type: 'quiz', title: 'Applied Compassion Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Research shows that self-compassion after a mistake leads to:', options: ['Less accountability', 'More avoidance of the issue', 'Greater personal responsibility and motivation to change', 'Repetition of the mistake'], correctIndex: 2, explanation: 'Counterintuitively, self-compassion increases personal responsibility. When you are not terrified of shame, you can face your mistakes honestly, learn from them, and make amends — rather than denying or minimising.' },
            { question: 'The "second arrow" in Buddhist psychology refers to:', options: ['The second time you get hurt', 'The suffering we add to pain through self-criticism', 'A type of meditation', 'Getting hurt by two people'], correctIndex: 1, explanation: 'The first arrow is the unavoidable pain of life. The second arrow is the optional suffering we add through self-criticism, rumination, and shame. Self-compassion helps us feel the first arrow without shooting the second.' },
          ] },
        },
        {
          id: 'sdm-action', type: 'action-plan', title: 'Real-Life Compassion', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Apply self-compassion in your real life this week:', options: [
            { id: 'mistake-compassion', label: 'Respond to one mistake with compassion', description: 'When you make a mistake this week, catch the self-critical voice and deliberately respond with the three components: mindfulness, common humanity, self-kindness.' },
            { id: 'soften-soothe', label: 'Practice "soften, soothe, allow" with a difficult emotion', description: 'When a difficult emotion arises, locate it in your body, soften around it, soothe yourself with touch and words, and allow it to be present.' },
            { id: 'no-second-arrow', label: 'Catch the "second arrow"', description: 'Notice when you are adding suffering to pain through self-criticism. Pause and ask: "Is this the first arrow (the pain) or the second arrow (what I am adding to it)?"' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 5: Integration — Living from Self-Compassion
    {
      id: 'sc-integration',
      moduleId: 'self-compassion',
      title: 'Living from Self-Compassion',
      description: 'Integrate self-compassion as an ongoing way of relating to yourself, understand fierce self-compassion, and build a sustainable practice.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Understand "fierce" self-compassion (Neff) — compassion as motivation and protection',
        'Integrate self-compassion practices into daily life',
        'Build a sustainable, personalised compassion practice',
        'Understand self-compassion as the foundation of all healing work',
      ],
      prerequisites: ['sc-difficult-moments'],
      contraindications: [],
      segments: [
        {
          id: 'sci-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Warm and grounded', value: 1 }, { label: 'Cautiously hopeful', value: 3 }, { label: 'A bit tender', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'sci-psychoed', type: 'psychoeducation', title: 'Fierce Compassion and Integration', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Fierce Self-Compassion', text: 'Neff has expanded her model to include "fierce self-compassion" — the yang to the yin of tender self-compassion. Tender self-compassion says: "This is hard. I am here for you. Let me hold this pain with you." Fierce self-compassion says: "This is not acceptable. I will protect you. I will stand up for what is right." Fierce self-compassion is the compassion of the mama bear — fiercely protective, clear about what is acceptable, willing to set boundaries and take action. For people healing from codependency, people-pleasing, and trauma bonds, fierce self-compassion is often the missing piece. They have learned tender compassion for others but have never turned fierce compassion on their own behalf.' },
            { heading: 'Self-Compassion as the Foundation', text: 'Everything in this program builds on self-compassion. Boundaries are fierce self-compassion in action. Grief work requires tender self-compassion. Inner child work is self-compassion directed to your youngest, most vulnerable parts. Attachment healing is the process of becoming your own compassionate caregiver. Without self-compassion, growth becomes another form of self-improvement driven by the inner critic. With self-compassion, growth becomes an act of love.', keyIdeas: [
              'Fierce self-compassion protects; tender self-compassion nurtures',
              'Self-compassion is not a skill you master — it is an ongoing practice',
              'Every module in this program is built on the foundation of self-compassion',
              'Progress is not perfection — it is catching yourself earlier and choosing kindness',
              'You deserve the same compassion you so freely give to others',
            ] },
            { heading: 'Building a Sustainable Practice', text: 'Self-compassion becomes sustainable when it is integrated into daily life rather than saved for emergencies. Morning: Start the day by placing your hand on your heart and saying, "May I be kind to myself today." Throughout the day: Notice self-critical thoughts as they arise. Respond with any brief self-compassion practice. Evening: Reflect on the day with compassion. What went well? Where did you struggle? Can you hold both with kindness? Ongoing: Use the Self-Compassion Break whenever suffering arises. Practice "soften, soothe, allow" with body-based distress. Access your Compassionate Self when making difficult decisions.' },
          ] },
        },
        {
          id: 'sci-journal', type: 'journal', title: 'Module Integration', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Where do you need fierce self-compassion — the protective, boundary-setting kind? Where in your life do you need to stand up for yourself?',
            'How has your relationship with your inner critic changed over these sessions? What has shifted?',
            'What is your personalised self-compassion practice going to look like going forward? Morning, throughout the day, and evening.',
            'Write a commitment from your Compassionate Self to yourself: "I promise to..."',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'sci-reflection', type: 'reflection', title: 'Module Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What has this module opened up for you?',
            'What does the inner critic sound like now compared to when you started?',
            'What is one compassionate truth you want to carry forward?',
          ] },
        },
        {
          id: 'sci-quiz', type: 'quiz', title: 'Module Review', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Fierce self-compassion (Neff) involves:', options: ['Being angry at everyone', 'Protectively standing up for yourself — setting boundaries and taking action from a place of compassion', 'Ignoring other people\'s feelings', 'Self-criticism disguised as motivation'], correctIndex: 1, explanation: 'Fierce self-compassion is the protective, boundaried form of compassion. It says: "I will not tolerate mistreatment. I will stand up for myself." It is compassion in action, not anger or aggression.' },
            { question: 'Self-compassion relates to attachment healing because:', options: ['It helps you forget your childhood', 'It allows you to become your own compassionate caregiver — the secure base you needed', 'It makes you not need other people', 'It eliminates all difficult emotions'], correctIndex: 1, explanation: 'Self-compassion is the mechanism through which you become your own secure base — offering yourself the warmth, attunement, and safety that a secure caregiver would have provided. This is the foundation of earned secure attachment.' },
          ] },
        },
      ],
    },
  ],
}

export default selfCompassion
