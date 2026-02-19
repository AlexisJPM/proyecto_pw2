import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Servicos } from './shared/servicos/servicos';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { matchGuard } from './guards/match-guard';
import { Acerca } from './features/acerca/acerca';

export const routes: Routes = [
    
    //ruta inicial
    {path:'', component:Home},

    //ruta de navegacio
    {path:'acerca', component:Acerca},
    {path:'consultas', component:Consultas, canMatch:[matchGuard]},
    {path:'mascotas', component:Mascotas}, 
    {path:'registro', component:Usuarios, canActivate:[authGuard]},
    {path:'login', component:Login},

    //el 404 simpre al final
    //redireccion por si el usaurio intenta acceder a una ruta que no existe
    {path:'**', component:Pagina404},


];
