import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
public loader= new BehaviorSubject(false);
  constructor() { }

}
