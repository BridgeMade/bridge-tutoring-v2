"use client";

interface FormPanelProps {
  step: number;
  totalSteps: number;
  children: React.ReactNode;
}

export function FormPanel({ step, totalSteps, children }: FormPanelProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex flex-col min-h-full">
      <div className="h-1 bg-purple-100">
        <div
          className="h-1 bg-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10">
        <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-6">
          Step {step} of {totalSteps}
        </p>
        {children}
      </div>
    </div>
  );
}
