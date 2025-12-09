import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {
  PlayerContext,
  PlayerContextProvader,
} from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvader>
        <App />
      </PlayerContextProvader>
    </BrowserRouter>
  </StrictMode>
)
