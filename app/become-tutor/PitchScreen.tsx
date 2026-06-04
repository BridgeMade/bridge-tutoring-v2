import { Button } from "@/components/ui/Button";

const perks = [
  "Get matched with students who need exactly what you teach",
  "Flexible hours — you set your own schedule",
  "In-person or online, your choice",
  "We handle the finding, you handle the teaching",
];

interface Props {
  onStart: () => void;
}

export function PitchScreen({ onStart }: Props) {
  return (
    <div className="flex flex-col gap-8 max-w-lg">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">
          Join Bridge as a tutor
        </h3>
        <p className="mt-2 text-neutral-500 leading-relaxed">
          We&apos;re looking for passionate, qualified tutors in Pretoria and
          Johannesburg. The application takes about 5 minutes.
        </p>
      </div>
      <ul className="space-y-3">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm text-neutral-700">
            <span className="mt-0.5 h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-xs font-bold">
              ✓
            </span>
            {p}
          </li>
        ))}
      </ul>
      <div>
        <Button scheme="purple" onClick={onStart} type="button" className="w-full sm:w-auto">
          Start my application
        </Button>
      </div>
    </div>
  );
}
