import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPageComposentComponent } from './right-page-composent.component';

describe('RightPageComposentComponent', () => {
  let component: RightPageComposentComponent;
  let fixture: ComponentFixture<RightPageComposentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightPageComposentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPageComposentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
