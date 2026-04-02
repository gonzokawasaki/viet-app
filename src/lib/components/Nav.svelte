<script>
  let { route, navigate } = $props()
</script>

<nav>
  <div class="nav-brand">
    <span class="brand-text">VIETLEARN AI</span>
  </div>
  <div class="nav-tabs">
    <button
      class="nav-tab"
      class:active={route === '#/' || route.startsWith('#/lesson/')}
      onclick={() => navigate('#/')}
    >
      <span class="material-symbols-outlined" style={route === '#/' || route.startsWith('#/lesson/') ? "font-variation-settings: 'FILL' 1;" : ''}>book_2</span>
      <span class="tab-label">Archive</span>
    </button>
    <button
      class="nav-tab"
      class:active={route === '#/profile'}
      onclick={() => navigate('#/profile')}
    >
      <span class="material-symbols-outlined" style={route === '#/profile' ? "font-variation-settings: 'FILL' 1;" : ''}>school</span>
      <span class="tab-label">Scholar</span>
    </button>
  </div>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    background: var(--color-bg);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .nav-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 20px;
  }
  .brand-text {
    font-size: 1.1rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--color-text);
  }
  .nav-tabs {
    display: flex;
    border-top: 1px solid var(--color-border);
  }
  .nav-tab {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 10px 0;
    background: none;
    border-radius: 0;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-outline);
    border-left: none;
    border-bottom: none;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .nav-tab .material-symbols-outlined {
    font-size: 1.25rem;
  }
  .nav-tab.active {
    color: var(--color-primary);
    border-left: 4px solid var(--color-accent);
  }
  .nav-tab:not(.active):hover {
    color: var(--color-accent);
  }
  .tab-label {
    font-family: var(--font-sans);
  }
</style>
