import { Injectable } from "@angular/core";
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_ACTIVITE_URL;
const BACKEND_URL_ASS = environment.API_ASSOCIATION_URL;
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
	providedIn: "root"
})
export class ActivitesService {
	public apiURL = `${BACKEND_URL}`;
	public apiASS = `${BACKEND_URL_ASS}`;
	public AlfrescoURL = `${GED_URL}`;

	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {
		let type = this.http.get(this.apiURL + "/typeActivite/index");
		let association = this.http.get(this.apiASS + "/association/index");
		let institution = this.http.get(this.apiURL + "/pmActivite/index");
		let arrondissements = this.http.get(this.apiURL + "/arrondActivite/index");
		return forkJoin([type,association,institution,arrondissements]);
	}

	// ====================================
	// methodes CRUD
	// ====================================

	public getRessource(url): Observable<any> {
		return this.http.get(this.apiURL + url);
	}

	getAllObject(url): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url);
	}

	getObjectById(url, id: number): Observable<any> {
		return this.http.get<any>(this.apiURL + url + id);
	}

	createObject(url, obj: any): Observable<any> {
		return this.http.post<any>(this.apiURL + url, obj);
	}

	updateObject(url, obj: any): Observable<any> {
		return this.http.put<any>(this.apiURL + url + obj.id, obj);
	}

	deleteActivite(url, id: number): Observable<any> {
		return this.http.delete<any>(this.apiURL + url + id);
	}

	getAllActivitiesListById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + id);
	}

	// ====================================
	// Upload files
	// ====================================

	updloadFile(v, id): Observable<any> {
		//console.log("taille de fichier objbilisation :" + v.length);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		return this.http.post<any>(this.AlfrescoURL + "/PjActivite/multiplefile", formda,{responseType:'blob' as 'json'});
	}

	getByIdFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(this.AlfrescoURL + "/PjActivite/Allpjs/" + f);
	}

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.AlfrescoURL + url + id);
	}
}
