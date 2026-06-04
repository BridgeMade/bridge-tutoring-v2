const sideCopy: Record<number, { heading: string; body: string }> = {
  0: {
    heading: "Teach with Bridge",
    body: "Join a network of quality tutors in Pretoria and Johannesburg. We handle the matching so you can focus on teaching.",
  },
  1: {
    heading: "Your details",
    body: "We need your contact info to set up your profile and get in touch with match opportunities.",
  },
  2: {
    heading: "What you teach",
    body: "Tell us which subjects and grade levels you're confident in. Be honest — it helps us make better matches.",
  },
  3: {
    heading: "Your qualifications",
    body: "Your academic background helps parents feel confident in the match.",
  },
  4: {
    heading: "Where you teach",
    body: "We'll match you with students in your area and preferred format.",
  },
  5: {
    heading: "Your experience",
    body: "Tell us a bit about your tutoring background and why you want to join Bridge.",
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
          <p className="mt-4 text-purple-100 text-base leading-relaxed">
            {copy.body}
          </p>
        </div>
      </div>
      <div className="mt-10 text-purple-200 text-xs">
        Your information is safe with us. We comply with POPIA.
      </div>
    </div>
  );
}
