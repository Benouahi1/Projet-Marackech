import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-upd-status',
  templateUrl: './upd-status.component.html',
  styleUrls: ['./upd-status.component.scss']
})
export class UpdStatusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Back(): void {
    this.router.navigate([
			"pages/affaire-judiciaire/show-affaire-judiciare",
		]);
  }
}
