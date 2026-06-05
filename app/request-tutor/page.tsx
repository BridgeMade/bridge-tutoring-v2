"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { SidePanel } from "./SidePanel";
import { FormPanel } from "./FormPanel";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import { Step6 } from "./steps/Step6";
import type { ParentFormData } from "./types";

const TOTAL_STEPS = 6;

export default function RequestTutorPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<ParentFormData>({ mode: "onTouched" });

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    setLoading(true);
    setError(null);
    try {
      const data = methods.getValues();
      const res = await fetch("/api/submit-parent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-coral-50 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-sm p-10">
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Request received!
          </h1>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            Thanks for reaching out. We&apos;ll review your request and get
            back to you within <strong>24 hours</strong> with a tutor match.
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Keep an eye on {methods.getValues("email")} for our message.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-6 py-3 hover:bg-coral-500 transition-colors"
          >
            Back to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left panel */}
      <div className="bg-coral-400 lg:w-2/5 lg:min-h-screen">
        <SidePanel step={step} />
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col bg-white">
        <FormProvider {...methods}>
          <FormPanel step={step} totalSteps={TOTAL_STEPS}>
            {step === 1 && <Step1 onNext={next} />}
            {step === 2 && <Step2 onNext={next} onBack={back} />}
            {step === 3 && <Step3 onNext={next} onBack={back} />}
            {step === 4 && <Step4 onNext={next} onBack={back} />}
            {step === 5 && <Step5 onNext={next} onBack={back} />}
            {step === 6 && (
              <Step6 onBack={back} onSubmit={handleSubmit} loading={loading} />
            )}
            {error && (
              <p className="mt-4 text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                {error}
              </p>
            )}
          </FormPanel>
        </FormProvider>
      </div>
    </div>
  );
}
