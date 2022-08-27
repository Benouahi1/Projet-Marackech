import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// Layout
import { SplashScreenService } from '../../../../core/_base/layout';

@Component({
  selector: 'kt-spinner-screen',
  templateUrl: './spinner-screen.component.html',
  styleUrls: ['./spinner-screen.component.scss']
})
export class SpinnerScreenComponent implements OnInit {

  @ViewChild('splashScreen', { static: true }) splashScreen: ElementRef;

  constructor(
    private splashScreenService: SplashScreenService
  ) { }

  ngOnInit() {
    // init splash screen, see loader option in layout.config.ts
    this.splashScreenService.init(this.splashScreen);
  }

}
