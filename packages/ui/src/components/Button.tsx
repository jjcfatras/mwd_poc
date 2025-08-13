import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "../utils";

export const button = cva(
  "isolate inline-flex flex-shrink-0 cursor-pointer appearance-none items-center justify-center rounded-md font-normal transition duration-200",
  {
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
    variants: {
      size: {
        lg: "h-11 min-w-11 px-6 py-3 text-xl",
        md: "text-md h-12 min-w-10 px-4 py-2",
        sm: "h-11 min-w-9 px-2 py-1 text-xs",
      },
      variant: {
        solid:
          "bg-primary text-onPrimary hover:bg-primary-interact hover:text-onPrimary-interact",
      },
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = ({ className, size, variant, ...rest }: ButtonProps) => (
  <button className={cn(button({ className, size, variant }))} {...rest} />
);
