import React from 'react'
import { useParams } from 'react-router-dom'

function Publicaciones() {
  const { id } = useParams()
  if(id){
    return (
      <div>Publicacion con el id: {id}</div>
    )
  }else{
    return (
    <div>Publicaciones</div>
  )
  }
}

export default Publicaciones