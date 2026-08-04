"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import {
  GRADE_OPTIONS,
  SUBJECT_OPTIONS,
  LESSON_FORMAT_OPTIONS,
  PREFERRED_TIME_OPTIONS,
  AREA_OPTIONS,
} from "./types";
import type { AssessmentBookingData } from "./types";
import { capture } from "@/lib/analytics";

const FORM = "book_assessment";

// Prefill from a link like /book-assessment?child=Thabiso&grade=grade-10&subject=Mathematics&parent=Tolanga&email=...
function usePrefill() {
  const params = useSearchParams();
  return {
    childName: params.get("child") ?? "",
    gradeLevel: params.get("grade") ?? "",
    subject: params.get("subject") ?? "",
    parentName: params.get("parent") ?? "",
    email: params.get("email") ?? "",
  };
}

function BookAssessmentForm() {
  const prefill = usePrefill();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AssessmentBookingData>({
    mode: "onTouched",
    defaultValues: {
      parentName: prefill.parentName,
      email: prefill.email,
      childName: prefill.childName,
      gradeLevel: prefill.gradeLevel,
      subjects: prefill.subject ? [prefill.subject] : [],
      timeOptions: [
        { date: "", time: "" },
        { date: "", time: "" },
        { date: "", time: "" },
      ],
    },
  });

  const lessonFormat = watch("lessonFormat");

  async function onSubmit(data: AssessmentBookingData) {
    setLoading(true);
    setError(null);
    capture("form_submit_attempted", { form: FORM });
    try {
      const res = await fetch("/api/book-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Something went wrong. Please try again.");
      }
      capture("assessment_booked", { form: FORM });
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
      <div className="min-h-screen flex items-center justify-center bg-coral-50 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-sm p-10">
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Assessment requested!
          </h1>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            Thanks — we&apos;ve got your three date and time options.
            We&apos;ll fit a tutor into one of them and confirm which one by
            email or WhatsApp shortly.
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
        <div className="flex flex-col justify-between h-full px-8 py-10 sm:px-12">
          <div>
            <Link href="/" aria-label="Bridge Tutoring home">
              <Image
                src="/lockup-reversed.svg"
                alt="Bridge Tutoring Services"
                width={217}
                height={107}
                className="h-[60px] w-auto"
              />
            </Link>
            <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Book your free assessment
              </h2>
              <p className="mt-4 text-coral-100 text-base leading-relaxed">
                Good chatting with you. Confirm the details below and pick a
                day and time that works — the assessment is free, takes about
                45 minutes, and there&apos;s no obligation to continue
                afterwards.
              </p>
            </div>
          </div>
          <div className="mt-10 text-coral-200 text-xs">
            Your information is safe with us. We comply with POPIA.
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 max-w-lg"
          >
            {/* Parent & child details */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Confirm the details
                </h3>
                <p className="mt-1 text-neutral-500">
                  So we can match the right tutor to the assessment.
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
              <Input
                label="Child's name"
                placeholder="e.g. Thabiso Dlamini"
                error={errors.childName?.message}
                {...register("childName", { required: "Please enter your child's name" })}
              />
              <Select
                label="Grade"
                placeholder="Select grade"
                options={GRADE_OPTIONS}
                error={errors.gradeLevel?.message}
                {...register("gradeLevel", { required: "Please select a grade" })}
              />
              <Select
                label="Subject"
                placeholder="Select subject"
                options={SUBJECT_OPTIONS.map((s) => ({ value: s, label: s }))}
                error={errors.subjects?.[0]?.message}
                {...register("subjects.0", { required: "Please select a subject" })}
              />
              <Select
                label="Format"
                placeholder="Select format"
                options={LESSON_FORMAT_OPTIONS}
                error={errors.lessonFormat?.message}
                {...register("lessonFormat", { required: "Please select a format" })}
              />
              <Select
                label="Area"
                placeholder="Select your area"
                options={AREA_OPTIONS}
                error={errors.area?.message}
                {...register("area", { required: "Please select your area" })}
              />
              {lessonFormat === "in-person" && (
                <Textarea
                  label="Address for the home visit"
                  placeholder="Street address, suburb, and any access notes (e.g. gate code, complex name)"
                  error={errors.address?.message}
                  {...register("address", {
                    required: "Please add an address so we can arrange the home visit",
                  })}
                />
              )}
            </div>

            {/* Scheduling */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Give us 3 dates and times that suit you
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  We&apos;ll fit a tutor into one of these, so please pick
                  three genuinely different options — that way there&apos;s
                  no back-and-forth to confirm.
                </p>
              </div>

              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-2xl bg-neutral-50 p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-coral-600 mb-3">
                    Option {i + 1}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Date"
                      type="date"
                      error={errors.timeOptions?.[i]?.date?.message}
                      {...register(`timeOptions.${i}.date` as const, {
                        required: "Please select a date",
                      })}
                    />
                    <Select
                      label="Time"
                      placeholder="Select a time"
                      options={PREFERRED_TIME_OPTIONS}
                      error={errors.timeOptions?.[i]?.time?.message}
                      {...register(`timeOptions.${i}.time` as const, {
                        required: "Please select a time",
                      })}
                    />
                  </div>
                </div>
              ))}

              <Textarea
                label="Anything else we should know? (optional)"
                placeholder="e.g. specific gaps to focus on, access instructions for a home visit, etc."
                {...register("notes")}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <p className="text-xs text-neutral-400">
              By submitting you agree to our{" "}
              <a href="/privacy" className="underline hover:text-coral-600">
                privacy policy
              </a>
              . We will never share your details without your consent.
            </p>

            <div className="pt-2">
              <Button
                type="submit"
                scheme="coral"
                className="w-full sm:w-auto"
                loading={loading}
              >
                Confirm assessment request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function BookAssessmentPage() {
  return (
    <Suspense fallback={null}>
      <BookAssessmentForm />
    </Suspense>
  );
}
