import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ConvertPipe } from './convert.pipe';
import { AddclassDirective } from './addclass.directive';
import { TestmoduleModule } from './testmodule/testmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ConvertPipe,
    AddclassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
