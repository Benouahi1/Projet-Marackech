import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  RetourEmbalages(): void {
	this.router.navigate(["pages/Convention/detaille-convention"]);

}
}
