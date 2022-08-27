import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.scss']
})
export class AddDemandeComponent implements OnInit {

  isVisible: any = 1;
  isVisible1: any = 3;
  isSelected: boolean = true;
  isSelected1: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeSuivant(): void {
		this.router.navigate(["pages/demande/add-demande-etape2"]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/demande/list-demandes"]);
	}

}
