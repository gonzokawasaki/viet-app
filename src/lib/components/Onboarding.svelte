<script>
  import { profile } from '../stores/profile.js'

  let { onComplete } = $props()

  let step = $state(0)

  // Field values
  let name = $state('')
  let nativeLanguage = $state('')
  let level = $state('')
  let age = $state('')
  let city = $state('')
  let job = $state('')
  let school = $state('')
  let grade = $state('')
  let maritalStatus = $state('')
  let yearsMarried = $state('')
  let children = $state('')
  let childrenAges = $state('')
  let interests = $state('')
  let goal = $state('')

  const isMinor = $derived(age === 'under-18')
  const isMarried = $derived(maritalStatus === 'married')
  const hasChildren = $derived(children && children !== '0')

  // Build dynamic step list based on selections so far
  let steps = $derived.by(() => {
    const s = [
      { id: 'name', label: 'What is your name?', labelVi: 'Bạn tên gì?' },
      { id: 'nativeLanguage', label: 'What is your native language?', labelVi: 'Tiếng mẹ đẻ của bạn là gì?' },
      { id: 'level', label: 'What is your current level?', labelVi: 'Trình độ hiện tại của bạn?' },
      { id: 'age', label: 'What is your age range?', labelVi: 'Bạn thuộc độ tuổi nào?' },
      { id: 'city', label: 'Which city do you live in?', labelVi: 'Bạn sống ở thành phố nào?' },
    ]

    if (age === 'under-18') {
      s.push({ id: 'school', label: 'What school do you go to?', labelVi: 'Bạn học trường nào?' })
      s.push({ id: 'grade', label: 'What grade or year are you in?', labelVi: 'Bạn học lớp mấy?' })
    } else if (age) {
      s.push({ id: 'job', label: 'What is your job or occupation?', labelVi: 'Bạn làm nghề gì?' })
    }

    if (age && age !== 'under-18') {
      s.push({ id: 'maritalStatus', label: 'What is your relationship status?', labelVi: 'Tình trạng hôn nhân của bạn?' })
      if (maritalStatus === 'married') {
        s.push({ id: 'yearsMarried', label: 'How many years have you been married?', labelVi: 'Bạn đã kết hôn bao nhiêu năm?' })
      }
      s.push({ id: 'children', label: 'Do you have children?', labelVi: 'Bạn có con không?' })
      if (children && children !== '0') {
        s.push({ id: 'childrenAges', label: "What are your children's ages?", labelVi: 'Con bạn bao nhiêu tuổi?' })
      }
    }

    s.push({ id: 'interests', label: 'What are your interests or hobbies?', labelVi: 'Sở thích của bạn là gì?' })
    s.push({ id: 'goal', label: 'What is your learning goal?', labelVi: 'Mục tiêu học tập của bạn là gì?' })

    return s
  })

  let currentStep = $derived(steps[step])
  let totalSteps = $derived(steps.length)

  const ageOptions = [
    { value: 'under-18', en: 'Under 18', vi: 'Dưới 18' },
    { value: '18-25', en: '18 – 25', vi: '18 – 25' },
    { value: '26-40', en: '26 – 40', vi: '26 – 40' },
    { value: '41-60', en: '41 – 60', vi: '41 – 60' },
    { value: '60+', en: '60+', vi: '60+' },
  ]

  const levelOptions = [
    { value: 'beginner', en: 'Beginner', vi: 'Mới bắt đầu' },
    { value: 'elementary', en: 'Elementary', vi: 'Cơ bản' },
    { value: 'intermediate', en: 'Intermediate', vi: 'Trung cấp' },
    { value: 'upper-intermediate', en: 'Upper Intermediate', vi: 'Trung cấp cao' },
  ]

  const languageOptions = [
    { value: 'vietnamese', en: 'Vietnamese', vi: 'Tiếng Việt' },
    { value: 'english', en: 'English', vi: 'Tiếng Anh' },
  ]

  const maritalOptions = [
    { value: 'single', en: 'Single', vi: 'Độc thân' },
    { value: 'in-a-relationship', en: 'In a relationship', vi: 'Đang hẹn hò' },
    { value: 'married', en: 'Married', vi: 'Đã kết hôn' },
    { value: 'divorced', en: 'Divorced', vi: 'Đã ly hôn' },
    { value: 'widowed', en: 'Widowed', vi: 'Góa' },
  ]

  const childrenOptions = [
    { value: '0', en: 'No children', vi: 'Không có con' },
    { value: '1', en: '1 child', vi: '1 con' },
    { value: '2', en: '2 children', vi: '2 con' },
    { value: '3', en: '3 children', vi: '3 con' },
    { value: '4+', en: '4 or more', vi: '4 con trở lên' },
  ]

  const goalOptions = [
    { value: 'daily conversation', en: 'Daily conversation', vi: 'Giao tiếp hàng ngày' },
    { value: 'business', en: 'Business English', vi: 'Tiếng Anh thương mại' },
    { value: 'travel', en: 'Travel', vi: 'Du lịch' },
    { value: 'exams', en: 'Exams (IELTS, TOEFL)', vi: 'Thi cử (IELTS, TOEFL)' },
    { value: 'other', en: 'Other', vi: 'Khác' },
  ]

  function getValue(id) {
    const map = { name, nativeLanguage, level, age, city, job, school, grade, maritalStatus, yearsMarried, children, childrenAges, interests, goal }
    return map[id] ?? ''
  }

  let canProceed = $derived(() => {
    const id = currentStep?.id
    if (!id) return false
    const v = getValue(id)
    return typeof v === 'string' ? v.trim().length > 0 : false
  })

  function saveField(id, value) {
    profile.setField(id, value)
  }

  function next() {
    const id = currentStep.id
    saveField(id, getValue(id).trim())

    if (step >= totalSteps - 1) {
      onComplete()
      return
    }
    step++
  }

  function skip() {
    const id = currentStep.id
    saveField(id, '—')
    if (step >= totalSteps - 1) {
      onComplete()
      return
    }
    step++
  }

  function back() {
    if (step > 0) step--
  }

  // Fields that can be skipped
  const skippable = new Set(['school', 'grade', 'job', 'maritalStatus', 'yearsMarried', 'children', 'childrenAges'])
</script>

<div class="onboarding">
  <div class="header">
    <h1>Welcome</h1>
    <p class="subtitle">Chào mừng bạn</p>
    <div class="progress-dots">
      {#each steps as _, i}
        <span class="dot" class:active={i === step} class:done={i < step}></span>
      {/each}
    </div>
    <p class="step-count">{step + 1} / {totalSteps}</p>
  </div>

  <div class="question">
    <h2>{currentStep.label}</h2>
    <p class="vi-hint">{currentStep.labelVi}</p>

    {#if currentStep.id === 'name'}
      <input type="text" bind:value={name} placeholder="Your name / Tên của bạn"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'nativeLanguage'}
      <div class="options">
        {#each languageOptions as opt}
          <button class="option-btn" class:selected={nativeLanguage === opt.value}
            onclick={() => nativeLanguage = opt.value}>
            <span class="option-en">{opt.en}</span>
            <span class="option-vi">{opt.vi}</span>
          </button>
        {/each}
      </div>

    {:else if currentStep.id === 'level'}
      <div class="options">
        {#each levelOptions as opt}
          <button class="option-btn" class:selected={level === opt.value}
            onclick={() => level = opt.value}>
            <span class="option-en">{opt.en}</span>
            <span class="option-vi">{opt.vi}</span>
          </button>
        {/each}
      </div>

    {:else if currentStep.id === 'age'}
      <div class="options">
        {#each ageOptions as opt}
          <button class="option-btn" class:selected={age === opt.value}
            onclick={() => age = opt.value}>
            <span class="option-en">{opt.en}</span>
            <span class="option-vi">{opt.vi}</span>
          </button>
        {/each}
      </div>

    {:else if currentStep.id === 'city'}
      <input type="text" bind:value={city} placeholder="e.g. Ho Chi Minh City, Hanoi"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'school'}
      <input type="text" bind:value={school} placeholder="e.g. Nguyen Hue High School"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'grade'}
      <input type="text" bind:value={grade} placeholder="e.g. Grade 10, Year 2"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'job'}
      <input type="text" bind:value={job} placeholder="e.g. teacher, engineer, nurse"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'maritalStatus'}
      <div class="options">
        {#each maritalOptions as opt}
          <button class="option-btn" class:selected={maritalStatus === opt.value}
            onclick={() => maritalStatus = opt.value}>
            <span class="option-en">{opt.en}</span>
            <span class="option-vi">{opt.vi}</span>
          </button>
        {/each}
      </div>

    {:else if currentStep.id === 'yearsMarried'}
      <input type="number" bind:value={yearsMarried} placeholder="e.g. 5" min="0" max="80"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'children'}
      <div class="options">
        {#each childrenOptions as opt}
          <button class="option-btn" class:selected={children === opt.value}
            onclick={() => children = opt.value}>
            <span class="option-en">{opt.en}</span>
            <span class="option-vi">{opt.vi}</span>
          </button>
        {/each}
      </div>

    {:else if currentStep.id === 'childrenAges'}
      <input type="text" bind:value={childrenAges} placeholder="e.g. 3, 7, 12"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'interests'}
      <input type="text" bind:value={interests} placeholder="e.g. cooking, music, technology"
        onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />

    {:else if currentStep.id === 'goal'}
      <div class="options">
        {#each goalOptions as opt}
          <button class="option-btn" class:selected={goal === opt.value}
            onclick={() => goal = opt.value}>
            <span class="option-en">{opt.en}</span>
            <span class="option-vi">{opt.vi}</span>
          </button>
        {/each}
      </div>
    {/if}
  </div>

  <div class="bottom-actions">
    {#if step > 0}
      <button class="btn-back" onclick={back}>&#8592; Back</button>
    {/if}
    <div class="right-actions">
      {#if skippable.has(currentStep.id)}
        <button class="btn-skip" onclick={skip}>Skip / Bỏ qua</button>
      {/if}
      <button class="btn-primary" disabled={!canProceed()} onclick={next}>
        {step < totalSteps - 1 ? 'Next / Tiếp' : 'Start Learning / Bắt đầu'}
      </button>
    </div>
  </div>
</div>

<style>
  .onboarding {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    padding: 32px 20px;
    gap: 24px;
  }
  .header {
    text-align: center;
  }
  .header h1 {
    font-size: 1.8rem;
    color: var(--color-primary);
  }
  .subtitle {
    color: var(--color-text-muted);
    margin-top: 4px;
  }
  .progress-dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 20px;
    flex-wrap: wrap;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-border);
    transition: background 0.2s;
  }
  .dot.active {
    background: var(--color-primary);
    width: 10px;
    height: 10px;
  }
  .dot.done {
    background: var(--color-success);
  }
  .step-count {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    margin-top: 8px;
  }
  .question {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .question h2 {
    font-size: 1.3rem;
  }
  .vi-hint {
    color: var(--color-vi);
    font-size: 0.9rem;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .option-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-sm);
    text-align: left;
    width: 100%;
  }
  .option-btn.selected {
    border-color: var(--color-primary);
    background: #f0f7f4;
  }
  .option-en {
    font-weight: 600;
  }
  .option-vi {
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }
  .bottom-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .right-actions {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
  }
  .btn-back {
    background: none;
    color: var(--color-text-muted);
    font-size: 1rem;
    padding: 12px 16px;
  }
  .btn-skip {
    background: none;
    color: var(--color-text-muted);
    font-size: 0.9rem;
    padding: 8px;
  }
</style>
