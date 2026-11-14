import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderPage() {

  const routeTo = useNavigate()
  return (
    <div>
      <h1>OrderPage</h1>
      <button onClick={ () => routeTo('/')}>Deconnexion</button>
      </div>
  )
}
