import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type ColorScheme = "coral" | "purple";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  scheme?: ColorScheme;
  loading?: boolean;
}

const variantClasses: Record<Variant, Record<ColorScheme, string>> = {
  primary: {
    coral: "bg-coral-600 text-white hover:bg-coral-700 focus-visible:ring-coral-500",
    purple:
      "bg-purple-600 text-white hover:bg-purple-700 focus-visible:ring-purple-500",
  },
  secondary: {
    coral: "border border-coral-600 text-coral-700 hover:bg-coral-50 focus-visible:ring-coral-500",
    purple:
      "border border-purple-600 text-purple-700 hover:bg-purple-50 focus-visible:ring-purple-500",
  },
  ghost: {
    coral: "text-coral-700 hover:bg-coral-50 focus-visible:ring-coral-500",
    purple: "text-purple-700 hover:bg-purple-50 focus-visible:ring-purple-500",
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      scheme = "coral",
      loading = false,
      disabled,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant][scheme],
          className,
        ].join(" ")}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
