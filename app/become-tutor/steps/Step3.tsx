"use client";

import { useFormContext } from "react-hook-form";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { QUALIFICATION_OPTIONS } from "../types";
import type { TutorFormData } from "../types";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step3({ onNext, onBack }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<TutorFormData>();

  async function handleNext() {
    const valid = await trigger(["qualification"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">Qualifications</h3>
        <p className="mt-1 text-neutral-500">
          Your highest level of education.
        </p>
      </div>
      <Select
        label="Highest qualification"
        options={QUALIFICATION_OPTIONS}
        placeholder="Select qualification"
        error={errors.qualification?.message}
        {...register("qualification", { required: "Please select your qualification" })}
      />
      <Input
        label="Institution (optional)"
        placeholder="e.g. University of Pretoria"
        {...register("institution")}
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
