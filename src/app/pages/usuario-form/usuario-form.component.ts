import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuarios } from '../../interfaces/iusuarios.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent {

  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService)

  //formUsuario!: IUsuarios;

  formUsuario: IUsuarios = {
    _id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    image: '',
  }

  isUpdating: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      const id = params.id;
      if (id) {
        this.isUpdating = true;
        try {
          this.formUsuario = await this.usuariosService.getById(id)
        } catch (err) {
          console.log(err)
        }
      } else {
        this.isUpdating = false;
        this.formUsuario = {
          _id: '',
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          image: '',
        }
      }
    }
    )
  }

  saveUser() {
    if (this.isUpdating) {
      
      this.usuariosService.update(this.formUsuario._id, this.formUsuario)
        .then((updatedUser) => {
          console.log('Usuario actualizado con éxito', updatedUser);
          
        })
        .catch(err => {
          
          console.error('Error al actualizar el usuario', err);
        });
    } else {
      
      this.usuariosService.create(this.formUsuario)
        .then((newUser) => {
          console.log('Usuario creado con éxito', newUser);
         
        })
        .catch(err => {
          
          console.error('Error al crear el usuario', err);
        });
    }
  }
  
  
}