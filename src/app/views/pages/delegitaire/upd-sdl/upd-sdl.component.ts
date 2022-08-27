import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-upd-sdl',
  templateUrl: './upd-sdl.component.html',
  styleUrls: ['./upd-sdl.component.scss']
})
export class UpdSDLComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Back(): void {
	this.router.navigate(["pages/delegitaire/sdl"]);
}
}
