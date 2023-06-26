import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../helper/utility'
import PageCard from '../components/PageCard'
import { useEffect } from 'react'

const Terminos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <PageCard title={'Terminos de Uso'}>
      <h3 className='my-3 display-inline-block border-3 border-bottom border-blue-subtle d-inline-block'>Descargo de responsabilidad</h3>
      <div className='ms-lg-4'>
        <p>Al acceder y utilizar la página web y a la base de datos de Busca Mascota, el usuario reconoce el efecto legalmente vinculante de las siguientes condiciones de uso y
          de la cláusula de descargo de responsabilidad.
          Además afirma que TODA la información proporcionada es verídica y comprende que será publicada en las redes sociales de Busca Mascota (Twitter, Facebook, e Instagram),
          de manera a poder llegar a la mayor cantidad de personas.
        </p>
        <p>Quedan expresamente excluidas aquellas demandas de responsabilidad contra Busca Mascota que se refieran a daños directos o indirectos de índole material o intelectual
          y que hayan sido causados por el acceso a esta página web y a sus contenidos y/o a otras páginas web enlazadas en la misma y a sus contenidos, así como por la utilización
          o la no utilización de la información representada y/o por la utilización de información errónea o incompleta.
        </p>
        <p>En caso de que el usuario no esté de acuerdo con estos términos de uso o haya realizado alguna publicación indebida en el pasado, no podrá acceder a la página web de Busca Mascota. </p>
      </div>
      <h3 className='my-3 display-inline-block border-3 border-bottom border-blue-subtle d-inline-block'>Información publicada en la página web y sus redes oficiales
      </h3>
      <div className='ms-lg-4'>
        <p>
          La información provista por Busca Mascota se basa exclusivamente en los aportes suministrados por los usuarios de la misma voluntarimente; por lo tanto,
          la responsabilidad acerca de la veracidad de los datos publicados en la presente lista pública corresponde a cada usuario que haga uso de ella.
        </p>
      </div>
      <h3 className='my-3 display-inline-block border-3 border-bottom border-blue-subtle d-inline-block'>Acerca de la propiedad intelectual</h3>
      <div className='ms-lg-4'>
        <p>El contenido de esta página web y los datos de Busca Mascota están distribuidos bajo la licencia
          <Link to="https://creativecommons.org/licenses/by-nc/4.0/"> CC BY-NC 4.0</Link>.
        </p>
        <p>
          El código fuente está distribuido bajo la licencia <Link to={APP_ROUTES.LINCENCE}>MIT</Link>.
        </p>
      </div>
    </PageCard>
  )
}

export default Terminos