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
    gap: 20px;
    padding-bottom: 24px;
  }
  .lesson-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .back-btn {
    background: none;
    font-size: 1.3rem;
    padding: 6px 10px;
    color: var(--color-text-muted);
  }
  .lesson-title {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .title-en {
    font-weight: 700;
    font-size: 1rem;
  }
  .title-vi {
    font-size: 0.8rem;
    color: var(--color-text-muted);
  }
  .counter {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    font-weight: 600;
  }
  .progress-bar {
    height: 4px;
    background: var(--color-border);
    border-radius: 2px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: var(--color-primary);
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  .sentence-card {
    background: var(--color-surface);
    border-radius: var(--radius);
    padding: 24px 20px;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .primary-sentence, .secondary-sentence {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lang-tag {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 2px 8px;
    border-radius: 4px;
    width: fit-content;
  }
  .lang-tag.en {
    background: #dbeafe;
    color: var(--color-en);
  }
  .lang-tag.vi {
    background: #fee2e2;
    color: var(--color-vi);
  }
  .sentence-text {
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 500;
  }
  .reveal-btn {
    background: var(--color-bg);
    color: var(--color-primary);
    font-size: 0.9rem;
    padding: 10px;
    border: 1px dashed var(--color-primary-light);
    width: 100%;
  }
  .note-toggle {
    background: none;
    color: var(--color-text-muted);
    font-size: 0.85rem;
    padding: 6px;
    text-decoration: underline;
  }
  .note-box {
    background: #fde8e3;
    border-radius: var(--radius-sm);
    padding: 12px 14px;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #8b3a2a;
  }
  .secondary-sentence {
    padding-top: 12px;
    border-top: 1px solid var(--color-border);
  }
  .nav-buttons {
    display: flex;
    gap: 10px;
  }
  .nav-buttons .btn-secondary {
    flex: 0 0 auto;
    padding: 12px 20px;
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
    gap: 12px;
    min-height: 60dvh;
    text-align: center;
  }
  .done-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--color-success);
    color: white;
    font-size: 2rem;
    display: grid;
    place-items: center;
  }
  .done-vi {
    color: var(--color-vi);
  }
  .done-stats {
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }
  .done-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 16px;
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
