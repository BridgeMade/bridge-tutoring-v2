import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, id, className = "", ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-neutral-700"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          rows={4}
          className={[
            "rounded-xl border px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-offset-1",
            "disabled:bg-neutral-100 disabled:cursor-not-allowed",
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-neutral-300 focus:ring-coral-500",
            className,
          ].join(" ")}
          {...props}
        />
        {hint && !error && (
          <p className="text-xs text-neutral-500">{hint}</p>
        )}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
