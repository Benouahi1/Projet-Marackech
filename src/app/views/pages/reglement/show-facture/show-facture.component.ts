import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-show-facture',
  templateUrl: './show-facture.component.html',
  styleUrls: ['./show-facture.component.scss']
})
export class ShowFactureComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/reglement/list-factures"]);
	}

}
