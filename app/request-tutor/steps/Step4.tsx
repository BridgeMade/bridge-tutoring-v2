"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import type { ParentFormData } from "../types";

const GOAL_OPTIONS = [
  { value: "catch-up", label: "Catch up on missed work" },
  { value: "exam-prep", label: "Prepare for exams or tests" },
  { value: "top-marks", label: "Push for top marks" },
  { value: "confidence", label: "Build confidence in the subject" },
  { value: "general", label: "General ongoing support" },
];

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step4({ onNext, onBack }: Props) {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<ParentFormData>();

  async function handleNext() {
    const valid = await trigger(["goal"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">
          What&apos;s the main goal?
        </h3>
        <p className="mt-1 text-neutral-500">Pick the one that fits best.</p>
      </div>
      <Controller
        name="goal"
        control={control}
        defaultValue=""
        rules={{ required: "Please select a goal" }}
        render={({ field }) => (
          <div className="flex flex-col gap-3">
            {GOAL_OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => field.onChange(o.value)}
                className={[
                  "rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors",
                  field.value === o.value
                    ? "bg-coral-600 border-coral-600 text-white"
                    : "bg-white border-neutral-300 text-neutral-700 hover:border-coral-400",
                ].join(" ")}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
      />
      {errors.goal && (
        <p className="text-xs text-red-500">{errors.goal.message}</p>
      )}
      <div className="flex gap-3 pt-2">
        <Button variant="ghost" scheme="coral" onClick={onBack} type="button">
          Back
        </Button>
        <Button scheme="coral" onClick={handleNext} type="button">
          Continue
        </Button>
      </div>
    </div>
  );
}
