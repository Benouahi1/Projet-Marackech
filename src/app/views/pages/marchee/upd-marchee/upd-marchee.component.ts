import { Component, OnInit } from '@angular/core';
import { Router } from 	'@angular/router';
@Component({
  selector: 'kt-upd-marchee',
  templateUrl: './upd-marchee.component.html',
  styleUrls: ['./upd-marchee.component.scss']
})
export class UpdMarcheeComponent implements OnInit {
	isVisible: any = 0;
	Presentation: any = 2;
	Visible: any = 0;
	Type: any = 2;
	B: any = 5;
	A: any = 2;
	selected = 'option 2';


	isSelected: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Marchee/list-marche"]);

}

}
