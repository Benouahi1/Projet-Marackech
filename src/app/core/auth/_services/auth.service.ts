import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { User } from '../_models/user.model';
import { Permission } from '../_models/permission.model';
import { Role } from '../_models/role.model';
import { catchError, map } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '../../_base/crud';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

const USERS_URL = environment.userUrl;

const API_USERS_URL = 'api/users';

const API_ROLES_URL = 'api/roles';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    // Authentication/Authorization
    login(username: string, password: string): Observable<any> {
        let cuser= this.http.post<any>(USERS_URL + '/login', { username, password }).toPromise();
        return forkJoin([cuser]);
    }

    getUserByToken(): Observable<User> {
        const userToken = localStorage.getItem(environment.authTokenKey);
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Authorization', userToken);

        return this.http.get<User>(USERS_URL + '/comptes/byToken');
    }

    register(user: User): Observable<any> {
        //const httpHeaders = new HttpHeaders();
        //httpHeaders.set('Content-Type', 'application/json');
        return this.http.post<User>(USERS_URL + '/comptes/new', user)
            .pipe(
                map((res: User) => {
                    return res;
                }),
                catchError(err => {
                    return null;
                })
            );
    }

    /*
     * Submit forgot password request
     *
     * @param {string} email
     * @returns {Observable<any>}
     */
    public requestPassword(email: string): Observable<any> {
    	return this.http.get(API_USERS_URL + '/forgot?=' + email)
    		.pipe(catchError(this.handleError('forgot-password', []))
	    );
    }


    async getAllUsers(){
		return await this.http.get<User[]>(USERS_URL + '/comptes/index').toPromise();
    }

    async getUserById(userId: number) {
		return await this.http.get<User>(USERS_URL + `/comptes/show/${userId}`).toPromise();
	}


    // DELETE => delete the user from the server
	deleteUser(userId: number) {
		const url = `${USERS_URL}/comptes/delete/${userId}`;
		return this.http.delete(url);
    }

    // UPDATE => PUT: update the user on the server
	updateUser(_user: User): Observable<any> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
	}

    // CREATE =>  POST: add a new user to the server
	createUser(user: User): Observable<User> {
    	const httpHeaders = new HttpHeaders();
     httpHeaders.set('Content-Type', 'application/json');
		   return this.http.post<User>(API_USERS_URL, user, { headers: httpHeaders});
	}

    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
	// items => filtered/sorted result
	findUsers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.post<QueryResultsModel>(API_USERS_URL + '/findUsers', queryParams, { headers: httpHeaders});
    }

    async getRegisterFormData(id){

        let user = await this.http.get<User>(USERS_URL + `/comptes/show/${id}`);
        let roles = await this.http.get<Role[]>(USERS_URL + '/roles/index');
        let divisions = await this.http.get<any>(environment.organisationUrl + '/divisions/index' )
        return forkJoin([user,roles,divisions]).toPromise()
    }

    public updateCompte(compte: Object,id: number): Observable<Object> {
        return this.http.put(USERS_URL+'/comptes/edit/'+id, compte);
      }

    // Permission
  

    /* getRolePermissions(roleId: number): Observable<Permission[]> {
        return this.http.get<Permission[]>(API_PERMISSION_URL + '/getRolePermission?=' + roleId);
    } */

    // Roles
    getAllRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(USERS_URL + '/roles/all');
    }
    getRoleIndex(): Observable<any> {
        let roles =  this.http.get<any>(USERS_URL + '/roles/index').toPromise();
        return forkJoin(roles)
    }

    getRoleById(roleId: number): Observable<any> {
		return this.http.get<any>(USERS_URL + `/roles/show/${roleId}`);
    }

    // CREATE =>  POST: add a new role to the server
	createRole(role: Role): Observable<Role> {
		// Note: Add headers if needed (tokens/bearer)
        //const httpHeaders = new HttpHeaders();
        //httpHeaders.set('Content-Type', 'application/json');
		      return this.http.post<Role>(USERS_URL + '/roles/new', role);
	}

    // UPDATE => PUT: update the role on the server
	updateRole(role: Role): Observable<any> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
	}

	// DELETE => delete the role from the server
	deleteRole(roleId: number): Observable<Role> {
		const url = `${API_ROLES_URL}/${roleId}`;
		return this.http.delete<Role>(url);
	}

    // Check Role Before deletion
    isRoleAssignedToUsers(roleId: number): Observable<boolean> {
        return this.http.get<boolean>(API_ROLES_URL + '/checkIsRollAssignedToUser?roleId=' + roleId);
    }

    findRoles(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
        // This code imitates server calls
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.post<QueryResultsModel>(API_ROLES_URL + '/findRoles', queryParams, { headers: httpHeaders});
    }



 	/*
 	 * Handle Http operation that failed.
 	 * Let the app continue.
     *
	 * @param operation - name of the operation that failed
 	 * @param result - optional value to return as the observable result
 	 */
    private handleError<T>(operation = 'operation', result?: any) {
        return (error: any): Observable<any> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
}
