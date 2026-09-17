import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FloatingHearts } from '../components/Decorations'
import { PageCard, PageShell } from '../components/Layout'
import { invitation } from '../content'

export function Letter() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 100)
    return () => window.clearTimeout(id)
  }, [])
  return (
    <PageShell overflowHidden>
      <FloatingHearts />
      <PageCard animate={false} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
        <h1 className="page-heading" style={{ fontSize: '1.55rem', lineHeight: 1.35, marginBottom: '0.6rem' }}>{invitation.letterTitle}</h1>
        <p style={{ color: '#b06080', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '1.2rem', lineHeight: 1.5 }}>{invitation.letterPs}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginBottom: '1.2rem' }}>
          {['♥', '♥', '♥', '♥', '♥'].map((heart, i) => (
            <span key={i} className="float-anim-alt" style={{ color: '#f48fb1', fontSize: '1.1rem', animationDelay: `${i * 0.12}s` }}>{heart}</span>
          ))}
        </div>
        <button className="btn-yes" style={{ width: '100%' }} onClick={() => navigate('/paywall')}>{invitation.letterCta}</button>
      </PageCard>
    </PageShell>
  )
}
