import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './application/acceuil/acceuil.component';
import { ListproduitsComponent } from './application/listproduits/listproduits.component';
import { ContactComponent } from './application/contact/contact.component';
import { Ereur404Component } from './application/ereur404/ereur404.component';

const routes: Routes = [ 
  {path:'accueil', component:AcceuilComponent}, 
  {path:'produits', component:ListproduitsComponent}, 
  {path:'contact', component:ContactComponent}, 

  {path:'', redirectTo:'accueil', pathMatch:'full'} ,
  {path:'**', component:Ereur404Component} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
