import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
	selector: "kt-add-jugements",
	templateUrl: "./add-jugements.component.html",
	styleUrls: ["./add-jugements.component.scss"],
})
export class AddJugementsComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate([
			"pages/affaire-judiciaire/show-affaire-judiciare",
		]);
	}
}
