import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
	selector: 'kt-modification-type-tarifiction',
	templateUrl: './modification-type-tarifiction.component.html',
	styleUrls: ['./modification-type-tarifiction.component.scss']
  })
  export class ModificationTypeTarifictionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourJurdaction(): void {
	this.router.navigate(["pages/Marche/list-type-Tarifiction"]);
}
}
