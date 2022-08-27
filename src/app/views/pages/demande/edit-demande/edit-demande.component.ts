import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.scss']
})
export class EditDemandeComponent implements OnInit {

  isVisible: any = 1;
  isVisible1: any = 2;
  isSelected: boolean = true;
  isSelected1: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeSuivant(): void {
		this.router.navigate(["pages/demande/edit-demande-etape2"]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/demande/list-demandes"]);
	}

}
