import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUsuarios } from '../interfaces/iusuarios.interface';
import { Observable, lastValueFrom } from 'rxjs';
import { Ipaginas } from '../interfaces/ipaginas.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 private httpClient = inject(HttpClient);
  baseUrl = 'https://peticiones.online/api/users'
  baseUrlId = 'https://peticiones.online/api/users/'

  

  //observable
  /*
  getAll(): Observable<IUsuarios[]> {

    return this.httpClient.get<IUsuarios[]>(this.baseUrl)

  }*/

  getAllPaginas():Observable<Ipaginas>{
    return this.httpClient.get<Ipaginas>(this.baseUrl)

  }

  getAllUsuarios():Observable<IUsuarios>{
    return this.httpClient.get<IUsuarios>(this.baseUrl)

  }

  //promesas
  getAllPromises(): Promise<IUsuarios[]> {
    return lastValueFrom(this.httpClient.get<IUsuarios[]>(this.baseUrl))
  }

  /*
  getById(_id:string): Promise<IUsuarios> {
    console.log(_id)
    return lastValueFrom(this.httpClient.get<IUsuarios>(`${this.baseUrlId}${_id}`));
    
  }*/

  getById(id:string) : Promise<IUsuarios>{
    return lastValueFrom(this.httpClient.get<IUsuarios>(`${this.baseUrl}/${id}`))
    console.log('lastValueFrom'+lastValueFrom)
  }

  delete(id: string): Promise<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).toPromise();
  }

  create(usuario: IUsuarios): Promise<IUsuarios | undefined> {
    return this.httpClient.post<IUsuarios>(this.baseUrl, usuario).toPromise();
  }

  update(id: string, usuario: IUsuarios): Promise<IUsuarios | undefined> {
    return this.httpClient.put<IUsuarios>(`${this.baseUrl}/${id}`, usuario).toPromise();
  }
  
    
}
