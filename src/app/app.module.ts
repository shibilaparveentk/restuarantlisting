import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestuarantsListComponent,
    ViewRestuarantComponent,
    AddRestuarantComponent,
    UpdateRestuarantComponent,
    DeleteRestuarantComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
