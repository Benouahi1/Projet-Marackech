import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-upd-delegitaire',
  templateUrl: './upd-delegitaire.component.html',
  styleUrls: ['./upd-delegitaire.component.scss']
})
export class UpdDelegitaireComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addAssociation(): void {
	this.router.navigate(["pages/delegitaire/delegitaires"]);
}

}
