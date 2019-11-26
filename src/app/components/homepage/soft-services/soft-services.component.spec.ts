import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftServicesComponent } from './soft-services.component';

describe('SoftServicesComponent', () => {
  let component: SoftServicesComponent;
  let fixture: ComponentFixture<SoftServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
