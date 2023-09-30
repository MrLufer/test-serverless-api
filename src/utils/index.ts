import PersonInterface from "../models/Person";
import PersonaInterface from "../models/Persona";

export const translate = (person: PersonInterface): PersonaInterface => {
  const traducciones: Record<string, string> = {
    birth_year: "año_nacimiento",
    eye_color: "color_ojos",
    films: "peliculas",
    gender: "genero",
    hair_color: "color_cabello",
    height: "altura",
    homeworld: "planeta_origen",
    mass: "masa",
    name: "nombre",
    skin_color: "color_piel",
    created: "creado",
    edited: "editado",
    species: "especies",
    starships: "naves",
    url: "url",
    vehicles: "vehiculos",
  };

  const data: any = {};

  for (const key in person) {
    if (traducciones[key]) {
      data[traducciones[key]] = person[key];
    } else {
      data[key] = person[key];
    }
  }

  return data;
};
