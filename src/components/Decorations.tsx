import { useState } from 'react'

const blossoms = [
  { top: '8%', left: '5%', delay: '0s', size: '1.4rem', anim: 'float-anim' },
  { top: '15%', left: '88%', delay: '0.5s', size: '1rem', anim: 'float-anim-alt' },
  { top: '70%', left: '3%', delay: '1s', size: '1.2rem', anim: 'float-anim-slow' },
  { top: '80%', left: '90%', delay: '0.3s', size: '0.9rem', anim: 'float-anim' },
  { top: '40%', left: '92%', delay: '0.8s', size: '1.1rem', anim: 'float-anim-alt' },
  { top: '55%', left: '2%', delay: '1.2s', size: '1rem', anim: 'float-anim' },
  { top: '25%', left: '6%', delay: '0.4s', size: '0.8rem', anim: 'float-anim-slow' },
  { top: '90%', left: '45%', delay: '0.7s', size: '1rem', anim: 'float-anim-alt' },
  { top: '5%', left: '50%', delay: '1.5s', size: '0.9rem', anim: 'float-anim' },
]

export function Blossoms() {
  return (
    <>
      {blossoms.map((petal, i) => (
        <span key={i} className={`floating-deco ${petal.anim}`} style={{ top: petal.top, left: petal.left, fontSize: petal.size, animationDelay: petal.delay }}>🌸</span>
      ))}
    </>
  )
}

const CONFETTI_COLORS = ['#f48fb1', '#ce93d8', '#80deea', '#ffe082', '#a5d6a7', '#ef9a9a', '#b39ddb']

export function Confetti() {
  const [pieces] = useState(() =>
    Array.from({ length: 60 }, (_, id) => ({
      id,
      left: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      duration: 2.5 + Math.random() * 2.5,
      delay: Math.random() * 2,
      size: 8 + Math.random() * 10,
      shape: Math.random() > 0.5 ? '50%' : '2px',
    })),
  )
  return (
    <>
      {pieces.map((piece) => (
        <div key={piece.id} className="confetti-piece" style={{ left: `${piece.left}%`, top: -20, backgroundColor: piece.color, width: piece.size, height: piece.size, borderRadius: piece.shape, animationDuration: `${piece.duration}s`, animationDelay: `${piece.delay}s` }} />
      ))}
    </>
  )
}

const sparkles = [
  { top: '10%', left: '8%', char: '✨' },
  { top: '18%', left: '82%', char: '🎉' },
  { top: '75%', left: '5%', char: '✨' },
  { top: '80%', left: '88%', char: '🎊' },
  { top: '45%', left: '91%', char: '✨' },
  { top: '60%', left: '3%', char: '🎉' },
]

export function Sparkles() {
  return (
    <>
      {sparkles.map((item, i) => (
        <span key={i} className="floating-deco float-anim-alt" style={{ top: item.top, left: item.left, fontSize: '1.4rem', opacity: 0.8 }}>{item.char}</span>
      ))}
    </>
  )
}

const hearts = [
  { bottom: '15%', left: '18%', delay: '0s' },
  { bottom: '18%', left: '30%', delay: '0.3s' },
  { bottom: '12%', left: '55%', delay: '0.6s' },
  { bottom: '20%', left: '70%', delay: '0.9s' },
  { bottom: '14%', left: '80%', delay: '0.2s' },
]

export function FloatingHearts() {
  return (
    <>
      {hearts.map((heart, i) => (
        <span key={i} className="floating-deco float-anim-alt" style={{ bottom: heart.bottom, left: heart.left, top: 'auto', fontSize: '1.2rem', opacity: 0.7, animationDelay: heart.delay }}>♥</span>
      ))}
    </>
  )
}
