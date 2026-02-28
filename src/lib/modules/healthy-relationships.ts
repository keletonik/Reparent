import type { Module } from '../types'

const healthyRelationships: Module = {
  id: 'healthy-relationships',
  title: 'Healthy Relationships & Conflict Resolution',
  description: 'Learn the science of thriving relationships through Gottman\'s decades of research, including the Four Horsemen, emotional bids, the 5:1 ratio, and the Sound Relationship House. Build conflict resolution skills using nonviolent communication (Rosenberg), assertive communication, and repair strategies.',
  icon: 'heart-handshake',
  order: 18,
  category: 'growth',
  prerequisites: ['attachment-foundations'],
  sessions: [
    // SESSION 1: The Science of Lasting Relationships (Gottman)
    {
      id: 'gottman-foundations',
      moduleId: 'healthy-relationships',
      title: 'The Science of Lasting Relationships',
      description: 'Explore Gottman\'s four decades of research on what makes relationships succeed or fail, including the Sound Relationship House and the critical 5:1 ratio.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the Sound Relationship House theory',
        'Learn the 5:1 ratio of positive to negative interactions',
        'Understand the concept of "love maps" and emotional attunement',
        'Distinguish relationship "masters" from "disasters"',
      ],
      prerequisites: [],
      contraindications: [],
      segments: [
        {
          id: 'gf-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we explore relationship science?', options: [{ label: 'Curious and open', value: 1 }, { label: 'Slightly guarded', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'gf-psychoed', type: 'psychoeducation', title: 'Gottman\'s Research Foundations', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Love Lab', text: 'Dr John Gottman and Dr Julie Schwartz Gottman have studied over 3,000 couples across four decades at their research facility, known as the "Love Lab." By observing couples interact and measuring physiological responses (heart rate, cortisol, skin conductance), they can predict with over 90% accuracy whether a couple will divorce. Their research has identified specific, measurable behaviours that distinguish "masters" of relationships from "disasters." The good news: these behaviours are learnable skills, not fixed personality traits.' },
            { heading: 'The Sound Relationship House', text: 'Gottman\'s model of a healthy relationship is built like a house with seven levels: Level 1 — Build Love Maps: Know your partner\'s inner world — their fears, dreams, stressors, joys. Level 2 — Share Fondness and Admiration: Actively express appreciation and respect. Level 3 — Turn Toward Instead of Away: Respond to your partner\'s bids for connection. Level 4 — The Positive Perspective: When the first three levels are strong, you give your partner the benefit of the doubt. Level 5 — Manage Conflict: Not eliminate it — manage it. Most problems in relationships are perpetual (69%), not solvable. Level 6 — Make Life Dreams Come True: Support each other\'s aspirations. Level 7 — Create Shared Meaning: Build rituals, roles, goals, and symbols together. The walls that hold the house up are Trust and Commitment.', keyIdeas: [
              'Gottman can predict divorce with over 90% accuracy based on observable behaviours',
              '69% of relationship problems are perpetual — the goal is dialogue, not resolution',
              'The 5:1 ratio: stable couples have 5 positive interactions for every 1 negative',
              '"Masters" of relationships turn toward each other; "disasters" turn away or against',
              'These are learnable skills — not personality traits or luck',
            ] },
            { heading: 'Love Maps: Knowing Your Partner\'s World', text: 'A "love map" is Gottman\'s term for the mental model you carry of your partner\'s inner life. Do you know their current worries? Their best friend\'s name? What they dreamed of being as a child? What stresses them at work? Couples who maintain detailed, updated love maps weather storms better because they feel known. Feeling known is the foundation of secure connection. Love maps are especially important for people with insecure attachment because they replace the hypervigilant monitoring of anxious attachment with genuine, curious, relaxed knowing.' },
            { heading: 'The 5:1 Ratio', text: 'Gottman\'s research found that the single strongest predictor of relationship stability is the ratio of positive to negative interactions. Stable, satisfied couples maintain a ratio of at least 5:1 — five positive interactions (affection, humour, interest, empathy, agreement) for every one negative interaction (criticism, defensiveness, frustration). During conflict, the ratio for happy couples drops to about 0.8:1 — but because they have a rich "emotional bank account," they can weather these storms. For couples heading toward divorce, the ratio during conflict drops to 0.8:1 or lower, and even outside conflict, the positivity is depleted.' },
          ] },
        },
        {
          id: 'gf-journal', type: 'journal', title: 'Your Relationship Map', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Think about a current or recent significant relationship. How well do you know the other person\'s inner world — their current worries, dreams, and daily stressors? How well do they know yours?',
            'Estimate the ratio of positive to negative interactions in your most important relationship. Is it above or below 5:1? What might tip it?',
            'Which level of the Sound Relationship House feels strongest in your relationship? Which feels weakest?',
            'How does your attachment style affect how you build (or avoid building) love maps?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'gf-quiz', type: 'quiz', title: 'Relationship Science Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'According to Gottman, what percentage of couple conflicts are perpetual (unsolvable)?', options: ['10%', '30%', '50%', '69%'], correctIndex: 3, explanation: 'Gottman found that 69% of couple conflicts are perpetual — they stem from fundamental differences in personality or needs. The goal is not to solve them but to have an ongoing, respectful dialogue about them.' },
            { question: 'The minimum ratio of positive to negative interactions in stable relationships is:', options: ['1:1', '3:1', '5:1', '10:1'], correctIndex: 2, explanation: 'Gottman\'s research identifies 5:1 as the "magic ratio" — five positive interactions for every negative one. Below this ratio, relationships become unstable and dissatisfied.' },
            { question: 'A "love map" in Gottman\'s framework is:', options: ['A diagram of relationship history', 'Your mental model of your partner\'s inner world', 'A list of your partner\'s flaws', 'A romantic gesture'], correctIndex: 1, explanation: 'A love map is the detailed mental model you carry of your partner\'s fears, dreams, stressors, joys, and inner world. Maintaining updated love maps is the foundation of the Sound Relationship House.' },
          ] },
        },
        {
          id: 'gf-action', type: 'action-plan', title: 'Building Your Love Map', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, practice building love maps:', options: [
            { id: 'ask-questions', label: 'Ask your partner one open-ended question daily', description: 'Examples: "What was the best part of your day?" "Is anything worrying you?" "What are you looking forward to?"' },
            { id: 'positive-ratio', label: 'Track your positive:negative ratio for 3 days', description: 'Notice every positive interaction (affection, appreciation, humour) and negative one (criticism, withdrawal, frustration). What is the ratio?' },
            { id: 'fondness-practice', label: 'Express one genuine appreciation daily', description: 'Tell someone important to you one specific thing you appreciate about them each day.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 2: The Four Horsemen
    {
      id: 'four-horsemen',
      moduleId: 'healthy-relationships',
      title: 'The Four Horsemen of Relationship Apocalypse',
      description: 'Identify Gottman\'s four most destructive communication patterns — criticism, contempt, defensiveness, and stonewalling — and learn their antidotes.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Identify the Four Horsemen in your own communication',
        'Understand why contempt is the strongest predictor of divorce',
        'Learn the specific antidote for each Horseman',
        'Practice replacing destructive patterns with constructive ones',
      ],
      prerequisites: ['gottman-foundations'],
      contraindications: [],
      segments: [
        {
          id: 'fh-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Open and curious', value: 1 }, { label: 'A bit defensive already', value: 3 }, { label: 'Somewhat uncomfortable', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'fh-psychoed', type: 'psychoeducation', title: 'The Four Horsemen and Their Antidotes', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Horseman 1: Criticism', text: 'Criticism attacks the person\'s character rather than addressing a specific behaviour. The difference: Complaint (healthy): "I was worried when you did not call. I need to know you are safe." Criticism (destructive): "You never call. You are so selfish and inconsiderate." Criticism uses "you always" and "you never" language. It implies something is fundamentally wrong with the person, not just the behaviour. The Antidote: Use a "gentle start-up." Start with "I feel..." about a specific situation, then state a positive need. "I feel anxious when I do not hear from you. Could you send a quick text when you are running late?"' },
            { heading: 'Horseman 2: Contempt', text: 'Contempt is the single greatest predictor of divorce. It communicates disgust and superiority — the message that you are better than your partner. It shows up as: sarcasm, mockery, eye-rolling, name-calling, hostile humour, and sneering. Contempt is fuelled by long-standing negative thoughts about a partner (a "negative absorbing state" where you scan for evidence of their deficiencies). Gottman found that contempt even predicts physical illness in the target — couples with high contempt have more infectious illnesses. The Antidote: Build a culture of appreciation and respect. Express regular fondness and admiration. The antidote to contempt is not tolerance — it is genuine appreciation. You cannot feel contempt toward someone you actively appreciate.', keyIdeas: [
              'Criticism attacks character; complaints address specific behaviour',
              'Contempt is the #1 predictor of divorce — it communicates disgust and superiority',
              'Defensiveness is a form of blame-shifting that escalates conflict',
              'Stonewalling is physiological flooding expressed as withdrawal',
              'Every Horseman has a specific, learnable antidote',
            ] },
            { heading: 'Horseman 3: Defensiveness', text: 'Defensiveness is a response to perceived attack — but it escalates conflict because it essentially says "The problem is not me, it is you." Defensive responses include: making excuses, cross-complaining ("Well, you did X"), yes-butting, and repeating yourself without acknowledging the other person\'s perspective. The Antidote: Take responsibility for even a small part of the problem. "You are right, I should have called. I understand why you were worried." This does not mean accepting all blame — it means being willing to own your part. Even 2% responsibility can de-escalate a fight.' },
            { heading: 'Horseman 4: Stonewalling', text: 'Stonewalling is when one partner withdraws, shuts down, or disengages from the interaction. They may appear calm but their heart rate is above 100 bpm — they are physiologically flooded and their nervous system has shifted into a protective shutdown. Stonewalling is most commonly done by men (about 85% of stonewallers in heterosexual couples), likely because male cardiovascular systems tend to be more reactive to relational stress. The Antidote: Physiological self-soothing. When you notice yourself shutting down, say: "I am flooding and I need a break. I am not abandoning this conversation — I will come back in 20 minutes." Use the break to genuinely self-soothe (breathing, walking, calming activity) rather than ruminating about the argument.' },
          ] },
        },
        {
          id: 'fh-interactive', type: 'interactive', title: 'Identify Your Horsemen', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'HorsemenChecker', config: { horsemen: ['criticism', 'contempt', 'defensiveness', 'stonewalling'] }, instructions: 'Think about your most recent conflict with someone important. Which Horsemen showed up — from you and from the other person? There is no judgement here; this is awareness building.' },
        },
        {
          id: 'fh-journal', type: 'journal', title: 'Your Communication Patterns', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Which of the Four Horsemen is your "go-to" during conflict? When did you first learn this pattern?',
            'Think of a recent argument. Can you rewrite one of your statements using the antidote? For example, replacing criticism with a gentle start-up.',
            'How does your attachment style connect to your dominant Horseman? (Anxious attachment often shows as criticism; avoidant attachment often shows as stonewalling.)',
            'What would it feel like to take 2% responsibility in your next conflict, even when you feel the other person is mostly wrong?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'fh-quiz', type: 'quiz', title: 'Four Horsemen Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'The single strongest predictor of relationship failure is:', options: ['Criticism', 'Contempt', 'Defensiveness', 'Stonewalling'], correctIndex: 1, explanation: 'Contempt — communicating disgust and superiority through sarcasm, mockery, and eye-rolling — is the most destructive of the Four Horsemen and the strongest predictor of divorce in Gottman\'s research.' },
            { question: 'The antidote to defensiveness is:', options: ['Explaining your side more clearly', 'Taking responsibility for even a small part of the problem', 'Withdrawing from the conversation', 'Criticising back'], correctIndex: 1, explanation: 'Taking responsibility, even for a small part of the problem, de-escalates conflict because it tells your partner "I hear you and I am willing to own my part." This does not mean accepting all blame.' },
            { question: 'Stonewalling occurs because:', options: ['The person does not care', 'The person is physiologically flooded and their nervous system is shutting down', 'The person is being manipulative', 'The person agrees with you'], correctIndex: 1, explanation: 'Stonewalling is a physiological flooding response. The person\'s heart rate has exceeded 100 bpm and their nervous system has entered protective shutdown. They are not choosing to be cold — they are overwhelmed.' },
          ] },
        },
      ],
    },

    // SESSION 3: Emotional Bids and Turning Toward
    {
      id: 'bids-turning-toward',
      moduleId: 'healthy-relationships',
      title: 'Emotional Bids & Turning Toward',
      description: 'Learn Gottman\'s research on "bids" — the fundamental unit of emotional connection — and how turning toward builds the emotional bank account that sustains relationships through hard times.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Recognise bids for connection in everyday interactions',
        'Understand turning toward, turning away, and turning against',
        'Learn how the "emotional bank account" works',
        'Practice making and responding to bids more effectively',
      ],
      prerequisites: ['four-horsemen'],
      contraindications: [],
      segments: [
        {
          id: 'bt-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm and open', value: 1 }, { label: 'A little guarded', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'bt-psychoed', type: 'psychoeducation', title: 'Bids for Connection', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Are Bids?', text: 'A "bid" is any attempt — verbal or non-verbal — to get your partner\'s attention, affection, affirmation, or connection. Bids can be as subtle as a sigh, as casual as "Look at this sunset," or as direct as "I need a hug." Gottman\'s research found that in stable relationships, partners turn toward each other\'s bids 86% of the time. In relationships that fail, that number drops to 33%. The difference between relationship success and failure is not grand gestures — it is thousands of small moments of turning toward.' },
            { heading: 'Three Responses to a Bid', text: 'Turning Toward: Engaging with the bid. "Oh wow, that is beautiful." This builds the "emotional bank account." Even a small acknowledgement counts. Turning Away: Missing or ignoring the bid. Continuing to scroll your phone without looking up. This erodes connection through neglect. It is often unintentional but deeply damaging over time. Turning Against: Rejecting the bid with hostility. "I am busy, stop bothering me." This actively damages trust.', keyIdeas: [
              'Most bids are subtle — they are easy to miss if you are not paying attention',
              'Couples who divorced missed bids 67% of the time; lasting couples caught them 86%',
              'You can learn to make clearer bids rather than testing whether someone notices',
              'For anxious attachment, unrecognised bids feel devastating — they echo childhood neglect',
              'For avoidant attachment, the challenge is learning to make bids at all',
            ] },
            { heading: 'The Emotional Bank Account', text: 'Every time you turn toward a bid, you make a deposit in the relationship\'s emotional bank account. Every time you turn away or against, you make a withdrawal. When the account is full, couples give each other the benefit of the doubt during conflict. When it is depleted, even neutral statements are interpreted negatively. This is why the small moments matter more than the grand gestures. A daily "How was your day?" with genuine interest is worth more than a yearly vacation if the daily bids are being missed.' },
          ] },
        },
        {
          id: 'bt-journal', type: 'journal', title: 'Your Bids and Connections', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Think of a recent interaction with someone you care about. Can you identify any bids for connection — from either of you? Were they turned toward, away from, or against?',
            'How do you typically make bids for connection? Are they clear and direct, or do you hint and test?',
            'When your bids are missed, what happens inside you? How does your attachment style influence your reaction?',
            'What would change in your relationships if you turned toward bids 86% of the time?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'bt-quiz', type: 'quiz', title: 'Bids Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'In Gottman\'s research, couples who stayed together turned toward bids:', options: ['50% of the time', '67% of the time', '86% of the time', '100% of the time'], correctIndex: 2, explanation: 'Couples who stayed together and were satisfied turned toward bids 86% of the time. Couples who divorced turned toward only 33% of the time.' },
            { question: 'A "bid" for connection can be:', options: ['Only a verbal request for attention', 'Any attempt to connect — from a sigh to a direct request', 'Only during arguments', 'Only between romantic partners'], correctIndex: 1, explanation: 'Bids include any verbal or non-verbal attempt to get attention, affection, or connection. They can be as subtle as a sigh or as direct as "I need you."' },
          ] },
        },
        {
          id: 'bt-action', type: 'action-plan', title: 'Turning Toward Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, practice with bids:', options: [
            { id: 'notice-bids', label: 'Notice and respond to 3 bids per day', description: 'Build awareness of the tiny moments that build connection. Put down your phone when someone speaks to you.' },
            { id: 'clear-bids', label: 'Make 1 clear, direct bid daily', description: 'Instead of hinting, ask directly: "Can I tell you about my day?" "I would love a hug." "Look at this."' },
            { id: 'track-bids', label: 'Track bids for 3 days', description: 'Notice every bid you receive. Note whether you turned toward, away, or against. Observe without judgement.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 4: Nonviolent Communication (Rosenberg)
    {
      id: 'nvc-communication',
      moduleId: 'healthy-relationships',
      title: 'Nonviolent Communication & "I" Statements',
      description: 'Learn Marshall Rosenberg\'s Nonviolent Communication framework for expressing needs without blame, and master the art of "I" statements and active listening.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the four components of Nonviolent Communication (NVC)',
        'Distinguish observations from evaluations',
        'Practice "I" statements effectively',
        'Learn active listening and empathic reflection',
      ],
      prerequisites: ['bids-turning-toward'],
      contraindications: [],
      segments: [
        {
          id: 'nvc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Ready to learn', value: 1 }, { label: 'Slightly apprehensive', value: 3 }, { label: 'Somewhat activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'nvc-psychoed', type: 'psychoeducation', title: 'Nonviolent Communication', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The NVC Framework', text: 'Marshall Rosenberg\'s Nonviolent Communication (NVC) provides a four-step framework for expressing yourself honestly without blame and hearing others empathically without defensiveness. Step 1 — Observation: State what you see or hear, without evaluation or judgement. "When I see dishes in the sink" (observation) vs "When you are lazy and never clean up" (evaluation). Step 2 — Feeling: Name your emotion using "I feel..." "I feel frustrated" (feeling) vs "I feel like you do not care" (thought disguised as feeling). Step 3 — Need: Identify the underlying need. "Because I need order in our shared space to feel calm." Step 4 — Request: Make a clear, specific, doable request. "Would you be willing to wash the dishes after dinner?" The full NVC statement: "When I see dishes in the sink after dinner, I feel frustrated because I need order to feel calm. Would you be willing to wash them after eating?"' },
            { heading: 'The Power of "I" Statements', text: '"I" statements shift the focus from blame to vulnerability. They are disarming because they share your experience rather than attacking the other person. The formula is simple: "I feel [emotion] when [specific situation] because I need [underlying need]." Common mistakes: Using "I feel that you..." (this is a thought, not a feeling). Using "I feel like you..." (same — disguised blame). Saying "You make me feel..." (no one makes you feel anything — your feelings are responses to your needs being met or unmet). The shift from "You never listen to me" to "I feel unheard when I am talking and your phone is out, because I need to feel that what I say matters to you" is transformative. It replaces attack with invitation.', keyIdeas: [
              'NVC has four steps: Observation, Feeling, Need, Request',
              'Observations describe facts; evaluations judge and blame',
              '"I feel that you..." is not an "I" statement — it is a disguised "you" statement',
              'Every criticism is a tragic expression of an unmet need (Rosenberg)',
              'Active listening means reflecting back what you hear, not preparing your rebuttal',
            ] },
            { heading: 'Active Listening', text: 'Active listening is the other half of effective communication. It means: giving your full attention (put down the phone, make eye contact), reflecting back what you hear ("It sounds like you are feeling frustrated because..."), asking clarifying questions ("Help me understand — what was the hardest part?"), validating the emotion even if you disagree with the content ("I can see why that would be upsetting"), resisting the urge to fix, advise, or defend. The goal is not agreement — it is understanding. Most people do not need you to solve their problem. They need to feel heard.' },
            { heading: 'De-Escalation Skills', text: 'When a conversation is escalating: Slow down. The faster the exchange, the more reactive it becomes. Lower your voice. Volume escalation is physiological — the brain interprets loud voices as threat. Use the other person\'s name. It activates social connection circuits. Acknowledge their emotion before addressing content. "I can see you are really upset about this." Take a break if either person is flooding. "I want to understand you. I need 20 minutes to calm down so I can really listen." A conversation that is escalating is a conversation where no one is being heard. De-escalation is not retreat — it is the creation of conditions where real communication can happen.' },
          ] },
        },
        {
          id: 'nvc-interactive', type: 'interactive', title: 'NVC Practice Builder', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'NVCBuilder', config: {}, instructions: 'Think of a recurring frustration in a relationship. Build an NVC statement using the four steps: Observation, Feeling, Need, Request. Practice translating blame into vulnerability.' },
        },
        {
          id: 'nvc-journal', type: 'journal', title: 'Communication Reflections', estimatedMinutes: 7,
          content: { type: 'journal', prompts: [
            'Think of a recent conflict. Can you identify the unmet need beneath the criticism or complaint — yours and the other person\'s?',
            'Rosenberg said "Every criticism is a tragic expression of an unmet need." What needs are you expressing tragically? What would a clear, vulnerable request sound like instead?',
            'When do you find it hardest to use "I" statements? What comes up when you try to be vulnerable instead of critical?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'nvc-quiz', type: 'quiz', title: 'Communication Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Which of these is a genuine "I" statement?', options: ['"I feel that you are being unfair"', '"I feel hurt when plans change without discussion because I need reliability"', '"I feel like you do not care"', '"You make me feel unimportant"'], correctIndex: 1, explanation: '"I feel hurt when plans change without discussion because I need reliability" follows the NVC format: feeling + observation + need. The other options are disguised blame statements.' },
            { question: 'In NVC, the difference between an observation and an evaluation is:', options: ['Observations are factual descriptions; evaluations include judgement or interpretation', 'There is no meaningful difference', 'Evaluations are more honest', 'Observations are passive-aggressive'], correctIndex: 0, explanation: 'Observations describe what happened factually ("You arrived 30 minutes after the agreed time"). Evaluations add judgement ("You are always late and do not respect my time"). NVC starts with observations to prevent defensiveness.' },
          ] },
        },
        {
          id: 'nvc-action', type: 'action-plan', title: 'Communication Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, practice these communication skills:', options: [
            { id: 'nvc-daily', label: 'Use one NVC statement per day', description: 'Convert one complaint or frustration into the NVC format: observation, feeling, need, request.' },
            { id: 'active-listen', label: 'Practice active listening in one conversation daily', description: 'Fully attend, reflect back, and validate before responding. Notice the difference it makes.' },
            { id: 'deescalate', label: 'De-escalate one tense moment', description: 'When a conversation starts heating up, consciously slow down, lower your voice, and acknowledge the other person\'s emotion before the content.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 5: Repair After Conflict
    {
      id: 'repair-after-conflict',
      moduleId: 'healthy-relationships',
      title: 'The Art of Repair',
      description: 'Learn that healthy relationships are not conflict-free — they are repair-capable. Master the repair attempt and understand how rupture and repair actually build trust.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand that rupture and repair build trust more than conflict avoidance',
        'Learn Gottman\'s repair attempt framework',
        'Practice taking responsibility and making amends',
        'Understand healthy vs unhealthy conflict patterns',
      ],
      prerequisites: ['nvc-communication'],
      contraindications: ['Do not attempt repair with someone who is actively abusive. Repair requires two people committed to mutual respect.'],
      segments: [
        {
          id: 'rac-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Calm', value: 1 }, { label: 'Slightly uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'rac-psychoed', type: 'psychoeducation', title: 'Rupture and Repair', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Repair Attempts: The Secret Weapon', text: 'Gottman found that the biggest difference between "masters" and "disasters" of relationships was not the frequency of conflict but the speed and effectiveness of repair attempts. A repair attempt is any statement or action — even a silly one — that de-escalates tension and reconnects the couple. It can be as simple as a touch, a joke, "I am sorry, that came out wrong," or "Can we start over?" The single most important predictor of relationship success is whether repair attempts are made and whether they are accepted by the other person.' },
            { heading: 'A Repair Sequence', text: '1. Pause and regulate: Notice that you are escalated. Use STOP (Stop, Take a breath, Observe what you are feeling, Proceed mindfully). 2. Acknowledge the rupture: "I know that what I said hurt you." 3. Take responsibility for your part: "I was critical, and that is not fair to you." 4. Express the underlying feeling and need: "I was scared that we are not connecting, and I handled it badly. What I really need is reassurance that we are okay." 5. Make a specific commitment: "Next time I feel this way, I will tell you directly instead of being critical."', keyIdeas: [
              'Repair attempts — not conflict avoidance — predict relationship success',
              'You can only repair your side — you cannot force the other person to accept',
              'Repair is not about being right or wrong — it is about reconnection',
              'Consistent repair over time is what creates earned security in relationships',
              'The willingness to repair is more important than getting the words perfect',
            ] },
            { heading: 'Healthy vs Unhealthy Conflict', text: 'Healthy conflict: stays on topic, addresses behaviour (not character), includes listening, allows breaks, includes repair, leaves both people feeling heard even if not resolved, does not include threats or ultimatums. Unhealthy conflict: kitchen-sinking (bringing up every past grievance), character attacks, contempt, stonewalling without explanation, using vulnerability against the person, threats of abandonment, physical aggression. A crucial distinction: conflict is not abuse. All relationships have conflict. Abuse involves patterns of power, control, and harm. If conflict consistently involves the Four Horsemen without repair, that is a warning sign. If it involves fear, control, or violence, that is abuse, not conflict.' },
            { heading: 'What Happens After Repair', text: 'Successful repair does not mean the issue disappears. It means: both people feel heard and respected, responsibility has been taken, a plan exists for doing better, the emotional connection has been restored, trust has actually increased (because you demonstrated that rupture is survivable). Ed Tronick\'s "still face" research with infants shows that rupture and repair is how attachment security is built. Not the absence of disconnection — but the reliable return of connection after disconnection. This is profoundly hopeful for people with insecure attachment: you do not need perfect relationships. You need repair-capable ones.' },
          ] },
        },
        {
          id: 'rac-interactive', type: 'interactive', title: 'Repair Template', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'RepairBuilder', config: {}, instructions: 'Think of a recent conflict or rupture. Build a repair statement using the five-step sequence: pause, acknowledge, take responsibility, express need, commit to change.' },
        },
        {
          id: 'rac-journal', type: 'journal', title: 'Repair Reflections', estimatedMinutes: 7,
          content: { type: 'journal', prompts: [
            'Think of a recent rupture in a relationship. What would a genuine repair attempt look like? Write it out.',
            'When someone attempts repair with you, how do you typically respond? Can you accept repair, or do you reject it?',
            'How does your attachment style affect your ability to make and receive repair attempts?',
            'Tronick\'s research shows that repair builds security. How does this change your view of conflict?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'rac-quiz', type: 'quiz', title: 'Repair Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'According to Gottman, the biggest predictor of relationship success is:', options: ['Never having conflicts', 'The effectiveness of repair attempts after conflict', 'Having identical values', 'Spending all time together'], correctIndex: 1, explanation: 'Gottman found that it is not the absence of conflict but the effectiveness of repair attempts that most strongly predicts relationship success. "Masters" repair early and often.' },
            { question: 'Rupture and repair in relationships:', options: ['Weakens trust over time', 'Has no effect on the relationship', 'Actually builds trust and attachment security', 'Should be avoided at all costs'], correctIndex: 2, explanation: 'Research shows that rupture followed by reliable repair actually builds trust and attachment security — more effectively than the absence of conflict. This mirrors the infant attachment research on the "still face" paradigm.' },
          ] },
        },
        {
          id: 'rac-action', type: 'action-plan', title: 'Repair This Week', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Practice repair this week:', options: [
            { id: 'make-repair', label: 'Make one repair attempt', description: 'If there is a recent rupture in any relationship, make a genuine repair attempt using the five-step sequence.' },
            { id: 'accept-repair', label: 'Accept a repair attempt', description: 'When someone apologises or tries to reconnect after a disconnect, consciously choose to accept it rather than holding onto the hurt.' },
            { id: 'conflict-review', label: 'Review a recent conflict for patterns', description: 'Analyse a recent disagreement: Were there Four Horsemen? Were repair attempts made? What would you do differently?' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 6: Assertive Communication and Integration
    {
      id: 'assertive-integration',
      moduleId: 'healthy-relationships',
      title: 'Assertive Communication & Healthy Conflict Integration',
      description: 'Bring together all communication and conflict skills into an integrated practice of assertive communication, and build your personal relationship maintenance plan.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Distinguish assertive, passive, aggressive, and passive-aggressive communication',
        'Integrate NVC, Gottman, and repair skills into daily practice',
        'Build a personal healthy conflict plan',
        'Understand the ongoing nature of relationship skill-building',
      ],
      prerequisites: ['repair-after-conflict'],
      contraindications: [],
      segments: [
        {
          id: 'ai-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we integrate these skills?', options: [{ label: 'Confident', value: 1 }, { label: 'A bit overwhelmed but hopeful', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'ai-psychoed', type: 'psychoeducation', title: 'Assertive Communication', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Four Communication Styles', text: 'Passive: You suppress your needs and defer to others. You may feel resentful, unheard, and invisible. This often correlates with the fawn response. Aggressive: You express your needs through force, intimidation, or attack. You may "win" the argument but lose the relationship. Passive-Aggressive: You express anger indirectly through sarcasm, silent treatment, backhanded compliments, or deliberate inefficiency. The message is hostile but disguised. Assertive: You express your needs clearly, directly, and respectfully. You stand up for yourself while maintaining respect for the other person. You use "I" statements, NVC, and clear requests.' },
            { heading: 'Assertiveness Is Not Aggression', text: 'Many people, especially those with people-pleasing or codependent patterns, confuse assertiveness with aggression. The difference is critical: Assertive says: "This is my need. I am expressing it clearly and without apology." Aggressive says: "This is my demand. Comply or face consequences." Assertive communication respects both people. It does not require the other person to agree — but it does require that your voice be heard. For people recovering from codependency, anxious attachment, or trauma bonds, learning to be assertive can feel terrifying because their nervous system equates speaking up with danger. The practice is to speak up anyway, and to let the discomfort prove that you can survive someone else\'s displeasure.', keyIdeas: [
              'Assertive communication respects both yourself and the other person',
              'For people-pleasers, assertiveness initially feels like aggression — it is not',
              'Each of the Four Horsemen has a communication style connection',
              'Assertiveness is a skill that strengthens with practice',
              'You can be assertive and kind simultaneously',
            ] },
            { heading: 'Your Integrated Communication Toolkit', text: 'You now have a comprehensive toolkit: From Gottman: Love maps, turning toward bids, the 5:1 ratio, avoiding the Four Horsemen, making repair attempts. From Rosenberg (NVC): Observation, Feeling, Need, Request — converting blame into vulnerability. From DBT: DEAR MAN for boundary-setting and interpersonal effectiveness. Active listening and de-escalation skills. Assertive communication as your default mode. These are not rules to follow perfectly. They are skills to practice imperfectly, consistently, over time. Every conversation is a new opportunity to practise.' },
          ] },
        },
        {
          id: 'ai-journal', type: 'journal', title: 'Module Integration', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Which communication style is your default under stress? How does it connect to your attachment style and early experiences?',
            'Of all the skills in this module (love maps, bids, Four Horsemen antidotes, NVC, repair, assertiveness), which one do you most need to practice? Why?',
            'Write a commitment letter to yourself about how you want to communicate in your relationships going forward. What does your best self sound like in conflict?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'ai-reflection', type: 'reflection', title: 'Module Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What is the most important thing you have learned in this module?',
            'How has your understanding of healthy conflict changed?',
            'What is one skill you are committed to practising this month?',
          ] },
        },
        {
          id: 'ai-quiz', type: 'quiz', title: 'Module Review', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Assertive communication differs from aggressive communication because:', options: ['Assertive is louder', 'Assertive respects both people; aggressive disregards the other person', 'Aggressive is more honest', 'There is no real difference'], correctIndex: 1, explanation: 'Assertive communication expresses needs clearly and respectfully, maintaining dignity for both people. Aggressive communication expresses needs through force or intimidation, disregarding the other person.' },
            { question: 'The most effective approach to relationship conflict is:', options: ['Avoiding all conflict', 'Winning every argument', 'Managing conflict through repair, respect, and vulnerability', 'Letting your partner always decide'], correctIndex: 2, explanation: 'Research consistently shows that the most effective approach is not avoiding conflict but managing it through repair attempts, mutual respect, vulnerability, and the willingness to take responsibility.' },
          ] },
        },
      ],
    },
  ],
}

export default healthyRelationships
