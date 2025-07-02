import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Etiquetas() {

  const [etiquetas, setEtiquetas] = useState([])
  useEffect(()=> {
    async function obtenerEtiquetas() {
      try {
        const res = await fetch("http://localhost:3000/tags")
        const data = await res.json()
        setEtiquetas(data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerEtiquetas()
  },[])

  const { id } = useParams()
  const etiqueta = etiquetas.find(e => e.id === parseInt(id))
  if(id){
    return (
      <div>
        <h2>Etiqueta con el id: {id}</h2>
        {etiqueta ? (
          <p>{etiqueta.name}</p>
        ) : (
          <p>Cargando o no encontrada</p>
        )}
      </div>
    )
  }else{
    return (
    <div>
      <h2>Etiquetas</h2>
        <ul>
          {etiquetas.map(etiqueta => (
            <li key={etiqueta.id}>
              {etiqueta.name} - {etiqueta.id}
            </li>
          ))}
        </ul>
    </div>
  )
  }
}


export default Etiquetas