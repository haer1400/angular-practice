import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from "./items/items.component";
import { ChampionsComponent } from "./champions/champions.component";
import { CompositionBuilderComponent } from './composition-builder/composition-builder.component';
import { SatisfactoryComponent } from './satisfactory/satisfactory.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'satisfactory', component: SatisfactoryComponent },
  { path: 'composition-builder', component: CompositionBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
