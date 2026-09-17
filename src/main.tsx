import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.tsx'
import { InvitationProvider } from './context/InvitationContext.tsx'
import './index.css'

const basename =
  import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '')

const Router = import.meta.env.PROD ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename={import.meta.env.PROD ? undefined : basename}>
      <InvitationProvider>
        <App />
      </InvitationProvider>
    </Router>
  </StrictMode>,
)
