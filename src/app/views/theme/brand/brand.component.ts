// Angular
import { AfterViewInit, Component, OnInit } from '@angular/core';
// Layout
import { LayoutConfigService, ToggleOptions, MenuHorizontalService } from '../../../core/_base/layout';
import { HtmlClassService } from '../html-class.service';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-brand',
	templateUrl: './brand.component.html',
})
export class BrandComponent implements OnInit, AfterViewInit {
	// Public properties
	headerLogo: string;
	headerStickyLogo: string;

	toggleOptions: ToggleOptions = {
		target: 'body',
		targetState: 'kt-aside--minimize',
		togglerState: 'kt-aside__brand-aside-toggler--active'
	};

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 * @param htmlClassService: HtmlClassService
	 * @param menuHorService: MenuHorService
	 */
	constructor(public menuHorService: MenuHorizontalService,private layoutConfigService: LayoutConfigService,private router: Router,public htmlClassService: HtmlClassService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.headerLogo = this.layoutConfigService.getLogo();
		this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
	}

	/**
	 * On after view init
	 */
	 Parammetre(): void {
		this.router.navigate(["pages/Programme/list-programme"]);
	 }
	 Con(): void {
		this.router.navigate(["pages/delegitaire/delegitaires"]);
	 }
	
	ngAfterViewInit(): void {
	}
}
