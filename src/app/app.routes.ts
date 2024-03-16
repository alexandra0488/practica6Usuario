import { Routes } from '@angular/router';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';
import { UsuarioViewComponent } from './pages/usuario-view/usuario-view.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';

export const routes: Routes = [

    {path:"", pathMatch: 'full', redirectTo: "home"},
    {path: 'home', component: UsuarioListComponent} ,
    {path: 'user/:id', component: UsuarioViewComponent} ,

   
    {path: 'update/:id', component: UsuarioFormComponent},

    {path:'newuser', component:UsuarioFormComponent},
   


];
