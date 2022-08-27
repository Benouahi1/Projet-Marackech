import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-add-pesee-etape2',
  templateUrl: './add-pesee-etape2.component.html',
  styleUrls: ['./add-pesee-etape2.component.scss']
})
export class AddPeseeEtape2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  EtapeDernier(): void {
		this.router.navigate(["pages/pesee/add-pesee"]);
	}

}
