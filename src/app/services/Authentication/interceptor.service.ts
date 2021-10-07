import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AuthServiceService} from "./auth-service.service";
import {catchError, switchMap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public auth: AuthServiceService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('*********************** the interceptor has began ***********************')
    const token = this.auth.getAccessToken();

    if (token != null) {

      req = this.addTokenHeader(req,token)
      console.log('request with token')
      console.log(req)
      console.log(token)
    }


    return next.handle(req)/*.pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        console.log('refreshing after error')
        return this.handle401Error(req, next);
      } else {
        return throwError(error);
      }
    }));*/
  }

  // @ts-ignore
  handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    console.log('refreshing the token***********************')
    let token = this.auth.getRefreshToken()
    if (token)
      return this.auth.refreshToken(token).pipe(
        switchMap((token: any) => {

          localStorage.setItem('access-token', JSON.stringify(token['access-token']))
          return next.handle(this.addTokenHeader(request, token['access-token']));
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });


  }
}

