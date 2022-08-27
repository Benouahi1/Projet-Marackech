// Angular
import {
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
	ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// RxJS
import { Observable, Subject } from "rxjs";
import { finalize, takeUntil, tap } from "rxjs/operators";
// Translate
import { TranslateService } from "@ngx-translate/core";
// Store
import { Store } from "@ngrx/store";
import { AppState } from "../../../../core/reducers";
// Auth
import { AuthNoticeService, AuthService, Login } from "../../../../core/auth";

/**
 * ! Just example => Should be removed in development
 */
const DEMO_PARAMS = {
	USERNAME: "",// admin
	PASSWORD: "", // admin
};

@Component({
	selector: "kt-login",
	templateUrl: "./login.component.html",
	encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
	// Public params
	loginForm: FormGroup;
	loading = false;
	isLoggedIn$: Observable<boolean>;
	errors: any = [];
    fName:String;
	private unsubscribe: Subject<any>;

	private returnUrl: any;

	// Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

	/**
	 * Component constructor
	 *
	 * @param router: Router
	 * @param auth: AuthService
	 * @param authNoticeService: AuthNoticeService
	 * @param translate: TranslateService
	 * @param store: Store<AppState>
	 * @param fb: FormBuilder
	 * @param cdr
	 * @param route
	 */
	constructor(
		private router: Router,
		//private auth: AuthService,
		private authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private store: Store<AppState>,
		private fb: FormBuilder,
		private cdr: ChangeDetectorRef,
		private route: ActivatedRoute
	) {
		this.unsubscribe = new Subject();
	}


	ngOnInit(): void {
		this.initLoginForm();
		document.getElementById("noAccess").style.display = "none";
		// redirect back to the returnUrl before login
		this.route.queryParams.subscribe((params) => {
			this.returnUrl = params.returnUrl || "/";
		});
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.unsubscribe.next();
		this.unsubscribe.complete();
		this.loading = false;
	}

	/**
	 * Form initalization
	 * Default params, validators
	 */
	initLoginForm() {
		// demo message to show
		if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = `إستخدم الحساب
			<strong>${DEMO_PARAMS.USERNAME}</strong> وكلمة المرور
			<strong>${DEMO_PARAMS.PASSWORD}</strong> لولوج المنصة.`;
			this.authNoticeService.setNotice(initialNotice, "info");
		}

		this.loginForm = this.fb.group({
			username: ["",
				Validators.compose([
					Validators.required,

					Validators.minLength(3),
					Validators.maxLength(320), 
				]),
			],
			password: ["",
				Validators.compose([
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(100),
				]),
			],
		});
	}

	/*async getPersonnel(iduser) {
		await this.auth.getUserById(iduser).then((data) => {
			//console.log('PERS :: '+ data.fullname);
			window.localStorage.removeItem("fullnameUser");
			window.localStorage.setItem("fullnameUser",data.fullname);
			//window.localStorage.setItem("language",'fr');
		});
	}*/
	
	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result =
			control.hasError(validationType) &&
			(control.dirty || control.touched);
		return result;
	}
}
