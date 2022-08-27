import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-detaille-table',
  templateUrl: './detaille-table.component.html',
  styleUrls: ['./detaille-table.component.scss']
})
export class DetailleTableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  RetourEmbalages(): void {
	this.router.navigate(["pages/Convention/detaille-convention"]);

}
}
