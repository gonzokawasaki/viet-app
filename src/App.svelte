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
    padding: 16px;
  }
  .profile-page {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .profile-page h2 {
    margin-bottom: 8px;
  }
  .profile-row {
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    background: var(--color-surface);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow);
  }
  .profile-key {
    color: var(--color-text-muted);
  }
  .profile-val {
    font-weight: 600;
  }
  .btn-reset {
    margin-top: 16px;
    padding: 12px 20px;
    background: #fee2e2;
    color: #dc2626;
    border: 2px solid #fca5a5;
    border-radius: var(--radius-sm);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    text-align: center;
  }
  .btn-reset:hover {
    background: #fecaca;
    border-color: #f87171;
  }
</style>
