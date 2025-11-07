import { cn } from "@/lib/utils";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          "bg-primary px-2 py-2 text-white hover:scale-105 duration-200 transition text-sm md:text-base",
          className
        )}
        disabled={disabled}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
