import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsPageComponent } from './credits-page.component';

describe('CreditsPageComponent', () => {
  let component: CreditsPageComponent;
  let fixture: ComponentFixture<CreditsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
