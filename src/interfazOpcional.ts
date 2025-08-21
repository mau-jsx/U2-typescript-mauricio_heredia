import { Persona } from "./interfazBasica";

interface PersonaOpcional extends Omit<Persona, "lastName"> {
  lastName?: string;
}
