import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-list-factures",
	templateUrl: "./list-factures.component.html",
	styleUrls: ["./list-factures.component.scss"],
})
export class ListFacturesComponent implements OnInit {
	Pesees: any;
	data: excelData[] = [];
	data2: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"N_RECU",
		"TOTAL",
		"MONTANT_T_M",
		"DATE",
		"STATUT",
		"actions",
	];
	// ============================================
	// Declarations
	// ============================================
	dataSource = new MatTableDataSource<any>();
	dataSource2 = new MatTableDataSource<any>();
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
				N_RECU: "112",
				TOTAL: "15000 Dh",
				MONTANT_T_M: "20",
				DATE: "15/08/2020",
				STATUT: "Payé",
			},
			{
				NUM: "2",
				N_RECU: "335",
				TOTAL: "20000 Dh",
				MONTANT_T_M: "20",
				DATE: "15/08/2021",
				STATUT: "Payé",
			},
			{
				NUM: "3",
				N_RECU: "844",
				TOTAL: "30000 Dh",
				MONTANT_T_M: "20",
				DATE: "15/08/2022",
				STATUT: "Payé",
			},
		];
		this.data2 = [
			{
				NUM: "1",
				N_RECU: "112",
				TOTAL: "15000 Dh",
				MONTANT_T_M: "20",
				DATE: "15/08/2020",
				STATUT: "Non payé",
			},
			{
				NUM: "2",
				N_RECU: "654",
				TOTAL: "20000 Dh",
				MONTANT_T_M: "20",
				DATE: "15/08/2021",
				STATUT: "Non payé",
			},
			{
				NUM: "3",
				N_RECU: "246",
				TOTAL: "30000 Dh",
				MONTANT_T_M: "20",
				DATE: "15/08/2022",
				STATUT: "Non payé",
			},
		];
	}
	ngOnInit() {
		this.columns = [
			"NUM",
			"N_RECU",
			"TOTAL",
			"MONTANT_T_M",
			"DATE",
			"STATUT",
		];
		this.dataSource = new MatTableDataSource(this.data);
		this.dataSource2 = new MatTableDataSource(this.data2);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	//changes
	// addPesee(): void {
	// 	this.router.navigate(["pages/pesee/add-pesee"]);
	// }

	EtapeDernier(): void {
		this.router.navigate(["pages/affaires/dashboard"]);
	}

	Details() {
		this.router.navigate(["pages/reglement/show-facture"]);
	}

	createDataJson(i: number): excelData {
		return {
			NUM: this.Pesees[i].NUM,
			N_RECU: this.Pesees[i].OPERATEUR,
			TOTAL: this.Pesees[i].DATE_P,
			MONTANT_T_M: this.Pesees[i].VEHICULE,
			DATE: this.Pesees[i].MONTANT_T_M,
			STATUT: this.Pesees[i].STATUT,
		};
	}
}
export interface excelData {
	NUM: string;
	N_RECU: string;
	TOTAL: string;
	MONTANT_T_M: string;
	DATE: string;
	STATUT: string;
}
