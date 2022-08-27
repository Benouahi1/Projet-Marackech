import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import {
	MatTableDataSource,
	MatRadioButton,
	MatRadioChange,
	MatSort,
	MatPaginator,
	MatSelectChange,
	MatOptionSelectionChange,
} from "@angular/material";
import {
	Validators,
	FormBuilder,
	FormGroup,
	FormControl,
} from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { DatePipe } from "@angular/common";
import { delay } from "rxjs/operators";

@Component({
	selector: "kt-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	public xAxisData = [];
	public yAxisData = [];
	listAssocaition: any[];
	types;
	data: affaireData[] = [];
	arrondissements: any;
	isLoading = true;
	searchForm: FormGroup;
	dash;
	dash1;
	chartType = "bar";
	chartType1 = "bar";
	sizeData: number = 0;
	idassoction = 0;
	// ============================================
	// constructeur
	// ============================================
	constructor(
		private fb: FormBuilder,
		private translate: TranslateService,
		private datePipe: DatePipe,
		private router: Router
	) {
		this.data = [
			{
				num: "1/2022",
				nom: "nom affaire 1 ",
				defendresse: "Commune Casablanca",
				tribunal: "Tech ",
				typeAffaire: "Type 1",
				demandresse: "Partie  ",
				dateDebut: "01-01-2020",
			},
			{
				num: "2/2022",
				nom: "nom affaire 2",
				defendresse: "CM ",
				tribunal: "Tribunal ",
				typeAffaire: "Type 2",
				demandresse: "Partie",
				dateDebut: "21-2-2020",
			},
			{
				num: "3/2022",
				nom: "nom affaire 3",
				defendresse: "Tech ",
				tribunal: "Tech ",
				typeAffaire: "Type 3",
				demandresse: "Partie",
				dateDebut: "01-01-2020",
			},
			{
				num: "4/2022",
				nom: "nom affaire 4",
				defendresse: "Tech ",
				tribunal: "Tribunal ",
				typeAffaire: "Type 4",
				demandresse: "Partie",
				dateDebut: "01-01-2020",
			},
			{
				num: "5/2022",
				nom: "nom affaire 5",
				defendresse: "Tech ",
				tribunal: "Tech ",
				typeAffaire: "Type 5",
				demandresse: "CM",
				dateDebut: "01-01-2020",
			},
		];
	}

	// ============================================
	//
	// ============================================
	dataSource: MatTableDataSource<any>;
	displayedColumns: string[] = [
		"nbAffaire",
		"type",
		"tribunal",
		"demandresse",
		"defenderesse",
	];
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	// ============================================
	// ngOninit
	// ============================================
	ngOnInit() {
		this.searchForm = this.fb.group({
			type: ["", Validators.required],
			commune: ["", Validators.required],
			dateDebut: ["", Validators.required],
			dateFin: ["", Validators.required],
		});

		// get datasource
		this.getDataSource(this.data);
		this.getDataDropDownList();
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/affaires/dashboard"]);
	}

	// ============================================
	// ngAfterView
	// ============================================
	ngAfterViewInit() {
		//	this.data.map((data) => data.num);
		let nbrAssoc = ["1", "2", "4", "1", "5"];
		let typeAssoc = this.data.map((data) => data.typeAffaire);
		//console.log("List of labels: " + typeAssoc);
		this.chartOption(typeAssoc, nbrAssoc, this.chartType);
	}
	// ============================================
	// OnSubmit
	// ============================================

	onSubmit() {}
	selectAssoication(event: MatOptionSelectionChange) {
		console.log(event.isUserInput);
		//this.dash1.destroy();
		if (event.isUserInput) {
			this.idassoction = event.source.value;
			this.chartType1 = "bar";
		}
	}

	// ============================================
	// Charger les statistiques sous forme graphe
	// ============================================
	fillChartByParam(type, commune, chartType, dateD, dateF) {
		const _this = this;
	}

	// ============================================
	// Charger les liste externe
	// ============================================
	getDataDropDownList() {
		/*this.service.getData().subscribe(
			(data) => {
				this.types = data[1];
				console.log(data[1]);
			},
			(err) => {
				console.log(err);
			}
	);*/
	}
	// ============================================
	// OnChange radio
	// ============================================

	selectionChanged(event: MatRadioChange) {
		var type = this.searchForm.get("type").value;
		var commune = this.searchForm.get("commune").value;
		var dateDebut = this.searchForm.get("dateDebut").value;
		var dateFin = this.searchForm.get("dateFin").value;
		dateDebut = this.datePipe.transform(dateDebut, "yyyy-MM-dd");
		dateFin = this.datePipe.transform(dateFin, "yyyy-MM-dd");
		this.chartType = event.value;
		console.log("Type & commune: " + type + "|" + commune);
		if (type == "" || commune == "") {
			this.chartType = event.value;
			this.dash.destroy();
			this.ngAfterViewInit();
		}
		const controls = this.searchForm.controls;
		/** check form */
		if (this.searchForm.invalid) {
			Object.keys(controls).forEach((controlName) =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		if (event.value == "pie" || event.value == "doughnut") {
			this.fillChartByParam(
				type,
				commune,
				this.chartType,
				dateDebut,
				dateFin
			);
		} else if (event.value == "bar" || event.value == "line") {
			this.fillChartByParam(
				type,
				commune,
				this.chartType,
				dateDebut,
				dateFin
			);
		}
	}
	selectionChanged1(event: MatRadioChange) {
		this.chartType1 = event.value;
		console.log(event);
	}
	// ============================================
	//ngAfterView
	// ============================================
	getCharts() {}

	// ============================================
	// get data
	// ============================================

	// ============================================
	//
	// ============================================
	getDataSource(data: any) {
		this.dataSource = new MatTableDataSource(data);
		this.paginator._intl.itemsPerPageLabel = this.translate.instant(
			"PAGES.GENERAL.ITEMS_PER_PAGE_LABEL"
		);
		this.paginator._intl.nextPageLabel = this.translate.instant(
			"PAGES.GENERAL.NEXT_PAGE_LABEL"
		);
		this.paginator._intl.previousPageLabel = this.translate.instant(
			"PAGES.GENERAL.PREVIOUS_PAGE_LABEL"
		);
		this.paginator._intl.lastPageLabel = this.translate.instant(
			"PAGES.GENERAL.LAST_PAGE_LABEL"
		);
		this.paginator._intl.firstPageLabel = this.translate.instant(
			"PAGES.GENERAL.FIRST_PAGE_LABEL"
		);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	// ============================================
	//
	// ============================================
	getRandomNumber(min, max) {
		return Math.floor(Math.random() * (+max - +min)) + +min;
	}
	// ============================================
	// Download graphe
	// ============================================
	downloadCanvas(event) {
		var anchor = event.target;
		console.log("Downloading ...");
		anchor.href = document.getElementsByTagName("canvas")[0].toDataURL();
		anchor.download = "chart.jpg";
	}

	// ============================================
	// Refresh datatable & graph
	// ============================================
	refresh() {
		this.dataSource = new MatTableDataSource(null);
		this.isLoading = true;
		this.dash.destroy();
		this.getDataSource(this.data);
		this.ngAfterViewInit();
	}
	// ===========================================
	// ChartJs
	// ===========================================
	chartOption(libelle, id, type) {
		var ctx = document.getElementById("canvas");
		if (type == "pie" || type == "doughnut") {
			this.dash = new Chart(ctx, {
				type: type,
				data: {
					labels: libelle, // date par ex
					datasets: [
						{
							label: "عدد ",
							data: id,
							backgroundColor: libelle.map(
								() =>
									`rgba(${this.getRandomNumber(
										0,
										255
									)},${this.getRandomNumber(
										0,
										255
									)} ,${this.getRandomNumber(0, 255)} , 1)`
							),
							borderColor: libelle.map(
								() =>
									`rgba(${this.getRandomNumber(
										0,
										255
									)},${this.getRandomNumber(
										0,
										255
									)} ,${this.getRandomNumber(0, 255)} , 1)`
							),
							borderWidth: 0,
							fill: true,
						},
					],
				},
				options: {
					legend: {
						display: true,
					},
				},
			});
		} else {
			this.dash = new Chart(ctx, {
				type: type,
				data: {
					labels: libelle, // date par ex
					datasets: [
						{
							label: "عدد ",
							data: id,
							backgroundColor: libelle.map(
								() =>
									`rgba(${this.getRandomNumber(
										0,
										255
									)},${this.getRandomNumber(
										0,
										255
									)} ,${this.getRandomNumber(0, 255)} , 1)`
							),
							//borderColor: libelle.map(() => `rgba(${this.getRandomNumber(0,255)},${this.getRandomNumber(0,255)} ,${this.getRandomNumber(0,255)} , 1)`),
							borderWidth: 0,
							fill: false,
						},
					],
				},
				options: {
					legend: {
						display: false,
					},
					scales: {
						xAxes: [
							{
								display: true,
							},
						],
						yAxes: [
							{
								display: true,
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				},
			});
		}
	}

	chartOptionAssocation(libelle, id, type) {
		var ctx = document.getElementById("canvas1");
		if (type == "pie" || type == "doughnut") {
			this.dash1 = new Chart(ctx, {
				type: type,
				data: {
					labels: libelle, // date par ex
					datasets: [
						{
							label: "عدد الجمعيات",
							data: id,
							backgroundColor: libelle.map(
								() =>
									`rgba(${this.getRandomNumber(
										0,
										255
									)},${this.getRandomNumber(
										0,
										255
									)} ,${this.getRandomNumber(0, 255)} , 1)`
							),
							borderColor: libelle.map(
								() =>
									`rgba(${this.getRandomNumber(
										0,
										255
									)},${this.getRandomNumber(
										0,
										255
									)} ,${this.getRandomNumber(0, 255)} , 1)`
							),
							borderWidth: 0,
							fill: true,
						},
					],
				},
				options: {
					legend: {
						display: true,
					},
				},
			});
		} else {
			this.dash = new Chart(ctx, {
				type: type,
				data: {
					labels: libelle, // date par ex
					datasets: [
						{
							label: "عدد ",
							data: id,
							backgroundColor: libelle.map(
								() =>
									`rgba(${this.getRandomNumber(
										0,
										255
									)},${this.getRandomNumber(
										0,
										255
									)} ,${this.getRandomNumber(0, 255)} , 1)`
							),
							//borderColor: libelle.map(() => `rgba(${this.getRandomNumber(0,255)},${this.getRandomNumber(0,255)} ,${this.getRandomNumber(0,255)} , 1)`),
							borderWidth: 0,
							fill: false,
						},
					],
				},
				options: {
					legend: {
						display: false,
					},
					scales: {
						xAxes: [
							{
								display: true,
							},
						],
						yAxes: [
							{
								display: true,
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				},
			});
		}
	}
}
export interface affaireData {
	num: string;
	nom: string;
	defendresse: string;
	tribunal: string;
	typeAffaire: string;
	demandresse: string;
	dateDebut: string;
}
