import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
        <h1>crazee</h1>
        <img src="/images/F03 logo-orange.png" alt="Logo crazee"/>
     <h1>burger</h1>
     </LogoStyled>
  )
}
const LogoStyled = styled.div`
  color: white;
  display: flex;
  align-items: center;
  transform: scale(2.5);

h1 {
    font-family: "Amatic SC", cursive;
    font-weight: 700;
    font-style: Bold;
    font-size: 36px;
    line-height: 1em;
    letter-spacing: 1.5px;
    text-align: center;
    color: #ffa01B;
    text-transform: uppercase;
    display: inline;
}

img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    margin: 0 5px;

}

`;