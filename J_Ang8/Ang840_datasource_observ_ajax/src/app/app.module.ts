import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { HotelDatasource } from './hotel.datasource';

@NgModule({
  declarations: [
    HotelComponent, HotelTitleComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  providers: [ HotelDatasource ],
  bootstrap: [HotelComponent]
})
export class AppModule { }
