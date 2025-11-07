import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'  <-- ADD // HERE
//import App from './App.jsx'
import LoginForm from './pages/loginpages/studentlogin.jsx'
import Homepage from './pages/loginpages/homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm/>
    {/* <Homepage/> */}
  </StrictMode>,
)