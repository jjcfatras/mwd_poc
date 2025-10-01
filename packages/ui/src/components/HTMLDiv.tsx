import DOMPurify from "isomorphic-dompurify";
import type { HTMLAttributes } from "react";

export type HTMLDivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "dangerouslySetInnerHTML"
> & { html: string };

export const HTMLDiv = ({ html, ...rest }: HTMLDivProps) => (
  <div
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    {...rest}
  />
);
