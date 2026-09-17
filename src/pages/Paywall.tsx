import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageCard, PageShell } from '../components/Layout'
import { invitation } from '../content'

export function Paywall() {
  const navigate = useNavigate()
  const [busy, setBusy] = useState(false)
  const pretendToPay = () => {
    if (busy) return
    setBusy(true)
    window.setTimeout(() => navigate('/paid'), 900)
  }
  return (
    <PageShell>
      <PageCard style={{ maxWidth: 420 }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💳</div>
        <h1 className="page-heading" style={{ fontSize: '1.6rem', lineHeight: 1.3, marginBottom: '0.5rem' }}>{invitation.paywallTitle}</h1>
        <p style={{ color: '#b06080', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.6 }}>{invitation.paywallBody}</p>
        <div style={{ background: '#fdf0f5', border: '1.5px solid #f8bbd9', borderRadius: 16, padding: '1.2rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#8b2252', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Georgia, serif' }}>{invitation.productName}</span>
            <span style={{ color: '#e91e8c', fontWeight: 900, fontSize: '1.4rem' }}>${invitation.productPrice}</span>
          </div>
          <p style={{ color: '#b06080', fontSize: '0.78rem', marginTop: '0.4rem', marginBottom: 0 }}>{invitation.productFinePrint}</p>
        </div>
        <button className="btn-yes" onClick={pretendToPay} disabled={busy} style={{ width: '100%', fontSize: '1.05rem', opacity: busy ? 0.7 : 1 }}>{busy ? 'confirming...' : invitation.payCta}</button>
        <button className="btn-ghost" onClick={() => navigate('/letter')}>{invitation.goBack}</button>
      </PageCard>
    </PageShell>
  )
}

export function Paid() {
  return (
    <PageShell>
      <PageCard>
        <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>🎉</div>
        <h1 className="page-heading" style={{ fontSize: '1.7rem', marginBottom: '0.6rem' }}>{invitation.paidTitle}</h1>
        <p style={{ color: '#b06080', fontSize: '0.95rem', lineHeight: 1.6 }}>{invitation.paidBody}</p>
        <div style={{ marginTop: '1rem', fontSize: '1.5rem', color: '#f48fb1' }}>♥ ♥ ♥</div>
        <p style={{ color: '#c9a0b0', fontSize: '0.78rem', fontStyle: 'italic', marginTop: '1rem' }}>{invitation.paidJoke}</p>
      </PageCard>
    </PageShell>
  )
}
