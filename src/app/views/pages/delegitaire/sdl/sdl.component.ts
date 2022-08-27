import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { DatePipe } from "@angular/common";
import { ExcelAssociationService } from "../../utils/excel-association.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'kt-sdl',
  templateUrl: './sdl.component.html',
  styleUrls: ['./sdl.component.scss']
})
export class SDLComponent implements OnInit {


  TypeAlert: any;
  data: excelData[] = [];
  columns: any[];
  footerData: any[][] = [];
  // ============================================
  // Presentation de datasource
  // ============================================
  displayedColumns: string[] = [
    "Id",
	"Raison",
	"Rc",
	"If",
	"Ice",
    "Adress",
	"Capitale",
	"Secture",
    "Strecture",
	"Statuts",
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
		"Raison": "Raison 1",
		"Rc": "Rc 1",
		"If": "If 1",
		"Ice": "Ice 1",
		"Adress": "Adress 1",
		"Capitale": "Capitale 1",
        "Secture": "Secture 1 ",
        "Strecture": "Strecture 1",
		"Statuts": "Statuts 1",
      },
      {
        "Id": "01",
		"Raison": "Raison 2",
		"Rc": "Rc 2",
		"If": "If 2",
		"Ice": "Ice 2",
		"Adress": "Adress 2",
		"Capitale": "Capitale 2",
        "Secture": "Secture ",
        "Strecture": "Strecture 2",
		"Statuts": "Statuts 2",
      },
      {
        "Id": "01",
		"Raison": "Raison 3",
		"Rc": "Rc 3",
		"If": "If 3",
		"Ice": "Ice 3",
		"Adress": "Adress 3",
		"Capitale": "Capitale 3",
        "Secture": "Secture ",
        "Strecture": "Strecture 3",
		"Statuts": "Statuts 3",
      },
      {
        "Id": "01",
		"Raison": "Raison 4",
		"Rc": "Rc 4",
		"If": "If 4",
		"Ice": "Ice 4",
		"Adress": "Adress 4",
		"Capitale": "Capitale 4",
        "Secture": "Secture 4 ",
        "Strecture": "Strecture 4",
		"Statuts": "Statuts 4",
      }
    ]
  }

  ngOnInit() {
    this.columns = ["Id",
	  "Raison",
	  "Rc",
	  "If",
	  "Ice",
	  "Adress",
	  "Capitale",
      "Secture",
      "Strecture",
		"Statuts"
	];
    this.dataSource = new MatTableDataSource(this.data);

  }

  addAssociation(): void {
	this.router.navigate(["pages/delegitaire/add-sdl"]);
}
UpdAssociation(): void {
	this.router.navigate(["pages/delegitaire/upd-sdl"]);
}
DettailleAssociation(): void {
	this.router.navigate(["pages/delegitaire/detaille-sdl"]);
}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
//   addAssociation(): void {
//     this.router.navigate(["pages/Marche/add-type-Produit"]);
//   }
//   DetailAssociation(): void {
//     this.router.navigate(["pages/Marche/detail-type-produit"]);
//   }
//   ModifierAssociation(): void {
//     this.router.navigate(["pages/Marche/modification-type-Produit"]);
//   }
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
	  Raison: this.TypeAlert[i].Categorie,
	  Rc: this.TypeAlert[i].Rc,
	  If: this.TypeAlert[i].If,
	  Ice: this.TypeAlert[i].Ice,
	  Adress: this.TypeAlert[i].Adress,
	  Capitale: this.TypeAlert[i].Capitale,
      Secture: this.TypeAlert[i].Secture,
      Strecture: this.TypeAlert[i].Strecture,
	  Statuts: this.TypeAlert[i].Statuts,

    };
  }

}
export interface excelData {
  Id: string;
  Rc: string;
  If: string;
  Ice: string;
  Raison: string;
  Adress: string;
  Capitale: string;
  Secture: string;
  Strecture: string;
  Statuts: string;


}
