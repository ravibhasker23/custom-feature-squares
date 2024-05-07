import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSquareComponent } from './feature-square.component';

describe('FeatureSquareComponent', () => {
  let component: FeatureSquareComponent;
  let fixture: ComponentFixture<FeatureSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureSquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
