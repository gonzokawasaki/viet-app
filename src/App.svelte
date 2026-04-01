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
    childrenAges: "Children's Ages",
    interests: 'Interests',
    goal: 'Learning Goal',
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
          {#if value && value !== '—'}
            <div class="profile-row">
              <span class="profile-key">{profileLabels[key] || key}</span>
              <span class="profile-val">{value}</span>
            </div>
          {/if}
        {/each}
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
</style>
