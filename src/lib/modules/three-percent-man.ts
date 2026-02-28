import type { Module } from '../types'

const threePercentMan: Module = {
  id: 'three-percent-man',
  title: 'The 3% Man — Core Principles',
  description: 'Master the foundational principles from Corey Wayne\'s "How to Be a 3% Man" — understanding attraction, confidence, purpose, and what makes relationships thrive. Learn to become the kind of person who naturally attracts and maintains healthy, fulfilling relationships.',
  icon: 'compass',
  order: 25,
  category: 'relationships',
  prerequisites: [],
  sessions: [
    // SESSION 1: The 3% Man Mindset
    {
      id: 'tpm-mindset',
      moduleId: 'three-percent-man',
      title: 'The 3% Man Mindset: What Sets You Apart',
      description: 'Understand what it means to be in the top 3% of men in terms of understanding relationships, and why mindset is the foundation of attraction.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the core philosophy of being a "3% Man"',
        'Learn why most men fail in relationships due to lack of understanding',
        'Recognise the difference between neediness and genuine confidence',
        'Understand that attraction is not a choice — it is a response to who you are',
      ],
      prerequisites: [],
      contraindications: [],
      segments: [
        {
          id: 'tpm-m-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling as we explore relationship dynamics and self-improvement?', options: [{ label: 'Curious and open', value: 1 }, { label: 'A bit uncertain', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Quite stressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'tpm-m-psychoed', type: 'psychoeducation', title: 'What Is the 3% Man?', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The 3% Principle', text: 'Corey Wayne\'s concept of the "3% Man" comes from the observation that only about 3% of men truly understand how attraction, dating, and relationships work. These men don\'t chase, beg, or try to convince someone to love them. Instead, they focus on becoming their best selves, understanding human nature, and letting attraction develop naturally. The 3% Man is not about manipulation or games — it is about genuine self-improvement, emotional intelligence, and understanding the science of attraction.' },
            { heading: 'Why Understanding Matters', text: 'Most relationship problems stem from a fundamental misunderstanding of what creates and sustains attraction. Men who struggle often make the same mistakes: over-pursuing, being needy, losing their sense of purpose, or trying to "nice" their way into someone\'s heart. The 3% Man understands that attraction is a response to who you are — your confidence, your purpose, your emotional stability, and your ability to create a safe space for connection. It is not about looks, money, or status alone. It is about the energy you bring to every interaction.', keyIdeas: [
              'Attraction is a response to who you are, not what you say or do',
              '97% of men repeat the same relationship mistakes because they never study relationships',
              'Being a 3% Man means continuous self-improvement and self-awareness',
              'It is not about manipulation — it is about genuine growth and understanding',
              'Reading and re-reading foundational material is key — Wayne recommends reading his book 10-15 times',
            ] },
            { heading: 'The Foundation: Self-Worth', text: 'At the core of the 3% Man philosophy is self-worth. You cannot attract a healthy, fulfilling relationship if you do not value yourself. This means having standards, maintaining your own life and interests, and refusing to settle for someone who does not treat you well. Self-worth is not arrogance — it is the quiet confidence that comes from knowing who you are, what you want, and being willing to walk away from anything that does not serve your highest good.' },
          ] },
        },
        {
          id: 'tpm-m-journal', type: 'journal', title: 'Self-Assessment: Where Do You Stand?', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'On a scale of 1-10, how well do you currently understand what creates and sustains attraction in relationships? What makes you rate yourself there?',
            'What relationship mistakes have you repeated in the past? Can you identify a pattern?',
            'How would you describe your current level of self-worth? Do you tend to over-give, people-please, or lose yourself in relationships?',
            'What does being a "3% Man" mean to you personally? What areas of growth excite you most?',
          ], privacyNote: 'Your reflections are private and stored only on your device.' },
        },
        {
          id: 'tpm-m-quiz', type: 'quiz', title: 'Mindset Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'According to the 3% Man philosophy, what percentage of men truly understand relationships?', options: ['10%', '25%', '3%', '50%'], correctIndex: 2, explanation: 'Corey Wayne estimates only about 3% of men have done the work to truly understand attraction, dating, and relationships. The goal is to join that 3% through study and self-improvement.' },
            { question: 'Attraction is primarily a response to:', options: ['Physical appearance only', 'How much money you have', 'Who you are — your confidence, purpose, and emotional stability', 'How many compliments you give'], correctIndex: 2, explanation: 'While physical appearance plays a role, lasting attraction is primarily a response to your inner qualities: confidence, purpose, emotional stability, and the ability to create genuine connection.' },
            { question: 'The foundation of the 3% Man philosophy is:', options: ['Learning pickup lines', 'Self-worth and genuine self-improvement', 'Playing hard to get', 'Being dominant and controlling'], correctIndex: 1, explanation: 'The 3% Man philosophy is built on genuine self-worth and continuous self-improvement — not manipulation tactics or games.' },
          ] },
        },
        {
          id: 'tpm-m-action', type: 'action-plan', title: 'Begin Your Journey', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one action to begin your 3% Man journey this week:', options: [
            { id: 'self-audit', label: 'Conduct a relationship self-audit', description: 'Write down 3 relationship mistakes you\'ve made in the past and what you would do differently now with your new understanding.' },
            { id: 'purpose-check', label: 'Reconnect with your purpose', description: 'Spend 30 minutes this week thinking about or working on something you\'re passionate about outside of relationships.' },
            { id: 'standards-list', label: 'Define your relationship standards', description: 'Write down 5 non-negotiable qualities you want in a partner and 5 deal-breakers you will no longer tolerate.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 2: Understanding Attraction
    {
      id: 'tpm-attraction',
      moduleId: 'three-percent-man',
      title: 'Understanding Attraction: The Science & Psychology',
      description: 'Learn what actually creates attraction, why "nice guy" behaviour often backfires, and how confidence and mystery play crucial roles.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the psychological drivers of attraction',
        'Learn why over-pursuing destroys interest',
        'Recognise the difference between genuine kindness and "nice guy" behaviour',
        'Understand the role of challenge and mystery in building attraction',
      ],
      prerequisites: ['tpm-mindset'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-a-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring attraction dynamics?', options: [{ label: 'Eager to learn', value: 1 }, { label: 'A bit nervous', value: 3 }, { label: 'Somewhat uncomfortable', value: 5 }, { label: 'Anxious', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'tpm-a-psychoed', type: 'psychoeducation', title: 'How Attraction Actually Works', estimatedMinutes: 14,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Attraction Is Not a Choice', text: 'One of the most important principles in the 3% Man framework is that attraction is not a conscious choice. People don\'t decide to feel attracted to someone — they feel it as a response to certain qualities and behaviours. This is why you cannot "convince" someone to be attracted to you through gifts, constant texting, or declarations of love. Attraction either builds naturally through the right dynamics, or it fades when those dynamics are absent.' },
            { heading: 'The Problem with Over-Pursuing', text: 'The most common mistake men make is over-pursuing. This includes: texting too frequently, always being available, cancelling plans to see her, constantly seeking reassurance, and trying to lock down a relationship too quickly. Over-pursuing communicates low value and desperation. It tells the other person, "I have nothing better going on in my life than you." Paradoxically, the more you chase, the more the other person pulls away. This is because people are attracted to those who have a full, purposeful life — not someone whose world revolves around them.', keyIdeas: [
              'Let the other person come to you — aim for them to do 70-80% of the pursuing',
              'If someone is interested, they will make effort. If they are not making effort, they are not interested enough',
              'Over-texting and over-calling kills attraction faster than almost anything else',
              'Mystery and space allow feelings to develop naturally',
              'Never cancel your plans or rearrange your life for someone you just started seeing',
            ] },
            { heading: 'Confidence vs. Arrogance', text: 'Confidence is the single most attractive quality. But confidence is not arrogance, loudness, or bragging. True confidence is quiet self-assurance. It is knowing your worth without needing external validation. It shows up as: being comfortable with silence, not needing to impress, being okay with rejection, having a life you enjoy regardless of your relationship status, and treating everyone — from the waiter to the CEO — with the same level of respect.' },
            { heading: 'The Role of Challenge', text: 'Being a healthy challenge does not mean playing games or being emotionally unavailable. It means having a life, standards, and boundaries. It means you are not desperate for any particular outcome. A 3% Man is a challenge because he genuinely has purpose, goals, and a fulfilling life. He is pleasant and fun to be around, but he does not drop everything for someone he barely knows. This creates natural intrigue and respect.' },
          ] },
        },
        {
          id: 'tpm-a-reflection', type: 'reflection', title: 'Attraction Patterns', estimatedMinutes: 6,
          content: { type: 'reflection', prompts: [
            'Think about a time you over-pursued someone. What happened? How did the dynamic change as you increased your effort?',
            'Can you recall a situation where someone was attracted to you when you were genuinely busy and focused on your own life? What was different about that dynamic?',
            'Where does your confidence currently come from? Is it internal (self-worth) or external (validation from others)?',
          ] },
        },
        {
          id: 'tpm-a-quiz', type: 'quiz', title: 'Attraction Dynamics Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'According to the 3% Man framework, who should be doing the majority of the pursuing?', options: ['The man, always', 'Both equally from day one', 'The interested party — ideally 70-80% from them', 'Neither — you should both play hard to get'], correctIndex: 2, explanation: 'Wayne teaches that attraction is strongest when you let the interested party do 70-80% of the pursuing. Your job is to set the date and create a fun experience — not to chase.' },
            { question: 'Over-pursuing primarily communicates:', options: ['How much you care', 'Low value and desperation', 'That you are a nice person', 'Strong relationship potential'], correctIndex: 1, explanation: 'While over-pursuing often comes from genuine care, it communicates low value and desperation, which kills attraction. People are drawn to those with full, purposeful lives.' },
            { question: 'True confidence is best described as:', options: ['Being the loudest in the room', 'Bragging about achievements', 'Quiet self-assurance without needing external validation', 'Never showing vulnerability'], correctIndex: 2, explanation: 'True confidence is quiet self-assurance — knowing your worth without needing to prove it to anyone. It includes being comfortable with silence, rejection, and vulnerability.' },
          ] },
        },
        {
          id: 'tpm-a-action', type: 'action-plan', title: 'Practise Non-Pursuit', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one action to practise healthy attraction dynamics:', options: [
            { id: 'texting-discipline', label: 'Practise communication discipline', description: 'This week, match the energy of the person you\'re interested in. If they send short replies, do not send paragraphs. If they take hours to reply, don\'t reply in seconds.' },
            { id: 'purpose-first', label: 'Put purpose before pursuit', description: 'Dedicate at least 1 hour daily this week to a personal goal, hobby, or passion project. Notice how it affects your energy and interactions.' },
            { id: 'confidence-building', label: 'Build internal confidence', description: 'Each morning, write 3 things you genuinely like about yourself. Focus on character traits, not achievements or external validation.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 3: Purpose, Mission & Masculine Energy
    {
      id: 'tpm-purpose',
      moduleId: 'three-percent-man',
      title: 'Purpose, Mission & Masculine Energy',
      description: 'Discover why having a strong purpose and mission is the foundation of attraction, and how to develop and maintain your own identity within relationships.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Understand why purpose is more attractive than pursuit',
        'Learn how to maintain your identity in a relationship',
        'Recognise the danger of making someone your "purpose"',
        'Develop a personal mission statement',
      ],
      prerequisites: ['tpm-attraction'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-p-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring your sense of purpose?', options: [{ label: 'Motivated and excited', value: 1 }, { label: 'Curious but uncertain', value: 3 }, { label: 'A bit lost', value: 5 }, { label: 'Anxious about it', value: 7 }, { label: 'Overwhelmed', value: 9 }] },
        },
        {
          id: 'tpm-p-psychoed', type: 'psychoeducation', title: 'Your Mission Comes First', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Purpose Before Relationships', text: 'One of the central teachings in the 3% Man philosophy is that your purpose, mission, and goals must come before any romantic relationship. This is not about neglecting your partner — it is about maintaining the foundation that makes you attractive and fulfilled in the first place. When a man abandons his goals, hobbies, and friendships for a relationship, he loses the very things that made him interesting and attractive. The relationship becomes his entire world, which creates immense pressure on his partner and an unhealthy dynamic.' },
            { heading: 'Never Make Someone Your Purpose', text: 'Making another person the centre of your life is one of the fastest ways to destroy attraction and create codependency. When your happiness depends entirely on another person, you become needy, clingy, and emotionally unstable when they are unavailable. A 3% Man has a life he loves with or without a partner. He has goals he is working toward, friendships he maintains, hobbies that fulfil him, and a vision for his future. A relationship enhances his already great life — it does not create it.', keyIdeas: [
              'Your purpose gives you direction, confidence, and fulfilment independent of any relationship',
              'Women are attracted to men who are going somewhere in life — not men who are waiting for someone to complete them',
              'Maintain your friendships, hobbies, and goals even in a relationship',
              'A great relationship is the result of two complete people coming together — not two halves',
              'If you would not date yourself, why would someone else want to?',
            ] },
            { heading: 'Developing Your Personal Mission', text: 'Your personal mission is the answer to: "What am I building with my life?" It could be a career, a business, a creative pursuit, a fitness goal, or a contribution to your community. The specific mission matters less than the fact that you have one and are actively working toward it. Having a mission gives you natural confidence because you are not looking to anyone else for validation — you are too busy building something meaningful.' },
          ] },
        },
        {
          id: 'tpm-p-journal', type: 'journal', title: 'Define Your Mission', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'What are you currently most passionate about? What would you spend your time on if money and approval were not factors?',
            'Have you ever lost yourself in a relationship — abandoned friends, hobbies, or goals? What happened to the relationship when you did?',
            'Write a personal mission statement in 2-3 sentences. What are you building with your life? What legacy do you want to leave?',
            'What is one goal you can commit to pursuing this month that has nothing to do with dating or relationships?',
          ], privacyNote: 'Your reflections are private and stored only on your device.' },
        },
        {
          id: 'tpm-p-action', type: 'action-plan', title: 'Mission Action Step', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one action to strengthen your personal mission:', options: [
            { id: 'daily-purpose', label: 'Dedicate daily time to your mission', description: 'Block out 1 hour each day this week for focused work on a personal goal — no excuses, no rescheduling for anyone.' },
            { id: 'reconnect-hobbies', label: 'Reconnect with a hobby you abandoned', description: 'Pick one hobby or interest you gave up (for a relationship or otherwise) and spend time on it at least twice this week.' },
            { id: 'social-circle', label: 'Strengthen your social circle', description: 'Reach out to 2-3 friends you haven\'t connected with recently. Schedule time to see them — your friendships are part of your foundation.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 4: Dating Fundamentals
    {
      id: 'tpm-dating',
      moduleId: 'three-percent-man',
      title: 'Dating Fundamentals: Setting Up & Going on Dates',
      description: 'Learn the practical mechanics of dating — from asking someone out, to planning dates, to reading interest levels and knowing when to make a move.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Learn the definite date principle — day, time, activity, location',
        'Understand how to read interest levels through actions, not words',
        'Know how to plan effective dates that create connection',
        'Learn the importance of letting things progress naturally',
      ],
      prerequisites: ['tpm-purpose'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-d-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about learning dating mechanics?', options: [{ label: 'Excited and ready', value: 1 }, { label: 'A little nervous', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Stressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'tpm-d-psychoed', type: 'psychoeducation', title: 'The Art of Dating', estimatedMinutes: 14,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Definite Date', text: 'When asking someone out, be definite. Do not say, "We should hang out sometime" or "Let me know when you\'re free." Instead, propose a specific plan: "Let\'s get dinner at [restaurant] on Thursday at 7." This communicates confidence and leadership. If they can\'t make it but are interested, they will suggest an alternative. If they say "maybe" or give vague responses without offering alternatives, their interest level is low. A definite date shows you are a man with a plan who values his time and theirs.' },
            { heading: 'Reading Interest Levels', text: 'One of the most important skills is reading someone\'s interest level through their actions, not their words. High interest looks like: responding to messages promptly, making time for dates, being affectionate, asking questions about you, bringing up future plans. Low interest looks like: flaking on plans, short or delayed responses, never initiating contact, making excuses, being hot and cold. The golden rule: when someone is interested, they make effort. When they are not, they make excuses. Stop listening to words and start watching actions.', keyIdeas: [
              'Always watch actions, not words — behaviour reveals true interest',
              'If someone wants to see you, they will make it happen',
              'A "maybe" is a no. Do not chase uncertain responses',
              'High interest = consistent effort. Low interest = excuses and flaking',
              'Your time is valuable — invest it in people who invest in you',
            ] },
            { heading: 'Planning Effective Dates', text: 'Great dates are simple: dinner, drinks, a walk, cooking together. The goal is face-to-face conversation in a relaxed setting. Avoid movie theatres or loud events for early dates — you need to talk and connect. Keep first dates to about an hour. The purpose of a first date is not to impress — it is to determine if there is genuine chemistry and compatibility. Be playful, be curious, ask good questions, and listen more than you talk.' },
            { heading: 'The 3-Date Rule and Physical Escalation', text: 'Wayne teaches that physical intimacy typically happens by the second or third date when interest is high. This is not about pressuring anyone — it is about recognising that when two people are genuinely attracted to each other, physical connection progresses naturally. If you have been on multiple dates and there is no physical progression, interest may be declining or the other person may see you as just a friend. The key is to be calibrated: make a move when the moment feels right, and gracefully accept if they are not ready.' },
          ] },
        },
        {
          id: 'tpm-d-reflection', type: 'reflection', title: 'Dating Experiences', estimatedMinutes: 6,
          content: { type: 'reflection', prompts: [
            'Think about your past dates. Have you been definite and confident, or vague and hesitant? How might that have affected outcomes?',
            'Can you recall a time when you ignored low-interest signals and kept pursuing? What happened?',
            'What kind of date would you genuinely enjoy — one that lets you be your authentic self?',
          ] },
        },
        {
          id: 'tpm-d-quiz', type: 'quiz', title: 'Dating Knowledge Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'A "definite date" means:', options: ['Saying "we should hang out sometime"', 'Proposing a specific day, time, activity, and location', 'Letting them decide everything', 'Asking over text if they want to meet up'], correctIndex: 1, explanation: 'A definite date is specific: day, time, activity, and location. It shows confidence and leadership, and makes it easy for the other person to say yes or offer an alternative.' },
            { question: 'When someone\'s interest is low, they typically:', options: ['Tell you directly they are not interested', 'Make excuses, flake on plans, and give vague responses', 'Ask you on more dates', 'Text you constantly'], correctIndex: 1, explanation: 'Low interest shows through actions: flaking, excuses, vague responses, and inconsistent behaviour. High interest shows through consistent effort and enthusiasm.' },
            { question: 'The primary goal of a first date is:', options: ['To impress them with an expensive restaurant', 'To declare your feelings', 'To determine if there is genuine chemistry and compatibility', 'To plan the entire future relationship'], correctIndex: 2, explanation: 'First dates are about discovery — determining if there is genuine chemistry and compatibility. Keep it simple and focus on connection, not impressing.' },
          ] },
        },
        {
          id: 'tpm-d-action', type: 'action-plan', title: 'Dating Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one dating skill to practise:', options: [
            { id: 'definite-date', label: 'Practise making definite plans', description: 'Next time you want to see someone, propose a specific day, time, and activity. Notice how the response differs from vague suggestions.' },
            { id: 'interest-reading', label: 'Start reading interest levels', description: 'In your current interactions, stop listening to words and start watching actions. Are people making effort or excuses?' },
            { id: 'date-planning', label: 'Plan a great first date format', description: 'Design your ideal first date: a relaxed setting with good conversation potential. Have it ready so you can confidently suggest it.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 5: Handling Rejection & Building Resilience
    {
      id: 'tpm-resilience',
      moduleId: 'three-percent-man',
      title: 'Handling Rejection & Building Emotional Resilience',
      description: 'Learn why rejection is a gift, how to detach from outcomes, and build the emotional resilience that makes a 3% Man unshakeable.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Reframe rejection as redirection and information',
        'Learn to detach from specific outcomes while remaining engaged',
        'Build emotional resilience through mindset shifts',
        'Understand abundance mentality vs. scarcity mentality',
      ],
      prerequisites: ['tpm-dating'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-r-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring the topic of rejection?', options: [{ label: 'Ready — I know it is important', value: 1 }, { label: 'A bit uncomfortable', value: 3 }, { label: 'This topic triggers me', value: 5 }, { label: 'Quite stressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'tpm-r-psychoed', type: 'psychoeducation', title: 'Rejection as Redirection', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Rejection Is Information', text: 'A 3% Man does not fear rejection because he understands what it actually is: information. When someone rejects you, they are telling you one of a few things: they are not attracted, they are not available, or they are not compatible with you. None of these things are about your worth as a person. Rejection saves you time. It prevents you from investing months or years into someone who was never going to be the right fit. The fastest way to find the right person is to efficiently filter out the wrong ones — and rejection is that filter.' },
            { heading: 'Scarcity vs. Abundance Mentality', text: 'Men who fear rejection operate from scarcity mentality: the belief that there are very few potential partners and if this one does not work out, they will be alone. This leads to desperation, over-pursuing, and settling. Abundance mentality is the understanding that there are many potential partners in the world. If this one is not interested, another will be. This is not about being cavalier or treating people as interchangeable — it is about knowing that your value does not depend on any single person\'s opinion of you.', keyIdeas: [
              'Rejection is not about your worth — it is about compatibility and timing',
              'Every rejection brings you closer to the right person',
              'Scarcity mentality breeds desperation; abundance mentality breeds confidence',
              'You cannot lose what was never yours',
              'The right person will not need to be convinced — they will choose you enthusiastically',
            ] },
            { heading: 'Outcome Independence', text: 'One of the most powerful shifts is learning to be outcome-independent. This means you take action — ask someone out, go on the date, express interest — without being attached to the result. You enjoy the process of meeting someone new without needing a specific outcome. When you are outcome-independent, you are relaxed, playful, and present. You are not anxiously scanning for signs or trying to control the interaction. This energy is incredibly attractive because it communicates, "I am here because I want to be, not because I need to be."' },
          ] },
        },
        {
          id: 'tpm-r-breathing', type: 'breathing', title: 'Grounding Exercise', estimatedMinutes: 3,
          content: { type: 'breathing', pattern: { inhale: 4, hold: 4, exhale: 6, holdAfter: 2 }, durationSeconds: 120, instruction: 'When rejection triggers anxiety or self-doubt, this breathing pattern activates your parasympathetic nervous system and brings you back to centre. Practise this whenever you feel the sting of rejection.' },
        },
        {
          id: 'tpm-r-journal', type: 'journal', title: 'Your Relationship with Rejection', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Describe a rejection that felt devastating at the time. Looking back, can you see how it was actually a redirection or a blessing in disguise?',
            'Do you currently operate more from scarcity or abundance mentality? What specific thoughts or behaviours reveal this?',
            'What would you do differently in dating if you were completely outcome-independent — if you genuinely did not care whether it "worked out"?',
          ], privacyNote: 'Your reflections are private and stored only on your device.' },
        },
        {
          id: 'tpm-r-action', type: 'action-plan', title: 'Building Resilience', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one action to build emotional resilience:', options: [
            { id: 'rejection-reframe', label: 'Reframe past rejections', description: 'Write about 3 past rejections and identify how each one was actually protecting you from the wrong situation or leading you to something better.' },
            { id: 'outcome-practice', label: 'Practise outcome independence', description: 'Have 3 conversations this week with no agenda — just connect with people for the joy of connection, expecting nothing.' },
            { id: 'abundance-shift', label: 'Shift to abundance mentality', description: 'Each day, write down 3 things you are grateful for about your life as it is right now — without a partner. Build appreciation for your current reality.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 6: Maintaining Long-Term Relationships
    {
      id: 'tpm-long-term',
      moduleId: 'three-percent-man',
      title: 'Maintaining Attraction in Long-Term Relationships',
      description: 'Learn how to keep the spark alive, maintain polarity, handle relationship challenges, and grow together without losing yourself.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand why attraction fades and how to prevent it',
        'Learn to maintain masculine-feminine polarity',
        'Know how to handle tests and challenges in relationships',
        'Develop strategies for continuous growth as a couple',
      ],
      prerequisites: ['tpm-resilience'],
      contraindications: [],
      segments: [
        {
          id: 'tpm-lt-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring long-term relationship dynamics?', options: [{ label: 'Interested and open', value: 1 }, { label: 'Somewhat guarded', value: 3 }, { label: 'This topic feels heavy', value: 5 }, { label: 'Anxious', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'tpm-lt-psychoed', type: 'psychoeducation', title: 'Keeping the Flame Alive', estimatedMinutes: 14,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Why Attraction Fades', text: 'The number one reason attraction fades in long-term relationships is complacency. Men stop doing the things that created attraction in the first place: they abandon their purpose, stop taking care of themselves, become predictable, and take their partner for granted. The 3% Man understands that attraction requires ongoing maintenance. It is not something you "achieve" once and then coast on. You must continue to grow, challenge yourself, and surprise your partner throughout the relationship.' },
            { heading: 'Maintaining Your Identity', text: 'Many men slowly merge their identity with their partner\'s. They give up their friends, hobbies, and goals. They ask permission for everything. They become "we" people who have no independent "I" left. This is a recipe for resentment and lost attraction. A 3% Man maintains his identity, his friendships, his hobbies, and his goals throughout the relationship. He goes out with his friends. He works on his career. He stays in shape. He remains the interesting, purposeful man his partner was attracted to in the first place.', keyIdeas: [
              'Never stop courting your partner — date nights, surprises, and effort matter forever',
              'Maintain your own identity, friendships, and interests throughout the relationship',
              'Complacency is the silent killer of long-term relationships',
              'Continue growing as an individual even as you grow as a couple',
              'A strong relationship is two strong individuals choosing each other daily',
            ] },
            { heading: 'Handling Relationship Tests', text: 'In relationships, your partner will test you — not consciously or maliciously, but as a way of confirming that you are still the strong, confident person they fell for. Tests look like: pushing your boundaries, creating minor drama, or seeing how you react under pressure. The 3% Man does not react emotionally, get defensive, or crumble. He stays calm, maintains his sense of humour, and holds his ground with love. He does not argue or try to "win." He simply remains grounded and lets the storm pass.' },
            { heading: 'Growing Together', text: 'The best relationships involve two people who are individually committed to growth and who support each other\'s evolution. This means encouraging each other\'s goals, celebrating wins together, navigating challenges as a team, and continuously communicating about needs and desires. A 3% Man is not afraid of deep conversation. He creates space for his partner to share openly, and he shares his own inner world authentically. Vulnerability within a framework of strength is one of the most attractive qualities in long-term relationships.' },
          ] },
        },
        {
          id: 'tpm-lt-journal', type: 'journal', title: 'Long-Term Relationship Reflections', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'If you are in a relationship: what aspects of yourself have you given up since getting together? What would it take to reclaim them?',
            'How do you currently handle it when your partner is upset or testing your boundaries? Do you react emotionally, withdraw, or stay grounded?',
            'What does "growing together" look like for you? How can you support your partner\'s growth while maintaining your own?',
            'Rate the current state of effort in your relationship on a scale of 1-10. What one thing could you do this week to increase it?',
          ], privacyNote: 'Your reflections are private and stored only on your device.' },
        },
        {
          id: 'tpm-lt-quiz', type: 'quiz', title: 'Long-Term Dynamics Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'The number one reason attraction fades in long-term relationships is:', options: ['Getting older', 'Having children', 'Complacency — stopping the effort that built attraction', 'Spending too much time apart'], correctIndex: 2, explanation: 'Complacency — stopping the courting, the self-improvement, the effort — is the primary killer of long-term attraction. The 3% Man never stops growing and investing in the relationship.' },
            { question: 'When your partner "tests" you, the best response is to:', options: ['Get angry and argue', 'Give in immediately to avoid conflict', 'Stay calm, grounded, and maintain your sense of humour', 'Ignore them completely'], correctIndex: 2, explanation: 'Staying calm, grounded, and maintaining your sense of humour during tests shows emotional maturity and strength — the very qualities your partner is testing for.' },
            { question: 'Maintaining your own identity in a relationship means:', options: ['Keeping secrets from your partner', 'Continuing your hobbies, friendships, and goals while being present', 'Living completely separate lives', 'Never compromising on anything'], correctIndex: 1, explanation: 'Maintaining your identity means keeping your hobbies, friendships, and personal goals active while also being a present, engaged partner. Two complete individuals make the strongest couples.' },
          ] },
        },
        {
          id: 'tpm-lt-action', type: 'action-plan', title: 'Relationship Maintenance', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one action to strengthen your long-term relationship skills:', options: [
            { id: 'date-night', label: 'Plan a thoughtful date this week', description: 'Plan and execute a date that shows effort and thoughtfulness — something your partner would not expect. Focus on creating an experience, not spending money.' },
            { id: 'reclaim-identity', label: 'Reclaim one aspect of your identity', description: 'Pick one hobby, friendship, or goal you have neglected and dedicate time to it this week. Show yourself (and your partner) that you are still your own person.' },
            { id: 'deep-conversation', label: 'Have one deep conversation', description: 'Initiate a meaningful conversation with your partner about dreams, fears, or desires. Listen more than you speak. Create space for vulnerability.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },
  ],
}

export default threePercentMan
