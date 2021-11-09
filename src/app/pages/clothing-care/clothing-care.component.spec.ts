import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingCareComponent } from './clothing-care.component';

describe('ClothingCareComponent', () => {
  let component: ClothingCareComponent;
  let fixture: ComponentFixture<ClothingCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
