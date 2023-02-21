import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

render(
  <React.StrictMode>
    <h1>To Do App/Ajax Yapılacaklar Listesi</h1>
    <App />
  </React.StrictMode>
  , document.getElementById('root')
)
