import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const routeTo = useNavigate()
  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={ () => routeTo('/')}>Retouner à la page d'accueil</button>
      </div>
  )
}
