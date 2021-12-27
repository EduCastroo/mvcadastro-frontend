import { HomeComponent } from './home/home.component';
import { CadprojetoComponent } from './cadprojeto/cadprojeto.component';
import { CadenderecoComponent } from './cadendereco/cadendereco.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadclienteComponent } from './cadcliente/cadcliente.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadcliente', component: CadclienteComponent},
  {path: 'cadendereco', component: CadenderecoComponent},
  {path: 'cadprojeto', component: CadprojetoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
