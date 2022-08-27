import { delay } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable, forkJoin } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_ASSOCIATION_URL;
// const BACKEND_URL_ACT = environment.API_ACTIVITE_URL;
// const BACKEND_URL_CONV = environment.API_CONVENTION;
// const BACKEND_URL_SUB = environment.API_SUBVENTION_URL;
// const BACKEND_URL_PROJ = environment.API_PROJET_PARTENARIAT;
// const BACKEND_URL_LOC = environment.API_LOCAUX_URL;
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
	providedIn: "root"
})
export class AssociationService {
	public apiURL = `${BACKEND_URL}`;
	// public apiURL_ACT = `${BACKEND_URL_ACT}`;
	// public apiURL_CNV = `${BACKEND_URL_CONV}`;
	// public apiURL_LOC = `${BACKEND_URL_LOC}`;
	// public apiURL_SUB = `${BACKEND_URL_SUB}`;
	// public apiURL_PROJ = `${BACKEND_URL_PROJ}`;
	public AlfrescoURL = `${GED_URL}`;

	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {
		let statutAssociation = this.http.get(this.apiURL + "/statut/index");
		let typeActivite = this.http.get(this.apiURL + "/typeActiviteAssociation/index");
		let villeActivite = this.http.get(this.apiURL + "/villeActivite/index");
		let annexeAdministrative =this.http.get(this.apiURL + "/annexeAdministratif/index");
		return forkJoin([statutAssociation, typeActivite, villeActivite, annexeAdministrative]);
	}

	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// ASSOCIATION
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

	deleteObject(url, id: number): Observable<any> {
		return this.http.delete<any>(this.apiURL + url + id);
	}

	getAllObjectListById(url, id: number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + url + id);
	}



	getSatatAssoctionByid(id:number): Observable<any[]> {
		return this.http.get<any[]>(this.apiURL + '/association/stats/'+id);
	}
	getAssociationbytypeAndSttatus(type:any, statuts:any): Observable<any> {
		return this.http.get<any>(this.apiURL + "/association/byStatutAndType/" + type + "&" + statuts);
	}
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// ALFRESCO
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	updloadFile(v, id): Observable<any> {
		console.log("taille de fichier association :" + v.length);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		formda.append("type", "test");
		return this.http.post<any>(this.AlfrescoURL + "/PjAssociation/multiplefile", formda,{responseType:'blob' as 'json'});
	}

	getByIdFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(this.AlfrescoURL + "/PjAssociation/Allpjs/" + f);
	}

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.AlfrescoURL + url + id);
	}

	// for data source files toPromise
	async getFilesById(url,id) {
		return await this.http.get<any>(this.AlfrescoURL + url + id).pipe(delay(1000)).toPromise();
  }
  /*
  	deleteOnCasscadAssociation(idAss) {
		this.deletefiles("/associationService/ByIdAssociation/", idAss)
		.subscribe((data) => {
		});
	  }
	  */
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// SEARCHE MANDAT BETWEEN DATES
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	 getMondatBureauBetweenDates(d1, d2): Observable<any> {
		return this.http.get<any>(this.apiURL + "/mandatBureau/date/" + d1 + "&" + d2
		);
	}
}
