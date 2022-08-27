import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-add-type-Hangar',
  templateUrl: './add-type-Hangar.component.html',
  styleUrls: ['./add-type-Hangar.component.scss']
})
export class AddTypeHangarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  RetourAudiance(): void {
	this.router.navigate(["pages/Marche/list-type-Hangar"]);
}
}
