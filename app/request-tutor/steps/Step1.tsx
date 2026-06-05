"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { ParentFormData } from "../types";

interface Props {
  onNext: () => void;
}

export function Step1({ onNext }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<ParentFormData>();

  async function handleNext() {
    const valid = await trigger(["parentName", "phone", "email"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">Your details</h3>
        <p className="mt-1 text-neutral-500">
          How should we contact you with your match?
        </p>
      </div>
      <Input
        label="Your full name"
        placeholder="e.g. Nomsa Dlamini"
        error={errors.parentName?.message}
        {...register("parentName", { required: "Please enter your name" })}
      />
      <Input
        label="Phone number"
        type="tel"
        placeholder="e.g. 071 234 5678"
        error={errors.phone?.message}
        {...register("phone", {
          required: "Please enter your phone number",
          pattern: {
            value: /^[0-9\s+()-]{7,15}$/,
            message: "Please enter a valid phone number",
          },
        })}
      />
      <Input
        label="Email address"
        type="email"
        placeholder="e.g. nomsa@email.com"
        error={errors.email?.message}
        {...register("email", {
          required: "Please enter your email address",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
      />
      <div className="pt-2">
        <Button scheme="coral" className="w-full sm:w-auto" onClick={handleNext}>
          Continue
        </Button>
      </div>
    </div>
  );
}
