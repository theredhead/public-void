import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacOsPageComponent } from './mac-os-page.component';

describe('MacOsPageComponent', () => {
  let component: MacOsPageComponent;
  let fixture: ComponentFixture<MacOsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacOsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacOsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
