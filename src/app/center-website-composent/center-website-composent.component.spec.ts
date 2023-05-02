import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterWebsiteComposentComponent } from './center-website-composent.component';

describe('CenterWebsiteComposentComponent', () => {
  let component: CenterWebsiteComposentComponent;
  let fixture: ComponentFixture<CenterWebsiteComposentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterWebsiteComposentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterWebsiteComposentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
