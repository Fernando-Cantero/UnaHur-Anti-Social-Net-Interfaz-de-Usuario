import React from 'react'
import { useParams } from 'react-router-dom'

function Usuario() {
  const { id } = useParams()
  if (id) {
    return (
      <div>Usuarios con el id: {id}</div>
    )
  } else {
    return (
      <div>Usuarios</div>
    )
  }
}

export default Usuario