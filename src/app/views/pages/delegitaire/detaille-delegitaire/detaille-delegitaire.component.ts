import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'kt-detaille-delegitaire',
  templateUrl: './detaille-delegitaire.component.html',
  styleUrls: ['./detaille-delegitaire.component.scss']
})
export class DetailleDelegitaireComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  Back(): void {
	this.router.navigate(["pages/delegitaire/delegitaires"]);
}

}
