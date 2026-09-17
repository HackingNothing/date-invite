import type { CSSProperties, ReactNode } from 'react'

type Gradient = 'pink' | 'yay'

const gradients: Record<Gradient, string> = {
  pink: 'linear-gradient(135deg, #fff0f5 0%, #fce4ec 50%, #f8f0ff 100%)',
  yay: 'linear-gradient(135deg, #fff8e1 0%, #fce4ec 60%, #f3e5f5 100%)',
}

export function PageShell({
  children,
  gradient = 'pink',
  overflowHidden = false,
}: {
  children: ReactNode
  gradient?: Gradient
  overflowHidden?: boolean
}) {
  const style: CSSProperties = {
    background: gradients[gradient],
    position: overflowHidden ? 'relative' : undefined,
    overflow: overflowHidden ? 'hidden' : undefined,
  }

  return (
    <div className="flex min-h-dvh w-full items-center justify-center px-4 py-10" style={style}>
      {children}
    </div>
  )
}

export function PageCard({
  children,
  className = '',
  style,
  animate = true,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  animate?: boolean
}) {
  return (
    <div className={`page-card ${animate ? 'fade-in-up' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}
