import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { BsPersonCircle } from "react-icons/bs";
import styled from 'styled-components';
import { IoChevronForward } from 'react-icons/io5';


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
        
          <button className='button-with-icon'>
            Accédez à votre espace
            <IoChevronForward className='icon'/>
          </button>
        
      
      </form>
    </LoginFormStiled>
  )
}



const LoginFormStiled = styled.div`
  text-aligne: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;
  text-transform: uppercase;

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

  .button-with-icon {
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    with-space: noWrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #ff9f1b;
      color: #ff9f1b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }

  }


`;

