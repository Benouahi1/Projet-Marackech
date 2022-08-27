import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_SUBVENTION_URL;
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
  providedIn: 'root'
})
export class SubventionsService {

public apiURL = `${BACKEND_URL}`;
public AlfrescoURL = `${GED_URL}`;

constructor(private http: HttpClient) {}

public getData(): Observable<any> {
	let etat = this.http.get(this.apiURL + "/etatSubvention/index");
	let type = this.http.get(this.apiURL + "/typeSubvention/index");
	let sousType = this.http.get(this.apiURL + "/sousTypeSubvention/index");
	let organisme = this.http.get(this.apiURL + "/organismeAccueil/index");
	let fournisseur = this.http.get(this.apiURL + "/fournisseurRestauration/index");
	let frs_impression = this.http.get(this.apiURL + "/fournisseurImpression/index");
	return forkJoin([etat, type,sousType,organisme,fournisseur,frs_impression]);
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

deleteSubvention(url, id: number): Observable<any> {
	return this.http.delete<any>(this.apiURL + url + id);
}

getAllSubventionListById(url, id: number): Observable<any[]> {
	return this.http.get<any[]>(this.apiURL + url + id);
}

getAllSubvention(url): Observable<any[]> {
	return this.http.get<any[]>(this.apiURL + url);
}


// ====================================
// Upload files
// ====================================

updloadFile(v, id,repo): Observable<any> {
	const formda: FormData = new FormData();
	for (var i = 0; i < v.length; i++) {
		formda.append("file", v[i]);
	}
	formda.append("id", id);
	return this.http.post<any>(this.AlfrescoURL+"/"+ repo + "/multiplefile", formda,{responseType:'blob' as 'json'});
}

getByIdFiles(f,repo): Observable<any> {
	return this.http.get<Observable<any>>(this.AlfrescoURL+"/"+ repo + "/Allpjs/" + f);
}

deletefiles(url, id: number): Observable<any> {
	return this.http.delete<any>(this.AlfrescoURL + url + id);
}

}

