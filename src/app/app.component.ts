import { Component, OnInit } from '@angular/core';
import { ModuleService } from './modules/module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DocNg';

  constructor(private _moduleService: ModuleService) { }

  ngOnInit(): void {
    this._moduleService.getAndShare();
  }
}
