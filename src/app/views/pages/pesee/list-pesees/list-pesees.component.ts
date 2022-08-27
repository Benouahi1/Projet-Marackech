import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-list-pesees",
	templateUrl: "./list-pesees.component.html",
	styleUrls: ["./list-pesees.component.scss"],
})
export class ListPeseesComponent implements OnInit {
	Pesees: any;
	data: excelData[] = [];
	data2: excelData[] = [];
	data3: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"OPERATEUR",
		"DATE_P",
		"VEHICULE",
		"MONTANT_T_M",
		"STATUT",
		"actions",
	];
	// ============================================
	// Declarations
	// ============================================
	dataSource = new MatTableDataSource<any>();
	dataSource2 = new MatTableDataSource<any>();
	dataSource3 = new MatTableDataSource<any>();
	isLoadingResults = true;
	isLoading = true;
	// ============================================
	// Controles pagination
	// ============================================
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	constructor(
		private translate: TranslateService,
		private router: Router,

		private datePipe: DatePipe,
		private excelService: ExcelAssociationService
	) {
		this.data = [
			{
				NUM: "1",
				OPERATEUR: "operateur1",
				DATE_P: "18/06/2020",
				VEHICULE: "BMW",
				MONTANT_T_M: "1020 Dh",
				STATUT: "En cours de validation",
			},
			{
				NUM: "2",
				OPERATEUR: "operateur2",
				DATE_P: "18/06/2022",
				VEHICULE: "Toyota",
				MONTANT_T_M: "2000 Dh",
				STATUT: "En cours de validation",
			},
			{
				NUM: "3",
				OPERATEUR: "operateur3",
				DATE_P: "18/06/2022",
				VEHICULE: "Toyota",
				MONTANT_T_M: "3000 Dh",
				STATUT: "En cours de validation",
			},
		];
		this.data2 = [
			{
				NUM: "1",
				OPERATEUR: "operateur1",
				DATE_P: "18/06/2020",
				VEHICULE: "BMW",
				MONTANT_T_M: "1020 Dh",
				STATUT: "Payé",
			},
			{
				NUM: "2",
				OPERATEUR: "operateur2",
				DATE_P: "18/06/2022",
				VEHICULE: "Toyota",
				MONTANT_T_M: "2000 Dh",
				STATUT: "Payé",
			},
			{
				NUM: "3",
				OPERATEUR: "operateur3",
				DATE_P: "18/06/2022",
				VEHICULE: "Toyota",
				MONTANT_T_M: "3000 Dh",
				STATUT: "Payé",
			},
		];
		this.data3 = [
			{
				NUM: "1",
				OPERATEUR: "operateur1",
				DATE_P: "18/06/2020",
				VEHICULE: "BMW",
				MONTANT_T_M: "1020 Dh",
				STATUT: "En cours de paiment",
			},
			{
				NUM: "2",
				OPERATEUR: "operateur2",
				DATE_P: "18/06/2022",
				VEHICULE: "BMW",
				MONTANT_T_M: "2000 Dh",
				STATUT: "En cours de paiment",
			},
			{
				NUM: "3",
				OPERATEUR: "operateur3",
				DATE_P: "18/06/2022",
				VEHICULE: "BMW",
				MONTANT_T_M: "3000 Dh",
				STATUT: "En cours de paiment",
			},
		];
	}
	ngOnInit() {
		this.columns = [
			"NUM",
			"OPERATEUR",
			"DATE_P",
			"VEHICULE",
			"MONTANT_T_M",
			"STATUT",
		];
		this.dataSource = new MatTableDataSource(this.data);
		this.dataSource2 = new MatTableDataSource(this.data2);
		this.dataSource3 = new MatTableDataSource(this.data3);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	//changes
	addPesee(): void {
		this.router.navigate(["pages/pesee/add-pesee"]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/affaires/dashboard"]);
	}

	Details() {
		this.router.navigate(["pages/pesee/show-pesee"]);
	}

	Recu() {
		this.router.navigate(["pages/pesee/list-pesees"]);
	}

	createDataJson(i: number): excelData {
		return {
			NUM: this.Pesees[i].NUM,
			OPERATEUR: this.Pesees[i].OPERATEUR,
			DATE_P: this.Pesees[i].DATE_P,
			VEHICULE: this.Pesees[i].VEHICULE,
			MONTANT_T_M: this.Pesees[i].MONTANT_T_M,
			STATUT: this.Pesees[i].STATUT,
		};
	}
}
export interface excelData {
	NUM: string;
	OPERATEUR: string;
	DATE_P: string;
	VEHICULE: string;
	MONTANT_T_M: string;
	STATUT: string;
}
