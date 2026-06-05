const sideCopy: Record<number, { heading: string; body: string }> = {
  1: {
    heading: "Let's get started",
    body: "We'll use your details to send you a match confirmation and keep you updated throughout the process.",
  },
  2: {
    heading: "Tell us about your child",
    body: "The more we know, the better the match. We'll look for a tutor who works well with your child's learning style.",
  },
  3: {
    heading: "Which subjects?",
    body: "Select everything your child needs help with — we'll find a tutor who covers all of them, or multiple tutors if needed.",
  },
  4: {
    heading: "What's the goal?",
    body: "Whether it's catching up, exam prep, or pushing for top marks — knowing the goal helps us match better.",
  },
  5: {
    heading: "How & where?",
    body: "We'll match you with a tutor in your area who can accommodate your preferred format.",
  },
  6: {
    heading: "Almost done",
    body: "Review your details and submit. We'll be in touch within 24 hours with a tutor match.",
  },
};

interface SidePanelProps {
  step: number;
}

export function SidePanel({ step }: SidePanelProps) {
  const copy = sideCopy[step] ?? sideCopy[1];
  return (
    <div className="flex flex-col justify-between h-full px-8 py-10 sm:px-12">
      <div>
        <span className="text-2xl font-bold text-white tracking-tight">
          Bridge
        </span>
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            {copy.heading}
          </h2>
          <p className="mt-4 text-coral-100 text-base leading-relaxed">
            {copy.body}
          </p>
        </div>
      </div>
      <div className="mt-10 text-coral-200 text-xs">
        Your information is safe with us. We comply with POPIA.
      </div>
    </div>
  );
}
