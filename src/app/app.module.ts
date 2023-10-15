import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BenchpressCompComponent } from './components/benchpress-comp/benchpress-comp.component';
import { DeadliftCompComponent } from './components/deadlift-comp/deadlift-comp.component';
import { SquatCompComponent } from './components/squat-comp/squat-comp.component';
import { ShoulderpressCompComponent } from './components/shoulderpress-comp/shoulderpress-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BenchpressCompComponent,
    DeadliftCompComponent,
    SquatCompComponent,
    ShoulderpressCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
