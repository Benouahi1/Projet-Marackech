import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-add-avocat',
  templateUrl: './add-avocat.component.html',
  styleUrls: ['./add-avocat.component.scss']
})
export class AddAvocatComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  Back(): void {
	this.router.navigate(["pages/contrats/avocat"]);
}

}
