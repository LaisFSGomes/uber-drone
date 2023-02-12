import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDroneComponent } from './list-drone.component';

describe('ListDroneComponent', () => {
  let component: ListDroneComponent;
  let fixture: ComponentFixture<ListDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
