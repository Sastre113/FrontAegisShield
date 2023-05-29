import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AegisShieldComponent } from './aegis-shield.component';

describe('AegisShieldComponent', () => {
  let component: AegisShieldComponent;
  let fixture: ComponentFixture<AegisShieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AegisShieldComponent]
    });
    fixture = TestBed.createComponent(AegisShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
