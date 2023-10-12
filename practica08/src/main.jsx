import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
//import './index.css'
import MiFieldSet from './MiFiledSet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <MiFieldSet titulo="Datos Personales" txt1="nombre" txt2="password"/>
  </React.StrictMode>,
)
