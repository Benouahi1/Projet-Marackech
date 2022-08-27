import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_INSERT_PUB_URL;
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
	providedIn: "root",
})
export class InsertPubService {
	public apiURL = `${BACKEND_URL}`;
	public AlfrescoURL = `${GED_URL}`;

	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {
		let supports = this.http.get(
			this.apiURL + "/SupportPublicitaires/index"
		);
		return forkJoin([supports]);
	}

	getNbrInsertionByParams(support: any[], dateD, dateF): Observable<any[]> {
		return this.http.get<any[]>(
			this.apiURL +
				"/insertionPublicitaires/stats/" +
				support +
				"&" +
				dateD +
				"&" +
				dateF
		);
	}
	// ========================================
	// methodes service insertion publicitaire
	// ========================================
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

	updateObjet(url, obj: any): Observable<any> {
		return this.http.put<any>(this.apiURL + url + obj.id, obj);
	}

	deleteObject(url, id: number): Observable<any> {
		return this.http.delete<any>(this.apiURL + url + id);
	}
	// ==========================================================
	// Upload files
	// ==========================================================

	updloadFilePublicitaire(v, id): Observable<any> {
		// console.log("taille de fichier immobilisation :" + v.length);
		const formda: FormData = new FormData();
		if (v != null) {
			for (var i = 0; i < v.length; i++) {
				formda.append("file", v[i]);
			}
			formda.append("id", id);
			return this.http.post<any>(
				this.AlfrescoURL + "/PjPublicitaire/multiplefile",
				formda,{responseType:'blob' as 'json'}
			);
		}
	}

	getByIdPublicitaireFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(
			this.AlfrescoURL + "/PjPublicitaire/Allpjs/" + f
		);
	}

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.AlfrescoURL + url + id);
	}
}
