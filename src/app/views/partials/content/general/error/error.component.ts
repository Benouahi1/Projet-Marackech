// Angular
import { Component, HostBinding, Input } from '@angular/core';

@Component({
	selector: 'kt-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
	// Public properties
	// full background image
	@Input() image: string;
	// error code, some error types template has it
	@Input() code = '404';
	// error descriptions
	@Input() desc = 'Oops! Something went wrong!';

	@HostBinding('class') classes = 'kt-grid kt-grid--ver kt-grid--root';
}
