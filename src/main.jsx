import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './latihanp3/tailwind.css'
import FormBudget from './latihanp3/FormBudget'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FormBudget/>
  </StrictMode>,
)
