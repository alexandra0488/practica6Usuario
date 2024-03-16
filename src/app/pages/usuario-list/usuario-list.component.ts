import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuarios } from '../../interfaces/iusuarios.interface';
import { UsuariosCardComponent } from '../../components/usuarios-card/usuarios-card.component';
import { Ipaginas } from '../../interfaces/ipaginas.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  standalone: true,
  imports: [UsuariosCardComponent],
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent {

  usuariosServices = inject(UsuariosService)
  arrUsuarios: IUsuarios[] = [];


  
  async ngOnInit(): Promise<void> {
    try {
      const data: Ipaginas | undefined = await this.usuariosServices.getAllPaginas().toPromise();
      if (data) {
        this.arrUsuarios = data.results;
        console.log(`Page: ${data.page}`);
        console.log(`Per Page: ${data.per_page}`);
        console.log(`Total: ${data.total}`);
        console.log(`Total Pages: ${data.total_pages}`);
        console.log(`Data: ${data.results}`);
        
        // Imprimir los datos de los usuarios en la consola
        console.log('Usuarios:', this.arrUsuarios);
      } else {
        console.log('No data received');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
