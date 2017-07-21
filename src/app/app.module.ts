import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CascadingDropdownComponent } from './cascading-dropdown/cascading-dropdown.component';
import { CountryListComponent } from './country-list/country-list.component';
import { StateListComponent } from './state-list/state-list.component';

import {CountryStateService} from './shared/services/country-state.service';

@NgModule({
  declarations: [
    AppComponent,
    CascadingDropdownComponent,
    CountryListComponent,
    StateListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CountryStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
