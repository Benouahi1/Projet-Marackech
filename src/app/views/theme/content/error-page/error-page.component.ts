// Angular
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// RXJS
import { Subscription } from 'rxjs';
// Layout
import { LayoutConfigService } from '../../../../core/_base/layout';

@Component({
	selector: 'kt-error-page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ErrorPageComponent implements OnInit, OnDestroy {
	// Public properties
	// full background image
	@Input() image: string;
	// error code, some error types template has it
	@Input() code = '404';
	// error descriptions
	@Input() desc = 'Oops! Something went wrong!';

	private sub: Subscription;

	/**
	 * Component constructor
	 *
	 * @param route: ActivatedRoute
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private route: ActivatedRoute, private layoutConfigService: LayoutConfigService) {
		// set temporary values to the layout config on this page
		this.layoutConfigService.setConfig({ self: { layout: 'blank' } });
		/*
		this.route.queryParams.subscribe(params => {
			this.code = params['code'];
			if (this.code == "403")
			this.desc = 'Forbidden :: you don\'t have the permission to access';
		  });
		  */
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {

		this.image = './assets/media/error/bg1.jpg';

		this.sub = this.route.data.subscribe(param => {
			if (param.image) {
				this.image = param.image;
			}
			if (param.code) {
				this.code = param.code;
			}
			if (param.desc) {
				this.desc = param.desc;
			}
		});
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		// reset config from any temporary values
		this.layoutConfigService.reloadConfigs();
		this.sub.unsubscribe();
	}
}
