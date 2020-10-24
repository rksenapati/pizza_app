import { Component } from '@angular/core';
import { ServicesService } from './services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaApp';
  loader =false;
  constructor(public service:ServicesService){
    this.service.loader.subscribe(data=>{
      this.loader=data;
    })
  }
}
