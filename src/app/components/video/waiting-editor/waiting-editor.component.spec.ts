import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingEditorComponent } from './waiting-editor.component';

describe('WaitingEditorComponent', () => {
  let component: WaitingEditorComponent;
  let fixture: ComponentFixture<WaitingEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
