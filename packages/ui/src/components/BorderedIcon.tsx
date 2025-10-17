import type { HTMLAttributes } from "react";

export type BorderedIconProps = HTMLAttributes<HTMLDivElement>;

export const BorderedIcon = ({ children, ...rest }: BorderedIconProps) => (
  <div
    className="border-surface bg-secondary outline-secondary size-fit rounded-full border-8 p-4 outline-8"
    {...rest}
  >
    {children}
  </div>
);
