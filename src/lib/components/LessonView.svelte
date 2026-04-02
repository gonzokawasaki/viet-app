<script>
  import { profile } from '../stores/profile.js'
  import { progress } from '../stores/progress.js'
  import { getLessonById, personaliseSentence } from '../data/lessons/index.js'

  let { lessonId, navigate } = $props()

  let lesson = $derived(getLessonById(lessonId))
  let currentIndex = $state(0)
  let showVi = $state(false)
  let showNote = $state(false)
  let finished = $state(false)

  let sentence = $derived(lesson?.sentences[currentIndex])
  let personalEn = $derived(sentence ? personaliseSentence(sentence.en, $profile) : '')
  let personalVi = $derived(sentence ? personaliseSentence(sentence.vi, $profile) : '')
  let total = $derived(lesson?.sentences.length ?? 0)

  // Determine display order based on native language
  let showEnFirst = $derived($profile.nativeLanguage === 'vietnamese')

  function next() {
    showVi = false
    showNote = false
    if (currentIndex < total - 1) {
      currentIndex++
    } else {
      finished = true
      progress.completeLesson(lessonId)
    }
  }

  function prev() {
    showVi = false
    showNote = false
    if (currentIndex > 0) currentIndex--
  }

  function restart() {
    currentIndex = 0
    finished = false
    showVi = false
    showNote = false
  }
</script>

{#if !lesson}
  <div class="lesson-error">
    <p>Lesson not found.</p>
    <button class="btn-primary" onclick={() => navigate('#/')}>Back to lessons</button>
  </div>
{:else if finished}
  <div class="lesson-done">
    <div class="done-icon">&#10003;</div>
    <h2>Lesson Complete!</h2>
    <p class="done-vi">Bài học hoàn thành!</p>
    <p class="done-stats">You practised {total} sentences.</p>
    <div class="done-actions">
      <button class="btn-primary" onclick={() => navigate('#/')}>Back to Lessons</button>
      <button class="btn-secondary" onclick={restart}>Practise Again / Luyện lại</button>
    </div>
  </div>
{:else}
  <div class="lesson-view">
    <div class="lesson-header">
      <button class="back-btn" onclick={() => navigate('#/')}>&#8592;</button>
      <div class="lesson-title">
        <span class="title-en">{lesson.title.en}</span>
        <span class="title-vi">{lesson.title.vi}</span>
      </div>
      <span class="counter">{currentIndex + 1}/{total}</span>
    </div>

    <div class="progress-bar">
      <div class="progress-fill" style="width: {((currentIndex + 1) / total) * 100}%"></div>
    </div>

    <div class="sentence-card">
      <div class="primary-sentence">
        <span class="lang-tag" class:en={showEnFirst} class:vi={!showEnFirst}>
          {showEnFirst ? 'EN' : 'VI'}
        </span>
        <p class="sentence-text">{showEnFirst ? personalEn : personalVi}</p>
      </div>

      <button class="reveal-btn" onclick={() => showVi = !showVi}>
        {showVi ? 'Hide' : 'Show'} {showEnFirst ? 'Vietnamese' : 'English'}
        / {showVi ? 'Ẩn' : 'Xem'} {showEnFirst ? 'tiếng Việt' : 'tiếng Anh'}
      </button>

      {#if showVi}
        <div class="secondary-sentence">
          <span class="lang-tag" class:vi={showEnFirst} class:en={!showEnFirst}>
            {showEnFirst ? 'VI' : 'EN'}
          </span>
          <p class="sentence-text">{showEnFirst ? personalVi : personalEn}</p>
        </div>
      {/if}

      {#if sentence.note}
        <button class="note-toggle" onclick={() => showNote = !showNote}>
          {showNote ? 'Hide note' : 'Show note / Ghi chú'}
        </button>
        {#if showNote}
          <div class="note-box">
            <p>{sentence.note}</p>
          </div>
        {/if}
      {/if}
    </div>

    <div class="nav-buttons">
      <button class="btn-secondary" disabled={currentIndex === 0} onclick={prev}>
        &#8592; Prev
      </button>
      <button class="btn-primary" onclick={next}>
        {currentIndex < total - 1 ? 'Next →' : 'Finish ✓'}
      </button>
    </div>
  </div>
{/if}

<style>
  .lesson-view {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 24px;
  }
  .lesson-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .back-btn {
    background: none;
    font-size: 1.1rem;
    padding: 8px 12px;
    color: var(--color-primary);
    border: 1px solid var(--color-border);
    text-transform: none;
    letter-spacing: 0;
  }
  .back-btn:hover {
    background: var(--color-primary);
    color: white;
  }
  .lesson-title {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .title-en {
    font-weight: 900;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }
  .title-vi {
    font-size: 0.7rem;
    color: var(--color-outline);
    font-style: italic;
  }
  .counter {
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .progress-bar {
    height: 2px;
    background: var(--color-surface-low);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--color-accent), var(--color-accent-gold));
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .sentence-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
  }
  .sentence-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: var(--color-accent);
  }
  .primary-sentence, .secondary-sentence {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lang-tag {
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.2em;
    padding: 3px 10px;
    width: fit-content;
    text-transform: uppercase;
  }
  .lang-tag.en {
    background: var(--color-surface-low);
    color: var(--color-accent);
  }
  .lang-tag.vi {
    background: var(--color-primary);
    color: white;
  }
  .sentence-text {
    font-size: 1.25rem;
    line-height: 1.7;
    font-weight: 400;
  }
  .reveal-btn {
    background: transparent;
    color: var(--color-primary);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 12px;
    border: 1px solid var(--color-primary);
    width: 100%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .reveal-btn:hover {
    background: var(--color-primary);
    color: white;
  }
  .note-toggle {
    background: none;
    color: var(--color-accent);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 6px;
    text-decoration: none;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .note-box {
    background: var(--color-surface-low);
    border-left: 4px solid var(--color-accent);
    padding: 14px 16px;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--color-text-muted);
    font-style: italic;
  }
  .secondary-sentence {
    padding-top: 16px;
    border-top: 1px solid var(--color-border);
  }
  .nav-buttons {
    display: flex;
    gap: 0;
  }
  .nav-buttons .btn-secondary {
    flex: 0 0 auto;
    padding: 14px 20px;
    border-right: none;
  }
  .nav-buttons .btn-primary {
    flex: 1;
  }

  /* Done screen */
  .lesson-done {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    min-height: 60dvh;
    text-align: center;
  }
  .done-icon {
    width: 56px;
    height: 56px;
    background: var(--color-accent);
    color: var(--color-text);
    font-size: 1.5rem;
    font-weight: 900;
    display: grid;
    place-items: center;
  }
  .lesson-done h2 {
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }
  .done-vi {
    color: var(--color-primary);
    font-style: italic;
    font-size: 0.9rem;
  }
  .done-stats {
    color: var(--color-outline);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
  .done-actions {
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;
    margin-top: 24px;
  }
  .done-actions .btn-secondary {
    border-top: none;
  }

  /* Error */
  .lesson-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 40px;
  }
</style>
