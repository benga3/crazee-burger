import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import OrderPage from '../order/OrderPage'
import { BsPersonCircle } from "react-icons/bs";


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
        <div className='input-with-icon'>
          <BsPersonCircle className='icon' />
          <input value={userName} onChange={handleInputChange} type="text" placeholder="Entrez votre prénom ..." required />

        </div>
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
  .input-with-icon {
    border: 1px solid black;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18 px 24px;
    margin: 18px;
    .icon {
      border: none;
      margin-left: 8px;
      color: #92a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17171a;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
  }


`;

