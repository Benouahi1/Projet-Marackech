import { Subscription } from 'rxjs';
// Angular
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// Layout
import { LayoutConfigService, SplashScreenService, TranslationService } from './core/_base/layout';
// language list
import { locale as arLang } from './core/_config/i18n/ar';
import { locale as frLang } from './core/_config/i18n/fr';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'body[kt-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit, OnDestroy {
	// Public properties
	title = 'Contentieux';
	loader: boolean;
	langDir: string = 'ltr';
	private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

	/**
	 * Component constructor
	 *
	 * @param translationService: TranslationService
	 * @param router: Router
	 * @param layoutConfigService: LayoutCongifService
	 * @param splashScreenService: SplashScreenService
	 */
	constructor(private translationService: TranslationService,
						 private router: Router,
						 private translate:TranslateService,
				         private layoutConfigService: LayoutConfigService,
						 private splashScreenService: SplashScreenService,
						 @Inject(DOCUMENT) private document: Document) {

		// register translations
		this.translationService.loadTranslations(arLang, frLang);
		
		this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
		{
			if(event.lang == 'ar')
			{
				this.langDir = 'rtl';
				this.document.getElementById('theme').setAttribute('href', 'assets/css/style.angular.rtl.css');
			} 
			else if(event.lang == 'fr')
			{
				this.langDir = 'ltr';
				this.document.getElementById('theme').setAttribute('href', 'assets/css/style.angular.css');
			}
			else
			{
				this.document.getElementById('theme').setAttribute('href', 'assets/css/style.angular.rtl.css');
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
		// enable/disable loader
		this.loader = this.layoutConfigService.getConfig('loader.enabled');

		const routerSubscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				// hide splash screen
				this.splashScreenService.hide();

				// scroll to top on every route change
				window.scrollTo(0, 0);

				// to display back the body content
				setTimeout(() => {
					document.body.classList.add('kt-page--loaded');
				}, 500);
			}
		});
		this.unsubscribe.push(routerSubscription);

		
	}

	/**
	 * On Destroy
	 */
	ngOnDestroy() {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}
}
