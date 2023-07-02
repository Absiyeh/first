import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesthomeComponent } from './testmodule/testhome/testhome.component';

const routes: Routes = [
{path:"test",component:TesthomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
