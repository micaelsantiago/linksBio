import React from 'react'
import ReactDOM from 'react-dom/client'
import Links from './components/Links/Links.tsx'
import Person from './components/Person/Person.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Person />
    <Links />
  </React.StrictMode>,
)
