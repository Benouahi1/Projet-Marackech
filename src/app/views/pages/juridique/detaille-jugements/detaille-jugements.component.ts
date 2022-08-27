import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-detaille-jugements',
  templateUrl: './detaille-jugements.component.html',
  styleUrls: ['./detaille-jugements.component.scss']
})
export class DetailleJugementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Back(): void {
	this.router.navigate(["pages/juridique/jugements"]);
}
}
