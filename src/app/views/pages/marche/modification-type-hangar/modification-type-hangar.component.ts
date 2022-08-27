import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-modification-type-hangar',
  templateUrl: './modification-type-hangar.component.html',
  styleUrls: ['./modification-type-hangar.component.scss']
})
export class ModificationTypeHangarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourAudiance(): void {
	this.router.navigate(["pages/Marche/list-type-Hangar"]);
}
}
