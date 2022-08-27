import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-upd-convention',
  templateUrl: './upd-convention.component.html',
  styleUrls: ['./upd-convention.component.scss']
})
export class UpdConventionComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Convention/list-convention"]);

}

}
