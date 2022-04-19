import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresDetailsComponent } from './autores-details.component';

describe('AutoresDetailsComponent', () => {
  let component: AutoresDetailsComponent;
  let fixture: ComponentFixture<AutoresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
