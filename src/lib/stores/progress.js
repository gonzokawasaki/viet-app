import { writable, get } from 'svelte/store'

const STORAGE_KEY = 'viet-tutor-progress'

function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return { completedLessons: [], currentLesson: null }
}

function createProgressStore() {
  const store = writable(loadProgress())

  store.subscribe(value => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch {}
  })

  return {
    subscribe: store.subscribe,
    set: store.set,
    update: store.update,
    completeLesson(lessonId) {
      store.update(p => ({
        ...p,
        completedLessons: p.completedLessons.includes(lessonId)
          ? p.completedLessons
          : [...p.completedLessons, lessonId],
      }))
    },
    isCompleted(lessonId) {
      return get(store).completedLessons.includes(lessonId)
    },
    reset() {
      store.set({ completedLessons: [], currentLesson: null })
      localStorage.removeItem(STORAGE_KEY)
    },
  }
}

export const progress = createProgressStore()
