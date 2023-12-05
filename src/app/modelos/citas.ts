import { Clientes } from "./clientes";

export interface Citas {
    id: string;
    fechaCita?: string;
    idUsuario?: string;
}
export interface datosCitas {
    citas?: Citas;
    fechaCita?: string;
    usuario?: Clientes
  //  cliente?: Cliente;
}

