"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { SidePanel } from "./SidePanel";
import { FormPanel } from "./FormPanel";
import { PitchScreen } from "./PitchScreen";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import type { TutorFormData } from "./types";
import { capture } from "@/lib/analytics";

const TOTAL_STEPS = 5;
const FORM = "tutor_application";

export default function BecomeTutorPage() {
  // step 0 = pitch screen, steps 1–5 = form steps
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<TutorFormData>({ mode: "onTouched" });

  function next() {
    // step 0 → 1 is "started the application" (left the pitch screen);
    // later steps are funnel progress. Fire in the handler, not an effect.
    capture(step === 0 ? "form_started" : "form_step_completed", {
      form: FORM,
      step,
      total_steps: TOTAL_STEPS,
    });
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    setLoading(true);
    setError(null);
    capture("form_submit_attempted", { form: FORM });
    try {
      const data = methods.getValues();
      const res = await fetch("/api/submit-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Something went wrong. Please try again.");
      }
      capture("tutor_application_submitted", { form: FORM });
      setSubmitted(true);
    } catch (err) {
      capture("form_submit_failed", { form: FORM });
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-sm p-10">
          <div className="text-4xl mb-4">🙌</div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Application received!
          </h1>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            Thanks for applying to Bridge. We review every application
            personally and will be in touch within a few days.
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Keep an eye on {methods.getValues("email")}.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-purple-600 text-white font-semibold px-6 py-3 hover:bg-purple-700 transition-colors"
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
      <div className="bg-purple-700 lg:w-2/5 lg:min-h-screen">
        <SidePanel step={step} />
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col bg-white">
        {step === 0 ? (
          <div className="flex-1 px-6 py-10 sm:px-10">
            <PitchScreen onStart={next} />
          </div>
        ) : (
          <FormProvider {...methods}>
            <FormPanel step={step} totalSteps={TOTAL_STEPS}>
              {step === 1 && <Step1 onNext={next} />}
              {step === 2 && <Step2 onNext={next} onBack={back} />}
              {step === 3 && <Step3 onNext={next} onBack={back} />}
              {step === 4 && <Step4 onNext={next} onBack={back} />}
              {step === 5 && (
                <Step5 onBack={back} onSubmit={handleSubmit} loading={loading} />
              )}
              {error && (
                <p className="mt-4 text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}
            </FormPanel>
          </FormProvider>
        )}
      </div>
    </div>
  );
}
