import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PageCard from "../components/PageCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ROUTES, APP_ROUTES } from "../helper/utility";

interface Pet {
  title: string;
  name: string;
  description: string;
  specie: string;
  age: string;
  sex: string;
  city: string;
  country: string;
  phone: string;
  picture: object;
}

const AdoptionForm: React.FC = () => {
  const navigate = useNavigate();

  const SPECIES = ["Perro", "Gato", "Otro"];
  const SEX = ["Macho", "Hembra", "Desconocido"];

  const [pet, setPet] = useState<Pet>({
    title: "",
    name: "",
    description: "",
    specie: SPECIES[0].toLowerCase(),
    age: '0',
    sex: SEX[0].toLowerCase(),
    city: "",
    country: "",
    phone: "",
    picture: {},
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setPet({ ...pet, [name]: files ? files[0] : value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(pet);

			const config = {
				headers: {
					'Content-Type': `multipart/form-data;`,
				}
			}

			// Send data
			axios.post(API_ROUTES.PUBLICAR_ADOPCION, pet, config)
				.then(response => {
          const id = response.data?.id
					console.log(id)
					navigate(APP_ROUTES.EXITO_ADOPCION + id)

				})
				.catch(error => console.log("Error en post", error))
  };

  return (
    <PageCard title={"Publicar Adopción"}>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={pet.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={pet.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={pet.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="specie">
          <Form.Label>Especie</Form.Label>
          <Form.Control
            as="select"
            name="specie"
            value={pet.specie}
            onChange={handleChange}
            required
          >
							{SPECIES.map((item, index) => (
								<option key={index} value={item.toLowerCase()} >{item}</option>
							))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={pet.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="sex">
          <Form.Label>Sexo</Form.Label>
          <Form.Control
            as="select"
            name="sex"
            onChange={handleChange}
            required
          >
							{SEX.map((item, index) => (
								<option key={index} value={item.toLowerCase()} >{item}</option>
							))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={pet.city}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={pet.country}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={pet.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </PageCard>
  );
};
export default AdoptionForm;
