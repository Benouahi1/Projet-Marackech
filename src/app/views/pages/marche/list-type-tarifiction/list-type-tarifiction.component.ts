import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';

@Component({
  selector: 'kt-list-type-Tarifiction',
  templateUrl: './list-type-Tarifiction.component.html',
  styleUrls: ['./list-type-Tarifiction.component.scss']
})
export class ListTypeTarifictionComponent implements OnInit {

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
	"TypeProduit",
	"SousTypeProduit",
	"IdProduit",
	"DateDebut",
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
        "Id": "01/01",
		"CategorieProduit": "Categorie 1",
		"TypeProduit": " Type 1",
		"SousTypeProduit": "Sous Type 1",
		"IdProduit": "Produit 1",
		"DateDebut": "10/10/2022",
		"Prix": "1000 DH",

      },
      {
        "Id": "01/02",
		"CategorieProduit": "Categorie 2",
		"TypeProduit": " Type 2",
		"SousTypeProduit": "Sous Type 2",
		"IdProduit": "Produit 2",
		"DateDebut": "20/03/2021",
		"Prix": "2400 DH",
      },
      {
        "Id": "01/03",
		"CategorieProduit": "Categorie 3",
		"TypeProduit": " Type 3",
		"SousTypeProduit": "Sous Type 3",
		"IdProduit": "roduit 3",
		"DateDebut": "03/09/2019",
		"Prix": "4390 DH",
      },
      {
        "Id": "01/04",
		"CategorieProduit": "Categorie 4",
		"TypeProduit": " Type 4",
		"SousTypeProduit": "Sous Type 4",
		"IdProduit": "roduit 4",
		"DateDebut": "04/01/2020",
		"Prix": "9000 DH",
      }
    ]
  }
  addAssociation(): void {
	// juradiction
    this.router.navigate(["pages/Marche/add-type-Tarifiction"]);
  }
  ModifierAssociation1(): void {
	// juradiction
    this.router.navigate(["pages/Marche/modification-type-tarifiction"]);
  }
  DetailAssociation1(): void {
	// juradiction
    this.router.navigate(["pages/Marche/detail-type-tarifiction"]);
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
	"TypeProduit",
	"SousTypeProduit",
	"IdProduit",
	"DateDebut",
	"Prix"
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
      TypeProduit: this.TypeJuridiction[i].TypeProduit,
	  SousTypeProduit: this.TypeJuridiction[i].SousTypeProduit,
	  IdProduit: this.TypeJuridiction[i].IdProduit,
	  DateDebut: this.TypeJuridiction[i].DateDebut,
	  Prix: this.TypeJuridiction[i].Prix,
    };
  }
}
export interface excelData {
  Id: string;
  CategorieProduit: string;
  TypeProduit: string;
  SousTypeProduit: string;
  IdProduit: string;
  DateDebut: string;
  Prix: string;


}
