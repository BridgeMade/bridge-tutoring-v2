"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { TutorFormData } from "../types";

interface Props {
  onNext: () => void;
}

export function Step1({ onNext }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<TutorFormData>();

  async function handleNext() {
    const valid = await trigger(["firstName", "lastName", "phone", "email"]);
    if (valid) onNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">Your details</h3>
        <p className="mt-1 text-neutral-500">How can we reach you?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First name"
          placeholder="e.g. Sipho"
          error={errors.firstName?.message}
          {...register("firstName", { required: "Required" })}
        />
        <Input
          label="Last name"
          placeholder="e.g. Nkosi"
          error={errors.lastName?.message}
          {...register("lastName", { required: "Required" })}
        />
      </div>
      <Input
        label="Phone number"
        type="tel"
        placeholder="e.g. 082 345 6789"
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
        placeholder="e.g. sipho@email.com"
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
        <Button scheme="purple" onClick={handleNext} type="button">
          Continue
        </Button>
      </div>
    </div>
  );
}
