import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
