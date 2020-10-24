import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  catchError } from 'rxjs/operators';
import {OrderInterface,OrderNameInterface} from '../orderList.interface';
@Component({
  selector: 'app-order-dtl',
  templateUrl: './order-dtl.component.html',
  styleUrls: ['./order-dtl.component.scss']
})
export class OrderDtlComponent implements OnInit {
  curOrderNumber: string;
  currentorderDtl: OrderInterface[];
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
      (data :OrderInterface[])=>{ 
        this.currentorderDtl=data;
        // this.currentorderDtl = data.find(val => val['orderNumber'] == this.curOrderNumber);

      }
    )
  }
  getTotal(list :OrderNameInterface[]) {
    let total = 0;
    list.forEach((data:OrderNameInterface) => {
      total=total+parseFloat(data.amount)
    });
    return total.toFixed(2);
  }
  getAllList(id :string): Observable<[]> {
    let tempUrl =`${this.getUrl}/${id}`
    return this.http.get<[]>(tempUrl).pipe(
      catchError(this.handleError)
    );
  }
}
