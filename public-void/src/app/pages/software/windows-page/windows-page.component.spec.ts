import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsPageComponent } from './windows-page.component';

describe('WindowsPageComponent', () => {
  let component: WindowsPageComponent;
  let fixture: ComponentFixture<WindowsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
