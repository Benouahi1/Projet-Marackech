import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-edit-affaire-judiciaire',
  templateUrl: './edit-affaire-judiciaire.component.html',
  styleUrls: ['./edit-affaire-judiciaire.component.scss']
})
export class EditAffaireJudiciaireComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  back() {
		this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
	}

}
