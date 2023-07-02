import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
import { TesthomeComponent } from './testhome/testhome.component';


@NgModule({
  declarations: [
    TesthomeComponent
  ],
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ]
  ,
  exports:[
    TesthomeComponent
  ]
})
export class TestmoduleModule { }
