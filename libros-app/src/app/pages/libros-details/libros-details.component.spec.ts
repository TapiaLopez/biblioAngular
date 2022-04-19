import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDetailsComponent } from './libros-details.component';

describe('LibrosDetailsComponent', () => {
  let component: LibrosDetailsComponent;
  let fixture: ComponentFixture<LibrosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
