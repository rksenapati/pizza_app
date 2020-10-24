import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  constStatus = ['Click To Receive', 'Received', 'Prepraing', 'Ready To Serve'];
  rows = [ ]
  private getUrl = 'api/orderdataList';
  temp = [];
  limitTo = '10';
  @ViewChild('myTable') table: DatatableComponent;
  constructor(private http: HttpClient,public service:ServicesService) { }
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
  ngOnInit(): void {
    this.service.getAllList().subscribe(
      data =>{ this.rows = data
        this.temp = [...this.rows];
      console.log(this.rows);
      }
    )
    
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(value => {
      if (value.orderNumber.toLowerCase().indexOf(val) != '-1' || value.status.toLowerCase().indexOf(val) != '-1') {
        return value;
      }
    });
    console.log(temp);
    this.rows = temp;
  }
  getLimitValue(event) {
    this.limitTo = event.target.value;
  }
  changeStatus(data) {
    this.service.loader.next(true);
    const findIndex = this.rows.findIndex(val => val.orderNumber == data.orderNumber)
    const statusIndex = this.constStatus.findIndex(sts => sts == this.rows[findIndex].status);
    this.rows[findIndex].status = statusIndex >= 3 ? this.constStatus[3] : this.constStatus[statusIndex + 1]
    this.service.updateOrder(this.rows[findIndex]).subscribe(data=>{
      console.log(data);
    })
    setTimeout(() => {
      this.service.loader.next(false);
    }, 500);
  }
  // getAllList(): Observable<[]> {
  //   return this.http.get<[]>(this.getUrl)
  // }
  // updateOrder(updateData): Observable<any> {
  //   let updateUrl=`${this.getUrl}/${updateData.id}`
  //   console.log(updateData);
  //   return this.http.put(updateUrl, updateData).pipe(
  //     catchError(this.handleError)
  //   );;
  // }
}
