
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'kt-detail-type-tarifiction',
	templateUrl: './detail-type-tarifiction.component.html',
	styleUrls: ['./detail-type-tarifiction.component.scss']
  })
  export class DetailTypeTarifictionComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourJurdaction(): void {
	this.router.navigate(["pages/Marche/list-type-Tarifiction"]);
}
}
