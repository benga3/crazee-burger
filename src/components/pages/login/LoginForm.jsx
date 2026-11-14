import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import OrderPage from '../OrderPage'


export default function LoginForm() {

  //state (étatS et donnéeS)
  const [userName, setUserName] = useState("")
  const navigate = useNavigate()


  //comportementS
  const handleSubmit = (event) => {
    event.preventDefault()
    //alert(`Bonjour ${userName}`)
    setUserName("")
    navigate(`order/${encodeURIComponent(userName)}`)

  }

  const handleInputChange = (event) => {
    setUserName(event.target.value)
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1> Bienvenue chez nous !</h1>
      <br />
      <h2> Connectez-vous</h2>
      <input value={userName} onChange={handleInputChange} type="text" placeholder="Entrez votre prénom ..." required />
      <button>Accédez à votre espace</button>
      
    </form>
  )
}
