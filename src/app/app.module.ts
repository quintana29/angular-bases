import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { DbzModule } from './dbz/dbz.module';



import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/components/heroes.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesComponent,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
