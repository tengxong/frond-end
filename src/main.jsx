import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './routes/Index'
// import App from './App'
import './index.css'

window.$api='https://backend-production.vercel.app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
)
