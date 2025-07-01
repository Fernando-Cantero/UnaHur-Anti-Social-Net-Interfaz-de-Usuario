import React from 'react'
import { useParams } from 'react-router-dom'

function Etiquetas() {
  const { id } = useParams()
  if(id){
    return (
      <div>Etiqueta con el id: {id}</div>
    )
  }else{
    return (
    <div>Etiquetas</div>
  )
  }
}

export default Etiquetas