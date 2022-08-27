import { Injectable } from "@angular/core";
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { graphic } from 'echarts';
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_INTERVENTION_URL;
//const GED_URL = environment.API_ALFRESCO_URL;
@Injectable({
	providedIn: "root"
})
export class InterventionRapideService {

	public apiURL = `${BACKEND_URL}`;
	//public AlfrescoURL = `${GED_URL}`;
	public AlfrescoURL = environment.API_ALFRESCO_URL;

	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {
		let type = this.http.get(this.apiURL + "/typeIntervention/index");
		let statut = this.http.get(this.apiURL + "/statutIntervention/index");
		return forkJoin([type,statut]);
	}

	// ====================================
	// methodes CRUD
	// ====================================

	public getRessource(url): Observable<any> {
		return this.http.get(this.apiURL + url);
	}

	getAllObject(url,lang): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + lang);
	}

	getAllObjectStats(url): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url);
	}

	getObjectById(url, lang,  id: number): Observable<any> {
		return this.http.get<any>(this.apiURL + url +lang+"/"+ id);
	}

	getObjectByIdEdit(url,  id: number): Observable<any> {
		return this.http.get<any>(this.apiURL + url + id);
	}

	createObject(url, immo: any): Observable<any> {
		return this.http.post<any>(this.apiURL + url, immo);
	}

	updateObject(url, immo: any): Observable<any> {
		return this.http.put<any>(this.apiURL + url + immo.id, immo);
	}

	deleteObjet(url, id: number): Observable<any> {
		return this.http.delete<any>(this.apiURL + url + id);
	}

	getAllInterventionListById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + id);
	}

	getAllInterventionBetweenDate(url, dateD,dateF): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + dateD+"&"+dateF);
	}

	// ====================================
	// Upload files
	// ====================================

	updloadFile(v, id): Observable<any> {
		console.log("taille de fichier :" + v.length);
		console.log("id intervention file : " + id);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}

		formda.append("id", id);
		return this.http.post<any>(this.AlfrescoURL + "/PjInterventionRapide/multiplefile", formda);
	}

	getByIdFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(this.AlfrescoURL +  "/PjInterventionRapide/Allpjs/" + f);
	}

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.AlfrescoURL + url + id);
	}

	/*
	async getByIdFiles(id) {
		return await this.http.get<any>(this.AlfrescoURL + "/PjInterventionRapide/Allpjs/" + id).toPromise();
  	}
	*/

	getNbrInterventionByParams(comme: any[],type: any[], dateD, dateF): Observable<any[]> {
		return this.http.get<any[]>(
			this.apiURL +
				"/interventionRapide/stats/" +
				comme+
				"&" +
				type +
				"&" +
				dateD +
				"&" +
				dateF
		);
	}
}
