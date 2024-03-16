import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuarios } from '../../interfaces/iusuarios.interface';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-usuario-view',
  standalone: true,
  imports: [RouterLink,NgIf,CommonModule],
  templateUrl: './usuario-view.component.html',
  styleUrl: './usuario-view.component.css'
})
export class UsuarioViewComponent {

  activatedRoute = inject (ActivatedRoute);
  usuariosService = inject (UsuariosService)

  unUsuario!: IUsuarios;

  
  ngOnInit(): void{
    this.activatedRoute.params.subscribe( async(params: any) =>{
      const id = params.id;
      try{
       this.unUsuario = await this.usuariosService.getById(id)
     
    }catch(err){
      console.log(err)
    }
  
    }
    )
  }

  

  
  deleteUser() {
    this.usuariosService.delete(this.unUsuario._id)
      .then(() => {
      
        console.log('Usuario eliminado con éxito');
      })
      .catch(err => {
     
        console.error('Error al eliminar el usuario', err);
      });
  }
}