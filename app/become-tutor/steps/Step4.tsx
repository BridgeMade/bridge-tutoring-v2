"use client";

import { useFormContext } from "react-hook-form";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { TUTOR_AREA_OPTIONS, TEACHING_FORMAT_OPTIONS } from "../types";
import type { TutorFormData } from "../types";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step4({ onNext, onBack }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<TutorFormData>();

  async function handleNext() {
    const valid = await trigger(["area", "teachingFormat"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">
          Where you teach
        </h3>
        <p className="mt-1 text-neutral-500">
          We&apos;ll match you with students nearby.
        </p>
      </div>
      <Select
        label="Your area"
        options={TUTOR_AREA_OPTIONS}
        placeholder="Select your area"
        error={errors.area?.message}
        {...register("area", { required: "Please select your area" })}
      />
      <Select
        label="Teaching format"
        options={TEACHING_FORMAT_OPTIONS}
        placeholder="Select format"
        error={errors.teachingFormat?.message}
        {...register("teachingFormat", { required: "Please select a format" })}
      />
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
