import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';

@Component({
	selector: 'kt-jugements',
	templateUrl: './jugements.component.html',
	styleUrls: ['./jugements.component.scss']
  })
  export class JugementsComponent implements OnInit {

  TypeJuridiction: any;
  data: excelData[] = [];
  columns: any[];
  footerData: any[][] = [];
  // ============================================
  // Presentation de datasource
  // ============================================
  displayedColumns: string[] = [
    "Id",
	"CategorieProduit",
	"Date",
	"Description",
	"Statuts",
	"Remarque",
	"Piece",
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
		"CategorieProduit": "Categorie 1",
		"Date": "2015-01-02",
		"Description": "Description 1",
		"Statuts": "Statuts 1",
		"Remarque": "Remarque 1",
		"Piece": "Pieces 1",

      },
      {
        "Id": "01/02",
		"CategorieProduit": "Categorie 2",
		"Date": "2021-09-30",
		"Description": "Description 2",
		"Statuts": "Statuts 2",
		"Remarque": "Remarque 2",
		"Piece": "Pieces 2",
      },
      {
        "Id": "01/03",
		"CategorieProduit": "Categorie 3",
		"Date": "2019-04-03",
		"Description": "Description 3",
		"Statuts": "Statuts 3",
		"Remarque": "Remarque 3",
		"Piece": "Pieces 3",
      },
      {
        "Id": "01/04",
		"CategorieProduit": "Categorie 4",
		"Date": "2020-01-05",
		"Description": "Description  4",
		"Statuts": "Statuts 4",
		"Remarque": "Remarque 4",
		"Piece": "Pieces 4",
      }
    ]
  }
  addAssociation(): void {
	// juradiction
    this.router.navigate(["pages/juridique/add-jugements"]);
  }
  ModifierAssociation1(): void {
	// juradiction
    this.router.navigate(["pages/juridique/upd-jugements"]);
  }
  DetailAssociation1(): void {
	// juradiction
    this.router.navigate(["pages/juridique/detaille-jugements"]);
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
    this.columns = ["Id",
	"CategorieProduit",
	"Date",
	"Description",
	"Statuts",
	"DateDebut",
	"Piece"
];
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
      Id: this.TypeJuridiction[i].Id,
      CategorieProduit: this.TypeJuridiction[i].CategorieProduit,
      Date: this.TypeJuridiction[i].Date,
	  Description: this.TypeJuridiction[i].Description,
	  Statuts: this.TypeJuridiction[i].Statuts,
	  Remarque: this.TypeJuridiction[i].Remarque,
	  Piece: this.TypeJuridiction[i].Piece,
    };
  }
}
export interface excelData {
  Id: string;
  CategorieProduit: string;
  Date: string;
  Description: string;
  Statuts: string;
  Remarque: string;
  Piece: string;


}
