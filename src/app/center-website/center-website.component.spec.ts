import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterWebsiteComponent } from './center-website.component';

describe('CenterWebsiteComponent', () => {
  let component: CenterWebsiteComponent;
  let fixture: ComponentFixture<CenterWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
