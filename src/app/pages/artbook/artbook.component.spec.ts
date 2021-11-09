import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtbookComponent } from './artbook.component';

describe('ArtbookComponent', () => {
  let component: ArtbookComponent;
  let fixture: ComponentFixture<ArtbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
