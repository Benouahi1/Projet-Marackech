import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../../../environments/environment";
const GED_URL = environment.API_ALFRESCO_URL;

@Injectable({
	providedIn: "root",
})
export class FolderServiceService {
	public AlfrescoURL = `${GED_URL}`;
	constructor(private http: HttpClient) {}

	//================ Upload file ==============

	updloadFileCourrierEntrant(v, id): Observable<FolderServiceService> {
		//console.log("in send ----------");
		//console.log(v);
		console.log("taille de fichier :" + v.length);
		//console.log(v.name);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		return this.http.post<FolderServiceService>(
			this.AlfrescoURL + "/PjCourriersEntrants/multiplefile",
			formda
		);
	}

	getByIdCourrierFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(
			this.AlfrescoURL + "/PjCourriersEntrants/Allpjs/" + f
		);
	}

	//   =====================================================================

	updloadFileCourrierSortant(v, id): Observable<FolderServiceService> {
		console.log("taille de fichier courrier sortant :" + v.length);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		return this.http.post<FolderServiceService>(
			this.AlfrescoURL + "/PjCourriersSortants/multiplefile",
			formda
		);
	}

	getByIdCourrierSortantFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(
			this.AlfrescoURL + "/PjCourriersSortants/Allpjs/" + f
		);
	}
}
