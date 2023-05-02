import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPageComponent } from './right-page.component';

describe('RightPageComponent', () => {
  let component: RightPageComponent;
  let fixture: ComponentFixture<RightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
