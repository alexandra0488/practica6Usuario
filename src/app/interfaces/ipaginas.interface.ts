import { IUsuarios } from "./iusuarios.interface";

export interface Ipaginas {

    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    results:        IUsuarios[];
}
