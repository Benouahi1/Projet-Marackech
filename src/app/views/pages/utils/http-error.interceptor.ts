import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// Created on 24/12/2020 export class HttpErrorInterceptor implements HttpInterceptor {
@Injectable()
export class HttpErrorInterceptor {

    constructor(private router: Router) { }
/*
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    if (error.status == 404)
                        this.router.navigateByUrl('/error');
                    
               // if (error.status == 403)
                    //this.router.navigate(['/error'], { queryParams: { code: 403 } })
                    
                   // window.alert(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }
    */
}
