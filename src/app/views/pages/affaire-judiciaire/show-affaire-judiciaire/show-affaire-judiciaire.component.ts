import { environment } from '../../../../../environments/environment';
import { AssociationService } from "../../utils/association.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatPaginator, MatTableDataSource, MatAccordion } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, Observer, BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { delay, map, finalize } from 'rxjs/operators';
import { FilesUtilsService } from '../../utils/files-utils.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { SpinnerService } from '../../utils/spinner.service';

export interface Association360Tab {
	label: string;
	content: string;
}

@Component({
  selector: 'kt-show-affaire-judiciaire',
  templateUrl: './show-affaire-judiciaire.component.html',
  styleUrls: ['./show-affaire-judiciaire.component.scss']
})
export class ShowAffaireJudiciaireComponent implements OnInit {

  @ViewChild(MatAccordion, { static: false }) accordion: MatAccordion;
	// ============================================
	// Datasource mandat
	// ============================================
	dataSource = new MatTableDataSource<any>();
	// isLoading = true;
	history: boolean = false;
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"dateDebut",
		"dateFin",
		"dureeMandat",
		"president",
		//"vicePresident",
		"nbrMmbr",
		"nbrH",
		"nbrF",
		"actions",
	];

   
	// ============================================
	// Controles pagination
	// ============================================
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	// =====================================
	// Declarations
	// =====================================
	asyncTabs: Observable<Association360Tab[]>;
	selected = new FormControl(0);
	id: number;
	details;
	// isLoadingResults = true;
	files: Observable<any>;
	start: boolean = true;
	assocInfo: boolean = false;
	nbMembre: number = 0;
	nbrH: number = 0;
	nbrF: number = 0;
	mandatDatasource: MANDATS[] = [];
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
	) {
		// Charger la liste des mandats
		this.getMandatBureau();

		//this.getConvention();
		this.asyncTabs = new Observable(
			(observer: Observer<Association360Tab[]>) => {
				setTimeout(() => {
					observer.next([
						{
							label: "Statut",
							content: "1",
						},
					
						{
							label: "Avocat",
							content: "2"					
						},
						{
							label: "Jugement",
							content: "3",
						},
						
						{
							label: "Evenement",
							content: "4"
						},
					]);
				}, 300);
			}
		);
	}
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
	back(): void {
		this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
	}
	// ============================================
	//
	// ============================================

	private getMandatBureau() {

		this.mandatDatasource = [];
		this.mandatList = [];
		this.id = this.route.snapshot.params["id"];
		this.service
			.getObjectById("/mandatBureau/association/", this.id)
			.subscribe(
				(data) => {
					// this.isLoading = false;
					this.mandatdata = data;
					//for (let i = 0; i < this.mandatdata.length; i++) {
					//this.mandatDatasource.push(this.createMandat(i));
					//this.service.getObjectById("/nbrHomme/", this.mandatdata[i][5]);
					// console.log('TAB : ' + JSON.stringify(this.nbrH, null, 2))
					// this.mandatList.push({ id: this.mandatdata[i][5], dateD: this.mandatdata[i][1], dateF: this.mandatdata[i][2], mandat: this.mandatdata[i][3], duree: this.mandatdata[i][4], totalMmbre: this.mandatdata[i][0], totalMmbreH: 0, totalMmbreF: 0 })
					//}
					// console.log('myData : ' + JSON.stringify(this.myData.asObservable(), null, 2))
					console.log('Mandat liste : ' + JSON.stringify(data, null, 2))
					this.dataSource = new MatTableDataSource(data);
					// this.isLoadingResults = false;
					this.dataSource.paginator = this.paginator;
					this.dataSource.sort = this.sort;
				},
				(err) => {
					// this.isLoading = false;
					console.log(err);
					// this.isLoadingResults = false;
				}
			);
	}
	createMandat(i: number): MANDATS {
		let th = 2;
		let tf = 1;
		return {
			id: this.mandatdata[i][5],
			dateD: this.mandatdata[i][1],
			dateF: this.mandatdata[i][2],
			mandat: this.mandatdata[i][3],
			duree: this.mandatdata[i][4],
			totalMmbre: this.mandatdata[i][0],
			totalMmbreH: th,
			totalMmbreF: tf,
		};
	}

	// ============================================
	// Filter de recherche
	// ============================================
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	// ============================================
	// Ajouter mandat
	// ============================================
	addMandat() {
		this.id = this.route.snapshot.params["id"];
		this.router.navigate(["associations/add-mandat/" + this.id]);
	}

	// ============================================
	// Methode de suppression des mandats
	// ============================================
	deleteMandat(id): void {
		if (confirm(this.translate.instant("PAGES.GENERAL.MSG_DELETED"))) {
			this.service
				.deleteObject("/mandatBureau/delete/", id)
				.subscribe((data) => {
					console.log("getId :" + id);
					this.getMandatBureau();
				});
			
		}
	}
	// ============================================
	// Methode de modification des associations
	// ============================================
	editAssociation(): void {
		this.id = this.route.snapshot.params["id"];
		this.router.navigate(["pages/affaire-judiciaire/edit-affaire-judiciare" + this.id]);
	}

	editAffaire(): void {
		this.router.navigate(["pages/affaire-judiciaire/edit-affaire-judiciare"]);
	}
	// ============================================
	// Export data as excel
	// ============================================
	exportTable() {
		this.fileService.exportToExcel("exportDataMandat", this.translate.instant("PAGES.MANDAT.TITRE_INDEX"));
	}
	// ============================================
	// Historique
	// ============================================
	showHitory() {

		Swal.fire({
			title: 'معلومات',
			icon: 'info',
			confirmButtonText: 'حسنا',
			html: '<table width="100%" style="direction: rtl;">' +
				'<tbody>' +
				'<tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">أنشأ من طرف :</th>' +
				'<td style="font-size: 15px;" class="donnee_show">' + this.getCreator(this.details.fullName) + '</td>' +
				'</tr><tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">تاريخ الإنشاء :</th>' +
				'<td style="font-size: 15px; direction: initial;" class="donnee_show">' + this.getDates(this.details.creationDate) + '</td>' +
				'</tr><tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">تاريخ التعديل :</th>' +
				'<td style="font-size: 15px; direction: initial;" class="donnee_show">' + this.getDates(this.details.updateDate) + '</td>' +
				'</tr><tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">تم التعديل من طرف :</th>' +
				'<td style="font-size: 15px; direction: initial;" class="donnee_show">' + this.getModificator(this.details.modificateurUser) + '</td>' +
				'</tr>' +
				'</tbody>' +
				'</table>',
		})
	}
	// ============================================
	// get Creator
	// ============================================
	getCreator(user): string {
		var result = "لا توجد معلومات";
		if (user != null) {
			result = this.details.fullName;
		}
		return result;
	}
	// ============================================
	// get Modificator
	// ============================================
	getModificator(user): string {
		var result = "لا توجد معلومات";
		if (user != null) {
			result = this.details.modificateurUser;
		}
		return result;
	}
	// ============================================
	// Date format
	// ============================================
	getDates(date): string {
		var result = "لا توجد معلومات";
		if (date != null) {
			result = formatDate(date, 'dd/MM/yyyy HH:mm', 'ar-MA');
		}
		return result;
	}
	// ============================================
	// Show info panel
	// ============================================
	openInfo() {
		this.assocInfo = !this.assocInfo;
	}
}
export interface MANDATS {
	id: string;
	dateD: string;
	dateF: String;
	mandat: string;
	duree: string;
	totalMmbre: number;
	totalMmbreH: number;
	totalMmbreF: number;
}

