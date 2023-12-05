import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasListComponent } from './citas-list.component';

describe('CitasListComponent', () => {
  let component: CitasListComponent;
  let fixture: ComponentFixture<CitasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasListComponent]
    });
    fixture = TestBed.createComponent(CitasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
