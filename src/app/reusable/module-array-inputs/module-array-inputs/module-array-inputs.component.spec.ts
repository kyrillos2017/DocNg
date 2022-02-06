import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleArrayInputsComponent } from './module-array-inputs.component';

describe('ModuleArrayInputsComponent', () => {
  let component: ModuleArrayInputsComponent;
  let fixture: ComponentFixture<ModuleArrayInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleArrayInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleArrayInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
