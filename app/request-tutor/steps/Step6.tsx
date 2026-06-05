"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import {
  GRADE_OPTIONS,
  LESSON_FORMAT_OPTIONS,
  AREA_OPTIONS,
} from "../types";
import type { ParentFormData } from "../types";

interface Props {
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 py-3 border-b border-neutral-100 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400 sm:w-36 shrink-0">
        {label}
      </span>
      <span className="text-sm text-neutral-800">{value}</span>
    </div>
  );
}

export function Step6({ onBack, onSubmit, loading }: Props) {
  const { getValues } = useFormContext<ParentFormData>();
  const data = getValues();

  const gradLabel =
    GRADE_OPTIONS.find((g) => g.value === data.gradeLevel)?.label ??
    data.gradeLevel;
  const formatLabel =
    LESSON_FORMAT_OPTIONS.find((f) => f.value === data.lessonFormat)?.label ??
    data.lessonFormat;
  const areaLabel =
    AREA_OPTIONS.find((a) => a.value === data.area)?.label ?? data.area;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900">
          Review your request
        </h3>
        <p className="mt-1 text-neutral-500">
          Looks good? Hit submit and we&apos;ll be in touch within 24 hours.
        </p>
      </div>
      <div className="rounded-2xl bg-neutral-50 px-6 py-4">
        <Row label="Your name" value={data.parentName} />
        <Row label="Phone" value={data.phone} />
        <Row label="Email" value={data.email} />
        <Row label="Child's name" value={data.childName} />
        <Row label="Grade" value={gradLabel} />
        <Row label="Subjects" value={data.subjects.join(", ")} />
        <Row label="Goal" value={data.goal.replace(/-/g, " ")} />
        <Row label="Format" value={formatLabel} />
        <Row label="Area" value={areaLabel} />
      </div>
      <p className="text-xs text-neutral-400">
        By submitting you agree to our{" "}
        <a href="/privacy" className="underline hover:text-coral-600">
          privacy policy
        </a>
        . We will never share your details without your consent.
      </p>
      <div className="flex gap-3 pt-2">
        <Button
          variant="ghost"
          scheme="coral"
          onClick={onBack}
          type="button"
          disabled={loading}
        >
          Back
        </Button>
        <Button scheme="coral" onClick={onSubmit} loading={loading} type="button">
          Submit request
        </Button>
      </div>
    </div>
  );
}
