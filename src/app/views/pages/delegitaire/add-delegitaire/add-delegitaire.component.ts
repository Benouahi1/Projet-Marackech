import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: 'kt-add-delegitaire',
  templateUrl: './add-delegitaire.component.html',
  styleUrls: ['./add-delegitaire.component.scss']
})
export class AddDelegitaireComponent implements OnInit {

  constructor(private router: Router) {


   }

  ngOnInit() {


  }
  addAssociation(): void {
	this.router.navigate(["pages/delegitaire/delegitaires"]);
}

}
