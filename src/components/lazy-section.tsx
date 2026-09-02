"use client";

import { Suspense, useEffect, useState, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function LazySection({ children, fallback = null }: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 500);
    const onScroll = () => {
      if (window.scrollY > 100) {
        setShouldRender(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Suspense fallback={fallback}>
      {shouldRender ? children : fallback}
    </Suspense>
  );
}
