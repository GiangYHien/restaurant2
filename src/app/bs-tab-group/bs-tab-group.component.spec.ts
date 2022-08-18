import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTabGroupComponent } from './bs-tab-group.component';

describe('BsTabGroupComponent', () => {
  let component: BsTabGroupComponent;
  let fixture: ComponentFixture<BsTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsTabGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
