import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-detaille-avocat',
  templateUrl: './detaille-avocat.component.html',
  styleUrls: ['./detaille-avocat.component.scss']
})
export class DetailleAvocatComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  Back(): void {
	this.router.navigate(["pages/contrats/avocat"]);
}

}
