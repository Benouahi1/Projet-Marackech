// Angular
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig, MatProgressSpinnerModule, MatPaginatorIntl } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
// Perfect Scroll bar
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Hammer JS
import 'hammerjs';
// NGX Permissions
import { NgxPermissionsModule } from 'ngx-permissions';
// NGRX
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
// Copmponents
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './views/theme/theme.module';
// Partials
import { PartialsModule } from './views/partials/partials.module';
// Layout Services
import {
	DataTableService,
	KtDialogService,
	LayoutConfigService,
	LayoutRefService,
	MenuAsideService,
	MenuConfigService,
	MenuHorizontalService,
	PageConfigService,
	SplashScreenService,
	SubheaderService
} from './core/_base/layout';
// Auth
import { AuthService, AuthActionTypes } from './core/auth';
// CRUD
import { HttpUtilsService, LayoutUtilsService, TypesUtilsService } from './core/_base/crud';
// Config
import { LayoutConfig } from './core/_config/layout.config';
// Highlight JS
import { HIGHLIGHT_OPTIONS, HighlightLanguage } from 'ngx-highlightjs';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as scss from 'highlight.js/lib/languages/scss';
import * as xml from 'highlight.js/lib/languages/xml';
import * as json from 'highlight.js/lib/languages/json';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DatePipe } from '@angular/common';
import { reducers } from './core/reducers';
// registerLocaleData
import { registerLocaleData } from '@angular/common';
// Ar local date
//import localeAr from '@angular/common/locales/ar-MA';
//registerLocaleData(localeAr, 'ar');
// Fr local date
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

// i18n
import { PaginatorI18n } from './views/pages/PaginatorI18n';
//import { HttpErrorInterceptor } from './views/pages/utils/http-error.interceptor';
import { ToastrModule } from 'ngx-toastr';

// tslint:disable-next-line:class-name
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	wheelSpeed: 0.5,
	swipeEasing: true,
	minScrollbarLength: 40,
	maxScrollbarLength: 300,
};

export function initializeLayoutConfig(appConfig: LayoutConfigService) {

	return () => {
		if (appConfig.getConfig() === null) {
			appConfig.loadConfigs(new LayoutConfig().configs);
		}
	};
}

export function hljsLanguages(): HighlightLanguage[] {
	return [
		{ name: 'typescript', func: typescript },
		{ name: 'scss', func: scss },
		{ name: 'xml', func: xml },
		{ name: 'json', func: json }
	];
}
//*****debug app state et actions **********************/
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
	return function (state, action) {
		console.log('state', state);
		console.log('action', action);

		return reducer(state, action);
	};
}
//****************************************************** */
//*************clear state aprés la déconnexion***** */
export function clearState(reducer) {
	return function (state, action) {

		if (action.type === AuthActionTypes.Logout) {
			state = undefined;
		}

		return reducer(state, action);
	};
}
// *******************************************************
//const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');
//****************************************************** */

@NgModule({
	declarations: [AppComponent],
	imports: [
		// RouterModule,
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxPermissionsModule.forRoot(),
		PartialsModule,
		CoreModule,
		OverlayModule,
		StoreModule.forRoot(reducers, {
			metaReducers: [clearState, debug]
			/* runtimeChecks: {
			  strictStateImmutability: true,
			  strictActionImmutability: true
			}     */
		}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
		//StoreDevtoolsModule.instrument(),
		TranslateModule.forRoot(),
		MatProgressSpinnerModule,
		InlineSVGModule.forRoot(),
		ThemeModule,
		ToastrModule.forRoot(),
		// PdfViewerModule,
	],
	exports: [],
	providers: [
		DatePipe,
		AuthService,
		LayoutConfigService,
		LayoutRefService,
		MenuConfigService,
		PageConfigService,
		KtDialogService,
		DataTableService,
		SplashScreenService,
		/*
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true
		},
		*/
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		},
		{
			// layout config initializer
			provide: APP_INITIALIZER,
			useFactory: initializeLayoutConfig,
			deps: [LayoutConfigService], multi: true
		},
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: { languages: hljsLanguages }
		},
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
		// template services
		SubheaderService,
		MenuHorizontalService,
		MenuAsideService,
		HttpUtilsService,
		TypesUtilsService,
		LayoutUtilsService,
		{ provide: LOCALE_ID, useValue: 'fr-FR' }, // MAT_DATE_LOCALE
		//{ provide: MatPaginatorIntl, useValue: PaginatorI18n }
		{
			provide: MatPaginatorIntl, deps: [TranslateService],
			useFactory: (translateService: TranslateService) => new PaginatorI18n(translateService).getPaginatorIntl()
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
