import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  cards() {
    return [71, 78, 39, 66];
  }

  public getRessourceCharts(): Observable<any> {
    const host = "http://localhost:9191/interventionRapide/grouBy"; // host intervention
		return this.http.get(host);
  }

  async getApiResponse(url: string) {
		const res = await this.http.get<any[]>(url, {}).toPromise();
		return res;
    }
    
   
    

  
  realData() {
	  return[
		{
			"name": "نوعية التدخل أ",
			"y": 1
		},
		{
			"name": "نوعية التدخل ج",
			"y": 2
		},
		{
			"name": "test1",
			"y": 4
		},
		{
			"name": "test2",
			"y": 7
		},
		{
			"name": "test2",
			"y": 12
		}
	  ];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
