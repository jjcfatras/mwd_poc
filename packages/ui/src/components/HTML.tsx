import DOMPurify from "isomorphic-dompurify";
import type { HTMLAttributes } from "react";

export type HTMLDivProps = HTMLAttributes<HTMLDivElement> & { html: string };

export const HTMLDiv = ({ html, ...props }: HTMLDivProps) => (
  <div
    {...props}
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
  />
);
