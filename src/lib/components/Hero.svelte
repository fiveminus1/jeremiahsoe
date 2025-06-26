<script>
  import './Hero.scss';
  import { fly } from 'svelte/transition'; 
  import { onMount } from 'svelte';
  let show = false;
  onMount(() => {
    show = true;
  });
</script>

<div class="hero"> 
  <div class="hero-content">
    {#if show}
    <h1 in:fly={{ x: -100, duration: 1000 }}>
      hey, i'm jeremiah
    </h1>
    {/if}

    {#if show}
    <p in:fly={{ x: 100, duration: 1000, delay: 300 }}>
      i'm currently a 4th year CS student at UC Irvine.
    </p>
    {/if}
  </div>
</div>


<div class="about">
  
</div>

