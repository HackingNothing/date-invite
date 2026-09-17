import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Blossoms } from '../components/Decorations'
import { PageCard, PageShell } from '../components/Layout'
import { invitation } from '../content'

const BUTTON_W = 110
const BUTTON_H = 44
const FLEE_RADIUS = 90
const LERP = 0.12

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function Home() {
  const navigate = useNavigate()
  const slotRef = useRef<HTMLDivElement>(null)
  const noRef = useRef<HTMLButtonElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const pointer = useRef({ x: -9999, y: -9999 })
  const ready = useRef(false)
  const frame = useRef(0)

  useEffect(() => {
    const placeAtSlot = () => {
      if (!slotRef.current) return
      const rect = slotRef.current.getBoundingClientRect()
      pos.current = { x: rect.left, y: rect.top }
      target.current = { x: rect.left, y: rect.top }
      ready.current = true
      if (noRef.current) {
        noRef.current.style.left = `${rect.left}px`
        noRef.current.style.top = `${rect.top}px`
        noRef.current.style.opacity = '1'
      }
    }
    placeAtSlot()
    const onMove = (event: PointerEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY }
    }
    const tick = () => {
      if (ready.current && noRef.current) {
        const mouse = pointer.current
        const current = pos.current
        const cx = current.x + BUTTON_W / 2
        const cy = current.y + BUTTON_H / 2
        const dx = cx - mouse.x
        const dy = cy - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < FLEE_RADIUS) {
          const angle = Math.atan2(dy, dx)
          const push = FLEE_RADIUS + 8
          const nextX = mouse.x + Math.cos(angle) * push - BUTTON_W / 2
          const nextY = mouse.y + Math.sin(angle) * push - BUTTON_H / 2
          target.current = {
            x: clamp(nextX, 0, window.innerWidth - BUTTON_W),
            y: clamp(nextY, 0, window.innerHeight - BUTTON_H),
          }
        }
        const nx = current.x + (target.current.x - current.x) * LERP
        const ny = current.y + (target.current.y - current.y) * LERP
        pos.current = { x: nx, y: ny }
        noRef.current.style.left = `${nx}px`
        noRef.current.style.top = `${ny}px`
      }
      frame.current = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('resize', placeAtSlot)
    frame.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', placeAtSlot)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  const flingAway = (clientX: number, clientY: number) => {
    const angle = Math.random() * Math.PI * 2
    const distance = 160 + Math.random() * 180
    target.current = {
      x: clamp(clientX + Math.cos(angle) * distance - BUTTON_W / 2, 0, window.innerWidth - BUTTON_W),
      y: clamp(clientY + Math.sin(angle) * distance - BUTTON_H / 2, 0, window.innerHeight - BUTTON_H),
    }
  }

  return (
    <PageShell>
      <Blossoms />
      <PageCard>
        <div style={{ marginBottom: '1.2rem' }}>
          <img src={invitation.photoUrl} alt={invitation.photoAlt} width={120} height={120} style={{ width: 120, height: 120, borderRadius: 20, objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 4px 20px rgba(244,143,177,0.3)' }} />
        </div>
        <h1 className="page-heading" style={{ fontSize: '1.7rem', marginBottom: '1.8rem' }}>🌸 {invitation.headline} 🌸</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-yes" onClick={() => navigate('/yay')}>{invitation.yesLabel}</button>
          <div ref={slotRef} style={{ width: BUTTON_W, height: BUTTON_H, visibility: 'hidden', flexShrink: 0 }} />
        </div>
      </PageCard>
      <button ref={noRef} className="btn-no" type="button" tabIndex={-1} aria-hidden="true" style={{ position: 'fixed', left: 0, top: 0, opacity: 0, zIndex: 50 }} onPointerDown={(event) => { event.preventDefault(); event.stopPropagation(); pointer.current = { x: event.clientX, y: event.clientY }; flingAway(event.clientX, event.clientY) }} onClick={(event) => event.preventDefault()} onContextMenu={(event) => event.preventDefault()}>{invitation.noLabel}</button>
    </PageShell>
  )
}
