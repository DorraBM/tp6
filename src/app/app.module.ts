import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './application/acceuil/acceuil.component';
import { ListproduitsComponent } from './application/listproduits/listproduits.component';
import { ContactComponent } from './application/contact/contact.component';
import { Ereur404Component } from './application/ereur404/ereur404.component';
import { MenuComponent } from './application/menu/menu.component';
import { SelectedProduitComponent } from './application/selected-produit/selected-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListproduitsComponent,
    ContactComponent,
    Ereur404Component,
    MenuComponent,
    SelectedProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
