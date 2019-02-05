import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterHeaderComponent } from './filters/filter-header/filter-header.component';
import { FilterButtonComponent } from './filters/filter-button/filter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    FilterHeaderComponent,
    FilterButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
