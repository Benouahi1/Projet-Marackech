
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
	selector: 'kt-detail-type-produit',
	templateUrl: './detail-type-produit.component.html',
	styleUrls: ['./detail-type-produit.component.scss']
  })
  export class DetailTypeProduitComponent implements OnInit {

  constructor(private router: Router) {
	 }

  ngOnInit() {
  }
  RetourFichier(): void {
	this.router.navigate(["pages/Marche/list-type-Produit"]);
}

}
