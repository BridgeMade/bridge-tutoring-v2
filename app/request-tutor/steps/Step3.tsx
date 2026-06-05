"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { SUBJECT_OPTIONS } from "../types";
import type { ParentFormData } from "../types";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step3({ onNext, onBack }: Props) {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<ParentFormData>();

  async function handleNext() {
    const valid = await trigger(["subjects"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">Which subjects?</h3>
        <p className="mt-1 text-neutral-500">Select all that apply.</p>
      </div>
      <Controller
        name="subjects"
        control={control}
        defaultValue={[]}
        rules={{ validate: (v) => v.length > 0 || "Please select at least one subject" }}
        render={({ field }) => (
          <div className="flex flex-wrap gap-2">
            {SUBJECT_OPTIONS.map((s) => {
              const selected = field.value.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    const next = selected
                      ? field.value.filter((x: string) => x !== s)
                      : [...field.value, s];
                    field.onChange(next);
                  }}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium border transition-colors",
                    selected
                      ? "bg-coral-600 border-coral-600 text-white"
                      : "bg-white border-neutral-300 text-neutral-700 hover:border-coral-400",
                  ].join(" ")}
                >
                  {s}
                </button>
              );
            })}
          </div>
        )}
      />
      {errors.subjects && (
        <p className="text-xs text-red-500">{errors.subjects.message as string}</p>
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
