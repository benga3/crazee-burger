import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OrderPage() {

  // state
  const routeTo = useNavigate()
  const parameters = useParams()
  console.log("params",parameters)
  

  //comportements


  //render
  return (
    <div>
      <h1>Bonjour {parameters.userName}</h1>
      <button onClick={ () => routeTo('/')}>Deconnexion</button>
      </div>
  )
}
