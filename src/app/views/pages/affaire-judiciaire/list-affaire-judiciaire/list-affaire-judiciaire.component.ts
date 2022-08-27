import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-list-affaire-judiciaire",
	templateUrl: "./list-affaire-judiciaire.component.html",
	styleUrls: ["./list-affaire-judiciaire.component.scss"],
})
export class ListAffaireJudiciaireComponent implements OnInit {
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
		"DATE",
		"STATUT",
		"DESCRIPTION",
		"REMARQUE",
		"AVOCAT",
		"PIECE_JOINTES",
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
				CIN_D: "A6461",
				CIN_P: "A6555",
				OBJET: "objet1",
				DATE: "18/06/2020",
				STATUT: "statut1",
				DESCRIPTION: "description1",
				REMARQUE: "remarque1",
				AVOCAT: "Bilal",
				PIECE_JOINTES: "piece1",
			},
			{
				NUM: "2",
				CIN_D: "A6461",
				CIN_P: "A6555",
				OBJET: "objet2",
				DATE: "18/06/2020",
				STATUT: "statut2",
				DESCRIPTION: "description2",
				REMARQUE: "remarque2",
				AVOCAT: "Ahmed",
				PIECE_JOINTES: "piece2",
			},
			{
				NUM: "3",
				CIN_D: "A6461",
				CIN_P: "A6555",
				OBJET: "objet3",
				DATE: "18/06/2020",
				STATUT: "statut3",
				DESCRIPTION: "description3",
				REMARQUE: "remarque3",
				AVOCAT: "Ayoub",
				PIECE_JOINTES: "piece3",
			},
		];
	}
	ngOnInit() {
		this.columns = [
			"NUM",
			"CIN_D",
			"CIN_P",
			"OBJET",
			"DATE",
			"STATUT",
			"DESCRIPTION",
			"REMARQUE",
			"AVOCAT",
			"PIECE_JOINTES",
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

	Archiver(id: number): void {
		Swal.fire({
			title: "Message ?",
			icon: "question",
			iconHtml: "?",
			showCancelButton: true,
			showCloseButton: true,
			confirmButtonText: "Oui",
			cancelButtonText: "Non",
		}).then((result) => {
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
	add(): void {
		this.router.navigate([
			"pages/affaire-judiciaire/add-affaire-judiciare",
		]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/affaires/dashboard"]);
	}

	Details(): void {
		this.router.navigate([
			"pages/affaire-judiciaire/show-affaire-judiciare",
		]);
	}

	Edit(): void {
		this.router.navigate([
			"pages/affaire-judiciaire/edit-affaire-judiciare",
		]);
	}

	addDetails(): void {
		this.router.navigate([
			"pages/affaire-judiciaire/add-affaire-judiciare-detail",
		]);
	}

	createDataJson(i: number): excelData {
		return {
			NUM: this.Pesees[i].NUM,
			CIN_D: this.Pesees[i].OPERATEUR,
			CIN_P: this.Pesees[i].DATE_P,
			OBJET: this.Pesees[i].VEHICULE,
			DATE: this.Pesees[i].MONTANT_T_M,
			STATUT: this.Pesees[i].STATUT,
			DESCRIPTION: this.Pesees[i].DESCRIPTION,
			REMARQUE: this.Pesees[i].REMARQUE,
			AVOCAT: this.Pesees[i].AVOCAT,
			PIECE_JOINTES: this.Pesees[i].PIECE_JOINTES,
		};
	}
}
export interface excelData {
	NUM: string;
	CIN_D: string;
	CIN_P: string;
	OBJET: string;
	DATE: string;
	STATUT: string;
	DESCRIPTION: string;
	REMARQUE: string;
	AVOCAT: string;
	PIECE_JOINTES: string;
}
