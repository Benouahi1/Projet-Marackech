// Angular
import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
// RxJS
import { filter } from 'rxjs/operators';
// Translate
import { TranslationService } from '../../../../../core/_base/layout';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

interface LanguageFlag {
	lang: string;
	name: string;
	flag: string;
	active?: boolean;
}

@Component({
	selector: 'kt-language-selector',
	templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent implements OnInit {
	// Public properties
	@HostBinding('class') classes = '';
	@Input() iconType: '' | 'brand';
	dropDir: string = 'bottom-left';

	language: LanguageFlag; 
	languages: LanguageFlag[] = [
		{
			lang: 'fr',
			name: this.translate.instant("TRANSLATOR.FR"),
			flag: './assets/media/flags/195-france.svg'
		},
		{
			lang: 'ar',
			name: this.translate.instant("TRANSLATOR.AR"),
			flag: './assets/media/flags/166-morocco.svg'
		},
	];

	/** 
	 * Component constructor
	 *
	 * @param translationService: TranslationService
	 * @param router: Router
	 */
	constructor(private translationService: TranslationService,
		private translate: TranslateService,
		 private router: Router) {
			this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
			{
				if(event.lang == 'ar')
				{
					this.dropDir = 'bottom-left';
					
				} 
				else
				{
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
	ngOnInit() {
		this.setSelectedLanguage();
		this.router.events
			.pipe(filter(event => event instanceof NavigationStart))
			.subscribe(event => {
				this.setSelectedLanguage();
			});
	}

	/**
	 * Set language
	 *
	 * @param lang: any
	 */
	setLanguage(lang) {
		this.languages.forEach((language: LanguageFlag) => {
			if (language.lang === lang) {
				language.active = true;
				this.language = language;
			} else {
				language.active = false;
			}
		});
		this.translationService.setLanguage(lang);
	}

	/**
	 * Set selected language
	 */
	setSelectedLanguage(): any {
		this.setLanguage(this.translationService.getSelectedLanguage());
	}
}
