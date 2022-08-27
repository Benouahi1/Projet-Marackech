import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'kt-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {
	isVisible: any = 0;
	Visible: any = 0;

	isSelected: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Projet/list-projet"]);

}

}
