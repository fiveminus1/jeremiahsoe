<script>
    import './Footer.scss';
    import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMoon, IconSun } from '@tabler/icons-svelte';

    let theme = "dark";
    function toggleTheme(){
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }
</script>

<footer class="footer">
    <div class="footer-content">
        <p>Copyright {new Date().getFullYear()} (c) Jeremiah Soe. Built with ❤️ using SvelteKit.</p>
        <div class="socials">
            <a href="https://github.com/fiveminus1" target="_blank">
              <IconBrandGithub />
            </a>
            
            <a href="https://www.linkedin.com/in/jeremiah-soe/" target="_blank">
              <IconBrandLinkedin />
            </a>

            <a href="mailto:jeremiahjsoe@gmail.com">
              <IconMail />
            </a>

            <button class="theme-toggle" on:click={toggleTheme}>
              {#if theme === 'light'}
                <IconMoon />
              {:else}
                <IconSun />
              {/if}
            </button>
        </div>
    </div>
</footer>