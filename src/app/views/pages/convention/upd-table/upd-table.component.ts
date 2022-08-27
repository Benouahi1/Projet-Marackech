import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-upd-table',
  templateUrl: './upd-table.component.html',
  styleUrls: ['./upd-table.component.scss']
})
export class UpdTableComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Convention/detaille-convention"]);

}
}
