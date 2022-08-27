import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-detaille-programme',
  templateUrl: './detaille-programme.component.html',
  styleUrls: ['./detaille-programme.component.scss']
})
export class DetailleProgrammeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Programme/list-programme"]);

}
PP(): void {
	this.router.navigate(["pages/Convention/detaille-convention"]);

}

}
