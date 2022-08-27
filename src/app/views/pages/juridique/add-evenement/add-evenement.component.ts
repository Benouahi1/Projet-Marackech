import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.scss']
})
export class AddEvenementComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }
  Back(): void {
	// audianc
    this.router.navigate(["pages/affaire-judiciaire/show-affaire-judiciare"]);
  }
}
