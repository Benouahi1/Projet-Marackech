import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-list-demandes",
	templateUrl: "./list-demandes.component.html",
	styleUrls: ["./list-demandes.component.scss"],
})
export class ListDemandesComponent implements OnInit {
	Pesees: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"CIN_D",
		"CIN_P",
		"OBJET",
		"DATE_C",
		"STATUT",
		"DESCRIPTION_C",
		"REMARQUE",
		"actions",
	];
	// ============================================
	// Declarations
	// ============================================
	dataSource = new MatTableDataSource<any>();
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
				CIN_D: "A65654",
				CIN_P: "------",
				OBJET: "objet1",
				DATE_C: "18/06/2020",
				STATUT: "statut1",
				DESCRIPTION_C: "description1",
				REMARQUE: "remarque1",
			},

			{
				NUM: "2",
				CIN_D: "-----",
				CIN_P: "B5655",
				OBJET: "objet2",
				DATE_C: "18/09/2022",
				STATUT: "statut2",
				DESCRIPTION_C: "description2",
				REMARQUE: "remarque2",
			},
		];
	}
	ngOnInit() {
		this.columns = [
			"NUM",
			"CIN_D",
			"CIN_P",
			"OBJET",
			"DATE_C",
			"STATUT",
			"DESCRIPTION_C",
			"REMARQUE",
		];
		this.dataSource = new MatTableDataSource(this.data);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
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

	gavel(id: number): void {
		Swal.fire({
			title: "Message ?",
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
					title: this.translate.instant("Success"),
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	}

	//changes
	addDemande(): void {
		this.router.navigate(["pages/demande/add-demande"]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/affaires/dashboard"]);
	}

	Details(): void {
		this.router.navigate(["pages/demande/show-demande"]);
	}

	Edit(): void {
		this.router.navigate(["pages/demande/edit-demande"]);
	}

	createDataJson(i: number): excelData {
		return {
			NUM: this.Pesees[i].NUM,
			CIN_D: this.Pesees[i].CIN_D,
			CIN_P: this.Pesees[i].CIN_P,
			OBJET: this.Pesees[i].OBJET,
			DATE_C: this.Pesees[i].DATE_C,
			STATUT: this.Pesees[i].STATUT,
			DESCRIPTION_C: this.Pesees[i].DESCRIPTION_C,
			REMARQUE: this.Pesees[i].REMARQUE,
		};
	}
}
export interface excelData {
	NUM: string;
	CIN_D: string;
	CIN_P: string;
	OBJET: string;
	DATE_C: string;
	STATUT: string;
	DESCRIPTION_C: string;
	REMARQUE: string;
}
