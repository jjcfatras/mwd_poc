import type { HTMLAttributes } from "react";

import { cn } from "../utils";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, className, ...rest }: ContainerProps) => (
  <div
    className={cn(
      "mx-auto flex w-full max-w-screen-sm flex-row",
      "md:max-w-screen-md",
      "lg:max-w-screen-lg",
      "xl:max-w-screen-xl",
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);
