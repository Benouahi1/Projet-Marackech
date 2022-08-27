
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'kt-detail-type-hangar',
	templateUrl: './detail-type-hangar.component.html',
	styleUrls: ['./detail-type-hangar.component.scss']
  })
  export class DetailTypeHangarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  RetourAudiance(): void {
	this.router.navigate(["pages/Marche/list-type-Hangar"]);
}
}
