import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { CoeModuleComponent } from './coe-module/coe-module.component';
import { SharedModule } from '../shared/shared.module';
import { ModuleArrayInputsModule } from '../reusable/module-array-inputs/module-array-inputs.module';
import { ModuleComponent } from './module/module.component';


@NgModule({
  declarations: [
    CoeModuleComponent,
    ModuleComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ModuleArrayInputsModule,
    SharedModule
  ],
  entryComponents:[CoeModuleComponent]
})
export class ModulesModule { }
