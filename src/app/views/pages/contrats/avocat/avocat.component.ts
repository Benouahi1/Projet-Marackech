import { DatePipe } from "@angular/common";
import { Component, OnInit, Type, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-avocat",
	templateUrl: "./avocat.component.html",
	styleUrls: ["./avocat.component.scss"],
})
export class AvocatComponent implements OnInit {
	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"Nom",
		"Prenom",
		"Raison",
		"Cin",
		"Gsm",
		"Fax",
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
				Nom: "Benouahi",
				Prenom: "Ayoub",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
			},
			{
				Nom: "Benouahi",
				Prenom: "Bilal",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
			},
			{
				Nom: "Benouahi",
				Prenom: "Ahmed",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
			},
		];
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
	ngOnInit() {
		this.columns = ["Nom", "Prenom", "Raison", "Cin", "Gsm", "Fax"];
		this.dataSource = new MatTableDataSource(this.data);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	addAssociation(): void {
		//Alert
		this.router.navigate(["/pages/contrats/add-avocat"]);
	}
	DetailAssociation(): void {
		//Alert
		this.router.navigate(["/pages/contrats/detaille-avocat"]);
	}
	MoudifierAssociation(): void {
		this.router.navigate(["/pages/contrats/upd-avocat"]);
	}

	createDataJson(i: number): excelData {
		return {
			Nom: this.TypeAlert[i].Nom,
			Prenom: this.TypeAlert[i].Prenom,
			Raison: this.TypeAlert[i].Raison,
			Cin: this.TypeAlert[i].Cin,
			Gsm: this.TypeAlert[i].Gsm,
			Fax: this.TypeAlert[i].Fax,
		};
	}
}
export interface excelData {
	Nom: string;
	Prenom: string;
	Raison: string;
	Cin: string;
	Gsm: string;
	Fax: string;
}
