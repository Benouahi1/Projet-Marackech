import { Injectable } from "@angular/core";
import { Observable, forkJoin } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_PROJET_URBANISME_URL;
//const GED_URL = environment.API_ALFRESCO_URL;
@Injectable({
	providedIn: "root",
})
export class ProjetUrbanismeService {

	public apiURL = `${BACKEND_URL}`;
	//public AlfrescoURL = `${GED_URL}`;
	public AlfrescoURL = environment.API_ALFRESCO_URL;
	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {
		let typeProjet = this.http.get(
			this.apiURL + "/typeProjetUrbanisme/index"
		);
		let statutProjet = this.http.get(
			this.apiURL + "/statutProjUrbanisme/index"
		);
		let statutAdressage = this.http.get(
			this.apiURL + "/statutAdressage/index"
		);
		return forkJoin([typeProjet, statutProjet, statutAdressage]);
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

	getTranslateObjectById(url, lang, id: number): Observable<any> {
		return this.http.get<any>(this.apiURL + url + lang +"/"+ id);
	}

	createObject(url, obj: any): Observable<any> {
		return this.http.post<any>(this.apiURL + url, obj);
	}

	updateObject(url, obj: any): Observable<any> {
		return this.http.put<any>(this.apiURL + url + obj.id, obj);
	}

	deleteObjet(url, id: number): Observable<any> {
		return this.http.delete<any>(this.apiURL + url + id);
	}

	getAllProjetListById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + id);
	}

	// ====================================
	// Upload files
	// ====================================

	updloadFile(v, id): Observable<any> {
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		return this.http.post<any>(this.AlfrescoURL + "/PjProjetUrbanisme/multiplefile", formda,{responseType:'blob' as 'json'});
	}

	getByIdFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(this.AlfrescoURL + "/PjProjetUrbanisme/Allpjs/" + f);
	}

	/*
	async getByIdFiles(id) {
		return await this.http.get<any>(this.AlfrescoURL + "/PjProjetUrbanisme/Allpjs/" + id).toPromise();
	  }
	*/

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.AlfrescoURL + url + id);
	}

	// ====================================
	// Used for chart services
	// ====================================

	dailyForecast(url: string): Observable<any> {
		return this.http.get<Observable<any>>(this.apiURL +"/interventionRapide/grouBy"
		);
		//   .pipe(map(result => result));
	}

	async getApiResponse(url: string) {
		const res = await this.http.get<any[]>(this.apiURL + url, {}).toPromise();
		return res;
	}

	getAllProjectCountByParams(d1, d2, statut): Observable<any> {
		return this.http.get<any>(
			this.apiURL + "/projetUrbanisme/stats/" + d1 + "&" + d2 + "&" + statut
		);
	}

}
