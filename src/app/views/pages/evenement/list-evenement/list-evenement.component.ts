import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
  selector: 'kt-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.scss']
})
export class ListEvenementComponent implements OnInit {

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
		"actions"
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
				OPERATEUR: "sample text",
				DATE_P: "sample text",
				VEHICULE: "sample text",
				MONTANT_T_M: "sample text",
				STATUT: "En cours de validation",
			},
			{
				NUM: "2",
				OPERATEUR: "sample text",
				DATE_P: "sample text",
				VEHICULE: "sample text",
				MONTANT_T_M: "sample text",
				STATUT: "En cours de validation",
			}
		];
		this.data2 = [
			{
				NUM: "1",
				OPERATEUR: "sample text",
				DATE_P: "sample text",
				VEHICULE: "sample text",
				MONTANT_T_M: "sample text",
				STATUT: "Payé",
			},
			{
				NUM: "2",
				OPERATEUR: "sample text",
				DATE_P: "sample text",
				VEHICULE: "sample text",
				MONTANT_T_M: "sample text",
				STATUT: "Payé",
			},
		];
		this.data3 = [
			{
				NUM: "1",
				OPERATEUR: "sample text",
				DATE_P: "sample text",
				VEHICULE: "sample text",
				MONTANT_T_M: "sample text",
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
  deleteAssociation(id: number): void {
		Swal.fire({
			title: "Voulez vous supprimer cet enregistrement ?",
			icon: "question",
			iconHtml: "?",
			showCancelButton: true,
			showCloseButton: true,
			confirmButtonText: "Oui",
			cancelButtonText: "Non",
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire({
					position: "center",
					icon: "success",
					title: this.translate.instant(
						"PAGES.GENERAL.MSG_DEL_CONFIRMED"
					),
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	//changes
	Add(): void {
		this.router.navigate(["pages/evenement/add-evenement"]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/affaires/dashboard"]);
	}

	Details() {
		this.router.navigate(["pages/evenement/show-evenement"]);
	}

	Edit() {
		this.router.navigate(["pages/evenement/edit-evenement"]);
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

