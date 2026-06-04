"use client";

import { useFormContext } from "react-hook-form";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { LESSON_FORMAT_OPTIONS, AREA_OPTIONS } from "../types";
import type { ParentFormData } from "../types";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step5({ onNext, onBack }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<ParentFormData>();

  async function handleNext() {
    const valid = await trigger(["lessonFormat", "area"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">
          How &amp; where?
        </h3>
        <p className="mt-1 text-neutral-500">
          Tell us your preferred format and area.
        </p>
      </div>
      <Select
        label="Lesson format"
        options={LESSON_FORMAT_OPTIONS}
        placeholder="Select a format"
        error={errors.lessonFormat?.message}
        {...register("lessonFormat", { required: "Please select a lesson format" })}
      />
      <Select
        label="Area"
        options={AREA_OPTIONS}
        placeholder="Select your area"
        error={errors.area?.message}
        {...register("area", { required: "Please select your area" })}
      />
      <div className="flex gap-3 pt-2">
        <Button variant="ghost" scheme="teal" onClick={onBack} type="button">
          Back
        </Button>
        <Button scheme="teal" onClick={handleNext} type="button">
          Review request
        </Button>
      </div>
    </div>
  );
}
