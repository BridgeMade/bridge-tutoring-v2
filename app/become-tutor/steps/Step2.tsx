"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { TUTOR_SUBJECT_OPTIONS, GRADE_LEVEL_OPTIONS } from "../types";
import type { TutorFormData } from "../types";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

function ChipGroup({
  options,
  value,
  onChange,
  scheme,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  scheme: "teal" | "purple";
}) {
  const active =
    scheme === "purple"
      ? "bg-purple-600 border-purple-600 text-white"
      : "bg-teal-600 border-teal-600 text-white";
  const hover =
    scheme === "purple" ? "hover:border-purple-400" : "hover:border-teal-400";

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const selected = value.includes(o);
        return (
          <button
            key={o}
            type="button"
            onClick={() =>
              onChange(
                selected ? value.filter((x) => x !== o) : [...value, o]
              )
            }
            className={[
              "rounded-full px-4 py-2 text-sm font-medium border transition-colors",
              selected
                ? active
                : `bg-white border-neutral-300 text-neutral-700 ${hover}`,
            ].join(" ")}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function Step2({ onNext, onBack }: Props) {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<TutorFormData>();

  async function handleNext() {
    const valid = await trigger(["subjects", "gradeLevels"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">What you teach</h3>
        <p className="mt-1 text-neutral-500">
          Select subjects and grade levels.
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-700 mb-2">Subjects</p>
        <Controller
          name="subjects"
          control={control}
          defaultValue={[]}
          rules={{ validate: (v) => v.length > 0 || "Select at least one subject" }}
          render={({ field }) => (
            <ChipGroup
              options={TUTOR_SUBJECT_OPTIONS}
              value={field.value}
              onChange={field.onChange}
              scheme="purple"
            />
          )}
        />
        {errors.subjects && (
          <p className="text-xs text-red-500 mt-1">
            {errors.subjects.message as string}
          </p>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-700 mb-2">Grade levels</p>
        <Controller
          name="gradeLevels"
          control={control}
          defaultValue={[]}
          rules={{ validate: (v) => v.length > 0 || "Select at least one grade level" }}
          render={({ field }) => (
            <ChipGroup
              options={GRADE_LEVEL_OPTIONS}
              value={field.value}
              onChange={field.onChange}
              scheme="purple"
            />
          )}
        />
        {errors.gradeLevels && (
          <p className="text-xs text-red-500 mt-1">
            {errors.gradeLevels.message as string}
          </p>
        )}
      </div>
      <div className="flex gap-3 pt-2">
        <Button variant="ghost" scheme="purple" onClick={onBack} type="button">
          Back
        </Button>
        <Button scheme="purple" onClick={handleNext} type="button">
          Continue
        </Button>
      </div>
    </div>
  );
}
