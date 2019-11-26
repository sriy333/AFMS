import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFooterComponent } from './background-footer.component';

describe('BackgroundFooterComponent', () => {
  let component: BackgroundFooterComponent;
  let fixture: ComponentFixture<BackgroundFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
