import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { TransformStringPipe } from './cards/transform-string.pipe';
import { AdditinalStylesDirective } from './cards/additinal-styles.directive';
import { CardsDirective } from './cards.directive';
import { SearchByNamePipe } from './cards/search-by-name.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { OneUserComponent } from './one-user/one-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TransformStringPipe,
    AdditinalStylesDirective,
    CardsDirective,
    AdditinalStylesDirective,
    SearchByNamePipe,
    HomepageComponent,
    OneUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBJqoFS5BMaRm6QH-F6kXzoa9SvnTWxlY'
    })
  ],
  providers: [
    {
      provide: DataService,
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
