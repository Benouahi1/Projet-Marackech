// Angular
import { Component, Input, OnInit } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';
// State
import { AppState } from '../../../../../core/reducers';
import { currentUser, Logout, User, AllPermissionsLoaded } from '../../../../../core/auth';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { map } from 'rxjs/operators';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
	// Public properties

	fullName: String;
	idPersonnel: number;
	user$: Observable<User>;
	dropDir: string = 'bottom-left';

	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;
	libelle: string = "N/a";
	divisionLibelle: any;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
	constructor(private store: Store<AppState>,
		private translate: TranslateService,
		private router: Router,
		 ) {
		this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
			if (event.lang == 'ar') {
				this.dropDir = 'bottom-left';
			}
			else {
				this.dropDir = 'bottom-right';
			}
		});

	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.user$ = this.store.pipe(select(currentUser));

		/*
		this.user$ = this.store.pipe(select(currentUser));
		this.user$.subscribe(user =>{
			this.idPersonnel = user.idPersonnel;
			console.log('idPersonnel: '+ this.idPersonnel);
			//this.fullName = user.fullname;
			console.log('Current user : '+ JSON.stringify(this.fullName,null,2));
		})
		*/

	}

	/*
	getDivisionById(idDiv) {
		const _this = this;
		this.service1.findEntityById(idDiv, '/divisions/find/')
			.subscribe(d => {
				_this.divisionLibelle = d.libelleFR;
			}, error => { console.log(error) })
		return _this.divisionLibelle;
	}
	*/


	personnelShow(id) {
		console.log(id)
		this.router.navigate(['/user/user-profile'], { queryParams: { id: id } })
	}

	personnelPjShow(id) {
		console.log(id)
		this.router.navigate(['/user/mes-documents'], { queryParams: { id: id } })
	}

	/**
	 * Mes courriers
	 */
	courrierShow(idPers, idDiv) {
		console.log('Id personnel: ' + idPers + " et id division: " + idDiv);
		this.router.navigate(["personnel-courriers/show-courriers"], { queryParams: { id: idPers, div: idDiv } });

	}
	/**
	 * Comunication
	 */
	communication() {
		window.open('http://marrakech.jamaati.hvc.ma:3000/home', '_blank');
	}
	/**
	 * Log out
	 */
	logout() {
		this.store.dispatch(new Logout());

	}

	changePwd() {
		let idUser = window.localStorage.getItem("idUser");
		console.log("user id! " + idUser)
		this.router.navigate(['/user/user-edit-pwd'], { queryParams: { id: idUser } })
	  }
}
