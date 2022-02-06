import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeModuleComponent } from './coe-module.component';

describe('CoeModuleComponent', () => {
  let component: CoeModuleComponent;
  let fixture: ComponentFixture<CoeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoeModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
