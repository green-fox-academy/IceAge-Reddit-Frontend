import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private _router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });

        return next.handle(tokenizedReq).pipe(
            tap(
                (event) => {
                    if (event instanceof HttpResponse) {
                        const prolongedToken = event.headers.get('Prolonged-Token');
                        if (prolongedToken) {
                            localStorage.setItem('token', prolongedToken);
                        }
                    }
                },
                (error) => {
                    if (
                        error instanceof HttpErrorResponse &&
                        error.status == 401 &&
                        error.error === 'Token expired!'
                    ) {
                        this._router.navigate(['/login']);
                    }
                },
            ),
        );
    }
}
