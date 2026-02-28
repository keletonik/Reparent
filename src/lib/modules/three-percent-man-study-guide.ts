import type { Module } from '../types'

const threePercentManStudyGuide: Module = {
  id: 'three-percent-man-study-guide',
  title: 'The 3% Man — Study Guide & Deep Practice',
  description: 'A comprehensive study guide companion to the 3% Man core principles. Includes chapter-by-chapter breakdowns, key concept reviews, self-assessment quizzes, real-world scenario practice, and guided journaling for deep integration of Corey Wayne\'s teachings.',
  icon: 'book-study',
  order: 26,
  category: 'relationships',
  prerequisites: ['three-percent-man'],
  sessions: [
    // SESSION 1: Chapter Review — Self-Worth & Inner Game
    {
      id: 'tpm-sg-self-worth',
      moduleId: 'three-percent-man-study-guide',
      title: 'Study Guide: Self-Worth & Inner Game',
      description: 'Deep dive into the foundational concepts of self-worth, inner confidence, and why your relationship with yourself determines every other relationship.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Deeply understand the connection between self-worth and relationship success',
        'Identify personal patterns of seeking external validation',
        'Develop actionable strategies for building genuine self-worth',
        'Apply inner game principles to real-life scenarios',
      ],
      prerequisites: [],
      contraindications: [],
      segments: [
        {
          id: 'tpm-sg-sw-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'Self-worth work can bring up deep emotions. How are you feeling right now?', options: [{ label: 'Grounded and ready', value: 1 }, { label: 'A little vulnerable', value: 3 }, { label: 'Somewhat emotional', value: 5 }, { label: 'Quite triggered', value: 7 }, { label: 'Need support right now', value: 9 }] },
        },
        {
          id: 'tpm-sg-sw-psychoed', type: 'psychoeducation', title: 'Key Concepts: Self-Worth', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Self-Worth Foundation', text: 'Corey Wayne emphasises that everything in your dating and relationship life flows from your self-worth. If you do not value yourself, you will tolerate poor treatment, chase people who are not interested, and settle for relationships that make you unhappy. Self-worth is not something you acquire — it is something you uncover by removing the false beliefs that tell you that you are not enough. It is built through action: keeping promises to yourself, setting and enforcing boundaries, and living in alignment with your values.' },
            { heading: 'Common Self-Worth Destroyers', text: 'Several behaviours indicate and reinforce low self-worth in the dating context. These include: accepting crumbs of attention and being grateful for them, tolerating disrespect because you fear being alone, changing yourself to match what you think someone wants, apologising for having needs or standards, staying with someone who clearly is not invested, and measuring your worth by whether someone texts you back. Recognising these patterns is the first step toward change.', keyIdeas: [
              'Self-worth is built through actions, not affirmations alone',
              'Tolerating disrespect trains people to disrespect you',
              'Your standards are a reflection of your self-worth — raise them',
              'The relationship you have with yourself sets the template for all other relationships',
              'You teach people how to treat you by what you accept',
            ] },
            { heading: 'The Inner Game Shift', text: 'Inner game is the term for your internal state — your beliefs about yourself, your emotional stability, your sense of identity. Most men focus on "outer game" (what to say, how to act, techniques) when the real transformation happens on the inside. When your inner game is strong, the right words and actions follow naturally. You do not need scripts or techniques because you are genuinely confident, centred, and secure. Inner game is developed through: reading and self-education, physical fitness, pursuing your purpose, facing your fears, and honest self-reflection.' },
            { heading: 'Self-Worth in Practice', text: 'What does self-worth look like in daily dating life? It looks like: walking away from someone who is lukewarm about you instead of trying harder. Saying no to a date when you have other commitments instead of rearranging your life. Not texting someone who has not responded to your last message. Being willing to have the difficult conversation instead of pretending everything is fine. Choosing to be alone rather than in a relationship that drains you. These are not "tactics" — they are natural expressions of a person who values themselves.' },
          ] },
        },
        {
          id: 'tpm-sg-sw-journal', type: 'journal', title: 'Self-Worth Deep Dive', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'List 5 promises you have broken to yourself in the past year (fitness goals, morning routines, boundaries you did not enforce). How does breaking promises to yourself affect your self-image?',
            'Think of the last time you tolerated treatment you knew you deserved better than. What belief about yourself allowed you to accept that treatment?',
            'Write a letter to your younger self about self-worth. What would you tell him about his value that he needed to hear?',
            'Describe the version of yourself who has unshakeable self-worth. What does he do differently in his daily life? How does he handle dating situations?',
            'What is one boundary you need to set or enforce this week to align your actions with your self-worth?',
          ], privacyNote: 'Your reflections are private and stored only on your device.' },
        },
        {
          id: 'tpm-sg-sw-quiz', type: 'quiz', title: 'Self-Worth Mastery Check', estimatedMinutes: 5,
          content: { type: 'quiz', items: [
            { question: 'According to the 3% Man framework, the most effective way to build self-worth is:', options: ['Positive affirmations in the mirror', 'Taking action: keeping promises to yourself and enforcing boundaries', 'Waiting until someone values you first', 'Pretending to be confident until it becomes real'], correctIndex: 1, explanation: 'While affirmations can help, real self-worth is built through action — keeping promises to yourself, enforcing your boundaries, and living in alignment with your values. Actions build identity.' },
            { question: 'When someone treats you poorly, the self-worth response is to:', options: ['Try harder to earn their approval', 'Get angry and retaliate', 'Calmly enforce your boundary or walk away', 'Blame yourself for not being good enough'], correctIndex: 2, explanation: 'A person with genuine self-worth does not try harder when mistreated, nor do they retaliate. They calmly enforce their boundary or walk away — because they know their worth does not depend on this person\'s behaviour.' },
            { question: '"Inner game" primarily refers to:', options: ['Strategies for texting and messaging', 'Your internal beliefs, emotional stability, and self-identity', 'Knowing the right pickup lines', 'How you dress and present yourself'], correctIndex: 1, explanation: 'Inner game is about your internal state — your beliefs about yourself, emotional resilience, and sense of identity. When inner game is strong, the right external behaviours follow naturally.' },
            { question: 'The statement "you teach people how to treat you" means:', options: ['You should be strict and demanding', 'What you tolerate, you encourage — your boundaries define your experience', 'You should lecture people about respect', 'Others will always treat you well if you are nice'], correctIndex: 1, explanation: 'What you accept and tolerate from others sets the standard for how they will continue to treat you. Your boundaries (or lack thereof) actively teach people what you will and will not accept.' },
          ] },
        },
        {
          id: 'tpm-sg-sw-action', type: 'action-plan', title: 'Self-Worth Challenge', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one self-worth challenge for this week:', options: [
            { id: 'promise-keeping', label: 'Keep 3 promises to yourself', description: 'Make 3 specific commitments to yourself (gym, morning routine, reading) and keep ALL of them. Track your follow-through daily.' },
            { id: 'boundary-enforcement', label: 'Enforce one boundary', description: 'Identify a situation where someone is crossing a boundary and address it calmly and directly this week.' },
            { id: 'self-worth-audit', label: 'Conduct a self-worth audit', description: 'Review your current relationships (friends, dating, family). Are there any where you accept less than you deserve? Write an action plan for each.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 2: Study Guide — Communication & Frame Control
    {
      id: 'tpm-sg-communication',
      moduleId: 'three-percent-man-study-guide',
      title: 'Study Guide: Communication & Frame',
      description: 'Master the art of communication in dating and relationships — including setting the frame, using humour, knowing when to be serious, and avoiding common communication pitfalls.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand what "frame" means and how to maintain yours',
        'Learn effective communication principles for dating',
        'Recognise and avoid common communication mistakes',
        'Practise calibrated responses to different scenarios',
      ],
      prerequisites: ['tpm-sg-self-worth'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-sg-c-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring communication dynamics?', options: [{ label: 'Focused and ready', value: 1 }, { label: 'A bit self-conscious', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Stressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'tpm-sg-c-psychoed', type: 'psychoeducation', title: 'Key Concepts: Communication', estimatedMinutes: 14,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Is "Frame"?', text: 'In the 3% Man context, your "frame" is the reality you operate from — your beliefs, your standards, your interpretation of events. A man with a strong frame does not get knocked off course by someone else\'s emotions, opinions, or tests. He has his own perspective and holds it calmly. This does not mean being stubborn or dismissive — it means being centred. For example, if your date says something designed to get a reaction, a weak frame reacts emotionally while a strong frame responds with calm confidence or playful humour.' },
            { heading: 'Communication Principles', text: 'Effective communication in dating follows several key principles from the 3% Man framework. First, less is more — do not over-explain, over-text, or fill every silence. Mystery and brevity are attractive. Second, use communication to set dates, not to build the relationship via text. Save the real conversation for in-person meetings. Third, match energy — if someone gives you one-word replies, do not send paragraphs. Fourth, be direct and honest rather than hinting or being passive-aggressive. Fifth, use humour to defuse tension and create connection — playful teasing (without being mean) builds attraction.', keyIdeas: [
              'Use texting primarily to set dates, not to have long conversations',
              'Less is more — brevity and mystery create intrigue',
              'Match the energy you receive — do not over-invest in someone who under-invests',
              'Be direct: say what you mean and mean what you say',
              'Playful humour is one of the most powerful attraction tools',
              'Never argue or get defensive over text — save serious conversations for in person',
            ] },
            { heading: 'Common Communication Mistakes', text: 'The most frequent communication mistakes men make include: double-texting when someone has not responded, sending "good morning" texts every day to someone they just started seeing, having deep emotional conversations via text instead of in person, responding instantly to every message (communicating you have nothing better to do), being overly agreeable and never expressing your own opinions, and seeking reassurance ("Do you like me?", "Are we okay?"). Each of these communicates low value, neediness, or insecurity.' },
            { heading: 'Phone vs. Text', text: 'Wayne advocates for phone calls over texting, especially for setting dates. Calling shows confidence — most men are afraid to pick up the phone. Keep calls brief and purposeful: "Hey, I was thinking about you. Let\'s grab dinner Thursday at 7 at [place]. Sound good?" This is direct, confident, and leaves no ambiguity. If she cannot make it, she will counter-offer if her interest is high. Do not have hour-long phone conversations early on — save that energy for the in-person date.' },
          ] },
        },
        {
          id: 'tpm-sg-c-reflection', type: 'reflection', title: 'Communication Scenarios', estimatedMinutes: 8,
          content: { type: 'reflection', prompts: [
            'Scenario: You text someone and they take 6 hours to reply with a short response. What does the 3% Man do? How have you handled this in the past?',
            'Scenario: Your date disagrees with something you said and seems to be testing your reaction. How do you respond from a strong frame vs. a weak frame?',
            'Review your last 10 text messages to someone you were interested in. Were you matching their energy? Were you over-investing?',
            'What is your biggest communication weakness in dating? How does the 3% Man framework address it?',
          ] },
        },
        {
          id: 'tpm-sg-c-quiz', type: 'quiz', title: 'Communication Mastery Check', estimatedMinutes: 5,
          content: { type: 'quiz', items: [
            { question: 'According to the 3% Man framework, texting should primarily be used to:', options: ['Build emotional connection', 'Have deep conversations', 'Set up in-person dates', 'Send daily good morning messages'], correctIndex: 2, explanation: 'Texting is a tool for setting dates and brief, fun exchanges. Real connection happens in person. Using texting as the primary relationship-building tool is a common mistake.' },
            { question: 'When someone takes a long time to respond, the 3% Man:', options: ['Double-texts to make sure they saw it', 'Matches their energy and mirrors their response time', 'Sends a passive-aggressive message', 'Calls them out for being rude'], correctIndex: 1, explanation: 'Mirror their energy. If they take hours, take hours. If they give short replies, give short replies. Never invest more energy in communication than the other person.' },
            { question: '"Maintaining frame" means:', options: ['Never showing emotion', 'Staying centred in your beliefs and not being knocked off course by others', 'Dominating every conversation', 'Always having the last word'], correctIndex: 1, explanation: 'Frame is about being centred and grounded in your own reality. It does not mean suppressing emotions — it means not being destabilised by tests, disagreements, or pressure from others.' },
          ] },
        },
        {
          id: 'tpm-sg-c-action', type: 'action-plan', title: 'Communication Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one communication skill to practise this week:', options: [
            { id: 'texting-audit', label: 'Audit your texting habits', description: 'Review your messaging patterns this week. Are you initiating too much? Over-explaining? Sending multiple texts before getting a response? Adjust accordingly.' },
            { id: 'phone-call', label: 'Make a phone call instead of texting', description: 'Next time you want to ask someone out, call them instead of texting. Keep it short, confident, and direct.' },
            { id: 'frame-practice', label: 'Practise holding your frame', description: 'In 3 conversations this week, notice when someone tries to shift your opinion or get a reaction. Practise staying centred and calm.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 3: Study Guide — Red Flags & Deal-Breakers
    {
      id: 'tpm-sg-red-flags',
      moduleId: 'three-percent-man-study-guide',
      title: 'Study Guide: Red Flags & Deal-Breakers',
      description: 'Learn to identify red flags early, understand deal-breakers vs. preferences, and develop the courage to walk away from bad situations.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Identify common relationship red flags early',
        'Distinguish between deal-breakers and mere preferences',
        'Understand why people ignore red flags and how to stop',
        'Build the courage and self-worth to walk away when necessary',
      ],
      prerequisites: ['tpm-sg-communication'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-sg-rf-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'Discussing red flags and past relationship patterns can be emotional. How are you?', options: [{ label: 'Clear-headed and ready', value: 1 }, { label: 'A bit guarded', value: 3 }, { label: 'This hits close to home', value: 5 }, { label: 'Quite emotional', value: 7 }, { label: 'Need to pause', value: 9 }] },
        },
        {
          id: 'tpm-sg-rf-psychoed', type: 'psychoeducation', title: 'Key Concepts: Red Flags', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Early Warning Signs', text: 'Red flags are patterns of behaviour that indicate future problems in a relationship. Common red flags include: inconsistency (hot and cold behaviour), disrespect toward service workers or others, refusing to take responsibility for their actions, love-bombing (excessive attention and affection very early), speaking negatively about all their exes, crossing your boundaries after you have clearly stated them, excessive jealousy or controlling behaviour, and patterns of dishonesty. The key insight is that red flags visible in the first few weeks rarely improve — they typically escalate. Believe someone when they show you who they are the first time.' },
            { heading: 'Why We Ignore Red Flags', text: 'People ignore red flags for several reasons: loneliness and fear of being alone, physical attraction overriding rational assessment, the belief that they can "fix" or change someone, sunk-cost fallacy (having invested time already), low self-worth (believing this is the best they can get), and the tendency to focus on someone\'s potential rather than their reality. A 3% Man recognises that ignoring red flags is a form of self-betrayal. Every time you overlook a red flag, you are telling yourself that their behaviour is more acceptable than your own peace of mind.', keyIdeas: [
              'Red flags in the first few weeks rarely improve — they escalate',
              'Believe people when they show you who they are',
              'Ignoring red flags is a form of self-betrayal',
              'Focus on who someone IS, not who you hope they will become',
              'Walking away from red flags is an act of self-respect, not weakness',
              'The pain of walking away is temporary; the pain of staying is ongoing',
            ] },
            { heading: 'Deal-Breakers vs. Preferences', text: 'It is important to distinguish between deal-breakers and preferences. Deal-breakers are non-negotiable: dishonesty, disrespect, substance abuse issues, incompatible life goals (wanting/not wanting children), abuse in any form. Preferences are flexible: height, career type, specific hobbies, music taste. Many people have their priorities backwards — they are rigid about preferences (must be 6 feet tall, must make X amount of money) but flexible about deal-breakers (tolerating dishonesty because the person is attractive). A 3% Man is firm on deal-breakers and flexible on preferences.' },
          ] },
        },
        {
          id: 'tpm-sg-rf-journal', type: 'journal', title: 'Red Flags Reflection', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Think about a past relationship where you ignored red flags. What were the early warning signs? Why did you choose to overlook them?',
            'Write down your 5 absolute deal-breakers — the things you will never tolerate again, regardless of how attractive or charming someone is.',
            'What red flags have YOU shown in past relationships? Self-awareness goes both ways. What patterns do you need to address in yourself?',
            'Describe a situation where you walked away from a red flag (or wish you had). How did it feel? What did you learn?',
          ], privacyNote: 'Your reflections are private and stored only on your device.' },
        },
        {
          id: 'tpm-sg-rf-quiz', type: 'quiz', title: 'Red Flags Knowledge Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'Love-bombing (excessive early attention/affection) is:', options: ['A sign of genuine deep connection', 'A red flag that often precedes controlling behaviour', 'Normal in healthy relationships', 'Always sincere'], correctIndex: 1, explanation: 'Love-bombing is a red flag because genuine deep connection takes time to build. Excessive early affection often serves to create emotional dependency and can precede controlling or manipulative behaviour.' },
            { question: 'The 3% Man approach to red flags is to:', options: ['Give the person the benefit of the doubt indefinitely', 'Believe someone when they show you who they are', 'Try to change the person through love', 'Ignore them if the person is attractive enough'], correctIndex: 1, explanation: 'The 3% Man believes people when they show who they are through their actions. Red flags are information about someone\'s character and patterns — ignoring them is self-betrayal.' },
            { question: 'What is the difference between deal-breakers and preferences?', options: ['They are the same thing', 'Deal-breakers are non-negotiable (dishonesty, disrespect); preferences are flexible (height, career type)', 'Deal-breakers only apply to physical appearance', 'Preferences are more important than deal-breakers'], correctIndex: 1, explanation: 'Deal-breakers are non-negotiable character and behaviour standards (honesty, respect, shared values). Preferences are about lifestyle and attraction factors that can be flexible. Be firm on deal-breakers, flexible on preferences.' },
          ] },
        },
        {
          id: 'tpm-sg-rf-action', type: 'action-plan', title: 'Red Flag Awareness', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one action to sharpen your red flag awareness:', options: [
            { id: 'deal-breaker-list', label: 'Finalise your deal-breaker list', description: 'Write a clear list of your non-negotiable deal-breakers and commit to enforcing them. Put it somewhere you will see it regularly.' },
            { id: 'pattern-review', label: 'Review your relationship patterns', description: 'Map out your last 3 relationships or dating experiences. What red flags appeared? At what point did you notice them? What made you stay despite them?' },
            { id: 'self-flags', label: 'Address your own red flags', description: 'Honestly identify 2-3 behaviours you exhibit that could be red flags to others (avoidance, dishonesty, emotional unavailability). Create a plan to address them.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 4: Study Guide — Scenario Practice & Integration
    {
      id: 'tpm-sg-scenarios',
      moduleId: 'three-percent-man-study-guide',
      title: 'Study Guide: Real-World Scenarios & Integration',
      description: 'Apply everything you have learned through real-world scenarios. Practise responding to common dating situations using 3% Man principles.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Apply 3% Man principles to realistic dating scenarios',
        'Develop quick, calibrated responses to common situations',
        'Integrate all concepts into a cohesive approach',
        'Create a personal action plan for ongoing growth',
      ],
      prerequisites: ['tpm-sg-red-flags'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-sg-sc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we put everything together?', options: [{ label: 'Confident and excited', value: 1 }, { label: 'Ready but a bit nervous', value: 3 }, { label: 'Somewhat overwhelmed', value: 5 }, { label: 'Stressed', value: 7 }, { label: 'Need a break', value: 9 }] },
        },
        {
          id: 'tpm-sg-sc-psychoed', type: 'psychoeducation', title: 'Putting It All Together', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Integrated 3% Man', text: 'At this point in your journey, you have covered: self-worth and inner game, understanding attraction and non-pursuit, purpose and mission, dating fundamentals, handling rejection, long-term relationship maintenance, communication and frame, and red flags and deal-breakers. The 3% Man is not a role you play — it is who you become when you integrate these principles into your daily life. It is not about memorising rules — it is about embodying the values of self-worth, purpose, and emotional intelligence so deeply that they become automatic.' },
            { heading: 'The Continuous Student', text: 'Corey Wayne emphasises that this is not a one-time learning experience. He recommends reading his book 10-15 times because each re-read reveals new insights as your own experience grows. Similarly, your study of relationships, self-improvement, and emotional intelligence should be ongoing. The 3% Man is a lifelong student — not because he is deficient, but because he is committed to growth. Apply what you learn, observe the results, adjust your approach, and keep learning.', keyIdeas: [
              'Integration comes from practice, not just knowledge',
              'Re-read and re-study material as your experience grows — you will see new layers',
              'Focus on progress, not perfection — every small improvement compounds over time',
              'The goal is embodiment: these principles become who you are, not what you do',
              'Share what you learn — teaching others deepens your own understanding',
            ] },
          ] },
        },
        {
          id: 'tpm-sg-sc-quiz', type: 'quiz', title: 'Scenario-Based Assessment', estimatedMinutes: 8,
          content: { type: 'quiz', items: [
            { question: 'Scenario: You go on a great first date. She says "I had fun, let\'s do this again!" but then does not respond to your follow-up text for 3 days. What do you do?', options: ['Send multiple follow-up texts to make sure she saw it', 'Wait patiently — if she is interested, she will respond. Do not chase.', 'Call her out for being rude', 'Show up at her workplace to talk in person'], correctIndex: 1, explanation: 'Actions speak louder than words. She said she had fun, but her actions (not responding) tell a different story. A 3% Man does not chase. If she is interested, she will respond. If not, you have your answer. Focus on your own life.' },
            { question: 'Scenario: Your girlfriend of 6 months starts picking fights over small things and seems distant. What is likely happening and how do you respond?', options: ['She is testing your frame — stay calm, do not get pulled into drama, and be emotionally available without being reactive', 'Immediately break up with her', 'Give in to everything she says to keep the peace', 'Ignore her completely until she apologises'], correctIndex: 0, explanation: 'This is likely a test of your emotional stability and frame. Stay calm, do not react emotionally or get defensive. Be present and available without being pulled into unnecessary drama. This demonstrates the emotional strength she is testing for.' },
            { question: 'Scenario: You have been talking to someone for 2 weeks but she keeps rescheduling dates. Her interest level is:', options: ['Very high — she is just busy', 'Low — high-interest people make time, not excuses', 'Impossible to determine from this alone', 'Moderate — you just need to try harder'], correctIndex: 1, explanation: 'When someone is genuinely interested, they make time. Repeated rescheduling without counter-offering or enthusiastic effort is a clear sign of low interest. A 3% Man does not chase — he moves on to someone who is excited to see him.' },
            { question: 'Scenario: You have been single for a year and feel lonely. An ex who treated you poorly reaches out wanting to reconnect. What do you do?', options: ['Take her back — you are lonely and she is familiar', 'Politely decline and remind yourself why it ended', 'Use the opportunity to get back at her', 'Agree to meet up "just to catch up"'], correctIndex: 1, explanation: 'Loneliness is not a reason to accept poor treatment. A 3% Man remembers why things ended and does not go backwards. Politely decline and continue investing in your own growth. The right person is ahead of you, not behind you.' },
            { question: 'Scenario: You are in a relationship and your partner asks you to cancel your weekly guys\' night to spend more time with her. What do you do?', options: ['Cancel immediately — she comes first', 'Explain that maintaining your friendships is important and offer to plan a special date another night instead', 'Start a fight about how controlling she is', 'Cancel but resent her for it'], correctIndex: 1, explanation: 'Maintaining your identity, friendships, and interests is crucial. Explain that your friendships are part of what makes you who you are, and offer an alternative way to spend quality time together. This maintains healthy boundaries while showing you care.' },
          ] },
        },
        {
          id: 'tpm-sg-sc-journal', type: 'journal', title: 'Integration & Personal Growth Plan', estimatedMinutes: 10,
          content: { type: 'journal', prompts: [
            'Of all the 3% Man principles you have studied, which 3 have had the biggest impact on your thinking? Why?',
            'What is the single biggest change you have made (or plan to make) in your dating life as a result of this study?',
            'Write your personal "3% Man Code" — 5-7 principles that you commit to living by in your relationships going forward.',
            'What areas still need the most work? Create a 30-day plan for continued growth in these areas.',
            'How will you hold yourself accountable? Who in your life can support your growth journey?',
          ], privacyNote: 'Your reflections are private and stored only on your device.' },
        },
        {
          id: 'tpm-sg-sc-action', type: 'action-plan', title: 'Your 30-Day Growth Plan', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose your primary focus for the next 30 days:', options: [
            { id: 'full-review', label: 'Complete a full re-read of core material', description: 'Re-read or re-study the 3% Man core principles module from start to finish. Each review reveals new insights as your experience grows.' },
            { id: 'real-world-practice', label: 'Real-world application challenge', description: 'Apply one 3% Man principle per day for 30 days. Journal about each experience: what you did, how it felt, and what you learned.' },
            { id: 'accountability', label: 'Build an accountability system', description: 'Find an accountability partner, join a self-improvement community, or start a daily journal practice to track your growth over the next 30 days.' },
          ], timeHorizonDays: 30 },
        },
      ],
    },
  ],
}

export default threePercentManStudyGuide
