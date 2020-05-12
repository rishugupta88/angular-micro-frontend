import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicBondsModule } from "../../projects/bonds-public/src/app/app.module";
import { PrivatePlacementModule } from "../../projects/private-placement/src/app/app.module";


const routes: Routes = [
  {
    path: 'bonds-public',
    loadChildren: '../../projects/bonds-public/src/app/app.module#PublicBondsModule'
  },
  {
    path: 'private-placement',
    loadChildren: '../../projects/private-placement/src/app/app.module#PrivatePlacementModule'
  },
  { path: '**', redirectTo: 'bonds-public/one' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicBondsModule,
    PrivatePlacementModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
