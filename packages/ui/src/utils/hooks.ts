"use client";

import { useEffect, useRef, useState } from "react";

export const useHeaderHeight = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(104); // Initial estimate
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    if (!headerRef.current) return;

    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Measure immediately after hydration
    updateHeight();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeaderHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(headerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return { headerHeight, headerRef, isHydrated };
};
