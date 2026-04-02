import { writable, get } from 'svelte/store'

const STORAGE_KEY = 'viet-tutor-profile'

const DEFAULT_PROFILE = {
  name: '',
  nativeLanguage: '',       // 'vietnamese' or 'english'
  level: '',                // 'beginner', 'elementary', 'intermediate', 'upper-intermediate'
  age: '',                  // 'under-18', '18-25', '26-40', '40-60', '60+'
  city: '',                 // e.g. 'Ho Chi Minh City', 'Hanoi'
  job: '',                  // for adults — e.g. 'teacher', 'engineer'
  school: '',               // for students — e.g. 'Nguyen Hue High School'
  grade: '',                // for students — e.g. 'grade 10', 'year 2'
  maritalStatus: '',        // 'single', 'in-a-relationship', 'married', 'divorced', 'widowed'
  yearsMarried: '',         // e.g. '5'
  children: '',             // '0', '1', '2', '3', '4+'
  childrenDetails: [],      // e.g. [{gender: 'son', age: '10'}, {gender: 'daughter', age: '7'}]
  interests: '',            // e.g. 'travel, food, technology'
  goal: '',                 // e.g. 'daily conversation', 'business', 'travel'
}

function loadProfile() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return { ...DEFAULT_PROFILE, ...JSON.parse(stored) }
  } catch {}
  return { ...DEFAULT_PROFILE }
}

function createProfileStore() {
  const store = writable(loadProfile())

  store.subscribe(value => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch {}
  })

  return {
    subscribe: store.subscribe,
    set: store.set,
    update: store.update,
    setField(field, value) {
      store.update(p => ({ ...p, [field]: value }))
    },
    reset() {
      store.set({ ...DEFAULT_PROFILE })
      localStorage.removeItem(STORAGE_KEY)
    },
  }
}

export const profile = createProfileStore()

const ONBOARDING_FIELDS = ['name', 'nativeLanguage', 'level', 'age', 'city', 'interests', 'goal']

export function hasCompletedOnboarding() {
  const p = get(profile)
  return ONBOARDING_FIELDS.every(f => p[f] && p[f].trim() !== '')
}

export function isStudent() {
  return get(profile).age === 'under-18'
}
