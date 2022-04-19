import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstartComponent } from './webstart.component';

describe('WebstartComponent', () => {
  let component: WebstartComponent;
  let fixture: ComponentFixture<WebstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
