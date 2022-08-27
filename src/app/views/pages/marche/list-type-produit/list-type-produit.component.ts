import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
@Component({
  selector: 'kt-list-type-Produit',
  templateUrl: './list-type-Produit.component.html',
  styleUrls: ['./list-type-Produit.component.scss']
})
export class ListTypeProduitComponent implements OnInit {
  TypeAlert: any;
  data: excelData[] = [];
  columns: any[];
  footerData: any[][] = [];
  // ============================================
  // Presentation de datasource
  // ============================================
  displayedColumns: string[] = [
    "Id",
	"Categorie",
    "Type",
	"SousType",
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
        "Id": "01/01",
		"Categorie": "Categorie Produit 1",
		"Type": "Type de Produit 1",
		"SousType": "SousType de produit 1",
        "Libelle": "Type Fichier 1 ",
        "Description": "Description Fichier 1"
      },
      {
        "Id": "01/02",
		"Categorie": "Categorie Produit 2",
		"Type": "Type de Produit 2",
		"SousType": "SousType de produit 2",
        "Libelle": "Type Fichier 2 ",
        "Description": "Description Fichier 2"
      },
      {
        "Id": "01/03",
		"Categorie": "Categorie Produit 3",
		"Type": "Type de Produit 3",
		"SousType": "SousType de produit 3",
        "Libelle": "Type Fichier 3 ",
        "Description": "Description Fichier 3"
      },
      {
        "Id": "01/04",
		"Categorie": "Categorie Produit 4",
		"Type": "Type de Produit 4",
		"SousType": "SousType de produit 4",
        "Libelle": "Type Fichier 4 ",
        "Description": "Description Fichier 4"
      }
    ]
  }

  ngOnInit() {
    this.columns = ["Id",
	  "Categorie",
	  "Type",
	  "SousType",
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
  addAssociation(): void {
    this.router.navigate(["pages/Marche/add-type-Produit"]);
  }
  DetailAssociation(): void {
    this.router.navigate(["pages/Marche/detail-type-produit"]);
  }
  ModifierAssociation(): void {
    this.router.navigate(["pages/Marche/modification-type-Produit"]);
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
	  Categorie: this.TypeAlert[i].Categorie,
	  Type: this.TypeAlert[i].Type,
	  SousType: this.TypeAlert[i].SousType,
      Libelle: this.TypeAlert[i].Libelle,
      Description: this.TypeAlert[i].Description,

    };
  }

}
export interface excelData {
  Id: string;
  Categorie: string;
  Type: string;
  SousType: string;
  Libelle: string;
  Description: string;


}
