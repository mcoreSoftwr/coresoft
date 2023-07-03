import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css';
import { Portfolio } from './Portfolio';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)
