import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IModule } from 'src/app/modules/IModule.interface';
import { ModuleService } from 'src/app/modules/module.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  module$?: Observable<IModule[]>

  constructor(private _moduleService: ModuleService) { }


  ngOnInit(): void {
    this.module$ = this._moduleService.currentModule;
  }

}
