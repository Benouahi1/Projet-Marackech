import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import * as $ from "jquery";
import { ExcelAssociationService } from "../../utils/excel-association.service";

declare var $: any;

@Component({
	selector: "kt-evenement",
	templateUrl: "./evenement.component.html",
	styleUrls: ["./evenement.component.scss"],
})
export class EvenementComponent implements OnInit {
	constructor(
		private translate: TranslateService,
		private router: Router,

		private datePipe: DatePipe,
		private excelService: ExcelAssociationService
	) {}
	addAudience(): void {
		this.router.navigate(["pages/juridique/add-evenement"]);
	}
	ngOnInit() {
		setTimeout(() => {
			$("#calendar").fullCalendar({
				height: 750,
				header: {
					left: "prev,next today",
					center: "title",
					right: "month,agendaWeek,agendaDay",
				},
				navLinks: true,
				editable: true,
				eventLimit: true,
				events: [
					{
						title: "01/002",
						start: "2022-08-07T08:30:00",
						allDay: false, // will make the time show,
						color: "#57cd5f",
					},
					{
						title: "01/003 ",
						start: "2022-08-13T09:30:00",
						color: "#f9c66a", // override!
					},
					{
						title: "01/004 ",
						start: "2022-08-13T10:30:00",
						color: "#019efb",
					},
					{
						title: "01/001 ",
						start: "2022-08-15T10:30:00",
						allDay: false, // will make the time show,
						color: "#57cd5f",
					},
				], // request to load current events
			});
		}, 100);
	}
}