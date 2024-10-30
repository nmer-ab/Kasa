import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { Router as Routes } from './routes/router'

/**
 * Ce code configure l'application React et définit des styles de base pour
  une mise en page responsive et accessible.
 *
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Routes />
    </StrictMode>
)
