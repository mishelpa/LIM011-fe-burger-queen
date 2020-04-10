import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllOrdersComponent } from './page-all-orders.component';

describe('PageAllOrdersComponent', () => {
  let component: PageAllOrdersComponent;
  let fixture: ComponentFixture<PageAllOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAllOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
