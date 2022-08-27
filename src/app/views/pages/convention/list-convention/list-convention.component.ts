import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';


@Component({
  selector: 'kt-list-convention',
  templateUrl: './list-convention.component.html',
  styleUrls: ['./list-convention.component.scss']
})
export class ListConventionComponent implements OnInit {
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
	  "Date",
	  "Duree",
	  "Mantant",
	  "Partie",
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
		  "Nom": "Convention 1",
		  "Date": "2022/02/02",
		  "Duree": "Duree 1",
		  "Mantant": "Mantant 1 ",
		  "Partie": "Partie 1",

		},
		{
		  "Id": "02",
		  "Nom": "Convention 2",
		  "Date": "2018/05/04",
		  "Duree": "Duree 1",
		  "Mantant": "Mantant 2 ",
		  "Partie": "",
		},
		{
		  "Id": "03",
		  "Nom": "Convention 3",
		  "Date": "2020/02/11",
		  "Duree": "Duree 1",
		  "Mantant": "Mantant 3 ",
		  "Partie": "Partie 3",
		},
		{
		  "Id": "04",
		  "Nom": "Convention 4 ",
		  "Date": "2022/10/02",
		  "Duree": "Duree 1",
		  "Mantant": "Mantant 4",
		  "Partie": "",
		}
	  ]
	}
	RetourEmbalages(): void {
		this.router.navigate(["pages/Convention/list-convention"]);

	}

	ngOnInit() {
	  this.columns = [
		"Id",
		"Nom",
		"Date",
		"Duree",
		"Mantant",
		"Partie",
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
	  this.router.navigate(["pages/Convention/add-convention"]);
	}
	DetailAssociation(): void {
	  this.router.navigate(["pages/Convention/detaille-convention"]);
	}
	ModifierAssociation(): void {
	  this.router.navigate(["pages/Convention/updt-convention"]);
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
		Date: this.TypeAlert[i].Date,
		Duree: this.TypeAlert[i].Duree,
		Mantant: this.TypeAlert[i].Mantant,
		Partie: this.TypeAlert[i].Partie,


	  };
	}

  }

  export interface excelData {
	Id: string;
	Nom: string;
	Date: string;
	Duree: string;
	Mantant: string;
	Partie: string;


  }
