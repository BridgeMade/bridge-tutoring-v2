"use client";

import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import type { TutorFormData } from "../types";

interface Props {
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
}

export function Step5({ onBack, onSubmit, loading }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<TutorFormData>();

  async function handleSubmit() {
    const valid = await trigger(["experience", "motivation"]);
    if (valid) onSubmit();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">
          Experience &amp; motivation
        </h3>
        <p className="mt-1 text-neutral-500">
          Tell us a little about yourself.
        </p>
      </div>
      <Textarea
        label="Tutoring experience"
        placeholder="Describe any previous tutoring or teaching experience. If you're new to tutoring, tell us about relevant experience (e.g. peer tutoring, mentoring, coaching)."
        error={errors.experience?.message}
        {...register("experience", {
          required: "Please tell us about your experience",
          minLength: { value: 30, message: "Please provide a bit more detail" },
        })}
      />
      <Textarea
        label="Why do you want to tutor with Bridge?"
        placeholder="What motivates you to tutor? What do you hope students get out of working with you?"
        error={errors.motivation?.message}
        {...register("motivation", {
          required: "Please tell us your motivation",
          minLength: { value: 30, message: "Please provide a bit more detail" },
        })}
      />
      <p className="text-xs text-neutral-400">
        By submitting you agree to our{" "}
        <a href="/privacy" className="underline hover:text-purple-600">
          privacy policy
        </a>
        .
      </p>
      <div className="flex gap-3 pt-2">
        <Button
          variant="ghost"
          scheme="purple"
          onClick={onBack}
          type="button"
          disabled={loading}
        >
          Back
        </Button>
        <Button
          scheme="purple"
          onClick={handleSubmit}
          loading={loading}
          type="button"
        >
          Submit application
        </Button>
      </div>
    </div>
  );
}
