import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablareservasComponent } from './tablareservas.component';

describe('TablareservasComponent', () => {
  let component: TablareservasComponent;
  let fixture: ComponentFixture<TablareservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablareservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablareservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
