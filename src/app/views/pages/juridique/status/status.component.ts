import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';

@Component({
	selector: 'kt-Status',
	templateUrl: './status.component.html',
	styleUrls: ['./status.component.scss']
  })
export class StatusComponent implements OnInit {

  TypeAudience: any;
  data: excelData[] = [];
  columns: any[];
  footerData: any[][] = [];
  // ============================================
  // Presentation de datasource
  // ============================================
  displayedColumns: string[] = [
    "Status",
    "Execution",
    "Type",
	"Resultat",
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
        "Status": " Statuts 1",
        "Execution": "Execution 1 ",
        "Type": "Type  1",
		"Resultat": "Resultat 1",
      },
      {
        "Status": " Statuts 2",
        "Execution": "Execution 2 ",
        "Type": "Type 2",
		"Resultat": "Resultat 2",
      },
      {
        "Status": " Statuts 3",
        "Execution": "Execution 3 ",
        "Type": "Type  3",
		"Resultat": "Resultat 3",
      },
      {
        "Status": " Statuts 4",
        "Execution": "Execution 4 ",
        "Type": "Type 4",
		"Resultat": "Resultat 4",
      }
    ]
  }
  addAssociation(): void {
	// audianc
    this.router.navigate(["pages/juridique/add-status"]);
  }
//   DetailAssociation(): void {
// 	// audianc
//     this.router.navigate(["pages/Marche/detail-type-hangar"]);
//   }
  ModifierAssociation(): void {
	// audianc
    this.router.navigate(["pages/juridique/upd-status"]);
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
    this.columns = ["Status",
      "Execution",
      "Type",
	"Resultat",
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
		Status: this.TypeAudience[i]. Status,
		Execution: this.TypeAudience[i].Execution,
		Type: this.TypeAudience[i].Type,
		Resultat: this.TypeAudience[i].Resultat,

    };
  }

}
export interface excelData {
	Status: string;
	Execution: string;
	Type: string;
	Resultat: string;


}
