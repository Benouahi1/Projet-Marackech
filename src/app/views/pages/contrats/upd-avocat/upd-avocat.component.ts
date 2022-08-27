import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-upd-avocat',
  templateUrl: './upd-avocat.component.html',
  styleUrls: ['./upd-avocat.component.scss']
})
export class UpdAvocatComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  Back(): void {
	this.router.navigate(["pages/contrats/avocat"]);
}

}
