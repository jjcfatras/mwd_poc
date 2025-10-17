"use client";

import type { PropsWithChildren } from "react";

import { Header } from "@repo/ui/components/Header";
import { useHeaderHeight } from "@repo/ui/utils";

export type PageTemplateProps = PropsWithChildren;

export const PageTemplate = ({ children }: PageTemplateProps) => {
  const { headerHeight, headerRef, isHydrated } = useHeaderHeight();

  return (
    <div className="m-0 flex size-full flex-col p-0">
      <Header className="fixed left-0 right-0 top-0 z-50" ref={headerRef} />
      <main
        className={isHydrated ? "transition-[margin-top] duration-200" : ""}
        style={{ marginTop: `${headerHeight}px` }}
      >
        {children}
      </main>
    </div>
  );
};
