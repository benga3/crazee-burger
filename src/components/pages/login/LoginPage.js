import LoginForm from "./LoginForm";
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
  //background-color: beige;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;



.ton-element {
    position: relative;
    isolation: isolate;
}

::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("/images/burger-fries-background.jpg") center / cover no-repeat;
        z-index: -1;
        background-blend-mode: darken;
    pointer-events: none;
}
`;