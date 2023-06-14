import Map from '../components/Map'
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../helper/utility';
import PageCard from '../components/PageCard';

const Publicar = () => {
	return (
		<PageCard title={'Registro de Reporte'}>
			<p>Elija ubicación o zona cercana donde vio la mascota por última vez * :</p>
			<Map />

			<form className='my-5'>
				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Tipo de reporte */}
					<div>
						<label htmlFor="tipoReporte" className='form-label fw-bold'>
							Tipo de reporte: *
						</label>

						<select className="form-select" >
							<option value="perdido">Perdido</option>
							<option value="avistado">Avistado</option>
							<option value="retenido">Retenido</option>
							<option value="otro">Otro</option>
						</select>

					</div>

					{/* Titulo de reporte */}
					<div>
						<label htmlFor="tituloReporte" className='form-label fw-bold'>
							Titulo de reporte: *
						</label>
						<input id='tituloReporte' type="text" className='form-control' placeholder='Ejemplo: Perro con collar encontrado barrio San Vicente' />
					</div>
				</div>


				{/* Info reporte */}
				<ul className='m-0 mt-3 small text-secondary'>
					<li><strong>Perdido:</strong> Si perdiste o alguien perdió su mascota y quieres reportarla como perdida.</li>
					<li><strong>Avistado:</strong> Si viste una mascota que parecía perdida, pero no pudiste retenerla.</li>
					<li><strong>Retenido:</strong> Si encontraste una mascota y pudiste retenerla o sabes de alguien que la tiene retenida.</li>
					<li><strong>Otro:</strong> Otro tipo de reporte.</li>
				</ul>

				<div className='row gy-3'>
					{/* Descripcion de reporte */}
					<div>
						<label htmlFor="descripcionReporte" className='form-label fw-bold'>
							Descripción de reporte: *
						</label>
						<textarea rows={4} id='descripcionReporte' className='form-control' placeholder="Ejemplo: Encontré un perro blanco con collar, creo que es una mezcla de caniche, parece asustado y no pude retenerlo." />
					</div>

					{/* Foto */}
					<div>
						<label htmlFor="foto" className='form-label fw-bold'>
							Foto: *
						</label>
						<input type='file' id='foto' className='form-control' />
						<p className='mb-0 mt-2 small text-secondary'>Se necesita una imagen de la mascota para evitar confusiones y que sea más sencillo reconocerla</p>
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Nombre de contacto */}
					<div>
						<label htmlFor="nombreContacto" className='form-label fw-bold'>
							Nombre de contacto:
						</label>
						<input type='text' id='nombreContacto' className='form-control' placeholder='Ejemplo: Juan Irala' />
					</div>
					
					{/* Telefono de contacto */}
					<div>
						<label htmlFor="telefonoContacto" className='form-label fw-bold'>
							Teléfono de contacto:
						</label>
						<input type='text' id='telefonoContacto' className='form-control' placeholder='Ejemplo: +595990123456' />
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Especie */}
					<div>
						<label htmlFor="especie" className='form-label fw-bold'>
							Especie: *
						</label>
						<select id="especie" className='form-select'>
							<option value="perro">Perro</option>
							<option value="gato">Gato</option>
							<option value="otro">Otro</option>
						</select>
					</div>
					
					{/* Edad aproximada */}
					<div>
						<label htmlFor="edad" className='form-label fw-bold'>
							Edad aproximada:
						</label>
						<input type='number' id='edad' min={0} className='form-control' placeholder='Ejemplo: +595990123456' />
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Sexo */}
					<div >
						<label htmlFor="sexo" className='form-label fw-bold'>
							Sexo: *
						</label>
						<select id="sexo" className='form-select'>
							<option value="macho">Macho</option>
							<option value="hembra">Hembra</option>
							<option value="desconocido">Desconocido</option>
						</select>
					</div>
					
					{/* Ultima vez visto */}
					<div >
						<label htmlFor="ultimoVisto" className='form-label fw-bold'>
							Ultima vez visto: *
						</label>
						<input type='date' id='ultimoVisto' className='form-control' />
					</div>
				</div>

				<div className='row gy-3'>
					{/* Resumen de ubicación */}
					<div >
						<label htmlFor="resumenUbicacion" className='form-label fw-bold'>
							Resumen de ubicación: *
						</label>
						<input type='text' id='resumenUbicacion' className='form-control' placeholder='Ejemplo: Árboles, Paso de la Patria, Hipódromo, Asuncion, Región Oriental, 1906, Paraguay' />
					</div>
				</div>


				<div className="form-check form-check-reverse text-start m-3">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Acepto los <Link to={APP_ROUTES.TERMS}>Términos de uso</Link>: *
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					</label>
				</div>

				<span className='rounded-pill bg-warning p-1 small m-3'>* Campos requeridos</span>

				<div className='d-grid mx-3'>
					<button type='submit' className='btn btn-success btn-lg mt-2'>Publicar</button>
				</div>

			</form>
		</PageCard>

	)
}

export default Publicar