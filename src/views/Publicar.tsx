import Map from '../components/Map'
import { Link } from 'react-router-dom';
import { API_ROUTES, APP_ROUTES } from '../helper/utility';
import PageCard from '../components/PageCard';
import { useEffect, useState } from 'react';
import axios from 'axios'


const Publicar = () => {

	interface ILatLng {
		lat: number,
		lng: number
	}

	const REPORT_TYPES = ['Perdido', 'Avistado', 'Retenido', 'Otro']
	const SPECIES = ['Perro', 'Gato', 'Otro']
	const SEX = ['Macho', 'Hembra', 'Desconocido']

	const [report, setReport] = useState({
		report_type: REPORT_TYPES[0].toLowerCase(),
		title: '',
		description: '',
		picture: '',
		name: '',
		phone: '',
		specie: SPECIES[0].toLowerCase(),
		age: '',
		sex: SEX[0].toLowerCase(),
		ubication_resume: '',
		last_time_seen: '',
		accept_terms: false,
		country: '',
		postal_code: '',
		city: '',
		address: '',
		latitude: '',
		longitude: ''
	})

	const [currentPosition, setCurrentPosition] = useState<ILatLng>({ lat: 0, lng: 0 })

	useEffect(() => {
		if (currentPosition !== null) {
			completeUbicationWidgets(currentPosition.lat, currentPosition.lng)
		}
	}, [currentPosition])


	function completeUbicationWidgets(latitude: any, longitude: any) {
		axios.get("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + latitude + "&lon=" + longitude)
			.then(response => {
				const data = response.data
				if (data.display_name) {
					setReport({
						...report,
						ubication_resume: data.display_name,
						country: data.address.country,
						city: data.address.city,
						postal_code: data.address.postcode,
						address: data.address.road,
						latitude,
						longitude
					})
				}
			})
			.catch(error => console.error(error))
	}


	const handleChange = (event: any) => {
		const { id, value, files } = event.target
		setReport({ ...report, [id]: files ? files[0] : value })
	}

	const onSubmitHandler = (event: any) => {
		event.preventDefault();

		console.log(report)

		const config = {
			headers: {
				'Content-Type': `multipart/form-data;`,
			}
		}

		// Send data
		axios.post(API_ROUTES.PUBLICAR_MASCOTA, report, config)
			.then(response => console.log(response))
			.catch(error => console.error("Error en post", error))

	}


	return (
		<PageCard title={'Publicar Reporte'}>
			<p>Elija ubicación o zona cercana donde vio la mascota por última vez * :</p>
			<Map currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} click={true} />

			<form className='my-5' onSubmit={onSubmitHandler}>
				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Tipo de reporte */}
					<div>
						<label htmlFor="report_type" className='form-label fw-bold'>
							Tipo de reporte: *
						</label>

						<select id='report_type' value={report.report_type} className="form-select" required onChange={handleChange}>
							{REPORT_TYPES.map((item, index) => (
								<option key={index} value={item.toLowerCase()} disabled>{item}</option>
							))}
						</select>

					</div>

					{/* Titulo de reporte */}
					<div>
						<label htmlFor="title" className='form-label fw-bold'>
							Titulo de reporte: *
						</label>
						<input value={report.title} required onChange={handleChange} id='title' type="text" className='form-control' placeholder='Ejemplo: Perro con collar encontrado barrio San Vicente' />
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
						<label htmlFor="description" className='form-label fw-bold'>
							Descripción de reporte: *
						</label>
						<textarea value={report.description} required onChange={handleChange} rows={4} id='description' className='form-control' placeholder="Ejemplo: Encontré un perro blanco con collar, creo que es una mezcla de caniche, parece asustado y no pude retenerlo." />
					</div>

					{/* Foto */}
					<div>
						<label htmlFor="picture" className='form-label fw-bold'>
							Foto: *
						</label>
						<input required onChange={handleChange} type='file' id='picture' className='form-control' />
						<p className='mb-0 mt-2 small text-secondary'>Se necesita una imagen de la mascota para evitar confusiones y que sea más sencillo reconocerla</p>
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Nombre de contacto */}
					<div>
						<label htmlFor="name" className='form-label fw-bold'>
							Nombre de contacto:
						</label>
						<input value={report.name} onChange={handleChange} type='text' id='name' className='form-control' placeholder='Ejemplo: Juan Irala' />
					</div>

					{/* Telefono de contacto */}
					<div>
						<label htmlFor="phone" className='form-label fw-bold'>
							Teléfono de contacto:
						</label>
						<input value={report.phone} onChange={handleChange} type='text' id='phone' className='form-control' placeholder='Ejemplo: +595990123456' />
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Especie */}
					<div>
						<label htmlFor="specie" className='form-label fw-bold'>
							Especie: *
						</label>
						<select value={report.specie} id="specie" className='form-select' required onChange={handleChange}>
							{SPECIES.map((item, index) => (
								<option key={index} value={item.toLowerCase()} disabled>{item}</option>
							))}
						</select>
					</div>

					{/* Edad aproximada */}
					<div>
						<label htmlFor="age" className='form-label fw-bold'>
							Edad aproximada:
						</label>
						<input value={report.age} required onChange={handleChange} type='number' id='age' min={0} className='form-control' />
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 gy-3'>
					{/* Sexo */}
					<div >
						<label htmlFor="sex" className='form-label fw-bold'>
							Sexo: *
						</label>
						<select value={report.sex} id="sex" className='form-select' required onChange={handleChange}>
							{SEX.map((item, index) => (
								<option key={index} value={item.toLowerCase()} disabled>{item}</option>
							))}
						</select>
					</div>

					{/* Ultima vez visto */}
					<div >
						<label htmlFor="last_time_seen" className='form-label fw-bold'>
							Ultima vez visto: *
						</label>
						<input value={report.last_time_seen} required onChange={handleChange} type='date' id='last_time_seen' className='form-control' />
					</div>
				</div>

				<div className='row gy-3'>
					{/* Resumen de ubicación */}
					<div >
						<label htmlFor="ubication_resume" className='form-label fw-bold'>
							Resumen de ubicación: *
						</label>
						<input value={report.ubication_resume} required onChange={handleChange} type='text' id='ubication_resume' className='form-control' placeholder='Ejemplo: Árboles, Paso de la Patria, Hipódromo, Asuncion, Región Oriental, 1906, Paraguay' />
					</div>
				</div>


				<div className="form-check form-check-reverse text-start m-3">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Acepto los <Link to={APP_ROUTES.TERMS}>Términos de uso</Link>: *
						<input id='accept_terms' onChange={(e) => setReport({ ...report, [e.target.id]: !report.accept_terms })} className="form-check-input" type="checkbox" checked={report.accept_terms} />
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