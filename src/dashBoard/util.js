// Animation utility for counter
export function animateCounter({ target, duration, onUpdate, onComplete }) {
  let frame;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    onUpdate(progress * target);
    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      onUpdate(target);
      if (onComplete) onComplete();
    }
  }
  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}
