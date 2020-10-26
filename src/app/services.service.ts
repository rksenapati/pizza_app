import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
public loader= new BehaviorSubject(false);
private getUrl = 'api/orderdataList';
  constructor(private http: HttpClient) { }
  private handleError(error: any) {
    return throwError(error);    
  }
  getAllList(): Observable<[]> {
    return this.http.get<[]>(this.getUrl)
  }
  updateOrder(updateData): Observable<any> {
    let updateUrl=`${this.getUrl}/${updateData.id}`
    return this.http.put(updateUrl, updateData).pipe(
      catchError(this.handleError)
    );;
  }
}
