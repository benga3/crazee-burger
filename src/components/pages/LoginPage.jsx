import React, { useState } from 'react'

export default function LoginPage() {
  //state (étatS et donnéeS)
  const [prenom,setPrenom] = useState("")


  //comportementS
  const handleSubmit = (event) => { 
    alert(`Bonjour ${prenom}`)
    setPrenom("")

   }
   const handleInputChange = (event) => { 
    setPrenom(event.target.value)
    }

  //render affichage
  return (
    <div>
      <h1> Bienvenue chez nous</h1>
      <br/>
      <h2> Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type="text" placeholder='Entrez votre prénom ...'  required/>
        <button> Accédez à votre espace</button>
      </form>
    </div>
  )
}

