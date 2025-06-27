<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import '../app.scss';
	import { onMount } from 'svelte';

	let scrollProgress = 0;
  const numSlides = 2;
  let snapTimeout: ReturnType<typeof setTimeout>;

  $: eased = easeInOut(scrollProgress);

  function easeInOut(t: number): number {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  let lastScrollY = 0;

	function handleScroll() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const deltaY = scrollY - lastScrollY;
    lastScrollY = scrollY;

    scrollProgress = Math.min(scrollY / (vh * (numSlides - 1)), 1);

    clearTimeout(snapTimeout);
    snapTimeout = setTimeout(() => {
      const bias = 0.1;
      let targetSection;

      if (deltaY > 0) {
        targetSection = scrollProgress % 1 > bias
          ? Math.ceil(scrollProgress)
          : Math.floor(scrollProgress);
      } else {
        targetSection = scrollProgress % 1 < (1 - bias)
          ? Math.floor(scrollProgress)
          : Math.ceil(scrollProgress);
      }

      window.scrollTo({
        top: targetSection * vh,
        behavior: 'smooth'
    });
  }, 100);
}

  

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
    handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page-wrapper scroll-wrapper">
	<div class="scroll-spacer" style="height: 180vh;"></div>

	<div class="slides-container">
    <div 
      class="slide hero-slide"
      style="transform: scale({1 - eased * 0.05}) translateY({eased * -10}%);
            opacity: {1 - eased};"
    >
		  <Hero />
    </div>

    <div 
      class="slide about-slide"
      style="transform: scale({0.95 + eased * 0.05}) translateY({(1 - eased) * 10}%);
            opacity: {eased};"
    >
		  <About />
    </div>
	</div>

	<Footer />
</div>

