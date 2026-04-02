<script>
  import { profile } from '../stores/profile.js'
  import { progress } from '../stores/progress.js'
  import { lessons } from '../data/lessons/index.js'

  let { navigate } = $props()

  const levelOrder = ['beginner', 'elementary', 'intermediate', 'upper-intermediate']
  const levelLabels = {
    beginner: { en: 'Beginner', vi: 'Mới bắt đầu' },
    elementary: { en: 'Elementary', vi: 'Cơ bản' },
    intermediate: { en: 'Intermediate', vi: 'Trung cấp' },
    'upper-intermediate': { en: 'Upper Intermediate', vi: 'Trung cấp cao' },
  }

  let grouped = $derived(
    levelOrder
      .map(level => ({
        level,
        label: levelLabels[level],
        lessons: lessons.filter(l => l.level === level),
      }))
      .filter(g => g.lessons.length > 0)
  )

  function isUnlocked(level) {
    const userIdx = levelOrder.indexOf($profile.level)
    const lessonIdx = levelOrder.indexOf(level)
    return lessonIdx <= userIdx + 1
  }
</script>

<div class="level-map">
  <h2>Hi {$profile.name}!</h2>
  <p class="greeting-vi">Xin chào {$profile.name}!</p>

  {#each grouped as group}
    <section class="level-group" class:locked={!isUnlocked(group.level)}>
      <h3>
        <span class="level-en">{group.label.en}</span>
        <span class="level-vi">{group.label.vi}</span>
      </h3>
      <div class="lesson-list">
        {#each group.lessons as lesson}
          {@const done = $progress.completedLessons.includes(lesson.id)}
          <button
            class="lesson-card"
            class:done
            class:locked={!isUnlocked(group.level)}
            disabled={!isUnlocked(group.level)}
            onclick={() => navigate(`#/lesson/${lesson.id}`)}
          >
            <span class="lesson-status">{done ? '✓' : isUnlocked(group.level) ? '○' : '🔒'}</span>
            <div class="lesson-info">
              <span class="lesson-en">{lesson.title.en}</span>
              <span class="lesson-vi">{lesson.title.vi}</span>
            </div>
            <span class="sentence-count">{lesson.sentences.length}</span>
          </button>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .level-map {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--color-text);
    letter-spacing: -0.02em;
    text-transform: uppercase;
    line-height: 1.1;
  }
  .greeting-vi {
    color: var(--color-primary);
    font-size: 0.85rem;
    font-style: italic;
    margin-top: -24px;
  }
  .level-group {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .level-group.locked {
    opacity: 0.4;
  }
  .level-group h3 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.7rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-primary);
    padding-bottom: 8px;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 0;
  }
  .level-vi {
    font-size: 0.65rem;
    color: var(--color-outline);
    font-weight: 600;
    letter-spacing: 0.1em;
  }
  .lesson-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid var(--color-border);
    border-top: none;
  }
  .lesson-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 18px;
    background: var(--color-surface);
    border: none;
    border-bottom: 1px solid var(--color-border);
    border-radius: 0;
    text-align: left;
    width: 100%;
    text-transform: none;
    letter-spacing: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .lesson-card:last-child {
    border-bottom: none;
  }
  .lesson-card:not(:disabled):hover {
    background: var(--color-surface-low);
    border-left: 4px solid var(--color-accent);
    padding-left: 14px;
  }
  .lesson-card.done {
    border-left: 4px solid var(--color-accent);
    padding-left: 14px;
    background: var(--color-surface-low);
  }
  .lesson-card.locked {
    cursor: not-allowed;
  }
  .lesson-status {
    font-size: 0.9rem;
    width: 24px;
    text-align: center;
    flex-shrink: 0;
    color: var(--color-outline);
  }
  .lesson-card.done .lesson-status {
    color: var(--color-accent);
    font-weight: 900;
  }
  .lesson-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .lesson-en {
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: -0.01em;
  }
  .lesson-vi {
    font-size: 0.7rem;
    color: var(--color-outline);
    font-style: italic;
  }
  .sentence-count {
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--color-outline);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: var(--color-surface-low);
    padding: 3px 8px;
    border-radius: 0;
  }
</style>
