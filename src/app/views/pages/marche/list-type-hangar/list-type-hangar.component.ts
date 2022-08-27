import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';

@Component({
  selector: 'kt-list-type-Hangar',
  templateUrl: './list-type-Hangar.component.html',
  styleUrls: ['./list-type-Hangar.component.scss']
})
export class ListTypeHangarComponent implements OnInit {
  TypeAudience: any;
  data: excelData[] = [];
  columns: any[];
  footerData: any[][] = [];
  // ============================================
  // Presentation de datasource
  // ============================================
  displayedColumns: string[] = [
    "NumHangar",
    "Libelle",
    "Description",
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
        "NumHangar": "01/01",
        "Libelle": "Libelle 1 ",
        "Description": "Description  1"
      },
      {
        "NumHangar": "01/02",
        "Libelle": "Libelle 2 ",
        "Description": "Description 2"
      },
      {
        "NumHangar": "01/03",
        "Libelle": "Libelle 3 ",
        "Description": "Description  3"
      },
      {
        "NumHangar": "01/04",
        "Libelle": "Libelle 4 ",
        "Description": "Description 4"
      }
    ]
  }
  addAssociation(): void {
	// audianc
    this.router.navigate(["pages/Marche/add-type-Hangar"]);
  }
  DetailAssociation(): void {
	// audianc
    this.router.navigate(["pages/Marche/detail-type-hangar"]);
  }
  ModifierAssociation(): void {
	// audianc
    this.router.navigate(["pages/Marche/modification-type-Hangar"]);
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

  ngOnInit() {
    this.columns = ["NumHangar",
      "Libelle",
      "Description"];
    this.dataSource = new MatTableDataSource(this.data);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  createDataJson(i: number): excelData {
    return {
		NumHangar: this.TypeAudience[i].NumHangar,
      Libelle: this.TypeAudience[i].Libelle,
      Description: this.TypeAudience[i].Description,

    };
  }

}
export interface excelData {
	NumHangar: string;
  Libelle: string;
  Description: string;


}
