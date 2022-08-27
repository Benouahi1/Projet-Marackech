import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-show-demande',
  templateUrl: './show-demande.component.html',
  styleUrls: ['./show-demande.component.scss']
})
export class ShowDemandeComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  back() {
		//this.location.back();
		this.router.navigate(["pages/demande/list-demandes"]);
	}

}
