import {inject, Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IPhoto} from '../../models/photo';

@Injectable({providedIn: "root"})
export class UnsplashRestService {
  private accessKey = 'Client-ID d0IoCpSrR1SMMiKH0ZReNGy8CjNdTLfGcbJRsXDFDyc'; // Only for test projects
  private httpService = inject(HttpClient);

  public getPhotos(page: number = 1, perPage: number = 10): Observable<IPhoto[]> {
      return this.httpService.get<IPhoto[]>(`https://api.unsplash.com/photos?page=${page}&per_page=${perPage}`, {headers: this.setHttpHeaders()})
          .pipe(catchError(error => this.handleError(error)));
  }

  private setHttpHeaders() {
      let headers = new HttpHeaders({});
      headers = headers.append('Authorization', this.accessKey);
      return headers;
  }

  private handleError(error: any) {
      alert('Check console to see the error: ' + error.status);
      console.error('rest call error: ', error);
      return throwError(error);
  }
}
