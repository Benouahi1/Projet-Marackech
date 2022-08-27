import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';


@Component({
  selector: 'kt-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {
	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
	  "Id",
	  "Nom",
	  "Annee",
	  "Duree",
	  "Cant",
	  "Programme",
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

	constructor(private translate: TranslateService,
	  private router: Router,

	  private datePipe: DatePipe,
	  private excelService: ExcelAssociationService,) {
	  this.data = [
		{

		  "Id": "01",
		  "Nom": "Projet 1",
		  "Annee": "2022/02/02",
		  "Duree": "Duree 1",
		  "Cant": "TCant 1 ",
		  "Programme": "Programme 1",

		},
		{
		  "Id": "02",
		  "Nom": "Projet 2",
		  "Annee": "2018/05/04",
		  "Duree": "Duree 1",
		  "Cant": "Cant 2 ",
		  "Programme": "",
		},
		{
		  "Id": "03",
		  "Nom": "Projet 3",
		  "Annee": "2020/02/11",
		  "Duree": "Duree 1",
		  "Cant": "Cant 3 ",
		  "Programme": "Programme 3",
		},
		{
		  "Id": "04",
		  "Nom": "Projet 4 ",
		  "Annee": "2022/10/02",
		  "Duree": "Duree 1",
		  "Cant": "Cant 4",
		  "Programme": "",
		}
	  ]
	}

	ngOnInit() {
	  this.columns = [
		"Id",
		"Nom",
		"Annee",
		"Duree",
		"Cant",
		"Programme",
	];
	  this.dataSource = new MatTableDataSource(this.data);

	}
	applyFilter(filterValue: string) {
	  this.dataSource.filter = filterValue.trim().toLowerCase();

	  if (this.dataSource.paginator) {
		this.dataSource.paginator.firstPage();
	  }
	}
	addAssociation(): void {
	  this.router.navigate(["pages/Projet/add-projet"]);
	}
	DetailAssociation(): void {
	  this.router.navigate(["pages/Projet/detaille-projet"]);
	}
	ModifierAssociation(): void {
	  this.router.navigate(["pages/Projet/updt-projet"]);
	}
	deleteAssociation(id: number): void {
	  Swal.fire({
		title: 'Voulez vous supprimer cet enregistrement ?',
		icon: 'question',
		iconHtml: '?',
		showCancelButton: true,
		showCloseButton: true,
		confirmButtonText: 'Oui',
		cancelButtonText: 'Non',
	  }).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {

		  Swal.fire({
			position: 'center',
			icon: 'success',
			title: this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
			showConfirmButton: false,
			timer: 1500
		  })


		}
	  })
	}

	createDataJson(i: number): excelData {
	  return {
		Id: this.TypeAlert[i].Id,
		Nom: this.TypeAlert[i].Nom,
		Annee: this.TypeAlert[i].Annee,
		Duree: this.TypeAlert[i].Duree,
		Cant: this.TypeAlert[i].Cant,
		Programme: this.TypeAlert[i].Programme,


	  };
	}

  }
  export interface excelData {
	Id: string;
	Nom: string;
	Annee: string;
	Duree: string;
	Cant: string;
	Programme: string;


  }
