import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-add-sdl',
  templateUrl: './add-sdl.component.html',
  styleUrls: ['./add-sdl.component.scss']
})
export class AddSDLComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Back(): void {
	this.router.navigate(["pages/delegitaire/sdl"]);
}
}
