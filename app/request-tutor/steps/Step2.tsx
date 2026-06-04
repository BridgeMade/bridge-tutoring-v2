"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { GRADE_OPTIONS } from "../types";
import type { ParentFormData } from "../types";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step2({ onNext, onBack }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<ParentFormData>();

  async function handleNext() {
    const valid = await trigger(["childName", "gradeLevel"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">About your child</h3>
        <p className="mt-1 text-neutral-500">
          This helps us find the right fit.
        </p>
      </div>
      <Input
        label="Child's first name"
        placeholder="e.g. Liam"
        error={errors.childName?.message}
        {...register("childName", { required: "Please enter your child's name" })}
      />
      <Select
        label="Grade / level"
        options={GRADE_OPTIONS}
        placeholder="Select a grade"
        error={errors.gradeLevel?.message}
        {...register("gradeLevel", { required: "Please select a grade" })}
      />
      <div className="flex gap-3 pt-2">
        <Button
          variant="ghost"
          scheme="teal"
          onClick={onBack}
          type="button"
        >
          Back
        </Button>
        <Button scheme="teal" onClick={handleNext} type="button">
          Continue
        </Button>
      </div>
    </div>
  );
}
