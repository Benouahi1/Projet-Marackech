import { Component, OnInit } from '@angular/core';
import { Router } from 	'@angular/router';
@Component({
  selector: 'kt-detaille-marchee',
  templateUrl: './detaille-marchee.component.html',
  styleUrls: ['./detaille-marchee.component.scss']
})
export class DetailleMarcheeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

RetourEmbalages(): void {
  this.router.navigate(["pages/Marchee/list-marche"]);

}

PP(): void {
	this.router.navigate(["pages/Convention/detaille-convention"]);

}

}
