import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoInfomationComponent } from './seo-infomation.component';

describe('SeoInfomationComponent', () => {
  let component: SeoInfomationComponent;
  let fixture: ComponentFixture<SeoInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
