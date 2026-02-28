import type { Module } from '../types'

const trustRebuilding: Module = {
  id: 'trust-rebuilding',
  title: 'Trust Rebuilding & Vulnerability',
  description: 'Learn to rebuild trust after betrayal, develop the courage for vulnerability, and understand trust as a choice made in small, consistent moments. Drawing from Brene Brown\'s BRAVING framework, Gottman\'s trust research, and attachment science.',
  icon: 'shield-check',
  order: 19,
  category: 'growth',
  prerequisites: ['healthy-relationships'],
  sessions: [
    // SESSION 1: Understanding Trust
    {
      id: 'trust-foundations',
      moduleId: 'trust-rebuilding',
      title: 'What Trust Actually Is',
      description: 'Understand trust as a process of small moments, learn Brown\'s BRAVING framework, and explore how attachment history shapes your capacity to trust.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Define trust as a process built in small moments, not grand gestures',
        'Learn Brene Brown\'s BRAVING acronym for trust',
        'Understand how attachment history shapes trust capacity',
        'Distinguish healthy caution from defensive wall-building',
      ],
      prerequisites: [],
      contraindications: [],
      segments: [
        {
          id: 'tf-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring the topic of trust?', options: [{ label: 'Open and ready', value: 1 }, { label: 'A bit guarded', value: 3 }, { label: 'Somewhat anxious', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'tf-psychoed', type: 'psychoeducation', title: 'The Anatomy of Trust', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Trust Is Built in Small Moments', text: 'Brene Brown\'s research on trust reveals a counterintuitive truth: trust is not built through grand gestures or dramatic acts of loyalty. It is built in tiny moments — what she calls "sliding door moments." A friend calls when they say they will. A partner remembers a small detail you mentioned. Someone keeps a confidence. These micro-moments are the bricks of trust. Gottman\'s research confirms this: trust is built through the accumulation of small, consistent, reliable actions over time. When someone turns toward your bid for connection, they make a micro-deposit in the trust account. When they turn away, they make a withdrawal.' },
            { heading: 'The BRAVING Framework', text: 'Brown distilled trust into the BRAVING acronym — a checklist for both self-trust and trust in others: B — Boundaries: You respect my boundaries, and when you are not clear about what is okay, you ask. I respect your boundaries too. R — Reliability: You do what you say you will do. You are aware of your competencies and limitations, and you do not overpromise. A — Accountability: You own your mistakes, apologise, and make amends. V — Vault: You do not share information or experiences that are not yours to share. What I share with you, you hold in confidence. I — Integrity: You choose courage over comfort. You choose what is right over what is fun, fast, or easy. And you practise your values rather than just professing them. N — Non-judgement: I can fall apart, ask for help, and struggle without being judged. You can do the same with me. G — Generosity: You extend the most generous interpretation possible to the intentions, words, and actions of others.', keyIdeas: [
              'Trust is built in small, consistent moments — not grand gestures',
              'The BRAVING framework applies to self-trust as well as trust in others',
              'Trust and betrayal are not binary — they exist on a spectrum',
              'Your attachment style profoundly shapes how you approach trust',
              'Anxious attachment may lead to trusting too quickly; avoidant attachment may prevent trusting at all',
            ] },
            { heading: 'How Attachment Shapes Trust', text: 'Your early attachment experiences created a template for trust. Secure attachment: "People are generally reliable. When they let me down, we can repair. Trust is earned and maintained." Anxious attachment: "I desperately want to trust but I am always scanning for signs of betrayal. I may give trust too quickly (to feel safe) or withdraw it too suddenly (when triggered)." Avoidant attachment: "Trust feels dangerous. I learned early that depending on people leads to pain. I would rather rely on myself." Disorganised attachment: "I crave trust but am terrified of it. I may simultaneously seek closeness and push people away." Understanding your template helps you make conscious choices about trust rather than operating on autopilot.' },
            { heading: 'Self-Trust: The Foundation', text: 'Brown emphasises that trust in others begins with self-trust. Can you trust yourself to: honour your own boundaries? Follow through on commitments to yourself? Hold yourself accountable? Keep your own confidences? Act with integrity even when it is hard? Not judge yourself when you struggle? Give yourself generous interpretations? For many people with insecure attachment, self-trust has been eroded by years of self-abandonment, self-criticism, and prioritising others over themselves. Rebuilding self-trust is often the most important — and most overlooked — part of trust work.' },
          ] },
        },
        {
          id: 'tf-journal', type: 'journal', title: 'Your Trust Story', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Go through the BRAVING framework and rate your self-trust in each area. Where are you strongest? Where do you let yourself down most?',
            'How has your attachment style shaped your approach to trust? Do you trust too quickly, too slowly, or inconsistently?',
            'Think of someone you deeply trust. Which elements of BRAVING do they demonstrate most consistently?',
            'When was trust first broken for you? How does that original wound show up in your current relationships?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'tf-quiz', type: 'quiz', title: 'Trust Knowledge Check', estimatedMinutes: 4,
          content: { type: 'quiz', items: [
            { question: 'In Brown\'s BRAVING framework, the "V" stands for:', options: ['Vulnerability', 'Vault — keeping confidences safe', 'Values', 'Validation'], correctIndex: 1, explanation: 'The "V" in BRAVING stands for Vault — the practice of not sharing information or experiences that are not yours to share. It means holding confidences and respecting privacy.' },
            { question: 'Trust is primarily built through:', options: ['Grand romantic gestures', 'One-time acts of loyalty', 'Small, consistent, reliable actions over time', 'Verbal promises'], correctIndex: 2, explanation: 'Both Brown and Gottman\'s research shows that trust is built through the accumulation of small, consistent, reliable actions — not through grand gestures or dramatic demonstrations of loyalty.' },
            { question: 'Self-trust in Brown\'s framework means:', options: ['Never making mistakes', 'Applying the BRAVING elements to yourself — honouring your own boundaries, commitments, and integrity', 'Trusting your instincts without question', 'Never needing others'], correctIndex: 1, explanation: 'Self-trust means applying BRAVING to your relationship with yourself: honouring your boundaries, following through on self-commitments, being accountable to yourself, and extending yourself generosity when you struggle.' },
          ] },
        },
        {
          id: 'tf-action', type: 'action-plan', title: 'Building Self-Trust', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'This week, focus on building self-trust:', options: [
            { id: 'self-promise', label: 'Keep one small promise to yourself each day', description: 'Make a tiny commitment and follow through. "I will go to bed by 10pm." "I will take a 10-minute walk." Build evidence that you are reliable to yourself.' },
            { id: 'braving-audit', label: 'BRAVING self-audit', description: 'Journal through each element of BRAVING as applied to yourself. Where are you strong? Where do you need to grow?' },
            { id: 'boundary-honour', label: 'Honour one self-boundary', description: 'Identify a boundary you have with yourself that you frequently break. Honour it once this week and notice how it feels.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 2: Trust After Betrayal
    {
      id: 'trust-after-betrayal',
      moduleId: 'trust-rebuilding',
      title: 'Rebuilding Trust After Betrayal',
      description: 'Navigate the painful process of rebuilding trust after betrayal — whether infidelity, broken promises, or relational trauma. Understand earned trust, transparency, and accountability.',
      estimatedMinutes: 35,
      learningObjectives: [
        'Understand the impact of betrayal on the attachment system',
        'Learn the requirements for genuine trust rebuilding',
        'Distinguish between forgiveness and trust',
        'Understand when trust rebuilding is appropriate vs when leaving is healthier',
      ],
      prerequisites: ['trust-foundations'],
      contraindications: ['This session may be painful if you are currently processing a betrayal. Go slowly and use grounding tools as needed.'],
      segments: [
        {
          id: 'tab-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling about exploring trust after betrayal?', options: [{ label: 'Ready and grounded', value: 1 }, { label: 'A bit raw but willing', value: 3 }, { label: 'This is painful territory', value: 5 }, { label: 'Very activated', value: 7 }, { label: 'Not safe to continue', value: 9 }] },
        },
        {
          id: 'tab-psychoed', type: 'psychoeducation', title: 'After the Break', estimatedMinutes: 12,
          content: { type: 'psychoeducation', sections: [
            { heading: 'Betrayal and the Attachment System', text: 'Betrayal — whether infidelity, deception, broken promises, or emotional abandonment — is a direct assault on the attachment system. It activates the same neural circuits as physical danger because, in attachment terms, the loss of a trusted bond IS danger. Gottman describes betrayal as a "trust metric violation" — a moment when you learn that the person you depend on cannot be depended on. The body responds with hyperarousal (anxiety, hypervigilance, intrusive thoughts, inability to sleep) or hypoarousal (numbness, dissociation, shutdown). Both responses are your nervous system\'s attempt to protect you from a threat that has already occurred.' },
            { heading: 'The Requirements for Rebuilding', text: 'Trust can be rebuilt — but only under specific conditions. The betrayer must: Take full responsibility without excuses, minimisation, or blame-shifting. Express genuine remorse (not just guilt about getting caught). Be willing to endure the betrayed person\'s pain without becoming defensive. Provide full transparency — not just what they choose to reveal. Make consistent behavioural changes over time (not just promises). Accept that rebuilding is a slow process — months to years, not days to weeks. The betrayed person needs to: Allow themselves to grieve and feel the full range of emotions. Be willing to eventually move from interrogation to dialogue. Accept that trust will come in waves — some days forward, some days back. Ultimately choose (not be pressured) to give the relationship another chance.', keyIdeas: [
              'Betrayal activates the attachment system\'s threat response',
              'Rebuilding requires the betrayer to tolerate the betrayed person\'s pain without defensiveness',
              'Transparency is not the same as the betrayed person becoming a surveillance system',
              'Forgiveness and trust are not the same thing — you can forgive without trusting again',
              'Some betrayals are deal-breakers — and that is a valid response',
            ] },
            { heading: 'Earned Trust vs Demanded Trust', text: '"You should trust me" is not how trust works. Trust after betrayal must be earned — through consistent, verifiable behaviour over time. The betrayer does not get to set the timeline. Earned trust looks like: following through on every commitment (even small ones), proactively offering information without being asked, accepting the other person\'s triggers and responding with patience, not framing the betrayed person\'s pain as unreasonable, demonstrating change through actions rather than promises. Trust demanded is not trust — it is pressure. "Why can\'t you just get over it?" "You should forgive me by now." These statements re-traumatise the betrayed person by invalidating their legitimate pain.' },
            { heading: 'When to Leave', text: 'Not all betrayals are survivable — nor should they be. Consider whether trust rebuilding is appropriate or whether leaving is healthier: Repeated betrayals with the same pattern suggest the person is not changing. Absence of genuine accountability (blame-shifting, minimisation). The betrayal involved abuse, violence, or ongoing deception. You find yourself becoming someone you do not recognise in order to monitor or manage the situation. The cost of staying is greater than the cost of leaving. Choosing to leave is not failure. It is an act of self-trust — honouring the boundary that says "I deserve reliability and safety."' },
          ] },
        },
        {
          id: 'tab-journal', type: 'journal', title: 'Processing Betrayal', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'If you have experienced betrayal: What did it feel like in your body when you discovered the truth? Where do you still carry that pain?',
            'Has the person who betrayed your trust met the requirements for rebuilding (full accountability, transparency, consistent change)? Be honest.',
            'Forgiveness and trust are different. You can forgive someone and still choose not to trust them again. Where do you stand on each?',
            'What does self-trust look like in the context of this betrayal? What is your inner wisdom telling you?',
          ], privacyNote: 'Private and deeply personal. Take your time with these.' },
        },
        {
          id: 'tab-quiz', type: 'quiz', title: 'Betrayal Recovery Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'After betrayal, trust is rebuilt through:', options: ['The betrayed person deciding to "get over it"', 'The betrayer\'s consistent, transparent behaviour over time', 'Pretending it did not happen', 'Time alone, without any changes'], correctIndex: 1, explanation: 'Trust after betrayal must be earned through consistent, verifiable, transparent behavioural change over time. It cannot be demanded, rushed, or achieved through the betrayed person simply deciding to forgive.' },
            { question: '"Forgiveness" and "trust" after betrayal are:', options: ['The same thing', 'Different — you can forgive without trusting again', 'Impossible after betrayal', 'Required in the same timeframe'], correctIndex: 1, explanation: 'Forgiveness is an internal process of releasing resentment. Trust is a relational process of earned reliability. You can forgive someone and still choose not to trust them again, and that is a valid, healthy response.' },
          ] },
        },
        {
          id: 'tab-action', type: 'action-plan', title: 'Trust Work This Week', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Choose one trust-related action:', options: [
            { id: 'braving-relationship', label: 'BRAVING audit of a key relationship', description: 'Go through each BRAVING element for a specific relationship. Where is trust strong? Where is it thin? What would need to change?' },
            { id: 'forgiveness-letter', label: 'Write a letter you will not send', description: 'Write honestly to someone who betrayed your trust. Say everything. You do not need to send it — this is for you.' },
            { id: 'self-trust-practice', label: 'Practice trusting yourself', description: 'Identify a situation where you doubt your own perception. Write down what you actually experienced and felt, and practise believing yourself.' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 3: The Courage to Be Vulnerable
    {
      id: 'vulnerability-courage',
      moduleId: 'trust-rebuilding',
      title: 'The Courage to Be Vulnerable',
      description: 'Understand vulnerability as strength, not weakness. Learn why wholehearted connection requires risk, and build a graduated practice of vulnerability.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Redefine vulnerability as courage rather than weakness',
        'Understand why emotional armour prevents connection',
        'Learn graduated vulnerability practice',
        'Understand "vulnerability hangovers" and how to manage them',
      ],
      prerequisites: ['trust-after-betrayal'],
      contraindications: [],
      segments: [
        {
          id: 'vc-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Open and willing', value: 1 }, { label: 'A bit guarded', value: 3 }, { label: 'Nervous about this topic', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'vc-psychoed', type: 'psychoeducation', title: 'Vulnerability as Strength', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'The Myth of Invulnerability', text: 'Brene Brown\'s research on vulnerability spans over 400,000 pieces of data and two decades. Her conclusion: "Vulnerability is not weakness. It is our greatest measure of courage." We tend to admire vulnerability in others (honesty, emotional openness, risk-taking) while fearing it in ourselves. Brown calls this the "vulnerability paradox." Common armour against vulnerability includes: perfectionism ("If I am perfect, I cannot be hurt"), numbing (substances, busyness, overwork), foreboding joy (waiting for the other shoe to drop when things are good), and cynicism ("If I do not care, I cannot be disappointed"). Each of these protects us from pain — and simultaneously prevents genuine connection.' },
            { heading: 'Graduated Vulnerability', text: 'Vulnerability is not about sharing everything with everyone. It is about choosing the right people, the right time, and the right depth. Brown uses the metaphor of a "marble jar" — people earn the right to hear your story through small, consistent acts of trustworthiness. Graduated vulnerability means starting small with low-risk disclosures and gradually increasing depth as trust is established. Level 1: Sharing preferences and opinions. Level 2: Sharing feelings about current events. Level 3: Sharing personal struggles or challenges. Level 4: Sharing deep fears, wounds, or shame stories. Level 5: Sharing parts of yourself you have never shown anyone. You do not owe anyone Level 5 vulnerability. You earn your way there together.', keyIdeas: [
              'Vulnerability is not weakness — it is the birthplace of love, belonging, and joy (Brown)',
              'Emotional armour protects from pain but prevents connection',
              'Graduated vulnerability builds trust progressively',
              '"Vulnerability hangovers" — feeling exposed and regretful after sharing — are normal',
              'The goal is not to be vulnerable with everyone, but to be capable of vulnerability with safe people',
            ] },
            { heading: 'Vulnerability Hangovers', text: 'Have you ever shared something personal and then spent the next hours or days cringing, wishing you could take it back? Brown calls this a "vulnerability hangover." It is the shame and regret that follows emotional exposure. What helps: Expect it. Knowing it is coming reduces its power. Remind yourself that vulnerability is courage, not weakness. Do not retract. The urge to follow up with "I was just kidding" or "That was not a big deal" undermines the genuine connection you just created. Notice if the other person responded with care — that is evidence of safety. Practice self-compassion: "I was brave. That was hard. I am proud of myself for showing up."' },
          ] },
        },
        {
          id: 'vc-journal', type: 'journal', title: 'Your Vulnerability Edge', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'What is your primary armour against vulnerability? (Perfectionism, numbing, cynicism, foreboding joy?) Where did you learn to wear it?',
            'Who in your life has earned "marble jar" trust? How did they earn it? What did they do consistently?',
            'What is one thing you wish you could share with someone but are afraid to? What specifically do you fear would happen?',
            'Have you experienced a "vulnerability hangover"? What happened? Looking back, was the sharing actually a mistake, or was it courage?',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'vc-quiz', type: 'quiz', title: 'Vulnerability Check', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'Brene Brown\'s research defines vulnerability as:', options: ['Weakness and emotional fragility', 'Our greatest measure of courage — the willingness to show up without guaranteed outcomes', 'Oversharing personal information', 'Being emotional in public'], correctIndex: 1, explanation: 'Brown defines vulnerability as "uncertainty, risk, and emotional exposure" — the willingness to show up authentically without guaranteed outcomes. Her research consistently shows this is a measure of courage, not weakness.' },
            { question: 'Graduated vulnerability means:', options: ['Sharing everything immediately to build trust fast', 'Progressively increasing the depth of sharing as trust is established', 'Never being truly vulnerable', 'Only being vulnerable with therapists'], correctIndex: 1, explanation: 'Graduated vulnerability means starting with low-risk disclosures and increasing depth as trust is earned through consistent, reliable behaviour. Not everyone earns access to your deepest stories.' },
          ] },
        },
        {
          id: 'vc-action', type: 'action-plan', title: 'Vulnerability Practice', estimatedMinutes: 3,
          content: { type: 'action-plan', prompt: 'Practice vulnerability this week:', options: [
            { id: 'small-share', label: 'Share one honest feeling with a safe person', description: 'Choose someone you trust and share something genuine: "I have been feeling stressed about..." or "I really appreciated when you..."' },
            { id: 'armour-notice', label: 'Notice your armour in action', description: 'Catch yourself putting on emotional armour 3 times this week. Name which type it is (perfectionism, numbing, cynicism, foreboding joy). You do not need to remove it — just notice it.' },
            { id: 'hangover-compassion', label: 'Practice post-vulnerability compassion', description: 'If you experience a vulnerability hangover after sharing, practice saying: "That was courage, not weakness. I am proud of myself for showing up."' },
          ], timeHorizonDays: 7 },
        },
      ],
    },

    // SESSION 4: Accountability and Ongoing Trust
    {
      id: 'accountability-trust',
      moduleId: 'trust-rebuilding',
      title: 'Accountability, Transparency & Ongoing Trust',
      description: 'Learn the practical skills of accountability and transparency that sustain trust over time, and build a personal trust maintenance practice.',
      estimatedMinutes: 30,
      learningObjectives: [
        'Understand accountability as a trust-building practice',
        'Learn to offer genuine apologies',
        'Understand transparency without surveillance',
        'Build a personal trust maintenance plan',
      ],
      prerequisites: ['vulnerability-courage'],
      contraindications: [],
      segments: [
        {
          id: 'at-safety', type: 'safety-check', title: 'Check-In', estimatedMinutes: 2,
          content: { type: 'safety-check', question: 'How are you feeling?', options: [{ label: 'Grounded', value: 1 }, { label: 'A bit uneasy', value: 3 }, { label: 'Activated', value: 5 }, { label: 'Distressed', value: 7 }, { label: 'Very distressed', value: 9 }] },
        },
        {
          id: 'at-psychoed', type: 'psychoeducation', title: 'The Practice of Accountability', estimatedMinutes: 10,
          content: { type: 'psychoeducation', sections: [
            { heading: 'What Genuine Accountability Looks Like', text: 'Accountability is one of the most trust-building behaviours humans can demonstrate. A genuine apology includes: naming what you did (specifically, not vaguely), acknowledging the impact without minimising, expressing genuine remorse, taking responsibility without excuses or blame-shifting, asking what the other person needs, committing to a specific behavioural change, following through on that commitment. What accountability is NOT: "I am sorry you feel that way" (deflection), "I am sorry, BUT..." (excuse), "I already apologised — why are you still upset?" (invalidation), "Everyone makes mistakes" (minimisation).' },
            { heading: 'Transparency vs Surveillance', text: 'After trust has been broken, transparency is necessary — but it is different from surveillance. Healthy transparency: proactively sharing information, being open about whereabouts and communications, volunteering context, welcoming questions. Unhealthy surveillance: the betrayed person checking phones, tracking location, reading emails, demanding account passwords. The difference is that transparency is offered by the trust-breaker as a gift. Surveillance is seized by the betrayed person out of anxiety. Both may look similar from the outside, but the emotional quality is entirely different. Transparency says "I will earn your trust." Surveillance says "I cannot trust, so I will control."', keyIdeas: [
              'Genuine accountability names the specific wrong, its impact, and a commitment to change',
              '"I am sorry you feel that way" is not an apology — it is a deflection',
              'Transparency is offered freely; surveillance is driven by anxiety',
              'Trust maintenance is an ongoing practice, not a one-time achievement',
              'The best predictor of future behaviour is past behaviour — actions matter more than words',
            ] },
            { heading: 'Building Your Trust Maintenance Plan', text: 'Trust requires ongoing maintenance, just like any living system. A trust maintenance plan includes: regular check-ins about how the relationship feels (not just logistics), ongoing BRAVING self-assessments, practicing small acts of reliability consistently, maintaining vulnerability with safe people, addressing trust ruptures quickly rather than letting resentment build, continuing to learn about your partner\'s inner world (updating love maps), celebrating trust milestones without complacency.' },
          ] },
        },
        {
          id: 'at-interactive', type: 'interactive', title: 'Accountability Practice', estimatedMinutes: 8,
          content: { type: 'interactive', component: 'AccountabilityBuilder', config: {}, instructions: 'Think of something you need to take accountability for — even something small. Build a genuine accountability statement using the framework: name it, acknowledge impact, express remorse, take responsibility, commit to change.' },
        },
        {
          id: 'at-journal', type: 'journal', title: 'Trust Integration', estimatedMinutes: 8,
          content: { type: 'journal', prompts: [
            'Where do you need to practice accountability in your relationships? What have you been avoiding owning?',
            'How do you feel about the distinction between transparency and surveillance? Which one have you been practicing?',
            'Looking back over this module, what is the biggest shift in your understanding of trust?',
            'Write a trust commitment to yourself: "I will trust myself by..." and to someone important: "I will build trust by..."',
          ], privacyNote: 'Private.' },
        },
        {
          id: 'at-reflection', type: 'reflection', title: 'Module Closing', estimatedMinutes: 5,
          content: { type: 'reflection', prompts: [
            'What is the most important thing you learned about trust in this module?',
            'How has your understanding of self-trust changed?',
            'What is one ongoing trust practice you will maintain?',
          ] },
        },
        {
          id: 'at-quiz', type: 'quiz', title: 'Module Review', estimatedMinutes: 3,
          content: { type: 'quiz', items: [
            { question: 'A genuine apology includes:', options: ['Saying "I am sorry you feel that way"', 'Naming the specific action, its impact, and committing to change', 'Explaining why you did it', 'Expecting immediate forgiveness'], correctIndex: 1, explanation: 'A genuine apology names the specific action, acknowledges its impact without minimising, takes full responsibility, and includes a commitment to specific behavioural change.' },
            { question: 'The difference between transparency and surveillance is:', options: ['There is no difference', 'Transparency is freely offered by the trust-breaker; surveillance is seized out of anxiety by the betrayed person', 'Surveillance is more effective', 'Transparency means sharing everything with everyone'], correctIndex: 1, explanation: 'Transparency is proactively offered as a trust-building gift. Surveillance is driven by the betrayed person\'s anxiety and need for control. The emotional quality and relational impact are entirely different.' },
          ] },
        },
      ],
    },
  ],
}

export default trustRebuilding
