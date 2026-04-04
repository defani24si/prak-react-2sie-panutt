import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TugasPert3 from './tugaspert3/FormBudget.jsx'
import BiodataDiri from './latihanp2/BiodataDiri'

const root = createRoot(document.getElementById('root'))
const pathname = window.location.pathname

let componentToRender

if (pathname === '/tugaspert3' || pathname === '/tugaspert3/') {
  componentToRender = <TugasPert3 />
} else if (pathname === '/biodata') {
  componentToRender = <BiodataDiri />
} else {
  componentToRender = <App />
}

root.render(
  <StrictMode>
    {componentToRender}
  </StrictMode>
)