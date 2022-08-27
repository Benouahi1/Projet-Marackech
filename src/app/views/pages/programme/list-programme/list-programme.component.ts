import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
@Component({
  selector: 'kt-list-programme',
  templateUrl: './list-programme.component.html',
  styleUrls: ['./list-programme.component.scss']
})
export class ListProgrammeComponent implements OnInit {

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
	  "Porten",
	  "Cant",
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
		  "Nom": "Programme 1",
		  "Annee": "2022/02/02",
		  "Porten": "Porton 1",
		  "Cant": "TCant 1 ",

		},
		{
		  "Id": "02",
		  "Nom": "Programme 2",
		  "Annee": "2018/05/04",
		  "Porten": "Porten 2",
		  "Cant": "Cant 2 ",
		},
		{
		  "Id": "03",
		  "Nom": "Programme 3",
		  "Annee": "2020/02/11",
		  "Porten": "Porten 3",
		  "Cant": "Cant 3 ",
		},
		{
		  "Id": "04",
		  "Nom": "Programme 4 ",
		  "Annee": "2022/10/02",
		  "Porten": "Porten 4",
		  "Cant": "Cant 4",
		}
	  ]
	}

	ngOnInit() {
	  this.columns = [
		"Id",
		"Nom",
		"Annee",
		"Porten",
		"Cant",
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
	  this.router.navigate(["pages/Programme/add-programme"]);
	}
	DetailAssociation(): void {
	  this.router.navigate(["pages/Programme/detaille-programme"]);
	}
	ModifierAssociation(): void {
	  this.router.navigate(["pages/Programme/updt-programme"]);
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
		Porten: this.TypeAlert[i].Parten,
		Cant: this.TypeAlert[i].Cant,


	  };
	}

  }
  export interface excelData {
	Id: string;
	Nom: string;
	Annee: string;
	Porten: string;
	Cant: string;


  }
