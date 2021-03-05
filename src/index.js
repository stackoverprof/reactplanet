import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './pages/_app'
import reportWebVitals from './core/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
