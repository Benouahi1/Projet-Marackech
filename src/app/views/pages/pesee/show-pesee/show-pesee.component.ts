import { AssociationService } from "../../utils/association.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatAccordion } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { FilesUtilsService } from '../../utils/files-utils.service';
import { SpinnerService } from '../../utils/spinner.service';

export interface Association360Tab {
	label: string;
	content: string;
}

@Component({
  selector: 'kt-show-pesee',
  templateUrl: './show-pesee.component.html',
  styleUrls: ['./show-pesee.component.scss']
})

export class ShowPeseeComponent implements OnInit {
  @ViewChild(MatAccordion, { static: false }) accordion: MatAccordion;
	// ============================================
	// Datasource mandat
	// ============================================
	dataSource = new MatTableDataSource<any>();
	isLoading = true;
	history: boolean = false;

	// =====================================
	// Declarations
	// =====================================
	asyncTabs: Observable<Association360Tab[]>;
	selected = new FormControl(0);
	id: number;
	details;
	isLoadingResults = true;
	files: Observable<any>;
	start: boolean = true;
	assocInfo: boolean = false;
	nbMembre: number = 0;
	nbrH: number = 0;
	nbrF: number = 0;
	mandatList: Array<{ id: string, dateD: string, dateF: String, mandat: string, duree: string, totalMmbre: number, totalMmbreH: number, totalMmbreF: number }> = [];
	tab: Array<{ totalMmbreH: number, totalMmbreF: number }> = [];
	mandatdata: any;
	public obs$: Observable<any[]>
	myData: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	varData: any;
	// ============================================
	// Constructeur
	// ============================================
	constructor(
		private service: AssociationService,
		private router: Router,
		private route: ActivatedRoute,
		private translate: TranslateService,
		private fileService: FilesUtilsService,
		private spinnerService: SpinnerService,
	) {}
	// =====================================
	// Afficher les details association
	// =====================================
	ngOnInit() {

		this.details = {	 
			"num": "1/2022",
			"nom": "nom affaire 1 ", 
			"defendresse": "Test" ,
			"tribunal": "Tech ",
			"typeAffaire": "Administratif", 
			"demandresse": "Partie  " ,
			"dateDepot":"01-12-2019",
			"dateDebut": "01-01-2020",
			"objet":"Objet d'affaire",
			"ville": "Rabat"};
		this.id = this.route.snapshot.params["id"];
		this.service
			.getObjectById("/affaire/show/", this.id)
			.subscribe(
				(data) => {
					console.log("12222222222");
					console.log(data);
					this.details = data;
					this.dataSource = new MatTableDataSource(data);
				},

				(error) => {
					console.log(error);
				}
			);
	}
	// =====================================
	// back to list
	// =====================================
	back() {
		//this.location.back();
		this.router.navigate(["pages/pesee/list-pesees"]);
	}
	// ============================================
	//
	// ============================================
}