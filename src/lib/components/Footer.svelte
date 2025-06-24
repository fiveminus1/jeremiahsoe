<script>
    import './Footer.scss';
    import Icon from '@iconify/svelte';
</script>

<footer class="footer">
    <div class="footer-content">
        <p>Copyright {new Date().getFullYear()} (c) Jeremiah Soe. Built with ❤️ using SvelteKit.</p>
        <div class="socials">
            <a href="https://github.com/fiveminus1" target="_blank">
              <Icon icon="tabler:brand-github" />
            </a>
            
            <a href="https://www.linkedin.com/in/jeremiah-soe/" target="_blank">
              <Icon icon="tabler:brand-linkedin" />
            </a>

            <a href="mailto:jeremiahjsoe@gmail.com">
              <Icon icon="tabler:mail" />
            </a>
        </div>
    </div>
</footer>