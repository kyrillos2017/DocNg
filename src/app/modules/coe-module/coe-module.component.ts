import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarComponent } from 'src/app/shared/layout/main-layout/navbar/navbar.component';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-coe-module',
  templateUrl: './coe-module.component.html',
  styleUrls: ['./coe-module.component.scss']
})
export class CoeModuleComponent {

  form = new FormGroup({});

  get f() {
    return this.form.controls;
  }

  constructor(
    private _moduleService: ModuleService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NavbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = this.fb.group({
      id: null,
      name: [null, Validators.required],
      class: [null],
      source: [null],
      description: [null],
      declarations: [null],
      imports: [null],
      exports: [null],
      providers: [null],
    })
    if (this.data) {
      this.form.patchValue(this.data)
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.invalid) return;

    if(this.data){
      console.log('edit');

     this._moduleService.update(this.form.value)
    }else {
      console.log('create');
      this._moduleService.add(this.form.value)
    }
  }

}
