import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-affaire-judiciaire-detail',
  templateUrl: './add-affaire-judiciaire-detail.component.html',
  styleUrls: ['./add-affaire-judiciaire-detail.component.scss']
})
export class AddAffaireJudiciaireDetailComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  back() {
		this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
	}
}
