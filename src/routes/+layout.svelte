<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import '../app.scss';
	import { onMount } from 'svelte';
  import { createScrollSnap, easeInOut } from '../utils/scroll';

  const numSlides = 2;
	let scrollProgress = 0;
  let currentSlide = 0;
  $: eased = easeInOut(scrollProgress);

  const { handleScroll } = createScrollSnap({
    numSlides,
    onSlideChange: (index) => currentSlide = index,
    onProgress: (progress) => scrollProgress = progress,
  });

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

