import { Component, Input } from '@angular/core';
import { IUsuarios } from '../../interfaces/iusuarios.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuarios-card.component.html',
  styleUrl: './usuarios-card.component.css'
})
export class UsuariosCardComponent {

  @Input() usuario!: IUsuarios;
 
 
}
