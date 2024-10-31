import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const baseUrl: string =
      'https://apis004-001-site1.etempurl.com/';
    const token: string = localStorage.getItem('token') ?? '';
    const modifiedReq = request.clone({
      url: baseUrl + request.url,
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    this.spinner.show();
    return next.handle(modifiedReq).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}
