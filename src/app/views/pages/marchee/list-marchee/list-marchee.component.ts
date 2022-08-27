import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';


@Component({
  selector: 'kt-list-marchee',
  templateUrl: './list-marchee.component.html',
  styleUrls: ['./list-marchee.component.scss']
})
export class ListMarcheeComponent implements OnInit {

	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
	  "Id",
	  "Organiseme",
	  "Budget",
	  "Object",
	  "Nature",
	  "Prix",
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

		  "Id": "31",
		  "Organiseme":"Organism 2",
		  "Budget": "Budget Estimitif 1",
		  "Object": "Object 3",
		  "Nature": "Natur AO 1",
		  "Prix": "Natur Prix 1",
		},
		{
		  "Id": "-",
		  "Organiseme":"Organism 2",
		  "Budget": "Budget Estimitif 5",
		  "Object": "Object 5",
		  "Nature": "Natur AO 2",
		  "Prix": "Natur Prix 4",
		},
		{
		  "Id": "42",
		  "Organiseme":"Organism 3",
		  "Budget": "Budget Estimitif 2",
		  "Object": "Object 3",
		  "Nature": "Natur AO 4",
		  "Prix": "Natur Prix 5",
		},
		{
		  "Id": "-",
		  "Organiseme":"Organism 4",
		  "Budget": "Budget Estimitif 4",
		  "Object": "Object 3",
		  "Nature": "Natur AO 2",
		  "Prix": "Natur Prix 5",
		}
	  ]
	}

	ngOnInit() {
	  this.columns = [
		"Id",
		"Organiseme",
		"Budget",
		"Object",
		"Nature",
		"Prix",
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
	  this.router.navigate(["pages/Marchee/add-marche"]);
	}
	DetailAssociation(): void {
	  this.router.navigate(["pages/Marchee/detail-marche"]);
	}
	ModifierAssociation(): void {
	  this.router.navigate(["pages/Marchee/upd-marche"]);
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
		Organiseme: this.TypeAlert[i].Organiseme,
		Budget: this.TypeAlert[i].Budget,
		Object: this.TypeAlert[i].Object,
		Nature: this.TypeAlert[i].Nature,
		Prix: this.TypeAlert[i].Prix,


	  };
	}

  }
  export interface excelData {
	Id: string;
	Organiseme: string;
	Budget:string;
	Object: string;
	Nature: string;
	Prix: string;

}
