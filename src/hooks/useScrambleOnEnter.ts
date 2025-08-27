import { RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type UseScrambleOptions = {
  start?: string;
  end?: string;
  durationSeconds?: number;
  once?: boolean;
};

const RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function getRandomChar(): string {
  return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
}

function scrambleToText(element: HTMLElement, durationSeconds: number): void {
  const finalText = element.dataset.finalText ?? element.textContent ?? '';
  const length = finalText.length;

  const initial = Array.from({ length }, () => (finalText.trim().length === 0 ? ' ' : getRandomChar())).join('');
  element.textContent = initial;

  gsap.to(element, {
    duration: durationSeconds,
    ease: 'none',
    onUpdate: function onUpdate() {
      const progress = this.progress();
      const revealCount = Math.floor(progress * length);

      const revealed = finalText.slice(0, revealCount);
      const scrambled = Array.from({ length: length - revealCount }, (_, i) => {
        const targetChar = finalText[revealCount + i];
        return targetChar === ' ' ? ' ' : getRandomChar();
      }).join('');

      element.textContent = revealed + scrambled;
    },
    onComplete: () => {
      element.textContent = finalText;
    },
  });
}

export function useScrambleOnEnter(
  triggerRef: RefObject<HTMLElement | null>,
  targetRefs: Array<RefObject<HTMLElement | null>>,
  options: UseScrambleOptions = {}
): void {
  const { start = 'top 70%', end, durationSeconds = 0.9, once = true } = options;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const trigger = triggerRef.current;
      const targets = targetRefs.map((r) => r.current).filter(Boolean) as HTMLElement[];
      if (!trigger || targets.length === 0) return;

      targets.forEach((el) => {
        el.dataset.finalText = el.textContent ?? '';
      });

      ScrollTrigger.create({
        trigger,
        start,
        ...(end ? { end } : {}),
        once,
        onEnter: () => {
          targets.forEach((el) => scrambleToText(el, durationSeconds));
        },
      });
    }, triggerRef);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRef, targetRefs, start, end, durationSeconds, once]);
}
