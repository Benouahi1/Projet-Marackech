import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-add-affaire-judiciaire',
  templateUrl: './add-affaire-judiciaire.component.html',
  styleUrls: ['./add-affaire-judiciaire.component.scss']
})
export class AddAffaireJudiciaireComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  back() {
		this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
	}
}
