import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PageCard from "../components/PageCard";

interface Pet {
  name: string;
  description: string;
  species: string;
  age: number;
  gender: string;
  city: string;
  country: string;
  phone: string;
  image: string;
}

const AdoptionForm: React.FC = () => {
  const [pet, setPet] = useState<Pet>({
    name: "",
    description: "",
    species: "",
    age: 0,
    gender: "",
    city: "",
    country: "",
    phone: "",
    image: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(pet);
  };

  return (

    <PageCard title={"Publicar Adopción"}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={pet.name}
            onChange={handleChange}
            required
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
        <Form.Group controlId="species">
          <Form.Label>Especie</Form.Label>
          <Form.Control
            type="text"
            name="species"
            value={pet.species}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Año</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={pet.age}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Sexo</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={pet.gender}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione</option>
            <option value="male">Macho</option>
            <option value="female">Hembra</option>
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
            name="imagen"
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
