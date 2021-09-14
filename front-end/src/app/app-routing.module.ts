import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', /*se o usuário digitar algum espaço na URL, o Angular faz o tratamento e vai unir a URL, removendo os espaços*/
    redirectTo: 'home' /*ao cair em '', o usuário será redirecionado para o 'home'*/
  },
  {
    path: 'home',
    loadChildren: () => import ('./home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
