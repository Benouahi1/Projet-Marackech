import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-add-type-Produit',
  templateUrl: './add-type-Produit.component.html',
  styleUrls: ['./add-type-Produit.component.scss']
})
export class AddTypeProduitComponent implements OnInit {

  constructor(private router: Router) {
	 }

  ngOnInit() {
  }
  RetourFichier(): void {
	this.router.navigate(["pages/Marche/list-type-Produit"]);
}

}
