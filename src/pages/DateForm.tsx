import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageCard, PageShell } from '../components/Layout'
import { useInvitation } from '../context/InvitationContext'
import { invitation, timeSlots } from '../content'

export function DateForm() {
  const navigate = useNavigate()
  const { day, time, setDay, setTime } = useInvitation()
  const [shake, setShake] = useState(false)
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const ready = Boolean(day && time)
  const onSubmit = () => {
    if (!ready) {
      setShake(true)
      window.setTimeout(() => setShake(false), 600)
      return
    }
    navigate('/food')
  }
  return (
    <PageShell>
      <PageCard className={shake ? 'wobble-anim' : ''}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📅🐾</div>
        <h1 className="page-heading" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{invitation.dateTitle}</h1>
        <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
          <label className="field-label" htmlFor="date-day">Pick a Day 📅</label>
          <input id="date-day" type="date" value={day} min={today} required onChange={(event) => setDay(event.target.value)} />
        </div>
        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          <label className="field-label" htmlFor="date-time">What Time? ⏰</label>
          <select id="date-time" value={time} required onChange={(event) => setTime(event.target.value)}>
            <option value="">Select a time...</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <button className="btn-next" onClick={onSubmit} style={{ opacity: ready ? 1 : 0.6, width: '100%' }}>{invitation.dateCta}</button>
      </PageCard>
    </PageShell>
  )
}
