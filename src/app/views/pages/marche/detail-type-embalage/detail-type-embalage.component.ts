import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
	selector: 'kt-detail-type-embalage',
	templateUrl: './detail-type-embalage.component.html',
	styleUrls: ['./detail-type-embalage.component.scss']
  })
  export class DetailTypeEmbalageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
	RetourEmbalages(): void {
	this.router.navigate(["pages/Marche/list-type-embalage"]);
}

}
