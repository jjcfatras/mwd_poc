import type { HTMLAttributes } from "react";

import { cn } from "../utils";

export type BackgroundImageProps = HTMLAttributes<HTMLDivElement> & {
  imageHandleDesktop: string;
  imageHandleMobile: string;
};

export const BackgroundImage = ({
  children,
  className,
  imageHandleDesktop,
  imageHandleMobile,
  style,
  ...rest
}: BackgroundImageProps) => (
  <div
    className={cn(
      "flex min-h-[584px] bg-center bg-no-repeat md:min-h-[568px]",
      "[background-image:var(--bg-image-desktop)] md:[background-image:var(--bg-image-mobile)]",
      className,
    )}
    style={
      {
        "--bg-image-desktop": `url('https://us-west-2.graphassets.com/cm83gfgn9036o07lkb6p653v5/${imageHandleDesktop}')`,
        "--bg-image-mobile": `url('https://us-west-2.graphassets.com/cm83gfgn9036o07lkb6p653v5/${imageHandleMobile}')`,
        ...style,
      } as React.CSSProperties
    }
    {...rest}
  >
    {children}
  </div>
);
