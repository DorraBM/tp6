import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-selected-produit',
  templateUrl: './selected-produit.component.html',
  styleUrls: ['./selected-produit.component.css']
})
export class SelectedProduitComponent implements OnInit {
  identfiant :string="";
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }  

  ngOnInit() { 
    this.identfiant = this.activatedRoute.snapshot.params['id']; 
 } 
 onRetour()
 {
  this.router.navigate(['/produits']);
 }
 
}
