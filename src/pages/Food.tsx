import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageCard, PageShell } from '../components/Layout'
import { useInvitation } from '../context/InvitationContext'
import { foods, invitation, type FoodLabel } from '../content'

export function Food() {
  const navigate = useNavigate()
  const { food, setFood } = useInvitation()
  const [selected, setSelected] = useState<FoodLabel | null>(food)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])
  const pick = (label: FoodLabel) => {
    setSelected(label)
    setFood(label)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => navigate('/letter'), 600)
  }
  return (
    <PageShell>
      <PageCard>
        <h1 className="page-heading" style={{ fontSize: '1.7rem', marginBottom: '0.3rem' }}>{invitation.foodTitle}</h1>
        <p style={{ color: '#b06080', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{invitation.foodSub}</p>
        <div className="food-grid">
          {foods.map((item) => (
            <button key={item.label} type="button" className={`food-item ${selected === item.label ? 'selected' : ''}`} onClick={() => pick(item.label)}>
              <span className="food-emoji">{item.emoji}</span>
              <span className="food-label">{item.label}</span>
            </button>
          ))}
        </div>
      </PageCard>
    </PageShell>
  )
}
