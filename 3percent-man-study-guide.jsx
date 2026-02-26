import { useState, useEffect, useMemo, useCallback, useRef } from "react";

// ═══════════════════════════════════════════════════════════════
// COMPLETE BOOK DATA - 63 CHAPTERS ACROSS 10 PARTS
// ═══════════════════════════════════════════════════════════════

const BOOK_DATA = [
  // ─── PART I: IN THE BEGINNING ───
  {
    id: 0, part: "Part I: In the Beginning", partIdx: 0, title: "Introduction",
    summary: "The concept of the '3% Man' is introduced — only 3 out of 100 men truly understand women and how attraction works. This isn't about looks or money. It's about understanding feminine psychology, being confident, having purpose, and knowing how to lead interactions. The book promises to take you from initial meeting through to long-term commitment. A true Alpha Male chooses his purpose and passion over a woman if forced to choose. Masculine energy is about purpose, drive, mission, and breaking through barriers.",
    keyPrinciples: [
      "Only 3% of men truly understand women — this book teaches you to join them",
      "A 3% man is one who understands what creates attraction and what kills it",
      "Women love mystery, confidence, and a man who can't be swayed from his path",
      "Masculine energy = purpose, drive, mission. Feminine energy = receiving, bonding, connection",
      "You don't have to look like Brad Pitt — understanding trumps appearance",
      "Most men literally talk women out of dating them because they don't understand attraction"
    ],
    actionItems: [
      "Commit to reading this book 10-15 times to truly internalize the principles",
      "Accept that what you've been doing hasn't been working — be open to change",
      "Understand this is about becoming your best self, not manipulation"
    ],
    quiz: [
      { q: "What percentage of men truly understand women according to the book?", opts: ["10%", "3%", "15%", "25%"], a: 1 },
      { q: "What does masculine energy focus on?", opts: ["Emotions and bonding", "Purpose, drive, and mission", "Pleasing women", "Being agreeable"], a: 1 },
      { q: "What does the 3% man choose over a woman if forced?", opts: ["His friends", "His purpose and passion", "Another woman", "His comfort zone"], a: 1 }
    ]
  },
  {
    id: 1, part: "Part I: In the Beginning", partIdx: 0, title: "Why This Book Was Written",
    summary: "Corey Wayne shares his own painful journey through failed relationships. He describes how he repeatedly blew it with women he was interested in — chasing too hard, being too available, proposing too early, and not understanding attraction levels. He tried everything: flowers, phone calls, showing up uninvited — all the classic nice-guy mistakes. His failures ultimately drove him to study attraction obsessively, read dozens of books, and eventually crack the code.",
    keyPrinciples: [
      "The women you want never want you, and the ones you don't want are crazy about you — this pattern reveals a fundamental misunderstanding",
      "When a woman says 'let's just be friends' or 'I need space', attraction has already dropped critically",
      "Sending flowers, calling constantly, and over-pursuing drives women away",
      "The harder you chase, the faster she runs — this is a universal law of attraction",
      "Women give you their number but won't go out because attraction wasn't high enough",
      "Over-pursuing and neediness are the #1 attraction killers"
    ],
    actionItems: [
      "Identify your own past patterns of over-pursuing or being too available",
      "Recognize that 'trying harder' with women actually makes things worse",
      "Understand rejection as information, not a personal attack"
    ],
    quiz: [
      { q: "What's the biggest mistake nice guys make?", opts: ["Being too rude", "Over-pursuing and being too available", "Not spending enough money", "Not being handsome enough"], a: 1 },
      { q: "When a woman says 'let's just be friends', what's really happening?", opts: ["She genuinely wants friendship", "She's testing you", "Her attraction has dropped critically", "She's playing hard to get"], a: 2 },
      { q: "What does sending flowers to a woman who's pulling away accomplish?", opts: ["Wins her back", "Shows you care", "Pushes her further away", "Makes her jealous"], a: 2 }
    ]
  },
  {
    id: 2, part: "Part I: In the Beginning", partIdx: 0, title: "Why You Need To Read This Book More Than Once",
    summary: "Studies show people retain only 7-10% of what they read the first time. Corey insists on reading the book 10-15 times because the principles need to become second nature — automatic responses, not conscious thoughts. He shares his own story of meeting a woman who matched everything on his ideal list after doing the deep work. Confidence comes from knowledge applied through practice. Body language of a confident man — how you walk, stand, and carry yourself — communicates more than words.",
    keyPrinciples: [
      "You retain only 7-10% of what you read — repetition is essential for mastery",
      "Read this book 10-15 times until the principles are automatic",
      "Confidence is not something you fake — it comes from competence through practice",
      "Body language communicates attraction before you even open your mouth",
      "Make a list of your ideal woman's qualities BEFORE you start dating",
      "The relationship with your ex should remain friendly if it ends — no scorched earth"
    ],
    actionItems: [
      "Commit to re-reading this material regularly",
      "Practice principles with every woman you interact with, not just ones you're attracted to",
      "Start observing male-female dynamics everywhere — people watching teaches volumes"
    ],
    quiz: [
      { q: "How many times does Corey recommend reading the book?", opts: ["3 times", "5 times", "10-15 times", "Once is enough"], a: 2 },
      { q: "What percentage of information do people retain after one reading?", opts: ["50%", "25%", "7-10%", "35%"], a: 2 },
      { q: "Where does real confidence come from?", opts: ["Good looks", "Money", "Knowledge applied through practice", "Faking it"], a: 2 }
    ]
  },

  // ─── PART II: THE WAY THINGS ARE ───
  {
    id: 3, part: "Part II: The Way Things Are", partIdx: 1, title: "My Evolution of Understanding",
    summary: "Corey describes his transformation from doing everything wrong to understanding women. He made every classic mistake: calling too much, being too available, proposing out of fear of loss, and chasing women who weren't interested. The turning point came when he started studying attraction seriously — reading books, attending seminars, and ruthlessly testing what worked. The key insight: what men think should attract women (niceness, availability, gifts) is often what repels them.",
    keyPrinciples: [
      "Nice guys finish last because niceness without strength signals weakness",
      "Proposing out of fear of losing someone is the worst possible reason to propose",
      "Chasing a woman who's pulling away only accelerates her departure",
      "The man who is outcome-independent and willing to walk away has all the power",
      "Your transformation starts with admitting what you've been doing doesn't work",
      "Studying attraction is a skill like any other — it can be learned"
    ],
    actionItems: [
      "Write down every relationship pattern that hasn't worked for you",
      "Identify where you've been acting from fear vs. confidence",
      "Accept that changing your approach feels uncomfortable at first — that's growth"
    ],
    quiz: [
      { q: "Why is proposing out of fear a terrible idea?", opts: ["It's too expensive", "It comes from weakness, not love", "Women don't like proposals", "Timing doesn't matter"], a: 1 },
      { q: "What happens when you chase a woman who's pulling away?", opts: ["She comes back", "She tests you harder", "It accelerates her departure", "She respects you more"], a: 2 }
    ]
  },
  {
    id: 4, part: "Part II: The Way Things Are", partIdx: 1, title: "Why You Should Not Get Advice From Women about Women",
    summary: "Women know what they want emotionally, but they can't articulate the mechanics of attraction to you. When women give dating advice, they tell you what sounds right logically — be nice, be sweet, buy flowers — but these are things they want from a man they're ALREADY attracted to. The advice skips the critical step of creating attraction first. It's like asking a fish how to catch fish — they know what bait looks appealing, but they don't understand the fishing process.",
    keyPrinciples: [
      "Women give advice based on what they want from a man who already has high attraction",
      "Being 'nice' only works after attraction is already established",
      "Women know what they respond to emotionally but can't articulate HOW to create it",
      "Their advice sounds logical but skips the attraction-building phase entirely",
      "Take dating advice only from men who are consistently successful with women"
    ],
    actionItems: [
      "Stop asking female friends for dating strategy advice",
      "Observe what women respond to vs. what they say they want",
      "Find mentors who demonstrate success, not those who theorize about it"
    ],
    quiz: [
      { q: "Why is women's dating advice often misleading?", opts: ["They lie on purpose", "They describe what they want from someone they're already attracted to", "They don't understand themselves", "They want you to fail"], a: 1 },
      { q: "Being 'nice' works best when?", opts: ["From the very start", "After attraction is already established", "When she's pulling away", "Always"], a: 1 }
    ]
  },
  {
    id: 5, part: "Part II: The Way Things Are", partIdx: 1, title: "Why Women Want to Chase You",
    summary: "Women are biologically and psychologically wired to be the pursuers of masculine love and presence. When a man chases, it short-circuits the natural dynamic. Women have been conditioning themselves their entire lives to pursue men they find attractive — let them. The man's role is to create attraction, then allow space for her to come to him. Think of dating like poker: hold your cards close and let her reveal hers first. When she's uncertain of your interest, she'll put herself into your orbit.",
    keyPrinciples: [
      "Women are wired to chase — let them pursue you",
      "When a woman is chasing you, she can't be getting rid of you",
      "Create attraction, then create space — nature handles the rest",
      "Hold your cards close like poker — let her reveal her interest first",
      "A man who chases gets rejected because the act of chasing itself is unattractive",
      "If she's reaching out first, you know her attraction level is high"
    ],
    actionItems: [
      "Stop initiating most contact — let her come to you",
      "Create space after interactions so she can miss you",
      "Practice being comfortable with uncertainty about where you stand"
    ],
    quiz: [
      { q: "What happens when a man chases a woman?", opts: ["She falls in love", "She feels pressured and runs", "She appreciates the effort", "Nothing changes"], a: 1 },
      { q: "What should you do after creating attraction?", opts: ["Call her immediately", "Create space and let her pursue", "Send flowers", "Text constantly"], a: 1 }
    ]
  },
  {
    id: 6, part: "Part II: The Way Things Are", partIdx: 1, title: "Why You Should Never Listen To Your Friends about Dating Advice",
    summary: "Most of your friends don't have great relationships themselves, so their advice is worthless. Even guys who are naturally good with women often can't articulate what they do right — it's unconscious competence. Before taking anyone's dating advice, evaluate their own relationship first. Is their partner happy? Is there genuine love and attraction? If not, their advice is just recycled failure patterns dressed up as wisdom.",
    keyPrinciples: [
      "Evaluate your advisor's relationship before taking their advice",
      "Most men have unconscious incompetence — they don't know what they don't know",
      "Even naturally successful men often can't teach what comes naturally to them",
      "Bad advice from well-meaning friends can destroy your chances",
      "Seek advice only from those with demonstrated, consistent results"
    ],
    actionItems: [
      "Audit who you take relationship advice from — check their track record",
      "Stop crowd-sourcing dating decisions from your friend group",
      "Trust the principles over popular opinion"
    ],
    quiz: [
      { q: "Before taking dating advice from a friend, what should you evaluate?", opts: ["Their job title", "Their own relationship quality", "How long you've known them", "Their education"], a: 1 }
    ]
  },
  {
    id: 7, part: "Part II: The Way Things Are", partIdx: 1, title: "How Many Healthy Relationships Do You See Out There?",
    summary: "The divorce rate is over 50%, and many of the remaining marriages are loveless. Children raised in dysfunctional households model those same patterns. Most people never learned what a truly loving, healthy relationship looks like, so they recreate their parents' dysfunction. Breaking this cycle requires conscious effort and new understanding. The stakes are generational — your children will model what they see.",
    keyPrinciples: [
      "Divorce rate over 50% — and many remaining marriages are loveless",
      "Children model their parents' relationship patterns",
      "Most people unknowingly recreate their parents' dysfunction",
      "Breaking generational patterns requires conscious effort and education",
      "Staying in a miserable relationship 'for the kids' teaches them misery is normal"
    ],
    actionItems: [
      "Examine what relationship patterns you inherited from your parents",
      "Recognize that healthy love must be learned, not assumed",
      "Understand that your relationship will be your children's blueprint"
    ],
    quiz: [
      { q: "What do children from dysfunctional homes tend to do?", opts: ["Avoid all relationships", "Recreate their parents' patterns", "Become perfect partners", "Have no issues"], a: 1 }
    ]
  },
  {
    id: 8, part: "Part II: The Way Things Are", partIdx: 1, title: "Perceptions of Control",
    summary: "Only 3% of men understand women. The other 97% either don't understand or are too passive to change. You can verify this yourself — go to any public place and watch couples interact. You'll see women who are clearly unhappy, men who are clueless, and the rare couple where both are genuinely thriving. Control in a relationship isn't about domination — it's about self-control, emotional mastery, and leading from strength.",
    keyPrinciples: [
      "Control means self-control and emotional mastery, not domination",
      "Observe couples in public — most men are visibly clueless",
      "The 97% either don't know or won't change — this is your competitive advantage",
      "Leading a relationship requires inner strength, not force"
    ],
    actionItems: [
      "Start people-watching to calibrate your understanding of dynamics",
      "Focus on controlling yourself, not the other person",
      "Recognize that emotional mastery IS the skill"
    ],
    quiz: [
      { q: "What does 'control' really mean in relationships?", opts: ["Controlling her behavior", "Self-control and emotional mastery", "Making all the decisions alone", "Avoiding conflict"], a: 1 }
    ]
  },
  {
    id: 9, part: "Part II: The Way Things Are", partIdx: 1, title: "Masculine and Feminine Energy",
    summary: "Masculine energy is about purpose, mission, direction, strength, and decisiveness. Feminine energy is about opening up, receiving, connection, bonding, and flowing. Polarity between these energies creates attraction — when a man is firmly in his masculine, a woman can relax into her feminine. Problems arise when a woman is forced into her masculine (making decisions, leading, planning everything) because her man won't step up. A woman stuck in her masculine can't relax and be attracted to you.",
    keyPrinciples: [
      "Masculine = purpose, direction, strength, decisiveness, leading",
      "Feminine = openness, receiving, connection, bonding, flowing",
      "Polarity between masculine and feminine energies creates attraction",
      "When she has to be in her masculine because you won't lead, attraction dies",
      "Women from households where mom ran everything often default to masculine mode",
      "Your job as a man: create an environment where she can relax into her feminine"
    ],
    actionItems: [
      "Take charge of planning dates and making decisions",
      "Tell her 'I've got this handled, just relax and enjoy' — mean it",
      "Stop asking her to make every decision — lead with confidence"
    ],
    quiz: [
      { q: "What creates sexual polarity and attraction?", opts: ["Both being masculine", "Contrast between masculine and feminine energy", "Both being passive", "Financial success"], a: 1 },
      { q: "What happens when a woman is forced into her masculine?", opts: ["She becomes more attracted", "She relaxes more", "Attraction dies", "Nothing changes"], a: 2 }
    ]
  },

  // ─── PART III: THE ART OF UNDERSTANDING ───
  {
    id: 10, part: "Part III: The Art of Understanding", partIdx: 2, title: "Looking for Love",
    summary: "Stop looking so hard for love. The energy of desperation repels women. When you're focused on your purpose and living a full life, you radiate an attractive energy naturally. Women can sense when a man is hunting vs. when he's just being his authentic self. The best relationships start when you're not desperately seeking them — when you're genuinely content and building something meaningful with your life.",
    keyPrinciples: [
      "Desperation energy repels women — they can sense it immediately",
      "Focus on your purpose and passion; attraction follows naturally",
      "The best relationships happen when you're not desperately seeking them",
      "A man who is fulfilled on his own is infinitely more attractive",
      "Neediness is the ultimate attraction killer"
    ],
    actionItems: [
      "Build a life you're genuinely excited about — don't wait for a woman to complete you",
      "Develop hobbies, career goals, and friendships independent of dating",
      "Practice being content alone before seeking partnership"
    ],
    quiz: [
      { q: "When are you most attractive to women?", opts: ["When actively searching for a girlfriend", "When focused on your purpose and genuinely content", "When showing how much you want them", "When playing games"], a: 1 }
    ]
  },
  {
    id: 11, part: "Part III: The Art of Understanding", partIdx: 2, title: "Don't Be So Serious",
    summary: "You don't need to declare your love to show interest — women know when you're interested. Over-declaring feelings early kills attraction. Your primary job when first meeting a woman is to make her laugh and feel comfortable. Humor disarms defenses, creates connection, and lets her relax into her feminine. Be cocky and funny, not arrogant. Tease her playfully. Practice flirting with every woman you interact with so it becomes natural when you meet someone you really want.",
    keyPrinciples: [
      "Your #1 job when meeting a woman: make her laugh and feel comfortable",
      "Never declare strong feelings early — it's the kiss of death",
      "Be cocky and charming, not arrogant — there's a fine line",
      "Teasing and playful banter builds attraction faster than compliments",
      "Women test your confidence — humor shows you can't be rattled",
      "Practice flirting with ALL women, not just attractive ones — build the skill"
    ],
    actionItems: [
      "Start conversations with humor, not seriousness",
      "Practice playful teasing in low-stakes interactions (cashiers, waitresses, etc.)",
      "Stop trying to 'impress' and start trying to 'have fun'"
    ],
    quiz: [
      { q: "What's the #1 thing to do when first meeting a woman?", opts: ["Tell her she's beautiful", "Make her laugh and feel comfortable", "Share your life story", "Buy her a drink"], a: 1 },
      { q: "What does declaring feelings early accomplish?", opts: ["Shows strength", "Kills attraction", "Builds trust", "Creates mystery"], a: 1 }
    ]
  },
  {
    id: 12, part: "Part III: The Art of Understanding", partIdx: 2, title: "Compliments: From the Beginning",
    summary: "Beautiful women have been told they're beautiful since age five — they don't need to hear it from you. Excessive compliments signal low value and desperation. If you must compliment, make it specific and earned — something she chose, not something she was born with. Compliment her taste, her wit, her energy — not her face or body. Save physical compliments for after attraction is established.",
    keyPrinciples: [
      "Beautiful women are immune to 'you're so pretty' — they've heard it a million times",
      "Excessive compliments = desperation signal",
      "If you compliment, make it about choices she made (style, taste, humor) not genetics",
      "Physical compliments work AFTER attraction is established, not before",
      "The less you compliment early on, the more weight your words carry later"
    ],
    actionItems: [
      "Stop leading with physical compliments when meeting women",
      "Save 'you look amazing' for when you're already dating",
      "Compliment effort and choices, not appearance"
    ],
    quiz: [
      { q: "Why don't compliments about looks work on beautiful women?", opts: ["They don't believe you", "They've heard it since age 5 — it's meaningless", "They prefer insults", "It's too forward"], a: 1 }
    ]
  },
  {
    id: 13, part: "Part III: The Art of Understanding", partIdx: 2, title: "What Women Emotionally Respond To",
    summary: "Women are driven by emotion and connection, not logic and reason like men. They respond to how you make them FEEL. Confidence, humor, mystery, challenge, and masculine presence create emotional responses. Gifts, logic, and persuasion don't. A woman's emotional state fluctuates wildly — what she says in one moment may completely contradict what she says five minutes later. Both statements were true in the moment. Understanding this is crucial: listen to what she does, not just what she says.",
    keyPrinciples: [
      "Women respond to FEELINGS, not logic or reason",
      "Confidence, humor, mystery, and challenge create emotional attraction",
      "Gifts and logical arguments don't create attraction — they create obligation",
      "Women's emotional states fluctuate — contradictions are normal, not lies",
      "HOW you say things matters more than WHAT you say",
      "Never try to logic a woman into attraction — it doesn't work"
    ],
    actionItems: [
      "Focus on creating positive emotional experiences, not logical arguments",
      "Pay attention to her emotional state, not just her words",
      "Learn that emotional communication is a different language than logical communication"
    ],
    quiz: [
      { q: "Women are primarily driven by:", opts: ["Logic and reason", "Emotion and connection", "Financial security", "Social status"], a: 1 },
      { q: "When a woman contradicts herself emotionally, it means:", opts: ["She's lying", "She's manipulating you", "Both statements were true in the moment", "She's confused"], a: 2 }
    ]
  },
  {
    id: 14, part: "Part III: The Art of Understanding", partIdx: 2, title: "Women Fall in Love a Lot Slower than Men",
    summary: "Men often fall in love at first sight — or at least lust. Women's attraction builds gradually through consistent behavior over time. A man might be at level 8 after the first date while she's at level 4. This mismatch is where most men blow it — they start acting from their level 8 (calling constantly, being overly available) which overwhelms her level 4 and pushes her away. You must pace yourself to her speed, not yours.",
    keyPrinciples: [
      "Men fall fast, women fall slow — this mismatch destroys relationships",
      "Her attraction builds through CONSISTENT behavior over time",
      "Acting from your attraction level when hers is lower overwhelms and repels her",
      "You must pace yourself to HER speed, not yours",
      "Patience is not passive waiting — it's strategic restraint",
      "The first 60 days are critical — don't escalate faster than she does"
    ],
    actionItems: [
      "Mirror her level of investment — don't outpace her",
      "Let her escalate the relationship pace",
      "Practice patience as a strategic skill, not a weakness"
    ],
    quiz: [
      { q: "Why do most men blow it early in dating?", opts: ["They're too mean", "They act from their high attraction level which overwhelms her lower one", "They don't spend enough money", "They're too mysterious"], a: 1 },
      { q: "How does a woman's attraction typically build?", opts: ["Instantly, like men", "Gradually through consistent behavior over time", "After receiving gifts", "After hearing 'I love you'"], a: 1 }
    ]
  },
  {
    id: 15, part: "Part III: The Art of Understanding", partIdx: 2, title: "Women Are Like Cats, Men Are Like Dogs",
    summary: "Dogs demand attention, come when called, don't understand rejection, and are loyal regardless. Men act like dogs with women — chasing, begging, being available on command. Women are like cats — they come and go as they please, and YOU MUST LET THEM. Calling a cat only works if it feels like coming. The more you chase a cat, the more it runs. But ignore a cat, mind your own business, and it'll jump in your lap on its own terms. Treat women like cats, not dogs.",
    keyPrinciples: [
      "Women are like cats — they come to you on THEIR terms, not yours",
      "YOU MUST LET THEM come and go — restricting kills attraction",
      "The more you chase a cat, the more it runs away",
      "Ignore the cat and mind your business — it jumps in your lap",
      "Men act like dogs: chasing, begging, being needy — this repels women",
      "Be the warm house the cat wants to return to, not the person chasing it around the yard"
    ],
    actionItems: [
      "When she pulls away, give her space — don't chase",
      "Be warm and inviting when she comes to you, never punish her for pulling back",
      "Catch yourself acting like a dog (chasing, texting too much) and stop"
    ],
    quiz: [
      { q: "In the cat/dog analogy, what should you do when she pulls away?", opts: ["Chase harder", "Send flowers", "Give her space", "Get angry"], a: 2 },
      { q: "What makes the cat come back?", opts: ["Chasing it around the house", "Being a warm presence it wants to return to", "Calling its name louder", "Trapping it"], a: 1 }
    ]
  },
  {
    id: 16, part: "Part III: The Art of Understanding", partIdx: 2, title: "Knocking Out the Competition",
    summary: "When you understand these principles, you essentially have no competition. 97% of men are clueless — they're making every mistake in the book. When she's with other guys, they're actively repelling her with neediness, over-pursuit, and weakness. Meanwhile, you're the mystery, the challenge, the confident man she can't figure out. The biggest competition killer: let her see you talking with other women naturally. Women are intensely competitive — seeing other women interested in you multiplies YOUR attractiveness.",
    keyPrinciples: [
      "When you master these principles, 97% of men aren't competition",
      "Other men are actively repelling her with their mistakes",
      "Being seen interacting confidently with other women raises your value",
      "Women are very competitive — pre-selection by other women increases attraction",
      "You don't need to be the best looking, richest, or tallest — just the most aware",
      "The competition is eliminating itself through ignorance"
    ],
    actionItems: [
      "Be social and friendly with all women, not just your target",
      "Don't hide other female friendships — they demonstrate your social value",
      "Focus on your own game, not worrying about other guys"
    ],
    quiz: [
      { q: "What happens when she sees other women interested in you?", opts: ["She gets mad and leaves", "Her attraction increases due to pre-selection", "Nothing happens", "She feels sorry for you"], a: 1 }
    ]
  },

  // ─── PART IV: IT'S NOT ALL ABOUT YOU ───
  {
    id: 17, part: "Part IV: It's Not All About You", partIdx: 3, title: "Making Your Ideal Woman's List of Qualities",
    summary: "Before dating, get crystal clear on what you want. Write out your ideal woman's qualities: physical attributes, personality traits, values, lifestyle preferences. Also list dealbreakers — what you absolutely cannot tolerate. This list gives you clarity and prevents you from settling out of desperation. It's also about what kind of relationship you want — casual, committed, multiple partners — there's no wrong answer as long as you're honest.",
    keyPrinciples: [
      "Get crystal clear on what you want BEFORE you start dating",
      "Write a detailed list of ideal qualities AND absolute dealbreakers",
      "Know what type of relationship you want — monogamy, casual, etc.",
      "Clarity prevents settling out of loneliness or desperation",
      "Your list refines over time through dating experience",
      "Settling for less than what you want leads to resentment"
    ],
    actionItems: [
      "Write out your ideal woman's list — be specific",
      "List your absolute dealbreakers — know your hard lines",
      "Define what type of relationship structure you actually want"
    ],
    quiz: [
      { q: "Why should you make a list of ideal qualities?", opts: ["To be picky", "To have clarity and avoid settling out of desperation", "To show women", "To feel superior"], a: 1 }
    ]
  },
  {
    id: 18, part: "Part IV: It's Not All About You", partIdx: 3, title: "Becoming the Person You Want to Attract",
    summary: "You can't attract someone amazing if you're not working on being amazing yourself. Be honest about your own shortcomings — poor communication, anger issues, lack of ambition, bad health habits. The woman you wrote on your ideal list deserves a man who matches that quality. If you want a fit, ambitious, emotionally healthy woman, you need to be a fit, ambitious, emotionally healthy man. Like attracts like at the highest levels.",
    keyPrinciples: [
      "You attract who you ARE, not who you want to be",
      "Honest self-assessment of your shortcomings is essential",
      "If your ideal woman is fit and ambitious, you must be fit and ambitious",
      "Like attracts like — your standards for her must match your standards for yourself",
      "Personal development is the foundation of relationship success",
      "Become your ideal self first, then seek your ideal partner"
    ],
    actionItems: [
      "Honestly evaluate: would your ideal woman be attracted to the current you?",
      "Identify the gaps between who you are and who you need to become",
      "Start working on yourself — fitness, career, communication, emotional health"
    ],
    quiz: [
      { q: "What's the foundation of attracting a high-quality woman?", opts: ["Money", "Becoming a high-quality man yourself", "Pick-up lines", "Expensive clothes"], a: 1 }
    ]
  },
  {
    id: 19, part: "Part IV: It's Not All About You", partIdx: 3, title: "Where Do You Go To Meet Women?",
    summary: "Everywhere. Stop thinking of meeting women as something you do at bars and clubs. Every environment is an opportunity — grocery stores, coffee shops, bookstores, gyms, events, volunteer organizations, continuing education classes. The best meetings happen in natural environments where you can have a genuine conversation. Places where you pursue your interests naturally attract compatible women.",
    keyPrinciples: [
      "Every public space is an opportunity to meet women",
      "Natural environments produce better connections than nightlife",
      "Pursue YOUR interests and hobbies — compatible women show up there",
      "Bars and clubs are actually some of the worst places to find quality relationships",
      "The key is being social and open everywhere, not hunting in specific locations"
    ],
    actionItems: [
      "Start conversations with women everywhere — not just bars",
      "Join activities and groups aligned with your genuine interests",
      "Practice being approachable and social in everyday situations"
    ],
    quiz: [
      { q: "Where's the best place to meet quality women?", opts: ["Bars and clubs exclusively", "Everywhere — especially where you pursue your interests", "Online only", "Through friends only"], a: 1 }
    ]
  },
  {
    id: 20, part: "Part IV: It's Not All About You", partIdx: 3, title: "Meeting Women on the Internet",
    summary: "Online dating is a tool, not a magic solution. The same principles apply online as in person. Don't over-invest in messaging — keep conversations short and move to phone/meeting quickly. Long text exchanges before meeting build a false sense of intimacy. Get the number, make the call, set the date. Don't become a pen pal. Women have endless options online; what separates you is confidence and decisiveness in moving toward meeting in person.",
    keyPrinciples: [
      "Same principles apply online as in person — nothing changes",
      "Keep messaging short — move to phone and then meeting quickly",
      "Long text exchanges before meeting create false intimacy",
      "Be decisive: get number → call → set definite date",
      "Don't become a pen pal — women have hundreds of pen pals already",
      "Your profile should demonstrate confidence and an interesting life"
    ],
    actionItems: [
      "Keep online conversations brief — 3-5 messages max before getting her number",
      "Always suggest a specific date and time, don't leave it vague",
      "Show your lifestyle in photos, not selfies"
    ],
    quiz: [
      { q: "What's the biggest mistake men make with online dating?", opts: ["Not having good photos", "Becoming a pen pal instead of meeting quickly", "Being too confident", "Messaging too few women"], a: 1 }
    ]
  },
  {
    id: 21, part: "Part IV: It's Not All About You", partIdx: 3, title: "Dealing with Insecurity",
    summary: "Insecurity is the silent relationship killer. It manifests as jealousy, controlling behavior, needing constant reassurance, snooping, and interrogating her about other men. A secure man trusts himself and knows that if she leaves, he'll be fine — because his happiness doesn't depend on any one woman. Insecurity comes from not believing you're worthy. The cure is building genuine confidence through competence and self-work, not through controlling another person.",
    keyPrinciples: [
      "Insecurity manifests as jealousy, controlling behavior, and need for reassurance",
      "A secure man knows he'll be fine regardless of what she does",
      "Your happiness can never depend on one person",
      "Insecurity comes from not believing you're worthy — fix this internally",
      "Controlling behavior is a neon sign that says 'I'm terrified of losing you'",
      "True security comes from knowing your own value, not from her validation"
    ],
    actionItems: [
      "Catch yourself when you're acting from insecurity (checking her phone, interrogating about other men)",
      "Build self-worth through achievement and personal growth, not through her approval",
      "If you feel jealous, recognize it as YOUR problem to solve, not hers"
    ],
    quiz: [
      { q: "Where does relationship security actually come from?", opts: ["Her constant reassurance", "Monitoring her phone", "Knowing your own value independent of her", "Making her promise to never leave"], a: 2 }
    ]
  },
  {
    id: 22, part: "Part IV: It's Not All About You", partIdx: 3, title: "Control Freaks and Abusive Men",
    summary: "Controlling and abusive men come from a place of deep fear and insecurity. They try to force compliance because they can't create willing attraction. This behavior escalates over time and is never acceptable. If you recognize these patterns in yourself, get professional help. If you're the target of controlling behavior, understand that it's about their issues, not your worth. Healthy relationships are built on trust, freedom, and mutual respect — never control.",
    keyPrinciples: [
      "Controlling behavior comes from fear and insecurity, not strength",
      "Trying to force compliance destroys attraction permanently",
      "Controlling behavior always escalates — it never stays at the same level",
      "Healthy relationships are built on trust and freedom, never control",
      "If you see these patterns in yourself, seek professional help immediately"
    ],
    actionItems: [
      "Honestly assess if any of your behaviors are controlling",
      "Understand that control is a sign of weakness, not strength",
      "Seek therapy if you recognize abusive patterns in yourself"
    ],
    quiz: [
      { q: "What drives controlling behavior in relationships?", opts: ["Strength and confidence", "Deep fear and insecurity", "Too much love", "High standards"], a: 1 }
    ]
  },
  {
    id: 23, part: "Part IV: It's Not All About You", partIdx: 3, title: "The Need for Certainty",
    summary: "Humans have a fundamental need for certainty, but in dating, demanding certainty kills attraction. You need to be comfortable with uncertainty. Not knowing exactly how she feels, not getting immediate responses, not having a defined relationship status early — this ambiguity is where attraction grows. The man who needs to define everything immediately comes across as needy. Embrace uncertainty as the space where attraction builds.",
    keyPrinciples: [
      "Demanding certainty in dating kills attraction",
      "Comfort with uncertainty is a sign of confidence",
      "Ambiguity is where attraction grows — don't rush to define everything",
      "Needing to lock down the relationship status early signals neediness",
      "The most attractive men are comfortable not knowing exactly where they stand",
      "Certainty comes naturally when attraction is high enough — you can't force it"
    ],
    actionItems: [
      "Practice sitting with uncertainty without acting on it",
      "Stop asking 'where is this going?' prematurely",
      "Let the relationship define itself through her escalation, not your demands"
    ],
    quiz: [
      { q: "What does demanding certainty early in dating signal?", opts: ["Confidence", "Neediness and insecurity", "That you're serious", "Maturity"], a: 1 }
    ]
  },
  {
    id: 24, part: "Part IV: It's Not All About You", partIdx: 3, title: "Staying On Track",
    summary: "This journey requires discipline. You'll have setbacks — you'll fall back into old patterns, blow it with someone, or forget what you've learned in the heat of the moment. That's normal. The key is awareness and course correction. Keep the principles fresh by re-reading. Notice when you're drifting back into needy or over-pursuing behavior. It's like a physical workout — consistency over time creates lasting change.",
    keyPrinciples: [
      "Setbacks are inevitable — course correction is the skill",
      "Old patterns will resurface under emotional pressure",
      "Consistency over time creates permanent change",
      "Awareness of when you're drifting is the first step back on track",
      "Re-reading the material regularly keeps principles fresh"
    ],
    actionItems: [
      "Create personal check-ins to assess if you're following the principles",
      "When you catch yourself slipping, don't beat yourself up — just correct",
      "Treat this like physical training: consistent practice builds permanent skill"
    ],
    quiz: [
      { q: "What should you do when you realize you've fallen into old patterns?", opts: ["Give up", "Beat yourself up", "Course correct without self-judgment", "Start over from scratch"], a: 2 }
    ]
  },
  {
    id: 25, part: "Part IV: It's Not All About You", partIdx: 3, title: "The Purpose of All Relationships",
    summary: "You go to a relationship to GIVE, not to get. Every relationship is an opportunity for growth. When a relationship ends, the growth and love you gave remain with you. If a relationship reaches a point where both people are no longer growing together, it may be time to move on gracefully. Holding on to relationships out of fear of being alone is the opposite of love — it's selfishness disguised as devotion.",
    keyPrinciples: [
      "You go to a relationship to GIVE, not to get",
      "Every relationship is a growth opportunity — even the ones that end",
      "When a relationship no longer serves both people's growth, it's time to re-evaluate",
      "Holding on out of fear isn't love — it's selfishness",
      "The love and growth you experience stays with you forever",
      "Send people love and let them go when paths diverge"
    ],
    actionItems: [
      "Ask yourself: am I in this to give, or to get?",
      "Evaluate whether your relationship is fostering growth for both partners",
      "Practice letting go without scorching the earth"
    ],
    quiz: [
      { q: "What's the primary reason to be in a relationship?", opts: ["To get your needs met", "To avoid being alone", "To give and grow together", "To have status"], a: 2 }
    ]
  },
  {
    id: 26, part: "Part IV: It's Not All About You", partIdx: 3, title: "Making Lasting Change",
    summary: "Tony Robbins says people do more to avoid pain than to gain pleasure. Use this to motivate change. Write two lists: the painful consequences of NOT changing (staying alone, repeating failures, settling for less) and the pleasurable outcomes of changing (dream relationship, confidence, better life). Pain creates urgency; pleasure creates direction. Both are needed for lasting transformation.",
    keyPrinciples: [
      "People do more to avoid pain than to gain pleasure — use this for motivation",
      "Create two columns: pain of not changing vs. pleasure of changing",
      "Pain creates urgency, pleasure creates direction — you need both",
      "Change happens when the pain of staying the same exceeds the pain of change",
      "Lasting change requires emotional leverage, not just intellectual understanding"
    ],
    actionItems: [
      "Write your pain/pleasure lists RIGHT NOW — make it visceral and specific",
      "Read your lists when motivation wanes",
      "Create a compelling vision of the relationship life you want"
    ],
    quiz: [
      { q: "According to Tony Robbins, what motivates people more?", opts: ["The promise of pleasure", "Avoiding pain", "Peer pressure", "Money"], a: 1 }
    ]
  },

  // ─── PART V: MAKING YOUR MOVE ───
  {
    id: 27, part: "Part V: Making Your Move", partIdx: 4, title: "Approaching the Beautiful Woman",
    summary: "Walk up with confidence. Don't use pick-up lines — they're transparent and weak. A simple 'Hi, what's your name?' with confident body language is more powerful than any scripted opener. Your posture, eye contact, and tone of voice communicate 93% of the message. Don't approach from behind or corner her. Be direct but not aggressive. If she's not responsive, gracefully exit. No means no, always.",
    keyPrinciples: [
      "Pick-up lines are transparent and signal insecurity",
      "A simple confident 'Hi, what's your name?' beats any clever opener",
      "93% of communication is body language and tone, not words",
      "Confident posture, eye contact, and relaxed demeanour are your best tools",
      "If she's not interested, exit gracefully — no means no",
      "Approaching is a numbers game — not every woman will be receptive"
    ],
    actionItems: [
      "Practice approaches with zero expectation of outcome",
      "Focus on body language: shoulders back, relaxed posture, strong eye contact",
      "Start with 'Hi, what's your name?' and wait — her response tells you everything"
    ],
    quiz: [
      { q: "What communicates more during an approach?", opts: ["Your words", "Your car and clothes", "Your body language and tone", "Your pick-up line quality"], a: 2 }
    ]
  },
  {
    id: 28, part: "Part V: Making Your Move", partIdx: 4, title: "The Path to Success",
    summary: "When you approach, say 'Hi, what's your name?' — then DON'T volunteer your name. Wait and see if she asks. If she asks your name, it's a sign of interest. If she doesn't, her attraction level is low. After the initial introduction, keep the conversation fun and light. Ask what she does for fun, not for work. When the energy is good, say 'I'd like to talk to you more — what's your number?' Look down at your phone, ready to enter it. Decisive, confident, simple.",
    keyPrinciples: [
      "Don't volunteer your name — wait for her to ask (it's an interest indicator)",
      "Ask about fun and passions, not her job or logistics",
      "Keep the initial conversation short and light — leave while it's still fun",
      "When getting her number, look at your phone ready to type — assume the close",
      "If she gives you the number, she's interested enough for a chance",
      "Set a definite date right then if possible, or call within 2-3 days"
    ],
    actionItems: [
      "Practice the 'what's your name' opener without volunteering yours",
      "End conversations while they're still going well — leave her wanting more",
      "When asking for her number, just look at your phone expectantly — no big speech"
    ],
    quiz: [
      { q: "Why don't you volunteer your name after asking hers?", opts: ["To seem rude", "To test her interest level — an interested woman will ask", "Because names don't matter", "To create confusion"], a: 1 },
      { q: "When should you end the initial conversation?", opts: ["When she stops talking", "While it's still going well — leave her wanting more", "After getting her life story", "When she asks you to leave"], a: 1 }
    ]
  },
  {
    id: 29, part: "Part V: Making Your Move", partIdx: 4, title: "The Many Shades of No",
    summary: "Rejection comes in many forms and most men don't recognize the subtle ones. 'I have a boyfriend' often means 'your attraction isn't high enough to make me reconsider.' 'I'm busy this week' without suggesting an alternative means no. A woman who gives her number but never responds to calls gave it to avoid confrontation. Learn to read the subtext: women often say no without using the word no. Don't take rejection personally — it's information, not a judgment of your worth.",
    keyPrinciples: [
      "Women rarely say 'no' directly — they communicate it through behavior",
      "'I have a boyfriend' often means attraction isn't high enough",
      "'I'm busy' without offering an alternative = not interested",
      "Giving a number but not responding = she gave it to avoid confrontation",
      "Rejection is information about her, not a judgment of your worth",
      "If she's interested, she makes it EASY. If she's not, everything is difficult."
    ],
    actionItems: [
      "Learn to recognize soft rejections and accept them gracefully",
      "Stop trying to convince women who are clearly not interested",
      "Move on quickly — abundance mentality means there's always another opportunity"
    ],
    quiz: [
      { q: "When she says 'I'm busy this week' without suggesting another time, it means:", opts: ["She's genuinely busy", "She's not interested enough", "You should try harder", "Wait a month and try again"], a: 1 }
    ]
  },
  {
    id: 30, part: "Part V: Making Your Move", partIdx: 4, title: "Again – It's Not All about You",
    summary: "Don't take rejection personally. People are either going to accept you or they're not — and that's about their preferences, their timing, their emotional state, not about your fundamental worth. When someone rejects you, smile, wish them well, and move on. The way you handle rejection actually RAISES your value in the eyes of anyone watching. Grace under fire is incredibly attractive.",
    keyPrinciples: [
      "Rejection reflects her preferences and timing, not your worth",
      "How you handle rejection defines your character more than success does",
      "Grace under fire is one of the most attractive qualities a man can display",
      "Every rejection brings you closer to someone who's a better fit",
      "The energy you bring to rejection sets the tone for everything after"
    ],
    actionItems: [
      "Practice graceful exits: 'No worries, have a great day' with a genuine smile",
      "Reframe rejection as redirection toward someone better suited",
      "Remember that your response to rejection is being observed by others"
    ],
    quiz: [
      { q: "How does graceful rejection-handling affect your attractiveness?", opts: ["It doesn't", "It lowers it because you didn't fight", "It raises it — grace under fire is attractive", "It makes you seem weak"], a: 2 }
    ]
  },
  {
    id: 31, part: "Part V: Making Your Move", partIdx: 4, title: "Handling the Pressure Points",
    summary: "Women will test you with pressure questions: What kind of car do you drive? How much money do you make? Are you a player? These tests are designed to see if you're rattled by pressure. The correct response is never defensive — use humor, redirect, or flip the question. When she asks 'Do you have a girlfriend?', respond with 'Why, are you applying for the position?' Pressure points are opportunities to display confidence.",
    keyPrinciples: [
      "Pressure questions are TESTS of your confidence, not genuine interrogations",
      "Never answer defensively — use humor, redirection, or flip the question",
      "Material questions (car, money, job) test if you're insecure about your status",
      "'Are you a player?' → 'When I meet someone worth my time, I'm exclusive'",
      "Your emotional response to pressure reveals more than your answer",
      "If you get rattled by her questions, you fail the test"
    ],
    actionItems: [
      "Prepare humorous deflections for common pressure questions",
      "Practice staying relaxed and amused when tested",
      "Never get defensive — defensiveness is an automatic fail"
    ],
    quiz: [
      { q: "When she asks 'Are you a player?', the best response is:", opts: ["No, I promise I'm not!", "Get offended", "Use humor or confidently redirect", "List your past relationships"], a: 2 }
    ]
  },
  {
    id: 32, part: "Part V: Making Your Move", partIdx: 4, title: "Timing is Everything",
    summary: "When to call after getting her number: 2-3 days for a woman you just met. Not the same day (too eager), not a week later (she's forgotten you). When you call, be brief: brief playful conversation, then ask for a definite date on a definite day. Don't ask 'when are you free?' — that gives her control and makes you seem planless. Say 'I'd like to take you out Thursday evening. How does 7 work for you?' Definite time, definite plan.",
    keyPrinciples: [
      "Call 2-3 days after getting her number — not too soon, not too late",
      "Be brief on the phone: playful banter → set definite date → hang up",
      "Set a DEFINITE date: specific day, specific time, specific plan",
      "Never ask 'when are you free?' — lead with a suggestion",
      "Phone calls are for setting dates, not for hour-long conversations",
      "The longer you talk on the phone, the more mystery you lose"
    ],
    actionItems: [
      "Always call with a specific day and plan in mind",
      "Keep calls under 10 minutes — you're setting a date, not having one",
      "Be decisive: 'Let's do Thursday at 7' not 'whenever works for you'"
    ],
    quiz: [
      { q: "When calling to set a date, you should:", opts: ["Ask when she's free", "Chat for an hour to build rapport", "Have a specific day and time ready to suggest", "Text instead of calling"], a: 2 }
    ]
  },
  {
    id: 33, part: "Part V: Making Your Move", partIdx: 4, title: "The Test of Time",
    summary: "This is an extensive chapter covering real-world scenarios of calling women, handling their tests on the phone, dealing with cancellations, and reading between the lines. When she cancels: if she suggests an alternative, she's interested. If she just cancels with no reschedule, pull back. If she's wishy-washy about plans, say 'Let's do it another time' and hang up — don't beg. A woman with high attraction makes it EASY for you. One who doesn't makes everything hard.",
    keyPrinciples: [
      "When she cancels AND suggests an alternative — she's interested",
      "When she cancels WITHOUT rescheduling — her attraction is low",
      "If she's wishy-washy, do the 'takeaway': suggest rescheduling and hang up",
      "Never beg or try to convince a woman to see you",
      "A woman with high attraction makes things EASY — low attraction makes everything hard",
      "If she keeps flaking, wait a full week before trying again. Two flakes = move on",
      "When she agrees enthusiastically to dates, her attraction is probably 7+"
    ],
    actionItems: [
      "Master the 'takeaway': 'Sounds like you're busy, let's do it another time'",
      "Track patterns — consistent enthusiasm vs. consistent flaking tells the truth",
      "Never rearrange your life to accommodate someone who won't commit to a plan"
    ],
    quiz: [
      { q: "She cancels but suggests an alternative date. This means:", opts: ["She's not interested", "She's interested — she wants to see you", "She's being polite", "She's testing you"], a: 1 },
      { q: "What's the 'takeaway'?", opts: ["Taking away her phone", "Saying 'let's do it another time' when she's being difficult", "Leaving the date early", "Ignoring her texts"], a: 1 }
    ]
  },
  {
    id: 34, part: "Part V: Making Your Move", partIdx: 4, title: "It's All in the Numbers",
    summary: "The Attraction Level Scale (1-10) is the central diagnostic tool of the book. It tells you exactly where she's at based on her ACTIONS, not her words. Below 5: no chance. 5-6: she's lukewarm — be very careful. 6-7: she likes you but is cautious. 7-8: she's definitely interested and showing it. 8-9: she's falling in love. 9-10: she's head over heels. Always UNDERRATE her attraction level and act accordingly. Your goal is to keep her at 9-10.",
    keyPrinciples: [
      "The 1-10 Attraction Scale is your primary diagnostic tool",
      "Below 5: no chance, don't waste time",
      "5-6: lukewarm, she'll cancel and be difficult to pin down",
      "6-7: interested but cautious, will ask personal questions, gives number easily",
      "7-8: clearly interested, initiates contact, enthusiastic about plans",
      "8-9: falling in love, calls regularly, buys gifts, defends you to others",
      "9-10: head over heels, sex is frequent and passionate, talks about future",
      "ALWAYS underrate her level and act as if it's one level lower"
    ],
    actionItems: [
      "Learn the attraction level indicators cold — they're your radar",
      "Watch her ACTIONS, not her words, to determine her level",
      "If her level drops, pull back and create space — don't chase",
      "For married/LTR men: watch for dropping levels constantly"
    ],
    quiz: [
      { q: "At what attraction level should you stop pursuing entirely?", opts: ["Below 7", "Below 5", "Below 8", "Never stop"], a: 1 },
      { q: "Why should you always underrate her attraction level?", opts: ["To feel bad about yourself", "To prevent complacency and over-pursuing", "It doesn't matter", "To make her feel insecure"], a: 1 },
      { q: "What matters more for gauging attraction — words or actions?", opts: ["Words always", "Actions always", "Neither", "Social media activity"], a: 1 }
    ]
  },

  // ─── PART VI: THE FIRST STEP ───
  {
    id: 35, part: "Part VI: The First Step", partIdx: 5, title: "Your First Date",
    summary: "First dates should be simple and inexpensive — drinks, coffee, or a casual dinner. Don't go extravagant until you know her attraction level is high. The purpose of a date is to hangout, have fun, and hook up (create a romantic opportunity). Plan dates that allow conversation, create a fun atmosphere, and can potentially lead to physical intimacy. Evening dates at your place or hers are ideal later, but early dates should be in public.",
    keyPrinciples: [
      "Purpose of a date: hangout, have fun, and hook up",
      "Keep first dates simple — drinks, coffee, casual dinner",
      "Don't spend big money on someone whose attraction level is unproven",
      "Plan evening dates that can lead somewhere, not daytime lunches",
      "The date should facilitate conversation and fun, not be a performance",
      "Cook for her at your place on date 2 or 3 — it's intimate, personal, and free"
    ],
    actionItems: [
      "Plan simple, conversation-friendly first dates",
      "Save extravagant dates for women with proven high attraction",
      "Have 2-3 go-to date spots that you know well and feel comfortable in"
    ],
    quiz: [
      { q: "What's the purpose of a date according to the book?", opts: ["Impress her with money", "Hangout, have fun, and hook up", "Interview her for a relationship", "Show off your accomplishments"], a: 1 }
    ]
  },
  {
    id: 36, part: "Part VI: The First Step", partIdx: 5, title: "Dos and Don'ts of the First Date",
    summary: "DO: let her talk most, be a great listener, be present, tip well, be kind to wait staff. DON'T: talk about yourself the whole time, badmouth exes, drink too much, be on your phone, be rude to service staff (she's watching how you treat others). Ask questions about HER — her passions, dreams, family, what excites her. The woman who's into you will ask YOU questions back. If she's not asking anything about you, her attraction is low.",
    keyPrinciples: [
      "Let HER do most of the talking — be a listener, not a monologue-er",
      "NEVER badmouth exes — say something positive or nothing at all",
      "How you treat service staff reveals your character — she's watching",
      "Don't drink too much — you need your awareness",
      "If she's asking you lots of questions back, her interest is high",
      "If she's not curious about you at all, attraction is low"
    ],
    actionItems: [
      "Prepare thoughtful questions about her passions and dreams",
      "Practice active listening — put your phone away completely",
      "Watch how she treats waitstaff too — it reveals her character"
    ],
    quiz: [
      { q: "On a first date, who should do most of the talking?", opts: ["You — she wants to hear your stories", "Her — ask questions and listen", "Equal amounts", "Talk about politics and religion"], a: 1 }
    ]
  },
  {
    id: 37, part: "Part VI: The First Step", partIdx: 5, title: "The Secret of Dating",
    summary: "The secret is anticipation and discovery. Women love not knowing what's going to happen next. Don't reveal your full plan — let the evening unfold as a surprise. The emotional rollercoaster of discovering what you've planned in real time is what raises her attraction. Be playful about keeping secrets: 'You'll see when we get there.' Unpredictability within a framework of leadership is incredibly attractive.",
    keyPrinciples: [
      "Anticipation and surprise are the secret ingredients of great dates",
      "Don't reveal the full plan — let her discover it in real time",
      "Women love the emotional experience of not knowing what's next",
      "Be playful about keeping the plan a surprise: 'You'll see'",
      "Unpredictability within leadership is irresistible",
      "The journey matters more than the destination"
    ],
    actionItems: [
      "Plan dates where you can reveal things gradually",
      "When she asks 'where are we going?', smile and say 'it's a surprise'",
      "Create experiences, not just meals — take her somewhere she wouldn't go alone"
    ],
    quiz: [
      { q: "What's the 'secret of dating'?", opts: ["Spending lots of money", "Anticipation and the surprise of discovery", "Talking about your feelings", "Having a perfect plan"], a: 1 }
    ]
  },
  {
    id: 38, part: "Part VI: The First Step", partIdx: 5, title: "The Kiss Test",
    summary: "At the end of the date, go for the kiss on the LIPS — not the cheek. A kiss on the cheek signals low confidence or lack of romantic interest (the 'kiss of death'). If she kisses back, great — attraction is confirmed. If she turns her head and you get the cheek, she's not romantically interested and further dates would be wasted time. Going for the lips shows confidence: 'I know I'm good enough for you.' Be the leader — women are designed to receive.",
    keyPrinciples: [
      "Always go for the LIPS, never the cheek — the cheek kiss is the 'kiss of death'",
      "Going for the lips shows confidence: 'I know I'm worthy of you'",
      "If she kisses back = attraction confirmed",
      "If she turns and you get the cheek = no romantic interest, stop pursuing",
      "A man kissing the cheek signals low confidence or friendzoning himself",
      "Be the leader in physical escalation — she's designed to receive"
    ],
    actionItems: [
      "Commit to going for the lips — no half measures",
      "Read her body language through the date for kiss readiness signals",
      "If you get the cheek, accept the information gracefully and move on"
    ],
    quiz: [
      { q: "Why is kissing her on the cheek bad?", opts: ["It's unhygienic", "It signals low confidence and friendzones you", "Women don't like cheek kisses", "It's too old-fashioned"], a: 1 },
      { q: "If she turns her head when you go for the kiss, it means:", opts: ["She's shy", "Try again harder", "No romantic interest — move on", "She's playing hard to get"], a: 2 }
    ]
  },
  {
    id: 39, part: "Part VI: The First Step", partIdx: 5, title: "The Right Approach",
    summary: "Corey shares a detailed real-world example of meeting a woman at a personal growth retreat. He noticed her, didn't approach aggressively, let things develop naturally through shared activities, read her signals (asking him lots of questions), and escalated gradually. The approach felt organic, not forced. He cooked for her, kept things fun and light, and physical escalation happened naturally because he'd built the right foundation of attraction.",
    keyPrinciples: [
      "Let interactions develop naturally — don't force premature escalation",
      "Pay attention to HER signals: asking questions, positioning near you, touching",
      "Cooking at your place is one of the best date moves — intimate, personal, inexpensive",
      "Physical escalation should feel natural, not choreographed",
      "The right approach is about reading the situation, not following a rigid script",
      "When attraction is high, everything flows easily"
    ],
    actionItems: [
      "Pay attention to proximity and question-asking as interest indicators",
      "Learn to cook 2-3 impressive but simple meals for home dates",
      "Let physical escalation happen naturally — don't rush or force"
    ],
    quiz: [
      { q: "What's one of the best date ideas according to the book?", opts: ["Expensive restaurant", "Movie theatre", "Cooking for her at your place", "Group activity"], a: 2 }
    ]
  },

  // ─── PART VII: KEEP IT STEADY! ───
  {
    id: 40, part: "Part VII: Keep It Steady!", partIdx: 6, title: "Continue the Mystery",
    summary: "Don't call her the next day after a great date — let her wonder. Wait until the next week to set up the next date. Maintain the same principles that created attraction: mystery, unpredictability, not being too available. The temptation after a great first date is to ramp up contact — this is exactly what kills the momentum. Let her come to you. If the date was truly great, she'll be thinking about you constantly without you calling.",
    keyPrinciples: [
      "After a great date, DON'T call the next day — let her wonder",
      "Wait until the next week to set up the next date",
      "Maintain the same mystery that created the attraction in the first place",
      "Ramping up contact after a great date kills momentum",
      "If the date was great, she's already thinking about you — calling ruins the magic",
      "Mystery and anticipation must be maintained throughout the entire relationship"
    ],
    actionItems: [
      "Resist the urge to text/call the morning after a great date",
      "Keep the same contact rhythm that was working",
      "Focus on your life between dates — don't obsess"
    ],
    quiz: [
      { q: "After a great first date, when should you call?", opts: ["The next morning", "That same night", "Wait until the following week to set up date 2", "Two hours later"], a: 2 }
    ]
  },
  {
    id: 41, part: "Part VII: Keep It Steady!", partIdx: 6, title: "The Pursuit",
    summary: "The woman should be doing 70-80% of the calling and texting once attraction is established. If you're doing most of the pursuing, the dynamic is wrong. The man sets the date, leads the interaction, and creates the space — then the woman fills it by reaching out. When she starts calling/texting you frequently, you know her attraction is rising. If she stops reaching out, her attraction is dropping. Track her pursuit level as your attraction barometer.",
    keyPrinciples: [
      "She should be doing 70-80% of the calling/texting once attraction builds",
      "If you're doing most of the pursuing, the dynamic is backwards",
      "The man creates space → the woman fills it with pursuit",
      "Her frequency of reaching out IS your attraction barometer",
      "When her contact drops, attraction is dropping — don't chase harder",
      "Let her set the pace of communication escalation"
    ],
    actionItems: [
      "Track the ratio of who initiates contact — it should increasingly be her",
      "When she reaches out, always be warm and engaging",
      "If she stops reaching out, create MORE space, not less"
    ],
    quiz: [
      { q: "What percentage of contact should she be initiating?", opts: ["50%", "20%", "70-80%", "100%"], a: 2 },
      { q: "When her contact frequency drops, you should:", opts: ["Call her more", "Create MORE space", "Send flowers", "Show up at her work"], a: 1 }
    ]
  },
  {
    id: 42, part: "Part VII: Keep It Steady!", partIdx: 6, title: "Moving Into Relationships",
    summary: "Let HER bring up the relationship talk. When a woman asks 'Where is this going?' or 'Are we exclusive?', she's signalling she's ready to commit. Don't rush this conversation yourself. The transition from dating to relationship should be her idea, driven by her rising attraction level. If you push for exclusivity before she does, you come across as needy and you take away her joy of chasing you into commitment.",
    keyPrinciples: [
      "Let HER bring up the exclusivity/relationship conversation",
      "When she asks 'where is this going?', she's ready to commit",
      "Don't push for commitment yourself — let her chase you into it",
      "Rushing the relationship talk signals neediness",
      "She wants to feel like she chose you, not that you locked her down",
      "The transition to committed relationship should feel like HER victory"
    ],
    actionItems: [
      "Resist bringing up 'what are we?' — let her ask first",
      "When she brings it up, be playful before being serious",
      "Let the relationship status upgrade be something she pursued"
    ],
    quiz: [
      { q: "Who should bring up the exclusivity conversation?", opts: ["The man, after date 3", "Her — when she's ready", "Both simultaneously", "Neither, just assume"], a: 1 }
    ]
  },
  {
    id: 43, part: "Part VII: Keep It Steady!", partIdx: 6, title: "Testing During the First 60 Days",
    summary: "The first 60 days are when women test the hardest. She's evaluating whether you're genuinely the confident man you presented or just performing. Tests include: being late, flirting with other men in front of you, cancelling plans, being difficult, picking fights over nothing. EVERY test is an opportunity to demonstrate strength. Pass tests by staying calm, amused, and unshaken. Fail by getting emotional, jealous, or insecure.",
    keyPrinciples: [
      "First 60 days = maximum testing period",
      "She's evaluating if your confidence is real or an act",
      "Tests: being late, flirting with others, picking fights, cancelling, being difficult",
      "PASS by staying calm, amused, and unshaken",
      "FAIL by getting emotional, jealous, needy, or insecure",
      "Every test you pass RAISES her attraction; every fail LOWERS it"
    ],
    actionItems: [
      "Expect tests and welcome them as opportunities",
      "Practice the mindset: 'This is cute — she's testing me'",
      "Stay in your center no matter what she throws at you"
    ],
    quiz: [
      { q: "Why do women test men during the first 60 days?", opts: ["To annoy you", "To evaluate if your confidence is genuine", "They don't — this is made up", "To make you chase harder"], a: 1 },
      { q: "How do you PASS a test?", opts: ["Get angry and confront her", "Stay calm, amused, and unshaken", "Ignore her completely", "Cry and apologize"], a: 1 }
    ]
  },
  {
    id: 44, part: "Part VII: Keep It Steady!", partIdx: 6, title: "The Big Bounce",
    summary: "When her attraction starts dropping (less enthusiasm, less affection, fewer calls), it's time to pull back — not chase harder. Back off your response time. Let calls go to voicemail occasionally. This 'two steps forward, one step back' approach recreates the mystery and anticipation that built attraction in the first place. The bounce works because absence makes the heart grow fonder — but only if you've built a solid foundation of attraction.",
    keyPrinciples: [
      "When attraction drops, pull BACK — don't chase harder",
      "Two steps forward, one step back — maintain dynamic tension",
      "Let calls go to voicemail occasionally when things get complacent",
      "Absence makes the heart grow fonder — if the foundation is solid",
      "The bounce recreates mystery and anticipation",
      "Chasing a woman whose attraction is dropping accelerates the decline"
    ],
    actionItems: [
      "Watch for signs of declining enthusiasm — less affection, less contact",
      "When you notice the drop, create more space immediately",
      "Don't panic and chase — trust the process"
    ],
    quiz: [
      { q: "When you notice her attraction dropping, you should:", opts: ["Call more often", "Send gifts", "Pull back and create more space", "Have a serious conversation about it"], a: 2 }
    ]
  },
  {
    id: 45, part: "Part VII: Keep It Steady!", partIdx: 6, title: "The 'L' Word",
    summary: "Let her say 'I love you' first. Most guys drop the L-bomb way too early, which pressures her and kills the natural progression. When she's ready, she'll say it — and it'll be genuine because she CHOSE to, not because you pressured her. When she does say it, you can reciprocate. But until then, show love through actions and presence, not verbal declarations. Her saying it first confirms her attraction level is at the 9-10 range.",
    keyPrinciples: [
      "Let HER say 'I love you' first — always",
      "Men dropping the L-bomb early signals neediness and pressures her",
      "When she says it first, it's genuine — she CHOSE to express it",
      "Show love through actions and presence, not premature verbal declarations",
      "Her saying 'I love you' first confirms attraction at 9-10",
      "If you say it first and she doesn't reciprocate, you've revealed too much too soon"
    ],
    actionItems: [
      "Resist saying 'I love you' first no matter how strongly you feel it",
      "Express affection through actions, not words, until she declares first",
      "When she says it, take a beat, then reciprocate genuinely"
    ],
    quiz: [
      { q: "Who should say 'I love you' first?", opts: ["The man — be brave", "Her — let her choose to express it", "Both at the same time", "Neither — it's overrated"], a: 1 }
    ]
  },

  // ─── PART VIII: SOLVING THE MYSTERY ───
  {
    id: 46, part: "Part VIII: Solving the Mystery", partIdx: 7, title: "Pay Attention!",
    summary: "Paying attention = being aware. Use the attraction level chart as your ongoing radar. Watch her actions: affection, frequency of contact, enthusiasm, sexual desire, compliments — these are your indicators. Complacency is the biggest threat to established relationships. You start not paying attention, stop planning dates, stop leading, and her attraction slowly bleeds out until it's too late. By the time most men realize there's a problem, she's already gone emotionally.",
    keyPrinciples: [
      "Paying attention is the #1 maintenance skill in relationships",
      "Use the attraction chart as your ongoing radar — track changes",
      "Complacency kills more relationships than anything else",
      "Watch: affection, contact frequency, enthusiasm, sexual desire, compliments",
      "By the time most men notice the problem, she's already checked out",
      "Never stop dating your partner — the courtship never ends"
    ],
    actionItems: [
      "Weekly mental check: is she showing the same enthusiasm as last month?",
      "Track subtle changes in affection, contact, and energy",
      "Never stop planning dates and leading the relationship — ever"
    ],
    quiz: [
      { q: "What's the biggest threat to established relationships?", opts: ["Other men", "Arguments", "Complacency", "Financial problems"], a: 2 },
      { q: "By the time most men notice her attraction dropping, what's happened?", opts: ["Nothing serious yet", "She's already checked out emotionally", "She's just having a bad week", "She's testing him"], a: 1 }
    ]
  },
  {
    id: 47, part: "Part VIII: Solving the Mystery", partIdx: 7, title: "The Art of Communication",
    summary: "Communication is the lifeblood of relationships. Women need to talk and feel heard. When she comes to you with problems, she usually doesn't want solutions — she wants to feel understood and connected. Stop trying to fix everything and learn to just listen and validate. Ask: 'Do you want advice or do you just need to vent?' Never invalidate her feelings, even if they seem illogical to you. Feelings aren't logical and they don't have to be.",
    keyPrinciples: [
      "When she talks about problems, she usually wants to be HEARD, not fixed",
      "Ask: 'Do you want advice or do you need to vent?'",
      "Never invalidate her feelings — they're real even if illogical to you",
      "Listening without fixing is one of the hardest skills for men to learn",
      "Communication requires vulnerability from both sides",
      "Schedule regular uninterrupted time to just talk and connect"
    ],
    actionItems: [
      "Practice listening without offering solutions for one full week",
      "Ask 'what do you need from me right now?' when she's upset",
      "Create space for regular emotional check-ins without distractions"
    ],
    quiz: [
      { q: "When she comes to you with a problem, she usually wants:", opts: ["A detailed solution", "You to fix it immediately", "To be heard and feel understood", "You to call someone who can help"], a: 2 }
    ]
  },
  {
    id: 48, part: "Part VIII: Solving the Mystery", partIdx: 7, title: "The Art of Knowing",
    summary: "Knowing is about understanding who she is at her core — her needs, fears, dreams, and love language. Pay attention to what lights her up and what shuts her down. Know her favorite things without being told. Remember details from conversations and bring them up later. The effort of truly knowing someone creates a bond deeper than physical attraction. Most men are too self-absorbed to really know their partner.",
    keyPrinciples: [
      "True knowing = understanding her needs, fears, dreams, and love language",
      "Remember details from conversations and reference them later",
      "Pay attention to what lights her up and what shuts her down",
      "Knowing someone deeply creates bonds stronger than physical attraction",
      "Most men are too self-absorbed to truly know their partner",
      "The effort of knowing shows more love than any grand gesture"
    ],
    actionItems: [
      "Start actively cataloguing what excites her and what troubles her",
      "Reference previous conversations to show you were truly listening",
      "Learn her love language and speak it fluently"
    ],
    quiz: [
      { q: "What creates deeper bonds than physical attraction?", opts: ["Money", "Status", "Truly knowing and understanding your partner", "Grand gestures"], a: 2 }
    ]
  },
  {
    id: 49, part: "Part VIII: Solving the Mystery", partIdx: 7, title: "Weathering the Storm",
    summary: "Women are like the ocean — sometimes calm, sometimes hurricanes. When she's storming (emotional, angry, testing aggressively), you MUST remain centered. Don't let her capsize your boat. Stay on your path regardless of the emotional weather. If she sinks your boat, you have to bail it out and right yourself — and she'll test twice as hard until she sees nothing can sway you. This is the ultimate test of masculine strength: remaining calm in her emotional storm.",
    keyPrinciples: [
      "Women are like the ocean — storms are inevitable, not personal",
      "Your job: remain centered no matter how intense the storm gets",
      "Don't let her emotional hurricane capsize your boat (get you off your path)",
      "If she does sink you, right yourself — she'll test even harder afterward",
      "Staying calm in her storm is the ultimate display of masculine strength",
      "The storm passes — it always does — if you don't make it worse by reacting"
    ],
    actionItems: [
      "Practice staying completely calm when she's emotionally escalated",
      "Remind yourself: this is temporary weather, not permanent climate",
      "Never match her emotional intensity — be the anchor, not another wave"
    ],
    quiz: [
      { q: "When she's in an emotional storm, you should:", opts: ["Match her energy", "Get angry back", "Remain centered and calm", "Walk away permanently"], a: 2 },
      { q: "If she manages to rattle you ('sink your boat'), what happens?", opts: ["She calms down", "She tests even harder afterward", "She apologizes", "The relationship ends"], a: 1 }
    ]
  },
  {
    id: 50, part: "Part VIII: Solving the Mystery", partIdx: 7, title: "Women Don't Lie – Men Don't Listen",
    summary: "Women tell you exactly how they feel in the moment — the problem is men don't listen or take it seriously. When she says she's unhappy, she IS unhappy RIGHT THEN. Five minutes later she might say she loves you — and that's true too. Women communicate in emotional snapshots, not logical statements. The mistake is dismissing what she says because it seems contradictory. Each statement was her truth in that moment.",
    keyPrinciples: [
      "Women tell you how they feel — men don't listen",
      "She communicates in emotional snapshots, not logical consistency",
      "When she says she's unhappy, she IS unhappy in that moment",
      "Contradictory statements aren't lies — each was true when spoken",
      "Men dismiss her feelings as 'irrational' at their own peril",
      "Listen to the emotion behind the words, not just the words"
    ],
    actionItems: [
      "When she tells you something, BELIEVE HER in that moment",
      "Stop dismissing her feelings as irrational or contradictory",
      "Listen for the emotion, not just the content"
    ],
    quiz: [
      { q: "When she says contradictory things five minutes apart:", opts: ["She's lying", "She's manipulating you", "Both statements were true in their moment", "She doesn't know what she wants"], a: 2 }
    ]
  },
  {
    id: 51, part: "Part VIII: Solving the Mystery", partIdx: 7, title: "The Secret Language of Women",
    summary: "Women have their own language and they expect you to understand it. The key: it's not what she SAYS but what she DOES. Watch her actions, not her words. When she asks 'Do whatever you want', she's testing whether you'll choose her. When she says 'I'm fine', she's not fine. When she says 'We need to talk', prepare for something serious. Learn to read the subtext because women rarely say exactly what they mean directly.",
    keyPrinciples: [
      "It's not what she SAYS, it's what she DOES that reveals the truth",
      "'I'm fine' = she's not fine",
      "'Do whatever you want' = a test of whether you'll prioritize her",
      "'We need to talk' = something serious is coming",
      "Women communicate indirectly and expect you to read between the lines",
      "Her actions are the only reliable indicator of her true feelings"
    ],
    actionItems: [
      "Learn common indirect communications and what they really mean",
      "Always prioritize watching what she does over listening to what she says",
      "When in doubt, ask gently: 'It seems like something's bothering you'"
    ],
    quiz: [
      { q: "What's more reliable — what she says or what she does?", opts: ["What she says", "What she does", "Both equally", "Neither"], a: 1 }
    ]
  },

  // ─── PART IX: TAKING IT TO THE NEXT LEVEL ───
  {
    id: 52, part: "Part IX: Taking it to the Next Level", partIdx: 8, title: "Sharing of Yourself",
    summary: "Vulnerability is strength, not weakness. Once she's at a high attraction level (8+), gradually sharing your deeper self — your fears, dreams, struggles — creates profound connection. But timing matters. Sharing too early (before attraction is built) makes you look needy. Sharing from a place of security and strength, after attraction is established, invites her to do the same and deepens the bond exponentially.",
    keyPrinciples: [
      "Vulnerability at the RIGHT time is strength, not weakness",
      "Share your deeper self AFTER attraction is established (8+ level)",
      "Sharing too early = needy. Sharing from strength = intimate",
      "Gradual self-disclosure deepens the bond exponentially",
      "When you share vulnerably, she feels safe to do the same",
      "Emotional intimacy is built through mutual vulnerability, not performing toughness"
    ],
    actionItems: [
      "Wait until attraction is solid before sharing vulnerable truths",
      "Lead with strength, then show depth — not the other way around",
      "Create safe space for mutual vulnerability"
    ],
    quiz: [
      { q: "When should you start sharing vulnerabilities?", opts: ["On the first date", "After attraction is solidly established (8+)", "Never — always be tough", "Before you even meet"], a: 1 }
    ]
  },
  {
    id: 53, part: "Part IX: Taking it to the Next Level", partIdx: 8, title: "The Gift",
    summary: "Women are biologically and spiritually designed to receive, and a man's gift is his presence, his love, his masculine energy. The gift isn't material — it's who you ARE. When you're fully present, confident, and loving, THAT is what she craves. Material gifts are nice but they're not what sustains a relationship. Your attention, your leadership, your emotional stability — this is the gift she truly wants.",
    keyPrinciples: [
      "Your greatest gift is your PRESENCE, not material things",
      "Women are designed to receive — your masculine energy is what she craves",
      "Being fully present and attentive is more valuable than any purchase",
      "Material gifts without presence and love are hollow",
      "Your attention, leadership, and emotional stability IS the gift",
      "Give your gift freely, without expectation of return"
    ],
    actionItems: [
      "Practice being fully present when you're with her — phone off, attention on",
      "Understand that your energy and presence matter more than your wallet",
      "Give your gift (presence, love, attention) without keeping score"
    ],
    quiz: [
      { q: "What's the most valuable gift you can give a woman?", opts: ["Jewelry", "Your full presence and masculine energy", "A vacation", "Financial security"], a: 1 }
    ]
  },
  {
    id: 54, part: "Part IX: Taking it to the Next Level", partIdx: 8, title: "It Feels Like Making Love",
    summary: "Sex should be an expression of love and connection, not just physical release. When both people are emotionally connected and attraction is at the 9-10 level, sex transforms from physical mechanics into a deeply intimate spiritual experience. This is the difference between 'having sex' and 'making love'. The woman who's deeply in love with you will be uninhibited and fully open. Creating emotional safety is what unlocks this level of physical intimacy.",
    keyPrinciples: [
      "True lovemaking requires deep emotional connection (9-10 attraction level)",
      "Emotional safety unlocks a woman's full physical openness and vulnerability",
      "There's a massive difference between 'having sex' and 'making love'",
      "A woman in love is uninhibited because she trusts you completely",
      "Physical intimacy is a reflection of emotional intimacy",
      "The better the emotional connection, the better the physical connection"
    ],
    actionItems: [
      "Build emotional connection first — physical intimacy follows naturally",
      "Create emotional safety so she can be fully open and vulnerable",
      "Be present during intimacy — not just physically, but emotionally"
    ],
    quiz: [
      { q: "What transforms sex into lovemaking?", opts: ["Technique", "Physical attraction alone", "Deep emotional connection and safety", "Candles and music"], a: 2 }
    ]
  },
  {
    id: 55, part: "Part IX: Taking it to the Next Level", partIdx: 8, title: "The Final Commitment",
    summary: "She'll tell you when she's ready to get married — listen for 'When are we getting married?' or 'Where is this going?' When you've been paying attention to all her attraction signs and they're consistently at 9-10, you know it's time. Let the proposal be a surprise in execution, even though the intention is mutually understood. Don't propose out of fear, pressure, or because you think you should. Propose because you genuinely can't imagine life without this person.",
    keyPrinciples: [
      "She'll signal when she's ready for commitment — listen for it",
      "Her attraction must be consistently at 9-10 before proposing",
      "Propose because you genuinely want to, not from fear or pressure",
      "The proposal should surprise in execution, not in intention",
      "If there's doubt, she's not ready — or you're not ready",
      "Marriage is the beginning of another chapter, not the finish line"
    ],
    actionItems: [
      "Wait for consistent 9-10 attraction signals before considering proposal",
      "Listen for her signals: 'when are we getting married?' = she's ready",
      "Make the proposal memorable — she's been dreaming about this moment"
    ],
    quiz: [
      { q: "How do you know when she's ready for a proposal?", opts: ["After 6 months automatically", "When she starts asking about the future", "When your friends say it's time", "When you feel lonely"], a: 1 }
    ]
  },

  // ─── PART X: KEEPING IT ALL TOGETHER ───
  {
    id: 56, part: "Part X: Keeping It All Together", partIdx: 9, title: "The Care and Feeding of Women",
    summary: "Beautiful women will bluff and test throughout the entire relationship. 'I don't like you. I'm leaving. You're a jerk.' These are tests, not truths (assuming attraction is at 5+). Don't be affected by emotional outbursts. A woman at level 5+ who's doing everything right won't be able to walk away — her feminine core responds to your masculine strength. She's like a moth to a flame. Indifference to her tests (not cruelty, genuine unshakeability) makes the difference.",
    keyPrinciples: [
      "Testing NEVER stops — it's a feature, not a bug",
      "Don't be affected by emotional bluffs: 'I'm leaving, you're a jerk'",
      "A woman at 5+ attraction who's properly handled can't walk away from you",
      "Indifference (not cruelty) to her tests demonstrates genuine strength",
      "She's testing to confirm you're still the strong man she fell for",
      "Your masculine center is her emotional anchor — don't let it wobble"
    ],
    actionItems: [
      "Expect testing for the life of the relationship",
      "Practice emotional non-reactivity to her provocations",
      "Be the immovable object she can lean against safely"
    ],
    quiz: [
      { q: "Do women stop testing once you're in a committed relationship?", opts: ["Yes, once she trusts you", "No — testing never stops", "Only if you ask nicely", "After marriage"], a: 1 }
    ]
  },
  {
    id: 57, part: "Part X: Keeping It All Together", partIdx: 9, title: "Keeping the Magic Alive",
    summary: "The courtship NEVER ends. You must continue dating your partner for the life of the relationship. Plan surprises, maintain mystery, keep doing the things that made her fall in love with you. Most relationships die because men get comfortable and stop trying. Weekly date nights aren't optional — they're essential maintenance. Continue being the man she fell for, not a complacent version who takes her for granted.",
    keyPrinciples: [
      "The courtship NEVER ends — not after commitment, not after marriage",
      "Continue doing what made her fall in love with you",
      "Weekly date nights are essential, not optional",
      "Comfort and complacency are the #1 relationship killers",
      "Plan surprises, maintain mystery, keep being interesting",
      "She fell in love with the MAN, not the comfortable version — stay that man"
    ],
    actionItems: [
      "Schedule non-negotiable weekly date nights",
      "Plan surprises regularly — they don't have to be expensive",
      "Ask yourself monthly: am I still the man she fell for?"
    ],
    quiz: [
      { q: "When does courtship end?", opts: ["After you become exclusive", "After marriage", "Never — it continues for life", "After the first year"], a: 2 }
    ]
  },
  {
    id: 58, part: "Part X: Keeping It All Together", partIdx: 9, title: "Polarity is the Key to Maintaining Desire",
    summary: "Attraction requires polarity — the contrast between masculine and feminine energy. When polarity weakens (both becoming too similar in energy), desire fades. Maintain your masculine: have purpose, lead, make decisions, be strong. Let her be in her feminine: nurturing, flowing, open, playful. Movies like Rocky illustrate this perfectly — his wife protests, tests, but his masculine commitment to his purpose (fighting) is exactly what makes her unable to leave. Purpose over pleasing.",
    keyPrinciples: [
      "Polarity = contrast between masculine and feminine. This IS attraction.",
      "When polarity weakens, desire fades — the relationship becomes 'roommates'",
      "Stay in your masculine: purpose, leadership, decisiveness, strength",
      "Create space for her feminine: openness, nurturing, flowing, playful",
      "A man who abandons his purpose to please her LOSES her respect and attraction",
      "Purpose over pleasing. Mission over approval. Always."
    ],
    actionItems: [
      "Maintain your purpose and mission — never abandon it for a relationship",
      "Lead with decisions, planning, and direction",
      "If the relationship feels flat, check: have you lost polarity?"
    ],
    quiz: [
      { q: "What is polarity?", opts: ["Being polar opposites in opinions", "The contrast between masculine and feminine energy", "Having different political views", "Being from different cultures"], a: 1 },
      { q: "What happens when a man abandons his purpose to please her?", opts: ["She appreciates it deeply", "He loses her respect and attraction", "The relationship improves", "Nothing changes"], a: 1 }
    ]
  },
  {
    id: 59, part: "Part X: Keeping It All Together", partIdx: 9, title: "Become Comfortable Being Yourself",
    summary: "Ultimately, all of these principles should lead you to one place: being genuinely comfortable as yourself. Not performing confidence, BEING confident. Not playing a role, living authentically. The principles in this book aren't about becoming someone fake — they're about stripping away the insecurity and social conditioning to reveal the naturally attractive man you already are underneath.",
    keyPrinciples: [
      "The goal: genuine authenticity, not permanent performance",
      "Strip away insecurity to reveal your naturally attractive self",
      "Real confidence replaces performed confidence through practice",
      "You're not becoming someone new — you're uncovering who you always were",
      "Comfort in your own skin is the ultimate attractor"
    ],
    actionItems: [
      "Notice where you're still performing vs. being genuine",
      "Practice showing up as your authentic self in every interaction",
      "Trust that who you truly are is enough"
    ],
    quiz: [
      { q: "What's the ultimate goal of all these principles?", opts: ["Becoming a great actor", "Becoming genuinely comfortable as your authentic self", "Memorizing scripts", "Controlling women"], a: 1 }
    ]
  },
  {
    id: 60, part: "Part X: Keeping It All Together", partIdx: 9, title: "The Many Faces of Endings",
    summary: "Not all relationships are meant to last forever, and that's okay. Some end because attraction died due to complacency. Some end because people grow in different directions. Some end because the relationship served its purpose. Handle endings with grace and maturity. Don't burn bridges. The way you end a relationship says everything about who you are as a man. Leave with dignity and allow her the same.",
    keyPrinciples: [
      "Not all relationships are meant to last — and that's okay",
      "End with grace and maturity — no scorched earth",
      "How you handle endings defines your character",
      "Some relationships end because they served their purpose",
      "Allow both parties to leave with dignity",
      "Growth sometimes means growing apart — honour the journey"
    ],
    actionItems: [
      "If a relationship must end, do it with honesty and respect",
      "Don't burn bridges — you may need to cross them again",
      "Take the lessons forward; leave the bitterness behind"
    ],
    quiz: [
      { q: "How should you handle the end of a relationship?", opts: ["Burn all bridges", "Ghost her", "With grace, maturity, and dignity", "Make her suffer"], a: 2 }
    ]
  },
  {
    id: 61, part: "Part X: Keeping It All Together", partIdx: 9, title: "The Ten Disciplines of Love",
    summary: "From Tony Robbins' relationship framework: 1) You go to a relationship to give, not get. 2) When feeling pain, focus on the other person. 3) Turn problems into gifts. 4) Make your partner feel significant daily. 5) Focus on what you can control. 6) Build rituals of connection. 7) Focus on what you love, not what bothers you. 8) Give what you want to receive. 9) Never threaten the relationship (no 'I'll leave you'). 10) If something needs fixing, fix it — don't let resentment build.",
    keyPrinciples: [
      "Go to a relationship to GIVE, not get",
      "When in pain, shift focus to your partner's needs",
      "Reframe problems as growth opportunities",
      "Make your partner feel significant every single day",
      "Focus on what you love about them, not what irritates you",
      "Give what you want to receive — model the behaviour you seek",
      "NEVER threaten the relationship or use leaving as leverage",
      "Fix problems immediately — don't let resentment accumulate",
      "Build rituals of connection (date nights, morning routines, etc.)",
      "Focus on what you can control — your own actions and attitudes"
    ],
    actionItems: [
      "Pick 3 of these 10 disciplines to focus on this week",
      "Create a daily ritual: one thing that makes her feel significant",
      "Eliminate relationship threats from your vocabulary completely"
    ],
    quiz: [
      { q: "What should you NEVER do according to the Ten Disciplines?", opts: ["Argue", "Threaten the relationship as leverage", "Disagree", "Have separate hobbies"], a: 1 },
      { q: "When you're in pain in a relationship, you should:", opts: ["Focus on yourself", "Shift focus to your partner's needs", "Leave immediately", "Bring up all past issues"], a: 1 }
    ]
  },
  {
    id: 62, part: "Part X: Keeping It All Together", partIdx: 9, title: "Conclusion",
    summary: "Mastering these principles spills over into every area of your life. Confidence with women creates confidence everywhere. You'll feel more complete as a man. The chains on your heart break and you become more than you ever dreamed. As you live these principles, you'll see how many people need this information. The ultimate goal is unconditional love — for yourself and for others. These principles work because they're based on natural human psychology, not tricks or manipulation.",
    keyPrinciples: [
      "Mastery with women creates mastery across your entire life",
      "Confidence gained here spills into career, friendships, everything",
      "The ultimate goal is unconditional love — for yourself and others",
      "These principles work because they're rooted in natural psychology",
      "Living these principles makes you want to help others do the same",
      "This is a lifelong journey of continuous growth and refinement"
    ],
    actionItems: [
      "Start your re-read immediately — repetition is where mastery lives",
      "Apply one new principle each week until they're all automatic",
      "Share what you've learned with men who need it"
    ],
    quiz: [
      { q: "What's the ultimate goal of mastering these principles?", opts: ["Manipulating women", "Getting lots of dates", "Unconditional love and complete self-confidence", "Becoming famous"], a: 2 }
    ]
  }
];

const PARTS = [
  { name: "Part I: In the Beginning", icon: "🌅", color: "#f59e0b" },
  { name: "Part II: The Way Things Are", icon: "🔍", color: "#ef4444" },
  { name: "Part III: The Art of Understanding", icon: "🧠", color: "#8b5cf6" },
  { name: "Part IV: It's Not All About You", icon: "🪞", color: "#06b6d4" },
  { name: "Part V: Making Your Move", icon: "⚡", color: "#10b981" },
  { name: "Part VI: The First Step", icon: "🎯", color: "#f97316" },
  { name: "Part VII: Keep It Steady!", icon: "⚖️", color: "#ec4899" },
  { name: "Part VIII: Solving the Mystery", icon: "🔮", color: "#6366f1" },
  { name: "Part IX: Taking it to the Next Level", icon: "🚀", color: "#14b8a6" },
  { name: "Part X: Keeping It All Together", icon: "🏆", color: "#eab308" },
];

// ═══════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════

const tabs = ["📖 Learn", "❓ Quiz", "🃏 Flashcards", "📊 Progress"];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedChapters, setCompletedChapters] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScores, setQuizScores] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [expandedParts, setExpandedParts] = useState({ 0: true });
  const contentRef = useRef(null);

  const chapter = BOOK_DATA[selectedChapter];

  const allFlashcards = useMemo(() => {
    const cards = [];
    BOOK_DATA.forEach((ch) => {
      ch.keyPrinciples.forEach((p) => {
        cards.push({ front: ch.title, back: p, partIdx: ch.partIdx });
      });
    });
    return cards;
  }, []);

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return BOOK_DATA.filter(
      (ch) =>
        ch.title.toLowerCase().includes(q) ||
        ch.summary.toLowerCase().includes(q) ||
        ch.keyPrinciples.some((p) => p.toLowerCase().includes(q)) ||
        ch.actionItems.some((a) => a.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const togglePart = (idx) => {
    setExpandedParts((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const selectChapter = (id) => {
    setSelectedChapter(id);
    setSidebarOpen(false);
    setActiveTab(0);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const markComplete = (id) => {
    setCompletedChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuizAnswer = (chId, qIdx, aIdx) => {
    const key = `${chId}-${qIdx}`;
    if (quizAnswers[key] !== undefined) return;
    setQuizAnswers((prev) => ({ ...prev, [key]: aIdx }));

    const isCorrect = BOOK_DATA[chId].quiz[qIdx].a === aIdx;
    setQuizScores((prev) => {
      const chKey = `ch-${chId}`;
      const curr = prev[chKey] || { correct: 0, total: 0 };
      return {
        ...prev,
        [chKey]: { correct: curr.correct + (isCorrect ? 1 : 0), total: curr.total + 1 },
      };
    });
  };

  const resetQuiz = (chId) => {
    const newAnswers = { ...quizAnswers };
    BOOK_DATA[chId].quiz.forEach((_, i) => {
      delete newAnswers[`${chId}-${i}`];
    });
    setQuizAnswers(newAnswers);
    const newScores = { ...quizScores };
    delete newScores[`ch-${chId}`];
    setQuizScores(newScores);
  };

  const totalCompleted = Object.values(completedChapters).filter(Boolean).length;
  const progressPct = Math.round((totalCompleted / BOOK_DATA.length) * 100);

  const totalQuizQuestions = BOOK_DATA.reduce((s, ch) => s + ch.quiz.length, 0);
  const totalQuizCorrect = Object.values(quizScores).reduce((s, sc) => s + sc.correct, 0);
  const totalQuizAnswered = Object.values(quizScores).reduce((s, sc) => s + sc.total, 0);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Palatino', serif",
      background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
      color: "#e0e0e0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* HEADER */}
      <header style={{
        background: "rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
          background: "none", border: "1px solid rgba(255,255,255,0.15)",
          color: "#e0e0e0", fontSize: 20, cursor: "pointer", padding: "6px 10px",
          borderRadius: 8,
        }}>☰</button>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: 18, fontWeight: 700, margin: 0,
            background: "linear-gradient(90deg, #f59e0b, #ef4444, #8b5cf6)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: 0.5,
          }}>How To Be A 3% Man</h1>
          <div style={{ fontSize: 11, opacity: 0.5, fontFamily: "sans-serif" }}>
            Interactive Study Guide • {BOOK_DATA.length} Chapters • 10 Parts
          </div>
        </div>
        <div style={{
          background: `conic-gradient(#10b981 ${progressPct}%, rgba(255,255,255,0.1) 0)`,
          borderRadius: "50%", width: 40, height: 40, display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            background: "#1a1a2e", borderRadius: "50%", width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontFamily: "sans-serif", fontWeight: 700, color: "#10b981",
          }}>{progressPct}%</div>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>
        {/* SIDEBAR */}
        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            zIndex: 200,
          }} />
        )}
        <aside style={{
          position: "fixed", left: sidebarOpen ? 0 : -320, top: 0, bottom: 0,
          width: 310, background: "rgba(15,15,26,0.98)", borderRight: "1px solid rgba(255,255,255,0.08)",
          zIndex: 300, transition: "left 0.3s ease", overflowY: "auto",
          padding: "60px 0 20px",
          backdropFilter: "blur(20px)",
        }}>
          <div style={{ padding: "0 16px 12px" }}>
            <input
              type="text" placeholder="🔍 Search chapters..."
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, padding: "10px 12px", color: "#e0e0e0", fontSize: 13,
                fontFamily: "sans-serif", outline: "none", boxSizing: "border-box",
              }}
            />
          </div>

          {filteredChapters ? (
            <div style={{ padding: "0 12px" }}>
              <div style={{ fontSize: 11, color: "#888", padding: "4px 4px 8px", fontFamily: "sans-serif" }}>
                {filteredChapters.length} results for "{searchQuery}"
              </div>
              {filteredChapters.map((ch) => (
                <button key={ch.id} onClick={() => { selectChapter(ch.id); setSearchQuery(""); }} style={{
                  display: "block", width: "100%", textAlign: "left", background: ch.id === selectedChapter ? "rgba(255,255,255,0.08)" : "none",
                  border: "none", color: "#ccc", padding: "8px 10px", borderRadius: 6, cursor: "pointer",
                  fontSize: 12, fontFamily: "sans-serif", marginBottom: 2,
                }}>
                  <span style={{ opacity: 0.4, fontSize: 10 }}>{PARTS[ch.partIdx].icon}</span>{" "}
                  {ch.title}
                </button>
              ))}
            </div>
          ) : (
            PARTS.map((part, pIdx) => (
              <div key={pIdx}>
                <button onClick={() => togglePart(pIdx)} style={{
                  display: "flex", alignItems: "center", gap: 8, width: "100%",
                  background: "none", border: "none", color: part.color, padding: "10px 16px",
                  cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "sans-serif",
                  textAlign: "left",
                }}>
                  <span>{part.icon}</span>
                  <span style={{ flex: 1 }}>{part.name}</span>
                  <span style={{ fontSize: 10, opacity: 0.5 }}>{expandedParts[pIdx] ? "▼" : "▶"}</span>
                </button>
                {expandedParts[pIdx] && BOOK_DATA.filter((ch) => ch.partIdx === pIdx).map((ch) => (
                  <button key={ch.id} onClick={() => selectChapter(ch.id)} style={{
                    display: "flex", alignItems: "center", gap: 6, width: "100%",
                    background: ch.id === selectedChapter ? `${part.color}15` : "none",
                    borderLeft: ch.id === selectedChapter ? `3px solid ${part.color}` : "3px solid transparent",
                    border: "none", borderLeft: ch.id === selectedChapter ? `3px solid ${part.color}` : "3px solid transparent",
                    color: ch.id === selectedChapter ? "#fff" : "#aaa",
                    padding: "7px 16px 7px 24px", cursor: "pointer", fontSize: 12,
                    fontFamily: "sans-serif", textAlign: "left",
                  }}>
                    {completedChapters[ch.id] && <span style={{ color: "#10b981", fontSize: 11 }}>✓</span>}
                    <span style={{ flex: 1 }}>{ch.title}</span>
                  </button>
                ))}
              </div>
            ))
          )}
        </aside>

        {/* MAIN CONTENT */}
        <main ref={contentRef} style={{ flex: 1, overflowY: "auto", padding: "0 0 80px" }}>
          {/* TAB BAR */}
          <div style={{
            display: "flex", gap: 4, padding: "12px 16px", overflowX: "auto",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            {tabs.map((t, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                background: i === activeTab ? "rgba(255,255,255,0.1)" : "none",
                border: i === activeTab ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
                color: i === activeTab ? "#fff" : "#888", borderRadius: 8,
                padding: "8px 14px", cursor: "pointer", fontSize: 13, fontFamily: "sans-serif",
                whiteSpace: "nowrap", fontWeight: i === activeTab ? 600 : 400,
              }}>{t}</button>
            ))}
          </div>

          {activeTab === 0 && <LearnView chapter={chapter} onComplete={markComplete} completed={!!completedChapters[chapter.id]} selectChapter={selectChapter} />}
          {activeTab === 1 && <QuizView chapter={chapter} answers={quizAnswers} scores={quizScores} onAnswer={handleQuizAnswer} onReset={resetQuiz} />}
          {activeTab === 2 && <FlashcardView cards={allFlashcards} idx={flashcardIdx} setIdx={setFlashcardIdx} flipped={flashcardFlipped} setFlipped={setFlashcardFlipped} />}
          {activeTab === 3 && <ProgressView completedChapters={completedChapters} quizScores={quizScores} totalQuizQuestions={totalQuizQuestions} totalQuizCorrect={totalQuizCorrect} totalQuizAnswered={totalQuizAnswered} />}
        </main>
      </div>
    </div>
  );
}

function LearnView({ chapter, onComplete, completed, selectChapter }) {
  const part = PARTS[chapter.partIdx];
  const prevCh = chapter.id > 0 ? BOOK_DATA[chapter.id - 1] : null;
  const nextCh = chapter.id < BOOK_DATA.length - 1 ? BOOK_DATA[chapter.id + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 16px" }}>
      {/* Part + Chapter header */}
      <div style={{
        fontSize: 11, fontFamily: "sans-serif", color: part.color,
        fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6,
      }}>{part.icon} {part.name}</div>
      <h2 style={{
        fontSize: 28, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2,
        color: "#fff",
      }}>{chapter.title}</h2>

      {/* Summary */}
      <div style={{
        background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "18px 20px",
        marginBottom: 24, borderLeft: `3px solid ${part.color}`, lineHeight: 1.7,
        fontSize: 15,
      }}>{chapter.summary}</div>

      {/* Key Principles */}
      <h3 style={{
        fontSize: 14, fontFamily: "sans-serif", fontWeight: 700, color: "#f59e0b",
        textTransform: "uppercase", letterSpacing: 1, marginBottom: 12,
      }}>🔑 Key Principles</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        {chapter.keyPrinciples.map((p, i) => (
          <div key={i} style={{
            background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)",
            borderRadius: 10, padding: "12px 16px", fontSize: 14, lineHeight: 1.6,
            display: "flex", gap: 10, alignItems: "flex-start",
          }}>
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: 13, marginTop: 2, flexShrink: 0 }}>{i + 1}</span>
            <span>{p}</span>
          </div>
        ))}
      </div>

      {/* Action Items */}
      <h3 style={{
        fontSize: 14, fontFamily: "sans-serif", fontWeight: 700, color: "#10b981",
        textTransform: "uppercase", letterSpacing: 1, marginBottom: 12,
      }}>⚡ Action Items</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        {chapter.actionItems.map((a, i) => (
          <div key={i} style={{
            background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.12)",
            borderRadius: 10, padding: "12px 16px", fontSize: 14, lineHeight: 1.6,
          }}>→ {a}</div>
        ))}
      </div>

      {/* Mark Complete */}
      <button onClick={() => onComplete(chapter.id)} style={{
        width: "100%", padding: "14px", borderRadius: 10, cursor: "pointer",
        background: completed ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.06)",
        border: completed ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(255,255,255,0.1)",
        color: completed ? "#10b981" : "#aaa", fontSize: 14, fontWeight: 600,
        fontFamily: "sans-serif", marginBottom: 24,
      }}>{completed ? "✓ Completed — Click to Unmark" : "Mark Chapter as Complete"}</button>

      {/* Nav */}
      <div style={{ display: "flex", gap: 12 }}>
        {prevCh && (
          <button onClick={() => selectChapter(prevCh.id)} style={{
            flex: 1, padding: "12px", borderRadius: 10, cursor: "pointer",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            color: "#aaa", fontSize: 12, fontFamily: "sans-serif", textAlign: "left",
          }}>← {prevCh.title}</button>
        )}
        {nextCh && (
          <button onClick={() => selectChapter(nextCh.id)} style={{
            flex: 1, padding: "12px", borderRadius: 10, cursor: "pointer",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            color: "#aaa", fontSize: 12, fontFamily: "sans-serif", textAlign: "right",
          }}>{nextCh.title} →</button>
        )}
      </div>
    </div>
  );
}

function QuizView({ chapter, answers, scores, onAnswer, onReset }) {
  const part = PARTS[chapter.partIdx];
  const score = scores[`ch-${chapter.id}`];
  const allAnswered = chapter.quiz.every((_, i) => answers[`${chapter.id}-${i}`] !== undefined);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: "sans-serif", color: part.color, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>{part.icon} Quiz</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "4px 0 0", color: "#fff" }}>{chapter.title}</h2>
        </div>
        {score && (
          <div style={{
            background: score.correct === score.total ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
            border: `1px solid ${score.correct === score.total ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
            borderRadius: 10, padding: "8px 14px", textAlign: "center",
          }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: score.correct === score.total ? "#10b981" : "#ef4444" }}>
              {score.correct}/{score.total}
            </div>
            <div style={{ fontSize: 10, fontFamily: "sans-serif", opacity: 0.6 }}>Score</div>
          </div>
        )}
      </div>

      {chapter.quiz.map((q, qIdx) => {
        const key = `${chapter.id}-${qIdx}`;
        const answered = answers[key] !== undefined;
        const correct = answered && answers[key] === q.a;

        return (
          <div key={qIdx} style={{
            background: "rgba(255,255,255,0.03)", borderRadius: 12,
            padding: "18px 20px", marginBottom: 16,
            border: answered ? `1px solid ${correct ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}` : "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14, lineHeight: 1.5, color: "#fff" }}>
              Q{qIdx + 1}. {q.q}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {q.opts.map((opt, oIdx) => {
                const isSelected = answers[key] === oIdx;
                const isCorrectOpt = q.a === oIdx;
                let bg = "rgba(255,255,255,0.04)";
                let bdr = "1px solid rgba(255,255,255,0.08)";
                let clr = "#ccc";

                if (answered) {
                  if (isCorrectOpt) { bg = "rgba(16,185,129,0.12)"; bdr = "1px solid rgba(16,185,129,0.3)"; clr = "#10b981"; }
                  else if (isSelected) { bg = "rgba(239,68,68,0.12)"; bdr = "1px solid rgba(239,68,68,0.3)"; clr = "#ef4444"; }
                }

                return (
                  <button key={oIdx} onClick={() => onAnswer(chapter.id, qIdx, oIdx)} disabled={answered} style={{
                    background: bg, border: bdr, color: clr, borderRadius: 8,
                    padding: "10px 14px", cursor: answered ? "default" : "pointer",
                    fontSize: 13, fontFamily: "sans-serif", textAlign: "left",
                    display: "flex", alignItems: "center", gap: 8,
                    opacity: answered && !isSelected && !isCorrectOpt ? 0.4 : 1,
                  }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%", display: "flex",
                      alignItems: "center", justifyContent: "center", fontSize: 11,
                      background: "rgba(255,255,255,0.08)", flexShrink: 0, fontWeight: 700,
                    }}>{String.fromCharCode(65 + oIdx)}</span>
                    {opt}
                    {answered && isCorrectOpt && <span style={{ marginLeft: "auto" }}>✓</span>}
                    {answered && isSelected && !isCorrectOpt && <span style={{ marginLeft: "auto" }}>✗</span>}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {allAnswered && (
        <button onClick={() => onReset(chapter.id)} style={{
          width: "100%", padding: "12px", borderRadius: 10, cursor: "pointer",
          background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
          color: "#818cf8", fontSize: 13, fontFamily: "sans-serif", fontWeight: 600,
        }}>🔄 Retry Quiz</button>
      )}
    </div>
  );
}

function FlashcardView({ cards, idx, setIdx, flipped, setFlipped }) {
  if (!cards.length) return null;
  const card = cards[idx % cards.length];
  const part = PARTS[card.partIdx];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 16px", textAlign: "center" }}>
      <div style={{ fontSize: 12, fontFamily: "sans-serif", opacity: 0.5, marginBottom: 16 }}>
        Card {(idx % cards.length) + 1} of {cards.length}
      </div>

      <div onClick={() => setFlipped(!flipped)} style={{
        background: flipped ? `${part.color}10` : "rgba(255,255,255,0.04)",
        border: `1px solid ${flipped ? `${part.color}30` : "rgba(255,255,255,0.08)"}`,
        borderRadius: 16, padding: "40px 28px", minHeight: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease",
        marginBottom: 24,
      }}>
        {!flipped ? (
          <>
            <div style={{ fontSize: 11, fontFamily: "sans-serif", color: part.color, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>
              {part.icon} Chapter
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{card.front}</div>
            <div style={{ fontSize: 11, fontFamily: "sans-serif", opacity: 0.3, marginTop: 20 }}>Tap to reveal principle</div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 11, fontFamily: "sans-serif", color: "#10b981", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>
              🔑 Key Principle
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: "#e0e0e0" }}>{card.back}</div>
          </>
        )}
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button onClick={() => { setIdx(Math.max(0, idx - 1)); setFlipped(false); }} style={{
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
          color: "#aaa", borderRadius: 10, padding: "12px 24px", cursor: "pointer",
          fontSize: 14, fontFamily: "sans-serif",
        }}>← Prev</button>
        <button onClick={() => { setIdx(Math.floor(Math.random() * cards.length)); setFlipped(false); }} style={{
          background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)",
          color: "#a78bfa", borderRadius: 10, padding: "12px 24px", cursor: "pointer",
          fontSize: 14, fontFamily: "sans-serif",
        }}>🎲 Random</button>
        <button onClick={() => { setIdx(idx + 1); setFlipped(false); }} style={{
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
          color: "#aaa", borderRadius: 10, padding: "12px 24px", cursor: "pointer",
          fontSize: 14, fontFamily: "sans-serif",
        }}>Next →</button>
      </div>
    </div>
  );
}

function ProgressView({ completedChapters, quizScores, totalQuizQuestions, totalQuizCorrect, totalQuizAnswered }) {
  const totalCompleted = Object.values(completedChapters).filter(Boolean).length;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 16px" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 24 }}>📊 Your Progress</h2>

      {/* Stats cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
        {[
          { label: "Chapters Complete", value: `${totalCompleted}/${BOOK_DATA.length}`, pct: Math.round((totalCompleted / BOOK_DATA.length) * 100), color: "#10b981" },
          { label: "Quiz Accuracy", value: totalQuizAnswered ? `${Math.round((totalQuizCorrect / totalQuizAnswered) * 100)}%` : "—", pct: totalQuizAnswered ? Math.round((totalQuizCorrect / totalQuizAnswered) * 100) : 0, color: "#8b5cf6" },
          { label: "Quiz Questions", value: `${totalQuizAnswered}/${totalQuizQuestions}`, pct: Math.round((totalQuizAnswered / totalQuizQuestions) * 100), color: "#f59e0b" },
          { label: "Parts Covered", value: `${new Set(Object.keys(completedChapters).filter(k => completedChapters[k]).map(k => BOOK_DATA[k]?.partIdx)).size}/10`, pct: 0, color: "#06b6d4" },
        ].map((s, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.04)", borderRadius: 12,
            padding: "16px", border: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ fontSize: 11, fontFamily: "sans-serif", color: "#888", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
            {s.pct > 0 && (
              <div style={{ marginTop: 8, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${s.pct}%`, background: s.color, borderRadius: 2, transition: "width 0.5s" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* By part */}
      <h3 style={{ fontSize: 14, fontFamily: "sans-serif", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Progress by Part</h3>
      {PARTS.map((part, pIdx) => {
        const partChapters = BOOK_DATA.filter((ch) => ch.partIdx === pIdx);
        const partCompleted = partChapters.filter((ch) => completedChapters[ch.id]).length;
        const pct = Math.round((partCompleted / partChapters.length) * 100);

        return (
          <div key={pIdx} style={{
            background: "rgba(255,255,255,0.03)", borderRadius: 10,
            padding: "12px 16px", marginBottom: 8, display: "flex",
            alignItems: "center", gap: 12,
          }}>
            <span style={{ fontSize: 18 }}>{part.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontFamily: "sans-serif", fontWeight: 600, color: part.color, marginBottom: 4 }}>
                {part.name}
              </div>
              <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${pct}%`, background: part.color, borderRadius: 2, transition: "width 0.5s" }} />
              </div>
            </div>
            <div style={{ fontSize: 12, fontFamily: "sans-serif", color: "#888", minWidth: 50, textAlign: "right" }}>
              {partCompleted}/{partChapters.length}
            </div>
          </div>
        );
      })}
    </div>
  );
}
