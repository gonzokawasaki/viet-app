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
  let childrenDetails = $state([])
  let interests = $state('')
  let goal = $state('')

  // Shuffle helper (Fisher-Yates)
  function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  // Generate a random order for question groups once on mount.
  // Groups: name, nativeLanguage, level, age(+subs), city, family(marital+children+details), interests, goal
  // We define group keys and shuffle them, then expand into steps dynamically.
  const groupOrder = shuffle([
    'name', 'nativeLanguage', 'level', 'age', 'city', 'family', 'interests', 'goal'
  ])

  // Build dynamic step list based on shuffled group order + current selections
  let steps = $derived.by(() => {
    const s = []
    for (const group of groupOrder) {
      switch (group) {
        case 'name':
          s.push({ id: 'name', label: 'What is your name?', labelVi: 'Bạn tên gì?' })
          break
        case 'nativeLanguage':
          s.push({ id: 'nativeLanguage', label: 'What is your native language?', labelVi: 'Tiếng mẹ đẻ của bạn là gì?' })
          break
        case 'level':
          s.push({ id: 'level', label: 'What is your current level?', labelVi: 'Trình độ hiện tại của bạn?' })
          break
        case 'age':
          s.push({ id: 'age', label: 'What is your age range?', labelVi: 'Bạn thuộc độ tuổi nào?' })
          if (age === 'under-18') {
            s.push({ id: 'school', label: 'What school do you go to?', labelVi: 'Bạn học trường nào?' })
            s.push({ id: 'grade', label: 'What grade or year are you in?', labelVi: 'Bạn học lớp mấy?' })
          } else if (age) {
            s.push({ id: 'job', label: 'What is your job or occupation?', labelVi: 'Bạn làm nghề gì?' })
          }
          break
        case 'city':
          s.push({ id: 'city', label: 'Which city do you live in?', labelVi: 'Bạn sống ở thành phố nào?' })
          break
        case 'family':
          if (age && age !== 'under-18') {
            s.push({ id: 'maritalStatus', label: 'What is your relationship status?', labelVi: 'Tình trạng hôn nhân của bạn?' })
            if (maritalStatus === 'married') {
              s.push({ id: 'yearsMarried', label: 'How many years have you been married?', labelVi: 'Bạn đã kết hôn bao nhiêu năm?' })
            }
            s.push({ id: 'children', label: 'How many children do you have?', labelVi: 'Bạn có mấy con?' })
            if (children && children !== '0') {
              const count = children === '4+' ? 4 : parseInt(children)
              for (let i = 0; i < count; i++) {
                const ordinal = count === 1 ? '' : ` #${i + 1}`
                s.push({
                  id: `childDetail-${i}`,
                  label: `Tell us about your child${ordinal}`,
                  labelVi: `Cho biết về con${ordinal} của bạn`,
                })
              }
            }
          }
          break
        case 'interests':
          s.push({ id: 'interests', label: 'What are your interests or hobbies?', labelVi: 'Sở thích của bạn là gì?' })
          break
        case 'goal':
          s.push({ id: 'goal', label: 'What is your learning goal?', labelVi: 'Mục tiêu học tập của bạn là gì?' })
          break
      }
    }
    return s
  })

  let currentStep = $derived(steps[step])
  let totalSteps = $derived(steps.length)

  const ageOptions = [
    { value: 'under-18', en: 'Under 18', vi: 'Dưới 18', example: 'I am under 18 years old.' },
    { value: '18-25', en: '18 – 25', vi: '18 – 25', example: 'I am 18-25 years old.' },
    { value: '26-40', en: '26 – 40', vi: '26 – 40', example: 'I am 26-40 years old.' },
    { value: '40-60', en: '40 – 60', vi: '40 – 60', example: 'I am 40-60 years old.' },
    { value: '60+', en: '60+', vi: '60+', example: 'I am over 60 years old.' },
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

  const childGenderOptions = [
    { value: 'son', en: 'Son', vi: 'Con trai' },
    { value: 'daughter', en: 'Daughter', vi: 'Con gái' },
  ]

  const goalOptions = [
    { value: 'daily conversation', en: 'Daily conversation', vi: 'Giao tiếp hàng ngày' },
    { value: 'business', en: 'Business English', vi: 'Tiếng Anh thương mại' },
    { value: 'travel', en: 'Travel', vi: 'Du lịch' },
    { value: 'exams', en: 'Exams (IELTS, TOEFL)', vi: 'Thi cử (IELTS, TOEFL)' },
    { value: 'other', en: 'Other', vi: 'Khác' },
  ]

  // Ensure childrenDetails array has enough entries
  function ensureChildSlots(count) {
    while (childrenDetails.length < count) {
      childrenDetails.push({ gender: '', age: '' })
    }
  }

  function getChildDetailIndex(stepId) {
    const match = stepId.match(/^childDetail-(\d+)$/)
    return match ? parseInt(match[1]) : -1
  }

  function getValue(id) {
    if (id.startsWith('childDetail-')) {
      const idx = getChildDetailIndex(id)
      const detail = childrenDetails[idx]
      return detail && detail.gender && detail.age ? `${detail.gender}-${detail.age}` : ''
    }
    const map = { name, nativeLanguage, level, age, city, job, school, grade, maritalStatus, yearsMarried, children, interests, goal }
    return map[id] ?? ''
  }

  let canProceed = $derived(() => {
    const id = currentStep?.id
    if (!id) return false
    if (id.startsWith('childDetail-')) {
      const idx = getChildDetailIndex(id)
      const detail = childrenDetails[idx]
      return detail && detail.gender && detail.age.trim().length > 0
    }
    const v = getValue(id)
    return typeof v === 'string' ? v.trim().length > 0 : false
  })

  function saveField(id, value) {
    if (id.startsWith('childDetail-')) {
      profile.setField('childrenDetails', [...childrenDetails])
      return
    }
    profile.setField(id, value)
  }

  function next() {
    const id = currentStep.id
    if (id === 'children') {
      const count = children === '4+' ? 4 : children ? parseInt(children) : 0
      ensureChildSlots(count)
    }
    saveField(id, getValue(id)?.trim?.() ?? getValue(id))

    if (step >= totalSteps - 1) {
      onComplete()
      return
    }
    step++
  }

  function skip() {
    const id = currentStep.id
    if (id.startsWith('childDetail-')) {
      const idx = getChildDetailIndex(id)
      if (!childrenDetails[idx]) childrenDetails[idx] = { gender: '', age: '' }
      childrenDetails[idx].gender = '—'
      childrenDetails[idx].age = '—'
      saveField(id, '')
    } else {
      saveField(id, '—')
    }
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
  const skippable = new Set(['school', 'grade', 'job', 'maritalStatus', 'yearsMarried', 'children'])
  function isSkippable(id) {
    if (id.startsWith('childDetail-')) return true
    return skippable.has(id)
  }

  function agePreview(ageValue) {
    const opt = ageOptions.find(o => o.value === ageValue)
    return opt?.example || ''
  }

  function childrenSummary() {
    if (!childrenDetails.length) return ''
    const sons = childrenDetails.filter(c => c.gender === 'son' && c.gender !== '—').length
    const daughters = childrenDetails.filter(c => c.gender === 'daughter' && c.gender !== '—').length
    const parts = []
    if (sons) parts.push(`${sons} son${sons > 1 ? 's' : ''}`)
    if (daughters) parts.push(`${daughters} daughter${daughters > 1 ? 's' : ''}`)
    return parts.length ? `I have ${parts.join(' and ')}.` : ''
  }
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
      {#if age}
        <div class="example-sentence">
          <span class="example-label">Example / Ví dụ:</span>
          <span class="example-text">{agePreview(age)}</span>
        </div>
      {/if}

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

    {:else if currentStep.id.startsWith('childDetail-')}
      {@const idx = getChildDetailIndex(currentStep.id)}
      {#if idx >= 0}
        {(() => { ensureChildSlots(idx + 1); return '' })()}
        <p class="child-prompt">Is this child a son or daughter? How old are they?</p>
        <p class="child-prompt-vi">Con này là trai hay gái? Bao nhiêu tuổi?</p>

        <div class="child-detail-form">
          <div class="child-gender-options">
            {#each childGenderOptions as opt}
              <button class="option-btn compact" class:selected={childrenDetails[idx]?.gender === opt.value}
                onclick={() => { ensureChildSlots(idx + 1); childrenDetails[idx].gender = opt.value }}>
                <span class="option-en">{opt.en}</span>
                <span class="option-vi">{opt.vi}</span>
              </button>
            {/each}
          </div>

          <div class="child-age-input">
            <label class="child-age-label">Age / Tuổi</label>
            <input type="number" min="0" max="60" placeholder="e.g. 10"
              value={childrenDetails[idx]?.age ?? ''}
              oninput={(e) => { ensureChildSlots(idx + 1); childrenDetails[idx].age = e.target.value }}
              onkeydown={(e) => e.key === 'Enter' && canProceed() && next()} autofocus />
          </div>
        </div>

        {#if childrenDetails[idx]?.gender && childrenDetails[idx]?.age}
          <div class="example-sentence">
            <span class="example-label">Example / Ví dụ:</span>
            <span class="example-text">
              My {childrenDetails[idx].gender} is {childrenDetails[idx].age} years old.
            </span>
          </div>
        {/if}

        {#if childrenSummary()}
          <div class="example-sentence summary">
            <span class="example-label">Summary / Tóm tắt:</span>
            <span class="example-text">{childrenSummary()}</span>
          </div>
        {/if}
      {/if}

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
      {#if isSkippable(currentStep.id)}
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
  .option-btn.compact {
    padding: 10px 14px;
  }
  .option-btn.selected {
    border-color: var(--color-primary);
    background: #e8f4fb;
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

  /* Example sentence preview */
  .example-sentence {
    background: #e8f4fb;
    border: 1px solid #a8d0e6;
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .example-sentence.summary {
    background: #fde8e3;
    border-color: #f4a898;
  }
  .example-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .example-text {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text);
    font-style: italic;
  }

  /* Child detail form */
  .child-prompt {
    font-size: 0.95rem;
    color: var(--color-text);
    margin: 0;
  }
  .child-prompt-vi {
    font-size: 0.85rem;
    color: var(--color-vi);
    margin: 0;
  }
  .child-detail-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .child-gender-options {
    display: flex;
    gap: 10px;
  }
  .child-gender-options .option-btn {
    flex: 1;
  }
  .child-age-input {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .child-age-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-text-muted);
  }
</style>
