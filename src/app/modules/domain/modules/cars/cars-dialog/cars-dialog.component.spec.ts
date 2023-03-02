import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDialogComponent } from './cars-dialog.component';

describe('CarsDialogComponent', () => {
  let component: CarsDialogComponent;
  let fixture: ComponentFixture<CarsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
