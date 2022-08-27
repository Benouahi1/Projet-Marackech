import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-updt-programme',
  templateUrl: './updt-programme.component.html',
  styleUrls: ['./updt-programme.component.scss']
})
export class UpdtProgrammeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Programme/list-programme"]);

}

}
