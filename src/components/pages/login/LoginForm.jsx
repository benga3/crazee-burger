import React , {useState} from 'react'


export default function LoginForm() {

  //state (étatS et donnéeS)
  const [prenom, setPrenom] = useState("")


  //comportementS
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${prenom}`)
    setPrenom("")

  }

  const handleInputChange = (event) => {
    setPrenom(event.target.value)
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1> Bienvenue chez nous !</h1>
      <br />
      <h2> Connectez-vous</h2>
      <input value={prenom} onChange={handleInputChange} type="text" placeholder="Entrez votre prénom ..." required />
      <button> Accédez à votre espace</button>
    </form>
  )
}
