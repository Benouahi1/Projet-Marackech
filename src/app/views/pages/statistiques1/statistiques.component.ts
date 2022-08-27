import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'kt-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  constructor(private route:Router) { }

  go(){
		this.route.navigate(['/dashboard']); // navigate to other page
	}
  
  ngOnInit() {
  }

 

}
