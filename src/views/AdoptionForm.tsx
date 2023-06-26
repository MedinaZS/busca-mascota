import { useState } from "react";
import PageCard from "../components/PageCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ROUTES, APP_ROUTES } from "../helper/utility";
import Swal from 'sweetalert2';
import { FormEvent } from "react";



interface Report {
  name: { value: string; required: boolean };
  description: { value: string; required: boolean };
  specie: { value: string; required: boolean };
  age: { value: string; required: boolean };
  sex: { value: string; required: boolean };
  city: { value: string; required: boolean };
  country: { value: string; required: boolean };
  phone: { value: string; required: boolean };
  picture: { value: File | {}; required: boolean };
  accept_terms: { value: boolean; required: boolean };
}

const AdoptionForm = () => {
  const navigate = useNavigate();

  const SPECIES = ["Perro", "Gato", "Otro"];
  const SEX = ["Macho", "Hembra", "Desconocido"];
  
  const [report, setReport] = useState<Report>({
		name: { value: '', required: false },
		description: { value: '', required: true },
		specie: { value: SPECIES[0].toLowerCase(), required: true },
		age: { value: '', required: false },
		sex: { value: SEX[0].toLowerCase(), required: true },
		city: { value: '', required: true },
		country: { value: '', required: true },
		phone: { value: '', required: true },
		picture: { value: {}, required: true },
		accept_terms: { value: false, required: true },
	})

	const handleChange = (event: any) => {
		const { id, value, files } = event.target
		let currentValue = files ? files[0] : value
		if (id == 'accept_terms') currentValue = event.target.checked
		setReport({ ...report, [id]: { ...report[id as keyof typeof report], value: currentValue } })
	}

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  
    if (validateForm()) {
      let newReport: Record<string, string | boolean | File | {}> = {};
      // Create Form Data
      for (const property in report) {
        const value = report[property as keyof Report].value;
        newReport[property] = value;
      }
      // console.log(newReport)
  
      const config = {
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      };
  
      // Send data
      axios
        .post(API_ROUTES.PUBLICAR_ADOPCION, newReport, config)
        .then((response) => {
          // console.log(response)
          let id = response.data?.id;
          navigate(APP_ROUTES.EXITO_ADOPCION + id);
        })
        .catch((error) => console.log("Error en post", error));
    }
  };
  const validateForm = () => {
    for (const property in report) {
      const value = report[property as keyof typeof report].value;
      const required = report[property as keyof typeof report].required;
      if (required === true) {
        if (typeof value === "string" && value.trim() === "") {
          Swal.fire({ icon: "error", text: "Completa los campos requeridos" });
          return false;
        } else if (typeof value === "boolean" && value === false) {
          Swal.fire({ icon: "error", text: "Debes aceptar los términos de uso" });
          return false;
        } else if (typeof value === "object" && "name" in value && !value.name) {
          Swal.fire({
            icon: "error",
            text: "Completa los campos requeridos. La imagen es necesaria",
          });
          return false;
        }
      }
    }
    return true;
  };
  


  return (
    <PageCard title={"Publicar Adopción"}>
			<form className='my-5' onSubmit={onSubmitHandler}>
        <div className="row gy-3">
        {/* Nombre del animal */}
          <div>
          <label htmlFor="name" className="form-label fw-bold">
            Nombre del animal:
          </label>
          <input
            value={report.name.value}
            onChange={handleChange}
            id="name"
            type="text"
            className="form-control"
          />
          </div>
        </div>

        <div className="row gy-3">
        {/* Descripción de reporte */}
          <div>
          <label htmlFor="description" className="form-label fw-bold">
            Descripción de reporte: *
          </label>
          <input
            value={report.description.value}
            onChange={handleChange}
            id="description"
            type="text"
            className="form-control"
            placeholder="Ejemplo: Perro en adopción. Su pelaje es negro y está castrado."
          />
          </div>
        </div>

        <div className='row gy-3'>
					{/* Especie */}
					<div>
						<label htmlFor="specie" className='form-label fw-bold'>
							Especie: *
						</label>
						<select value={report.specie.value} id="specie" className='form-select' onChange={handleChange} >
							{SPECIES.map((item, index) => (
								<option key={index} value={item.toLowerCase()} >{item}</option>
							))}
						</select>
					</div>
        </div>

        <div className="row gy-3">
        {/* Edad aproximada */}
          <div>
          <label htmlFor="age" className="form-label fw-bold">
            Edad Aproximada: 
          </label>
          <input
            value={report.age.value}
            onChange={handleChange}
            id="age"
            type="number"
            className="form-control"
          />
          </div>
        </div>

        <div className='row gy-3'>
					{/* Sexo */}
					<div >
						<label htmlFor="sex" className='form-label fw-bold'>
							Sexo: *
						</label>
						<select value={report.sex.value} id="sex" className='form-select' onChange={handleChange} >
							{SEX.map((item, index) => (
								<option key={index} value={item.toLowerCase()} >{item}</option>
							))}
						</select>
          </div>
        </div>

        <div className="row gy-3">
        {/* Ciudad */}
          <div>
          <label htmlFor="city" className="form-label fw-bold">
            Ciudad: *
          </label>
          <input
            value={report.city.value}
            onChange={handleChange}
            id="city"
            type="text"
            className="form-control"
            placeholder="Ejemplo: Asunción"
            
          />
          </div>
        </div>

        <div className="row gy-3">
        {/* País */}
          <div>
          <label htmlFor="country" className="form-label fw-bold">
            País: *
          </label>
          <input
            value={report.country.value}
            onChange={handleChange}
            id="country"
            type="text"
            className="form-control"
            placeholder="Ejemplo: Paraguay"
            
          />
          </div>
        </div>

        <div className="row gy-3">
        {/* Teléfono de contacto */}
          <div>
          <label htmlFor="phone" className="form-label fw-bold">
            Teléfono de contacto: *
          </label>
          <input
            value={report.phone.value}
            onChange={handleChange}
            id="phone"
            type="text"
            className="form-control"
            placeholder="Ejemplo: +595990123456"
            
          />
          </div>
        </div>
        <div className="row gy-3 mb-3">
        {/* Foto */}
					<div>
						<label htmlFor="picture" className='form-label fw-bold'>
							Foto: *
						</label>
						<input onChange={handleChange} type='file' accept="image/*" id='picture' className='form-control' />
						<p className='mb-0 mt-2 small text-secondary'>Se necesita una imagen de la mascota para evitar confusiones y que sea más sencillo reconocerla</p>
					</div>
        </div>

				<div className="form-check form-check-reverse text-start m-3">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Acepto los <Link to={APP_ROUTES.TERMS}>Términos de uso</Link>: *
						<input id='accept_terms' onChange={handleChange} defaultChecked={false} className="form-check-input" type="checkbox" />
					</label>
				</div>

				<span className='rounded-pill bg-warning p-1 small m-3'>* Campos requeridos</span>

				<div className='d-grid mx-3'>
					<button type='submit' className='btn btn-success btn-lg mt-2'>Publicar</button>
				</div>
        
      </form>
    </PageCard>
  );
};
export default AdoptionForm;
