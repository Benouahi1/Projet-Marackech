import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-add-type-Tarifiction',
  templateUrl: './add-type-Tarifiction.component.html',
  styleUrls: ['./add-type-Tarifiction.component.scss']
})
export class AddTypeTarifictionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourJurdaction(): void {
	this.router.navigate(["pages/Marche/list-type-Tarifiction"]);
}
}
