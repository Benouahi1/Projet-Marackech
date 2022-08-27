import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-add-pesee",
	templateUrl: "./add-pesee.component.html",
	styleUrls: ["./add-pesee.component.scss"],
})
export class AddPeseeComponent implements OnInit {

	constructor(private router: Router) {}

	ngOnInit() {}

	EtapeSuivant(): void {
		this.router.navigate(["pages/pesee/add-pesee-etape2"]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/pesee/list-pesees"]);
	}
}
