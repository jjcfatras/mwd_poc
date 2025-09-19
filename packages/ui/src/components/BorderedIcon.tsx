import type { HTMLAttributes } from "react";

export type BorderedIconProps = HTMLAttributes<HTMLDivElement>;

export const BorderedIcon = ({ children, ...rest }: BorderedIconProps) => (
  <div
    className="size-fit rounded-full border-8 border-surface bg-secondary p-4 outline-8 outline-secondary"
    {...rest}
  >
    {children}
  </div>
);
