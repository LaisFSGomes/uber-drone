import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStorageComponent } from './register-storage.component';

describe('RegisterStorageComponent', () => {
  let component: RegisterStorageComponent;
  let fixture: ComponentFixture<RegisterStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
