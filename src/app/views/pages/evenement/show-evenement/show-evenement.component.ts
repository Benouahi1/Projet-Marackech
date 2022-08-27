import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-show-evenement",
	templateUrl: "./show-evenement.component.html",
	styleUrls: ["./show-evenement.component.scss"],
})
export class ShowEvenementComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	EtapeDernier(): void {
		this.router.navigate(["pages/evenement/list-evenement"]);
	}
}
