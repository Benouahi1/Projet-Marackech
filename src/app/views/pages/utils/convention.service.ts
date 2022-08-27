import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_CONVENTION;
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
	providedIn: "root",
})
export class ConventionService {
	public apiURL = `${BACKEND_URL}`;
	public AlfrescoURL = `${GED_URL}`;

	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {
		let statutConvention = this.http.get(this.apiURL + "/statutConvention/index");
		let typeConvention = this.http.get(this.apiURL + "/typeConvention/index");
		return forkJoin([statutConvention, typeConvention]);
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

	createObject(url, immo: any): Observable<any> {
		return this.http.post<any>(this.apiURL + url, immo);
	}

	updateObject(url, immo: any): Observable<any> {
		return this.http.put<any>(this.apiURL + url + immo.id, immo);
	}

	deleteConvention(url, id: number): Observable<any> {
		return this.http.delete<any>(this.apiURL + url + id);
	}

	getAllObjectListById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + id);
	}

	getConvention(id: any): Observable<any[]> {
		if (id == null) {
			return this.http.get<any[]>(this.apiURL + "/convention/index");
		} else {
			return this.http.get<any[]>(this.apiURL + "/convention/index/" + id);
		}
	}
	getAllConventionListById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + id);
	}

	// ====================================
	// Upload files
	// ====================================

	updloadFile(v, id): Observable<any> {
		//console.log("taille de fichier  :" + v.length);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		return this.http.post<any>(this.AlfrescoURL + "/PjConvention/multiplefile",formda,{responseType:'blob' as 'json'});
	}

	getByIdFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(this.AlfrescoURL + "/PjConvention/Allpjs/" + f);
	}

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.AlfrescoURL + url + id);
	}
}
