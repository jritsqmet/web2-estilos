import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { Vista1Component } from './screens/vista1/vista1.component';
import { Vista2Component } from './screens/vista2/vista2.component';
import { Vista3Component } from './screens/vista3/vista3.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'vista1', component:Vista1Component},
  { path: 'vista2', component: Vista2Component},
  { path: 'vista3', component: Vista3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
