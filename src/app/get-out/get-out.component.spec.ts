import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOutComponent } from './get-out.component';

describe('GetOutComponent', () => {
  let component: GetOutComponent;
  let fixture: ComponentFixture<GetOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOutComponent]
    });
    fixture = TestBed.createComponent(GetOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
