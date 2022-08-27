import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-upd-jugements',
  templateUrl: './upd-jugements.component.html',
  styleUrls: ['./upd-jugements.component.scss']
})
export class UpdJugementsComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  Back(): void {
    this.router.navigate([
			"pages/affaire-judiciaire/show-affaire-judiciare",
		]);
}

}
