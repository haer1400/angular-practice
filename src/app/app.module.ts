import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ChampionsComponent } from './champions/champions.component';
import { CompositionBuilderComponent } from './composition-builder/composition-builder.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomeComponent,
    ItemsComponent,
    ChampionsComponent,
    CompositionBuilderComponent,
    PatchNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
