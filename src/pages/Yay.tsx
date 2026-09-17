import { useNavigate } from 'react-router-dom'
import { Confetti, Sparkles } from '../components/Decorations'
import { PageCard, PageShell } from '../components/Layout'
import { invitation } from '../content'

export function Yay() {
  const navigate = useNavigate()
  return (
    <PageShell gradient="yay">
      <Confetti />
      <Sparkles />
      <PageCard style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ width: 100, height: 100, borderRadius: 20, background: '#e53935', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', margin: '0 auto', boxShadow: '0 4px 20px rgba(229,57,53,0.3)' }}>🧽</div>
        </div>
        <h1 className="page-heading" style={{ fontSize: '1.9rem', color: '#6a1b4d', fontWeight: 900, lineHeight: 1.2, marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{invitation.yayTitle}</h1>
        <p style={{ color: '#9e4a6a', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{invitation.yaySub}</p>
        <button className="btn-next" onClick={() => navigate('/date')}>{invitation.yayCta}</button>
      </PageCard>
    </PageShell>
  )
}
