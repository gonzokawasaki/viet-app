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
    gap: 24px;
  }
  h2 {
    font-size: 1.4rem;
    color: var(--color-primary-dark);
  }
  .greeting-vi {
    color: var(--color-vi);
    font-size: 0.9rem;
    margin-top: -16px;
  }
  .level-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .level-group.locked {
    opacity: 0.5;
  }
  .level-group h3 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 1rem;
    color: var(--color-text);
  }
  .level-vi {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    font-weight: 400;
  }
  .lesson-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lesson-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-sm);
    text-align: left;
    width: 100%;
  }
  .lesson-card:not(:disabled):hover {
    border-color: var(--color-primary-light);
  }
  .lesson-card.done {
    border-color: var(--color-success);
    background: #f0fdf4;
  }
  .lesson-card.locked {
    cursor: not-allowed;
  }
  .lesson-status {
    font-size: 1.2rem;
    width: 28px;
    text-align: center;
    flex-shrink: 0;
  }
  .lesson-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .lesson-en {
    font-weight: 600;
    font-size: 0.95rem;
  }
  .lesson-vi {
    font-size: 0.8rem;
    color: var(--color-text-muted);
  }
  .sentence-count {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    background: var(--color-bg);
    padding: 2px 8px;
    border-radius: 12px;
  }
</style>
