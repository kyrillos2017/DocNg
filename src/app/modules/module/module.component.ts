import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { CoeModuleComponent } from '../coe-module/coe-module.component';
import { IModule } from '../IModule.interface';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  module?: IModule;
  id: string | null;

  constructor(
    private _moduleService: ModuleService,
    private _route : ActivatedRoute,
    private _dialog: MatDialog
    ) {
    this.id = this._route.snapshot.paramMap.get('id');
    this._moduleService.currentModule.subscribe(res => {
      this.module = res.find(x=> x.id === this.id);
      console.log('m',this.module!!);
    })
   }

  ngOnInit(): void {
    for (let index = 0; index < this.module?.imports?.length!! ; index++) {
      console.log(this.module?.imports?.length ? this.module?.imports[index]: '');
      ;
    }
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(CoeModuleComponent, {
      width: '70%',
      data: this.module,
    });
  }
}

