import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { FoodLabel } from '../content'

export type InvitationState = {
  day: string
  time: string
  food: FoodLabel | null
}

const defaults: InvitationState = {
  day: '',
  time: '',
  food: null,
}

const STORAGE_KEY = 'date-invitation'

function loadState(): InvitationState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return defaults
    const parsed = JSON.parse(raw) as Partial<InvitationState>
    return { ...defaults, ...parsed }
  } catch {
    return defaults
  }
}

function saveState(state: InvitationState) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}

type InvitationContextValue = InvitationState & {
  setDay: (day: string) => void
  setTime: (time: string) => void
  setFood: (food: FoodLabel) => void
}

const InvitationContext = createContext<InvitationContextValue | null>(null)

export function InvitationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<InvitationState>(loadState)
  const value = useMemo<InvitationContextValue>(
    () => ({
      ...state,
      setDay: (day) => {
        setState((prev) => {
          const next = { ...prev, day }
          saveState(next)
          return next
        })
      },
      setTime: (time) => {
        setState((prev) => {
          const next = { ...prev, time }
          saveState(next)
          return next
        })
      },
      setFood: (food) => {
        setState((prev) => {
          const next = { ...prev, food }
          saveState(next)
          return next
        })
      },
    }),
    [state],
  )
  return (
    <InvitationContext.Provider value={value}>
      {children}
    </InvitationContext.Provider>
  )
}

export function useInvitation() {
  const ctx = useContext(InvitationContext)
  if (!ctx) throw new Error('useInvitation must be used inside InvitationProvider')
  return ctx
}
