import React from 'react'
import Map from '../components/Map'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../helper/utility';
import PageCard from '../components/PageCard';

const Publicar = () => {
	return (
		<PageCard title={'Registro de Reporte'}>
			<p>Elija ubicación o zona cercana donde vio la mascota por última vez * :</p>
			<Map />

			<form className='my-5'>
				{/* Tipo de reporte */}
				<div className='mb-3'>
					<label htmlFor="tipoReporte" className='form-label'>
						Tipo de reporte: *

						<OverlayTrigger
							placement='auto-end'
							overlay={
								<Popover id={`popover-info`} className='w-100'>
									<Popover.Header as="h3">Tipo de Reporte</Popover.Header>
									<Popover.Body>
										<ul className='ps-2'>
											<li><strong>Perdido:</strong> Si perdiste o alguien perdió su mascota y quieres reportarla como perdida.</li>
											<li><strong>Avistado:</strong> Si viste una mascota que parecía perdida, pero no pudiste retenerla.</li>
											<li><strong>Retenido:</strong> Si encontraste una mascota y pudiste retenerla o sabes de alguien que la tiene retenida.</li>
											<li><strong>Otro:</strong> Otro tipo de reporte.</li>
										</ul>
									</Popover.Body>
								</Popover>
							}
						>
							<Button variant="ligth"><i className='bi bi-info-circle fs-5'></i></Button>
						</OverlayTrigger>
					</label>

					<select className="form-select" >
						<option value="perdido">Perdido</option>
						<option value="avistado">Avistado</option>
						<option value="retenido">Retenido</option>
						<option value="otro">Otro</option>
					</select>

				</div>

				{/* Titulo de reporte */}
				<div className='mb-3'>
					<label htmlFor="tituloReporte" className='form-label'>
						Titulo de reporte: *
					</label>
					<input id='tituloReporte' type="text" className='form-control' placeholder='Ejemplo: Perro con collar encontrado barrio San Vicente' />
				</div>

				{/* Descripcion de reporte */}
				<div className='mb-3'>
					<label htmlFor="descripcionReporte" className='form-label'>
						Descripción de reporte: *
					</label>
					<textarea rows={4} id='descripcionReporte' className='form-control' placeholder="Ejemplo: Encontré un perro blanco con collar, creo que es una mezcla de caniche, parece asustado y no pude retenerlo." />
				</div>

				{/* Foto */}
				<div className='mb-3'>
					<label htmlFor="foto" className='form-label'>
						Foto: *
					</label>
					<input type='file' id='foto' className='form-control' />
					<p className='mb-0 mt-2 small text-secondary'>Se necesita una imagen de la mascota para evitar confusiones y que sea más sencillo reconocerla</p>
				</div>

				{/* Nombre de contacto */}
				<div className='mb-3'>
					<label htmlFor="nombreContacto" className='form-label'>
						Nombre de contacto:
					</label>
					<input type='text' id='nombreContacto' className='form-control' placeholder='Ejemplo: Juan Irala' />
				</div>

				{/* Telefono de contacto */}
				<div className='mb-3'>
					<label htmlFor="telefonoContacto" className='form-label'>
						Teléfono de contacto:
					</label>
					<input type='text' id='telefonoContacto' className='form-control' placeholder='Ejemplo: +595990123456' />
				</div>

				{/* Especie */}
				<div className='mb-3'>
					<label htmlFor="especie" className='form-label'>
						Especie: *
					</label>
					<select id="especie" className='form-select'>
						<option value="perro">Perro</option>
						<option value="gato">Gato</option>
						<option value="otro">Otro</option>
					</select>
				</div>

				{/* Edad aproximada */}
				<div className='mb-3'>
					<label htmlFor="edad" className='form-label'>
						Edad aproximada:
					</label>
					<input type='number' id='edad' min={0} className='form-control' placeholder='Ejemplo: +595990123456' />
				</div>

				{/* Sexo */}
				<div className='mb-3'>
					<label htmlFor="sexo" className='form-label'>
						Sexo: *
					</label>
					<select id="sexo" className='form-select'>
						<option value="macho">Macho</option>
						<option value="hembra">Hembra</option>
						<option value="desconocido">Desconocido</option>
					</select>
				</div>

				{/* Resumen de ubicación */}
				<div className='mb-3'>
					<label htmlFor="resumenUbicacion" className='form-label'>
						Resumen de ubicación: *
					</label>
					<input type='text' id='resumenUbicacion' className='form-control' placeholder='Ejemplo: Árboles, Paso de la Patria, Hipódromo, Asuncion, Región Oriental, 1906, Paraguay' />
				</div>

				<div className='mb-3'>
					<label htmlFor="ultimoVisto" className='form-label'>
						Ultima vez visto: *
					</label>
					<input type='date' id='ultimoVisto' className='form-control' />
				</div>

				<div className="form-check form-check-reverse text-start mb-3">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Acepto los <Link to={APP_ROUTES.TERMS}>Términos de uso</Link>: *
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					</label>
				</div>

				<span className='rounded-pill bg-warning p-1 small'>* Campos requeridos</span>

				<div className='d-grid'>
					<button type='submit' className='btn btn-success mt-4'>Publicar</button>
				</div>

			</form>
		</PageCard>

	)
}

export default Publicar