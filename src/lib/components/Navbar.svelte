<script>
    let theme = "dark";
    function toggleTheme(){
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }
    
</script>

<nav class="navbar">
    <div class="navbar-content">
        <button class="theme-toggle" on:click={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    </div>
</nav>