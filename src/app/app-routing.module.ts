import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "components",
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: "modules",
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
  },
  {
    path: "elements",
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
