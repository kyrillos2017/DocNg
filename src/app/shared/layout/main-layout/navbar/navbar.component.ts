import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CoeModuleComponent } from 'src/app/modules/coe-module/coe-module.component';
import { IModule } from 'src/app/modules/IModule.interface';
import { ModuleService } from 'src/app/modules/module.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter();

  module$?: Observable<IModule[]>


  constructor(
    public dialog: MatDialog,
    private _moduleService: ModuleService,
    ) { }

    ngOnInit(): void {
      this.module$ = this._moduleService.currentModule;
      this.module$.subscribe(console.log);

    }

  toggle(){
    this.toggleSidebar.emit();
  }
  addModule(){
    const dialogRef = this.dialog.open(CoeModuleComponent, {
      width: '70%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }


}
