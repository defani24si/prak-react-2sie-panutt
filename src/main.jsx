import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TugasPert3 from './tugaspert3/FormBudget.jsx'

const root = createRoot(document.getElementById('root'))
const pathname = window.location.pathname

const element = pathname === '/tugaspert3' || pathname === '/tugaspert3/'
  ? (
    <StrictMode>
      <TugasPert3 />
    </StrictMode>
  ) : (
    <StrictMode>
      <App />
    </StrictMode>
  )

root.render(element)
