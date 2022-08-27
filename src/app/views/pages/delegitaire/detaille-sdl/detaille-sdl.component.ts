import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-detaille-sdl',
  templateUrl: './detaille-sdl.component.html',
  styleUrls: ['./detaille-sdl.component.scss']
})
export class DetailleSDLComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  Back(): void {
	this.router.navigate(["pages/delegitaire/sdl"]);
}

}
