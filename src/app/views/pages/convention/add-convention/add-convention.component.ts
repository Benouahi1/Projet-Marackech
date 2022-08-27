import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-convention',
  templateUrl: './add-convention.component.html',
  styleUrls: ['./add-convention.component.scss']
})
export class AddConventionComponent implements OnInit {
	isVisible: any;
	isSelected: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Convention/list-convention"]);

}

}
