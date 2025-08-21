import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "../utils";

const button = cva(
  "isolate inline-flex cursor-pointer appearance-none items-center justify-center rounded-md border font-normal font-semibold capitalize transition duration-200",
  {
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
    variants: {
      size: {
        lg: "h-16 px-6 py-3 text-xl",
        "lg-full": "h-16 w-full px-6 py-3 text-xl",
        md: "text-md h-12 px-4 py-2",
        "md-full": "text-md h-12 w-full px-4 py-2",
        sm: "h-10 px-2 py-1 text-xs",
        "sm-full": "h-10 w-full px-2 py-1 text-xs",
      },
      variant: {
        solid:
          "border-primary bg-primary text-onPrimary hover:border-primary-interact hover:bg-primary-interact hover:text-onPrimary-interact",
      },
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = ({ className, size, variant, ...rest }: ButtonProps) => (
  <button className={cn(button({ className, size, variant }))} {...rest} />
);
