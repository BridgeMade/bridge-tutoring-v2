// Blog content store. Flat, typed, no CMS — posts render statically at build.
// Bodies are structured blocks so we avoid a markdown dependency and keep
// everything type-safe. Copy is migrated from the previous site and polished
// against references/voice.md (calm, parent-focused, SA English, no AI tells).

export type Category =
  | "Parental Guidance"
  | "Exam Preparation"
  | "Academic Success Tips"
  | "Educational Trends";

export const CATEGORIES: Category[] = [
  "Parental Guidance",
  "Exam Preparation",
  "Academic Success Tips",
  "Educational Trends",
];

// A content block — the building blocks of a post body.
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  // Short summary for cards, meta description, and OG.
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD)
  categories: Category[];
  author: string;
  // Hero image path under /public. Optional — falls back to a branded block.
  image?: string;
  imageAlt?: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "how-tochoose-the-right-tutor-for-your-child",
    title: "How to Choose the Right Tutor for Your Child: 5 Key Factors to Consider",
    excerpt:
      "Choosing a tutor can feel overwhelming. Here are five practical factors that help you find the right fit for your child — not just any tutor.",
    date: "2025-03-15",
    categories: ["Parental Guidance"],
    author: "Bridge Tutoring",
    image: "/blog/choose-the-right-tutor.jpg",
    imageAlt: "A student smiling in front of a chalkboard covered in equations",
    body: [
      {
        type: "p",
        text: "As a parent, you want the best for your child's education. You make sure they're at a good school, and when they struggle or need extra support to excel, you naturally want to give them the right help. But with so many options — independent tutors, tutoring companies, school-run extra classes — it can be hard to know what will actually fit your child.",
      },
      {
        type: "p",
        text: "To help you decide, here are five factors worth considering when you choose a tutor.",
      },
      { type: "h2", text: "1. Start with your child's needs" },
      {
        type: "p",
        text: "Before you start looking, take a moment to understand where your child actually is. Are they struggling with one subject, or do they need support across a few? Some children are keen to improve; others see extra lessons as one more thing on top of an already full week. Knowing how your child feels about it helps you find a tutor who can win them over.",
      },
      {
        type: "p",
        text: "Learning style matters too. Some children focus well one-on-one; others do better when they can talk things through. Understanding what suits yours points you toward the right kind of support.",
      },
      { type: "h2", text: "2. Look at qualifications and experience" },
      {
        type: "p",
        text: "Not every tutor suits every child. Look for someone with real subject knowledge and teaching experience — a maths specialist will help a struggling algebra student far more than a general homework helper. Experience with your child's age group counts as well: what works for a matric pupil won't always land with a Grade 4. A tutor who can build and adapt a plan around your child makes a real difference.",
      },
      { type: "h2", text: "3. Decide between one-on-one and group lessons" },
      {
        type: "p",
        text: "One-on-one lessons are fully tailored — the pace and the topics are arranged entirely around your child. That's ideal when there are real gaps to close, or when an important exam is coming up. Your child can work through what they don't understand without worrying about keeping up with anyone else.",
      },
      {
        type: "p",
        text: "Small group lessons can work well too. Some children stay more motivated alongside peers, and seeing others work through the same challenges can help. If your child needs intensive, focused support, one-on-one is usually the better choice — but the right answer depends on your child.",
      },
      { type: "h2", text: "4. Balance budget and time" },
      {
        type: "p",
        text: "Tutoring is an investment, and costs vary with a tutor's experience and the format you choose. Think about the practical side too: how your child gets to lessons, how often they'll attend, and whether that fits a week that's already busy. A good tutor works with you to build a schedule that supports schoolwork rather than adding stress.",
      },
      { type: "h2", text: "5. Use a trial session and track progress" },
      {
        type: "p",
        text: "A trial session is one of the best ways to tell whether a tutor is the right fit. It lets your child experience how they teach, and lets you see how clearly they explain things. Look for someone patient and encouraging, who breaks difficult topics down.",
      },
      {
        type: "p",
        text: "Tracking progress matters just as much. A good tutor gives you regular feedback, adjusts lessons as needed, and is honest about how your child is doing — so the sessions stay focused on real improvement.",
      },
      { type: "h2", text: "Making the right choice" },
      {
        type: "p",
        text: "Choosing a tutor takes some thought, but it's worth it when you see your child grow in confidence. With these five factors in mind, you're well placed to make the right call.",
      },
      {
        type: "p",
        text: "At Bridge, we take the guesswork out of it. You tell us about your child, and we hand-pick a tutor who fits how they learn — in-person or online — and keep you informed every step of the way.",
      },
    ],
  },
  {
    slug: "how-to-review-school-your-semester-report-card",
    title: "How to Review Your School First Semester Report Card",
    excerpt:
      "First-semester marks are a starting point, not a verdict. Here's how to turn those percentages into a calm, focused plan for the next term.",
    date: "2025-03-27",
    categories: ["Academic Success Tips", "Exam Preparation"],
    author: "Bridge Tutoring",
    image: "/blog/first-semester-report-card.jpg",
    imageAlt: "A parent and child reviewing a report card together at a table",
    body: [
      {
        type: "p",
        text: "When the first report card arrives, it's tempting to read it as a final verdict. It isn't. First-semester marks are a starting point — they tell you where your child is now, and what to focus on next. The real value comes from knowing how to read them and what to do about them.",
      },
      { type: "p", text: "Here's how to turn those percentages into a plan." },
      { type: "h2", text: "Step 1: Ask the right questions" },
      {
        type: "p",
        text: "Marks on their own don't tell the full story. To find where the opportunities are, start by asking better questions.",
      },
      {
        type: "p",
        text: "Subject-specific struggles: A 65% in Physical Sciences doesn't tell you what to fix. Is it the calculations, the theory, or the exam technique? It's worth asking the teacher: which topics brought this mark down?",
      },
      {
        type: "p",
        text: "Patterns in mistakes: Sometimes the issue isn't knowledge, it's habits.",
      },
      {
        type: "ul",
        items: [
          "Careless errors? Build better checking habits.",
          "Running out of time? Practise timed mock tests.",
          "Concept confusion? Try targeted tutoring on those topics.",
        ],
      },
      {
        type: "p",
        text: "Effort versus results: A useful question to sit with is whether your child is putting in the effort but still struggling, or whether there's more they could give. The answer changes how you respond.",
      },
      { type: "h2", text: "Step 2: Set up a reset plan that works" },
      {
        type: "p",
        text: "A vague \"study more\" plan rarely gets results. What works is a focused, manageable one built around what actually needs improvement.",
      },
      {
        type: "p",
        text: "Pick one or two focus areas. Targeting a few key things keeps your child motivated far better than trying to fix everything at once. Instead of \"we need to improve maths\", try \"let's master algebraic fractions this term\". Use the teacher's feedback to choose the specific topics to prioritise, and build study habits around those.",
      },
      { type: "h2", text: "Step 3: Build on what's working" },
      {
        type: "p",
        text: "Improvement isn't only about fixing what's broken — it's also about doing more of what already works.",
      },
      {
        type: "ul",
        items: [
          "Bright spots: Which subject improved the most, and why? Apply those same habits elsewhere.",
          "Effective strategies: If flashcards worked for History dates, can they work for Science formulas too?",
          "Confidence boosters: When did your child feel most confident? Create more of those moments — lessons that start with small, achievable wins.",
        ],
      },
      { type: "h2", text: "When to consider extra help" },
      { type: "p", text: "A few signs it may be time for support:" },
      {
        type: "ul",
        items: [
          "\"I studied for hours but my marks didn't change.\"",
          "Losing interest in a subject they used to enjoy.",
          "Vague teacher comments like \"needs to apply himself\" without practical guidance.",
        ],
      },
      {
        type: "p",
        text: "This is where the right support helps: clear feedback on where to focus, one-on-one guidance to close the gaps, and a plan to fix them before the next term begins.",
      },
      { type: "h2", text: "Your next move" },
      {
        type: "p",
        text: "Sit down with the report card, pick one or two things to work on, and build a simple plan around them. If you'd like help, Bridge can match your child with a tutor and put the right support in place for the term ahead — the first assessment is free.",
      },
    ],
  },
  {
    slug: "quadratic-equations-demistified-a-step-by-step-guide-for-grade-10-to-12",
    title: "Quadratic Equations Demystified: A Step-by-Step Guide for Grade 10–12 Students (CAPS & IEB)",
    excerpt:
      "Quadratics trip up thousands of South African students every year — not because they're impossible, but because they're misunderstood. Here's how to solve them with confidence.",
    date: "2025-04-04",
    categories: ["Exam Preparation", "Academic Success Tips"],
    author: "Bridge Tutoring",
    image: "/blog/quadratic-equations.jpg",
    imageAlt: "An illustrated student solving quadratic equations at a desk",
    body: [
      {
        type: "p",
        text: "Every year, quadratic equations trip up thousands of South African students — not because they're impossible, but because they're misunderstood. The good news: once the methods click, they become some of the most predictable marks in the paper. Here's how to get there.",
      },
      { type: "h2", text: "Step 1: What is a quadratic equation?" },
      {
        type: "p",
        text: "In plain terms, it's an equation where the highest power is 2 — for example, ax² + bx + c = 0. A real-life version: working out the profit of a small spaza shop selling vetkoek at R5 each might give you something like −2x² + 50x − 100 = 0.",
      },
      { type: "p", text: "Two terms worth knowing:" },
      {
        type: "ul",
        items: [
          "Coefficients: the numbers in front of x² and x, plus the constant term.",
          "Roots (solutions): the value or values of x that make the equation true.",
        ],
      },
      { type: "h2", text: "Step 2: The three methods to solve any quadratic" },
      { type: "h3", text: "Method 1: Factorising (the quick win)" },
      {
        type: "p",
        text: "When to use it: when the equation factors neatly, which is common in Grade 10. Take x² + 5x + 6 = 0.",
      },
      {
        type: "ol",
        items: [
          "Find two numbers that multiply to 6 and add to 5 → 2 and 3.",
          "Write as factors: (x + 2)(x + 3) = 0.",
          "Solve for x: x = −2 or x = −3.",
        ],
      },
      {
        type: "p",
        text: "A tip worth remembering: if it doesn't factor easily within about a minute, switch methods — don't waste exam time.",
      },
      { type: "h3", text: "Method 2: The quadratic formula (the reliable backup)" },
      {
        type: "p",
        text: "When to use it: always works, and it's especially useful for the messier equations in Grade 11–12. The formula is x = (−b ± √(b² − 4ac)) / 2a.",
      },
      { type: "p", text: "Take 2x² − 4x − 6 = 0:" },
      {
        type: "ol",
        items: [
          "Identify a = 2, b = −4, c = −6.",
          "Substitute into the formula.",
          "Simplify to get x = 3 or x = −1.",
        ],
      },
      { type: "h3", text: "Method 3: Completing the square" },
      {
        type: "p",
        text: "When to use it: when you're asked to explicitly, or for vertex-form problems. Take x² − 6x + 5 = 0:",
      },
      {
        type: "ol",
        items: [
          "Move the constant: x² − 6x = −5.",
          "Take half of −6 → −3, square it → 9, add to both sides: x² − 6x + 9 = 4.",
          "Factor the left side: (x − 3)² = 4.",
          "Solve: x − 3 = ±2, so x = 5 or x = 1.",
        ],
      },
      {
        type: "p",
        text: "This method also helps with graphing parabolas — useful for Paper 1.",
      },
      { type: "h2", text: "Step 3: Avoid these four costly mistakes" },
      {
        type: "ol",
        items: [
          "Forgetting the ± in the square root — it costs you half the marks.",
          "Miswriting coefficients — double-check a, b and c.",
          "Rushing factorisation — check that your factors expand back to the original equation.",
          "Ignoring negative signs — remember that −b means the opposite sign of b.",
        ],
      },
      { type: "h2", text: "Step 4: Practise with past papers" },
      { type: "p", text: "Try these, then check your working:" },
      {
        type: "ol",
        items: [
          "Factorise: x² + 9x + 20 = 0.",
          "Quadratic formula: 3x² + 2x − 5 = 0.",
          "Complete the square: x² + 8x + 7 = 0.",
        ],
      },
      { type: "h2", text: "When to get help" },
      {
        type: "p",
        text: "If you find yourself asking \"but why does the formula work?\", that's exactly the kind of thing a tutor can unpack with visuals and real examples. No question is too basic. Bridge can match your child with a tutor to work through quadratics step by step — in-person or online — and the first assessment is free.",
      },
    ],
  },
  {
    slug: "why-we-champion-one-on-one-tutoring",
    title: "The Bridge Difference: Why We Champion One-on-One Tutoring",
    excerpt:
      "Every child learns differently. Here's why personalised, one-on-one attention is at the heart of how Bridge works — and how small online groups fit in.",
    date: "2025-07-10",
    categories: ["Parental Guidance", "Academic Success Tips"],
    author: "Bridge Tutoring",
    image: "/blog/one-on-one-tutoring.jpg",
    imageAlt: "A tutor working one-on-one with a student",
    body: [
      {
        type: "p",
        text: "Every child is different. They learn at their own pace, face their own challenges, and have their own strengths. That's why personalised, one-on-one attention sits at the heart of how Bridge works. When it comes to closing gaps and building real understanding, the focus of one-on-one is hard to beat — and for families who want it, we also offer small online groups of up to four students.",
      },
      { type: "h2", text: "The case for one-on-one learning" },
      {
        type: "p",
        text: "Imagine a lesson built entirely around your child — where their questions are never sidelined, and their specific struggles are the whole focus. That's what one-on-one offers, and it shows up in a few ways.",
      },
      {
        type: "p",
        text: "A safe space to learn: Fear of getting it wrong in front of others is a real barrier. One-on-one, that anxiety eases. Children feel safe to take risks, make mistakes, and ask the questions they'd never raise in a full class. As one parent put it, her daughter finally felt comfortable admitting what she didn't understand.",
      },
      {
        type: "p",
        text: "Lessons built around your child: Generic lessons often miss the mark. One-on-one means every lesson is shaped around your child's needs and goals. The tutor lingers on the hard parts and moves quickly through what's already mastered.",
      },
      {
        type: "p",
        text: "Full attention and instant feedback: In a group, questions can go unanswered and small misunderstandings can grow. With one-on-one, your child has the tutor's full attention — mistakes are caught early, before they take root.",
      },
      { type: "h2", text: "Where small groups fit in" },
      {
        type: "p",
        text: "Some children stay more motivated alongside peers, and a little healthy momentum from others can help. For those families, we offer small online group sessions — capped at four students — so there's still room for individual attention while keeping the social, collaborative side of learning. It's a middle ground between a full class and one-on-one.",
      },
      { type: "h2", text: "A common question" },
      {
        type: "p",
        text: "Is one-on-one more expensive than a group? It's worth thinking of it as an investment rather than just a cost. Because the lessons are so focused, students often reach their goals in fewer sessions — and the deeper impact, in understanding and confidence, tends to last.",
      },
      {
        type: "p",
        text: "Our experience backs up what we already believed: individual attention is hard to replace. We see hesitant students become engaged learners, and confidence grow when a child realises their questions matter.",
      },
      { type: "h2", text: "Why it matters" },
      {
        type: "p",
        text: "Choosing one-on-one tutoring with Bridge isn't just about homework help. It's about a learning journey designed around your child — a supportive, effective space where they can genuinely thrive. Tell us what your child needs, and we'll hand-pick the right tutor to match.",
      },
    ],
  },
];

// --- helpers ---

export const allPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string): Post | null {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
