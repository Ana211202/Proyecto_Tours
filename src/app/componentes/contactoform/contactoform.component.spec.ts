import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoformComponent } from './contactoform.component';

describe('ContactoformComponent', () => {
  let component: ContactoformComponent;
  let fixture: ComponentFixture<ContactoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
