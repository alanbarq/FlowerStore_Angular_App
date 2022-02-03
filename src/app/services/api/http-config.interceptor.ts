import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = localStorage.getItem('Token_Auth');
        if(token != null){
            authReq = req.clone({headers:req.headers.set(TOKEN_HEADER_KEY,token)})
        }
        return next.handle(authReq);
    }
}