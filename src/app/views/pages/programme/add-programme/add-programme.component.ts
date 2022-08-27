import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-add-programme',
  templateUrl: './add-programme.component.html',
  styleUrls: ['./add-programme.component.scss']
})
export class AddProgrammeComponent implements OnInit {

  constructor(private router: Router) {

  }
  Visible: any = 0;
  isSelected: boolean = false;
  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Programme/list-programme"]);

}
}
