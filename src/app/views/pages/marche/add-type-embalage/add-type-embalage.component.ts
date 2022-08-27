import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-add-type-embalage',
  templateUrl: './add-type-embalage.component.html',
  styleUrls: ['./add-type-embalage.component.scss']
})
export class AddTypeEmbalageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
	RetourEmbalages(): void {
	this.router.navigate(["pages/Marche/list-type-embalage"]);
}

}
