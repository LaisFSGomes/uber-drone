import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDroneComponent } from './register-drone.component';

describe('RegisterDroneComponent', () => {
  let component: RegisterDroneComponent;
  let fixture: ComponentFixture<RegisterDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
