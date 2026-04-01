<script>
  let { route, navigate } = $props()
</script>

<nav>
  <button
    class="nav-tab"
    class:active={route === '#/' || route.startsWith('#/lesson/')}
    onclick={() => navigate('#/')}
  >
    Lessons
  </button>
  <button
    class="nav-tab"
    class:active={route === '#/profile'}
    onclick={() => navigate('#/profile')}
  >
    Profile
  </button>
</nav>

<style>
  nav {
    display: flex;
    border-bottom: 2px solid var(--color-border);
    background: var(--color-surface);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .nav-tab {
    flex: 1;
    padding: 14px 0;
    background: none;
    border-radius: 0;
    font-size: 0.95rem;
    color: var(--color-text-muted);
    border-bottom: 3px solid transparent;
    margin-bottom: -2px;
  }
  .nav-tab.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }
</style>
