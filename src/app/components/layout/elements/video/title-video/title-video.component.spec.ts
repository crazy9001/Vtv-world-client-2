import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleVideoComponent } from './title-video.component';

describe('TitleVideoComponent', () => {
  let component: TitleVideoComponent;
  let fixture: ComponentFixture<TitleVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
