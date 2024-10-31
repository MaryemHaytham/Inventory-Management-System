import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const baseUrl: string =
      'https://apis004-001-site1.etempurl.com/swagger/v1/swagger.json/';
    const token: string = localStorage.getItem('token') ?? '';
    const modifiedReq = request.clone({
      url: baseUrl + request.url,
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next.handle(modifiedReq);
  }
}
