import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDetailVideoComponent } from './media-detail-video.component';

describe('MediaDetailVideoComponent', () => {
  let component: MediaDetailVideoComponent;
  let fixture: ComponentFixture<MediaDetailVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaDetailVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDetailVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
