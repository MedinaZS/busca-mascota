import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../helper/utility'

const ListaAdopciones = () => {
  return (
    <div>ListaAdopciones
      <Link className='btn btn-primary' to={APP_ROUTES.PUBLICAR_ADOPCION}>Publicar adopcion</Link>
    </div>
  )
}

export default ListaAdopciones