import { useEffect, useRef } from 'react'

export default function Parallax({ children, speed = 0.06, className = '' }) {
  const ref = useRef(null)
  const rafRef = useRef(null)
  const visibleRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // don't run parallax

    const el = ref.current;
    if (!el) return;

    const onFrame = () => {
      if (!visibleRef.current) {
        rafRef.current = requestAnimationFrame(onFrame);
        return;
      }
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const translateY = -distanceFromCenter * speed;
      el.style.transform = `translateY(${translateY.toFixed(2)}px)`;
      rafRef.current = requestAnimationFrame(onFrame);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibleRef.current = entry.isIntersecting;
      });
    }, { threshold: 0.15 });

    observer.observe(el);
    rafRef.current = requestAnimationFrame(onFrame);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (el) el.style.transform = '';
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transition: 'transform 0.12s linear' }}>
      {children}
    </div>
  )
}
