import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"interpolation",component:AppComponent},
  {path:"property",component:AppComponent},
  {path:"class",component:AppComponent},
  {path:"style",component:AppComponent},
  {path:"event",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
