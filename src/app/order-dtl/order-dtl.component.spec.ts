import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDtlComponent } from './order-dtl.component';

describe('OrderDtlComponent', () => {
  let component: OrderDtlComponent;
  let fixture: ComponentFixture<OrderDtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
