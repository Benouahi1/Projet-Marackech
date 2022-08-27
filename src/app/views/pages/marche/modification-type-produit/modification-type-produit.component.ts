
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
	selector: 'kt-modification-type-produit',
	templateUrl: './modification-type-produit.component.html',
	styleUrls: ['./modification-type-produit.component.scss']
  })
  export class ModificationTypeProduitComponent implements OnInit {

  constructor(private router: Router) {
	 }

  ngOnInit() {
  }
  RetourFichier(): void {
	this.router.navigate(["pages/Marche/list-type-Produit"]);
}

}
