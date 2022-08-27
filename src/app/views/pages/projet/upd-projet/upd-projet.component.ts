import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-upd-projet',
  templateUrl: './upd-projet.component.html',
  styleUrls: ['./upd-projet.component.scss']
})
export class UpdProjetComponent implements OnInit {

	Visible: any = 1;
	isVisible: any = 1;
  isSelected: boolean = true;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Projet/list-projet"]);

}

}
