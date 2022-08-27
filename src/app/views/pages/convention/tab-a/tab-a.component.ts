import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from "sweetalert2";
import {
	MatDialog,
} from "@angular/material/dialog";

@Component({
  selector: 'kt-tab-a',
  templateUrl: './tab-a.component.html',
  styleUrls: ['./tab-a.component.scss']
})
export class TabAComponent implements OnInit {
	id: number;
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"PP",
		"A1",
		"A2",
		"A3",
		"A4",
		"A5",
		"actions",
	];
	data: any[] = [
		{
			statut: "status 1",
			execution: "	Execution 1",
			type_execution: "Type 1",
			resultat: "	Resultat 1",
		},
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
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort: MatSort;
	// ============================================
	// Constructeur
	// ============================================
	constructor(
		private dialogRef: MatDialog,
		private service: SubventionsService,
		private translate: TranslateService,
		private router: Router,
		private route: ActivatedRoute,
		private fileService: FilesUtilsService
	) {
		this.getEchange();
	}

	ngOnInit() {}
	// ============================================
	// Recuperer tous les association
	// ============================================
	public getEchange() {
		this.dataSource = new MatTableDataSource(this.data);
		this.isLoading = false;
	}
	// ============================================
	// Filter de recherche
	// ============================================
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	// ============================================
	// Methode de suppression des associations
	// ============================================
	deleteSubvention(id: number): void {
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
				this.service
					.deleteSubvention("/subvention/delete/", id)
					.subscribe((data) => {
						Swal.fire({
							position: "center",
							icon: "success",
							title: this.translate.instant(
								"PAGES.GENERAL.MSG_DEL_CONFIRMED"
							),
							showConfirmButton: false,
							timer: 1500,
						});
						this.getEchange();
					});
				this.service
					.deletefiles("/PjSubvention/ByIdSubvention/", id)
					.subscribe((data) => {
						console.log("File deleted : " + id);
					});
			}
		});
	}
	// ============================================
	// Methode d'insertion des subventions
	// ============================================
	addSubvention(): void {
		this.id = this.route.snapshot.params["id"];
		window.localStorage.removeItem("assocId");
		window.localStorage.setItem("assocId", "" + this.id);
		this.router.navigate(["pages/juridique/add-status"]);
	}
	// ============================================
	// Methode de modification subvention
	// ============================================
	editSubvention(idSub: any) {
		this.id = this.route.snapshot.params["id"];
		window.localStorage.removeItem("assocId");
		window.localStorage.setItem("assocId", "" + this.id);

		window.localStorage.removeItem("subId");
		window.localStorage.setItem("subId", "" + idSub.id);
		this.router.navigate(["pages/juridique/upd-status"]);
	}
	// ============================================
	// Export data as excel
	// ============================================
	exportTable() {
		this.fileService.exportToExcel(
			"exportDataSub",
			this.translate.instant("Liste des échanges")
		);
	}

	Details() {
		this.router.navigate(["pages/Convention/detaille-tab-convention"]);
	}

	Edit() {
		this.router.navigate(["pages/Convention/upd-tab-convention"]);
	}


	Nouveau() {
		//this.location.back();
		this.router.navigate(["pages/Convention/add-tab-convention"]);
	}

	// add_modal() {
	// 	this.dialogRef.open(AddAbsenceComponent);
	// }

	// edit_modal() {
	// 	this.dialogRef.open(EditAbsenceComponent);
	// }
}
export interface excelData {
	Id: string;
	typeEchange: string;
	dateEchange: string;
	deposePar: string;
}
