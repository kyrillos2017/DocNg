import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormArray, FormArrayName, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { filter, map, noop, Subscription } from 'rxjs';
import { IClassRefrence } from 'src/app/modules/IModule.interface';

@Component({
  selector: 'app-module-array-inputs',
  templateUrl: './module-array-inputs.component.html',
  styleUrls: ['./module-array-inputs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModuleArrayInputsComponent),
      multi: true
    }
  ]
})
export class ModuleArrayInputsComponent implements OnInit, ControlValueAccessor, OnDestroy {

  @Input()
  label?: string;

  form: FormGroup = new FormGroup({});

  onChange = (formArray:FormArray) => {};

  onTouched = () => noop();

  subscription?: Subscription;

  touched = false;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      formArray: this.fb.array([])
    })
  }


  get formArray() {
    return (this.form?.controls["formArray"] as FormArray)
  }

  writeValue(obj: any): void {
    if (obj) {
      console.log(obj);

      this.populateInputs(obj)
    }
  }

  populateInputs(data: IClassRefrence[]){
    console.log(data);

    const control = 'formArray';
      data.forEach((element: any) => {
        this.formArray.controls.push(this.fb.group(element))
      });
      console.log(this.form);

  }

  registerOnChange(onChange: any): void {
    this.subscription =  this.form?.valueChanges.pipe(filter(()=> this.form.value), map(x => x.formArray)).subscribe(onChange)
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  insertControl() {
    const control = this.fb.group({
      name: [null, Validators.required],
      path: [null],
    })
    this.formArray?.push(control);
  }

  removeControl(i: number) {
    this.formArray?.removeAt(i)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  handleOnToutched(){
    if(!this.touched){
      this.onTouched();
      this.touched = true;
    }
  }

}
