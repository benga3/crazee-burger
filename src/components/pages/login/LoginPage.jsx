import React, { useState } from 'react'
import  LoginForm  from "./LoginForm";
import styled from 'styled-components';
import Logo from '../../ui/Logo';

export default function LoginPage() {
  //state (étatS et donnéeS)
 


  //comportementS
 

  //render affichage
  return (
    
      <LoginPageStyled>
        <Logo/>
        <LoginForm/>
        </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  background-color: beige;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;