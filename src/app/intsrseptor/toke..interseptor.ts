import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        // const id = sessionStorage.getItem('userid');

        req = req.clone({
            setHeaders: {
                Autherization: `Bearer ${token}`,
                //  Autherization2: `Bearer ${id}`
            }
        })
        return next.handle(req);
       
    }

}
