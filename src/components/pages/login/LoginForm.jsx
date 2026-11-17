import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import OrderPage from '../order/OrderPage'


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
    <LoginFormStiled>
      <form action="submit" onSubmit={handleSubmit}>
        <h1> Bienvenue chez nous !</h1>
        <hr />
        <h2> Connectez-vous</h2>
        <input value={userName} onChange={handleInputChange} type="text" placeholder="Entrez votre prénom ..." required />
        <button>Accédez à votre espace</button>
      
      </form>
    </LoginFormStiled>
  )
}

import styled from 'styled-components';

const LoginFormStiled = styled.div`
  
  background-color: red;
  text-aligne: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1px solid #ffa01B;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 40px;
  }

   h2 {
    color: white;
    font-size: 36px;
    margin: 20px 10px 10px;
  }


`;

