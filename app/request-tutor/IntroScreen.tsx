import { Button } from "@/components/ui/Button";

interface IntroScreenProps {
  subject: string;
  onStart: () => void;
}

// Subject-specific "get started" screen, shown when a parent arrives from a
// homepage subject pill (e.g. /request-tutor?subject=Mathematics). Mirrors the
// dedicated start-screen pattern: the subject is already known, so we lead with
// it and reassure before dropping them into the form with it pre-selected.
export function IntroScreen({ subject, onStart }: IntroScreenProps) {
  return (
    <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
      <div className="max-w-md">
        <span className="inline-flex items-center rounded-full bg-coral-50 text-coral-600 text-sm font-semibold px-4 py-1.5">
          {subject}
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-neutral-900">
          Find your child&apos;s <span className="text-coral-500">{subject}</span> tutor.
        </h1>
        <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
          Tell us a little about your child and our team hand-picks a vetted{" "}
          {subject} tutor to match — in-person or online. You hear back within
          24 hours, and the first assessment is free.
        </p>

        <ul className="mt-6 space-y-2.5 text-neutral-700">
          <li className="flex items-center gap-3">
            <span className="text-coral-500">✓</span> Hand-matched, not a directory to search
          </li>
          <li className="flex items-center gap-3">
            <span className="text-coral-500">✓</span> Free assessment, no obligation
          </li>
          <li className="flex items-center gap-3">
            <span className="text-coral-500">✓</span> Takes about 3 minutes
          </li>
        </ul>

        <div className="mt-8">
          <Button scheme="coral" onClick={onStart} type="button">
            Get started →
          </Button>
        </div>
      </div>
    </div>
  );
}
