import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'bonds-public/one', component: View1Component },
  { path: 'bonds-public/two', component: View2Component },
  { path: 'bonds-public', redirectTo: 'bonds-public/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
