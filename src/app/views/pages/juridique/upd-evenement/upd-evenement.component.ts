import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-upd-evenement',
  templateUrl: './upd-evenement.component.html',
  styleUrls: ['./upd-evenement.component.scss']
})
export class UpdEvenementComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  Back(): void {
    this.router.navigate([
			"pages/affaire-judiciaire/show-affaire-judiciare",
		]);
  }
}
