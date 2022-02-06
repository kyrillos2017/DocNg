import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleArrayInputsComponent } from './module-array-inputs/module-array-inputs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ModuleArrayInputsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [ModuleArrayInputsComponent]
})
export class ModuleArrayInputsModule { }
