import React from 'react'
import { createRoot } from 'react-dom/client'

const rootEID = ReactDOM.createRoot(document.getElementById('root'))
const root = createRoot(rootEID)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <h1>Hello</h1>
  </React.StrictMode>,
)