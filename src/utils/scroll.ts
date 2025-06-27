export function easeInOut(t: number): number {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type ScrollSnapOptions = {
  numSlides: number;
  onSlideChange?: (index: number) => void;
  onProgress?: (progress: number) => void;
}

export function createScrollSnap({numSlides, onSlideChange, onProgress }: ScrollSnapOptions) {
  let lastScrollY = 0;
  let snapTimeout: ReturnType<typeof setTimeout>;

  function handleScroll(){
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const deltaY = scrollY - lastScrollY;
    lastScrollY = scrollY;

    const rawProgress = Math.min(scrollY / (vh * (numSlides - 1)), 1);
    onProgress?.(rawProgress);

    clearTimeout(snapTimeout);
    snapTimeout = setTimeout(() => {
      const bias = 0.1;

      let targetSlide = deltaY > 0
        ? rawProgress % 1 > bias ? Math.ceil(rawProgress) : Math.floor(rawProgress)
        : rawProgress % 1 < (1 - bias) ? Math.floor(rawProgress) : Math.ceil(rawProgress);

      window.scrollTo({
        top: targetSlide * vh,
        behavior: 'smooth'
      });

      onSlideChange?.(targetSlide);
    }, 100);
  }

  return { handleScroll };
}