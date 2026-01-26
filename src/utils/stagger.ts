export function staggerDelayMs(index: number, step = 80, base = 0) {
  return base + index * step;
}
