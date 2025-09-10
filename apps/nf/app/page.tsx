"use client";

import { Header } from "@repo/ui/components/Header";
import { useHeaderHeight } from "@repo/ui/utils";

import { HomePage } from "../lib/pages/Home.page";

const Home = () => {
  const { headerHeight, headerRef, isHydrated } = useHeaderHeight();

  return (
    <div className="m-0 flex size-full flex-col p-0">
      <Header className="fixed top-0 right-0 left-0 z-50" ref={headerRef} />
      <main
        className={isHydrated ? "transition-[margin-top] duration-200" : ""}
        style={{ marginTop: `${headerHeight}px` }}
      >
        <HomePage />
      </main>
    </div>
  );
};

export default Home;
