import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';

@Component({
  selector: 'kt-add-marchee',
  templateUrl: './add-marchee.component.html',
  styleUrls: ['./add-marchee.component.scss']
})
export class AddMarcheeComponent implements OnInit {
	isVisible: any = 0;
	Presentation: any = 0;
	Visible: any = 0;
	Type: any = 0;
	isSelected: boolean = false;
	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];

	displayedColumns: string[] = [
		"Id",
		"Type",
		"Piece",
		"actions",

	  ];

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

			"Id":"1",
			"Type":"Type 1",
			"Piece": "Piece 21",
		},
		{

		  "Id":"2",
		  "Type":"Type 2",
		  "Piece": "Piece 2",
		},

	  ]
	}



  ngOnInit() {
	this.columns = [
	"Id",
	"Type",
	"Piece",

];this.dataSource = new MatTableDataSource(this.data);
  }
applyFilter(filterValue: string) {
	this.dataSource.filter = filterValue.trim().toLowerCase();

	if (this.dataSource.paginator) {
	  this.dataSource.paginator.firstPage();
	}
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








  RetourEmbalages(): void {
	this.router.navigate(["pages/Marchee/list-marche"]);

}

createDataJson(i: number): excelData {
	return {
	  Id: this.TypeAlert[i].Id,
	  Type: this.TypeAlert[i].Type,
	  Piece: this.TypeAlert[i].Piece,



	};
  }

}
export interface excelData {
  Id: string;
 Type: string;
  Piece:string;

}
