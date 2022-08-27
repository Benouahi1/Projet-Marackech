import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_IMMOBILISATION_URL;
const BACKEND_URL_ORG = environment.organisationUrl;
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
	providedIn: "root",
})
export class ImmobilisationService {
	public apiURL = `${BACKEND_URL}`;
	public apiURLORG = `${BACKEND_URL}`;
	public AlfrescoURL = `${GED_URL}`;

	constructor(private http: HttpClient) {}
	// ====================================
	// charger les liste
	// ====================================
	public getData(): Observable<any> {
		let statut = this.http.get(this.apiURL + "/statut/index");
		let type = this.http.get(this.apiURL + "/typeImmobilisation/index");
		let emplacements = this.http.get(this.apiURL + "/emplacement/index");
		let motifs = this.http.get(this.apiURL + "/motifReforme/index");
		let marques = this.http.get(this.apiURL + "/marque/index");
		let sousTypes = this.http.get(this.apiURL + "/soustypeImmobilisation/index");
		return forkJoin([statut, type, emplacements, motifs, marques,sousTypes]);
	}
	// ====================================
	// get nbr immobilisation
	// ====================================
	getNbrImmobilisationByParams(
		type: any[],
		statut: any[]
	): Observable<any[]> {
		return this.http.get<any[]>(
			this.apiURL + "/immobilisation/stats/" + type + "&" + statut
		);
	}
	// ====================================
	// methodes CRUD
	// ====================================

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
		return this.http.put<any>(
			this.apiURL + url + immo.id,
			immo
		);
	}

	deleteObject(url, id: number): Observable<any> {
		return this.http.delete<any>(this.apiURL + url + id);
	}

	getAllObjectListById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + id);
	}

	getAllObjectListByTwoParams(url, p1: number,p2: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + p1 +'/'+p2);
	}

	// service organisation
	getAllDivision(url): Observable<any[]> {
		return this.http.get<any[]>(this.apiURLORG + url);
	}

	getAllObjectById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(
			this.apiURLORG + url + id
		);
	}

	// ====================================
	// Upload files
	// ====================================

	updloadFileImmobilisation(v, id): Observable<any> {
		console.log("taille de fichier immobilisation :" + v.length);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		return this.http.post<any>(
			this.AlfrescoURL + "/PjImmobilisation/multiplefile",
			formda,{responseType:'blob' as 'json'}
		);
	}

	getByIdImmobilisationFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(
			this.AlfrescoURL + "/PjImmobilisation/Allpjs/" + f
		);
	}

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.AlfrescoURL + url + id);
	}
}
