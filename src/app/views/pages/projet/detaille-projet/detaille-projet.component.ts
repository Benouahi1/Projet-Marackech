import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'kt-detaille-projet',
  templateUrl: './detaille-projet.component.html',
  styleUrls: ['./detaille-projet.component.scss']
})
export class DetailleProjetComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Projet/list-projet"]);

}
PP(): void {
	this.router.navigate(["pages/Convention/detaille-convention"]);

}

}
