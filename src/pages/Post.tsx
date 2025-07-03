import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Postget from '../../services/postGet'

function Post() {
  const { id } = useParams()
  if (id) {
    return (
      <div>Publicacion con el id: {id}</div>
    )
  } else {
    return (

      <div>Publicaciones</div>
    )
  }
}

export default Post