import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ChampionsComponent } from './champions/champions.component';
import { CompositionBuilderComponent } from './composition-builder/composition-builder.component';
import { SatisfactoryComponent } from './satisfactory/satisfactory.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './satisfactory/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomeComponent,
    ItemsComponent,
    ChampionsComponent,
    CompositionBuilderComponent,
    SatisfactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
