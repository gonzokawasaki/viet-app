<script>
  import { profile, hasCompletedOnboarding } from './lib/stores/profile.js'
  import { progress } from './lib/stores/progress.js'
  import Onboarding from './lib/components/Onboarding.svelte'
  import LevelMap from './lib/components/LevelMap.svelte'
  import LessonView from './lib/components/LessonView.svelte'
  import Nav from './lib/components/Nav.svelte'

  let route = $state(window.location.hash || '#/')

  function navigate(hash) {
    window.location.hash = hash
  }

  window.addEventListener('hashchange', () => {
    route = window.location.hash || '#/'
  })

  let onboarded = $derived(($profile, hasCompletedOnboarding()))

  let lessonId = $derived(
    route.startsWith('#/lesson/') ? route.slice('#/lesson/'.length) : null
  )

  const profileLabels = {
    name: 'Name',
    nativeLanguage: 'Native Language',
    level: 'Level',
    age: 'Age Range',
    city: 'City',
    job: 'Job',
    school: 'School',
    grade: 'Grade',
    maritalStatus: 'Relationship',
    yearsMarried: 'Years Married',
    children: 'Children',
    childrenDetails: 'Children Details',
    interests: 'Interests',
    goal: 'Learning Goal',
  }

  function formatProfileValue(key, value) {
    if (key === 'childrenDetails' && Array.isArray(value)) {
      if (!value.length) return ''
      return value
        .filter(c => c.gender && c.gender !== '—')
        .map(c => `${c.gender} (age ${c.age})`)
        .join(', ')
    }
    return value
  }

  function resetProfile() {
    profile.reset()
    progress.reset()
    navigate('#/')
  }
</script>

{#if !onboarded}
  <Onboarding onComplete={() => navigate('#/')} />
{:else}
  <Nav {route} {navigate} />
  <main>
    {#if lessonId}
      <LessonView {lessonId} {navigate} />
    {:else if route === '#/profile'}
      <div class="profile-page">
        <h2>Your Profile</h2>
        {#each Object.entries($profile) as [key, value]}
          {@const display = formatProfileValue(key, value)}
          {#if display && display !== '—'}
            <div class="profile-row">
              <span class="profile-key">{profileLabels[key] || key}</span>
              <span class="profile-val">{display}</span>
            </div>
          {/if}
        {/each}
        <button class="btn-reset" onclick={resetProfile}>
          Reset Profile / Xóa hồ sơ
        </button>
      </div>
    {:else}
      <LevelMap {navigate} />
    {/if}
  </main>
{/if}

<style>
  main {
    flex: 1;
    padding: 24px 20px;
  }
  .profile-page {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .profile-page h2 {
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--color-primary);
    margin-bottom: 24px;
  }
  .profile-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 14px 0;
    border-bottom: 1px solid var(--color-border);
  }
  .profile-key {
    color: var(--color-outline);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .profile-val {
    font-weight: 700;
    font-size: 0.9rem;
  }
  .btn-reset {
    margin-top: 32px;
    padding: 14px 24px;
    background: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 0;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .btn-reset:hover {
    background: var(--color-primary);
    color: white;
  }
</style>
