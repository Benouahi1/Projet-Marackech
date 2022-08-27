import { DatePipe } from '@angular/common';
import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';

@Component({
  selector: 'kt-list-type-embalage',
  templateUrl: './list-type-embalage.component.html',
  styleUrls: ['./list-type-embalage.component.scss']
})
export class ListTypeEmbalageComponent implements OnInit {
  TypeAlert: any;
  data: excelData[] = [];
  columns: any[];
  footerData: any[][] = [];
  // ============================================
  // Presentation de datasource
  // ============================================
  displayedColumns: string[] = [
    "Id",
	"Type",
	"SousType",
    "Libelle",
    "Description",
	"PoidMoyen",
	"PoisMoyenEmbraqui",
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
        "Id": "01/01",
		"Type":"Type 1",
		"SousType":"Sous Type 1",
        "Libelle":"Libelle 1",
        "Description":"Descreption 1",
		"PoidMoyen":"Poids Moiyen 1",
		"PoisMoyenEmbraqui":"Poids Embraqui 1",
      },
      {
        "Id": "01/02",
		"Type":"Type 2",
		"SousType":"Sous Type 2",
        "Libelle":"Libelle 2",
        "Description":"Descreption 2",
		"PoidMoyen":"Poids Moiyen 2",
		"PoisMoyenEmbraqui":"Poids Embraqui 2",
      },
      {
        "Id": "01/03",
		"Type":"Type 3",
		"SousType":"Sous Type 3",
        "Libelle":"Libelle 3",
        "Description":"Descreption 3",
		"PoidMoyen":"Poids Moiyen 3",
		"PoisMoyenEmbraqui":"Poids Embraqui 3",
      },
      {
        "Id": "01/04",
		"Type":"Type 4",
		"SousType":"Sous Type 4",
        "Libelle":"Libelle 4",
        "Description":"Descreption 4",
		"PoidMoyen":"Poids Moiyen 4",
		"PoisMoyenEmbraqui":"Poids Embraqui 4",
      }
      ,
      {
        "Id": "01/05",
		"Type":"Type 5",
		"SousType":"Sous Type 5",
        "Libelle":"Libelle 5",
        "Description":"Descreption 5",
		"PoidMoyen":"Poids Moiyen 5",
		"PoisMoyenEmbraqui":"Poids Embraqui 5",
      }
    ]
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
    this.columns = [ "Id",
	"Type",
	"SousType",
    "Libelle",
    "Description",
	"PoidMoyen",
	"PoisMoyenEmbraqui",
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
	//Alert
    this.router.navigate(["pages/Marche/add-type-embalage"]);
  }
  DetailAssociation(): void {
	//Alert
    this.router.navigate(["pages/Marche/detail-type-embalage"]);
  }
  MoudifierAssociation(): void {

    this.router.navigate(["pages/Marche/modification-type-embalage"]);
  }

  createDataJson(i: number): excelData {
    return {
      Id: this.TypeAlert[i].Id,
	  Type: this.TypeAlert[i].Type,
	  SousType: this.TypeAlert[i].SousType,
      Libelle: this.TypeAlert[i].Libelle,
      Description: this.TypeAlert[i].Description,
	  PoidMoyen: this.TypeAlert[i].PoidMoyen,
	  PoisMoyenEmbraqui: this.TypeAlert[i].PoisMoyenEmbraqui,
    };
  }
}
export interface excelData {
  Id: string;
  Type: string;
  SousType: string;
  Libelle: string;
  Description: string;
  PoidMoyen: string;
  PoisMoyenEmbraqui: string;


}
