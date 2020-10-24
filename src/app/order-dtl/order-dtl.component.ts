import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-order-dtl',
  templateUrl: './order-dtl.component.html',
  styleUrls: ['./order-dtl.component.scss']
})
export class OrderDtlComponent implements OnInit {
  curOrderNumber: string;
  currentorderDtl: Object;
  private getUrl = 'api/orderdataList';
  constructor(private route: ActivatedRoute,private http: HttpClient) {
    this.curOrderNumber = this.route.snapshot.paramMap.get('orderNumber');
    console.log(this.currentorderDtl);
  }
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
  ngOnInit(): void {
    this.getAllList(this.curOrderNumber).subscribe(
      data =>{ 
        this.currentorderDtl=data;
        // this.currentorderDtl = data.find(val => val['orderNumber'] == this.curOrderNumber);

      }
    )
  }
  getTotal(list) {
    let total = 0;
    list.forEach(data => {
      total=total+parseFloat(data.amount)
    });
    return total;
  }
  getAllList(id): Observable<[]> {
    let tempUrl =`${this.getUrl}/${id}`
    return this.http.get<[]>(tempUrl).pipe(
      catchError(this.handleError)
    );
  }
}
