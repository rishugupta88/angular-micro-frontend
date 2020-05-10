import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicBondsSharedModule } from "../../projects/bonds-public/src/app/app.module";
import { PrivatePlacementSharedModule } from "../../projects/private-placement/src/app/app.module";


const routes: Routes = [
  {
    path: 'bonds-public',
    loadChildren: '../../projects/bonds-public/src/app/app.module#PublicBondsSharedModule'
  },
  {
    path: 'private-placement',
    loadChildren: '../../projects/private-placement/src/app/app.module#PrivatePlacementSharedModule'
  },
  { path: '**', redirectTo: 'bonds-public/one' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicBondsSharedModule.forRoot(),
    PrivatePlacementSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
