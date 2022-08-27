import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-edit-evenement',
  templateUrl: './edit-evenement.component.html',
  styleUrls: ['./edit-evenement.component.scss']
})
export class EditEvenementComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/evenement/list-evenement"]);
	}

}
