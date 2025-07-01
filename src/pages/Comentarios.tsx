import React from 'react'
import { useParams } from 'react-router-dom'

function Comentarios() {
  const { id } = useParams()
  if(id){
    return (
      <div>Comentario con el id: {id}</div>
    )
  }else{
    return (
    <div>Comentarios</div>
  )
  }
}

export default Comentarios