import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-add-type-embalage',
  templateUrl: './modification-type-embalage.component.html',
  styleUrls: ['./modification-type-embalage.component.scss']
})
export class ModificationTypeEmbalageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
	RetourEmbalages(): void {
	this.router.navigate(["pages/Marche/list-type-embalage"]);
}

}
