import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { environment } from "./../../../../environments/environment";
const BACKEND_URL = environment.API_PROJET_PARTENARIAT;
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

public apiURL = `${BACKEND_URL}`;
public AlfrescoURL = `${GED_URL}`;

constructor(private http: HttpClient) {}

public getData(): Observable<any> {
	let typePartenariat = this.http.get(this.apiURL + "/typeProjet/index"
	);

	return forkJoin([typePartenariat]);
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

deleteProjetPartenariat(url, id: number): Observable<any> {
	return this.http.delete<any>(this.apiURL + url + id);
}

getAllProjetPartenariatListById(url, id: number): Observable<any[]> {
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
	return this.http.post<any>(this.AlfrescoURL + "/PjProjetPartenariat/multiplefile", formda,{responseType:'blob' as 'json'});
}

getByIdFiles(f): Observable<any> {
	return this.http.get<Observable<any>>(this.AlfrescoURL + "/PjProjetPartenariat/Allpjs/" + f);
}

deletefiles(url, id: number): Observable<any> {
	return this.http.delete<any>(this.AlfrescoURL + url + id);
}

}
