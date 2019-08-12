import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from "./items/items.component";
import { ChampionsComponent } from "./champions/champions.component";
import { CompositionBuilderComponent } from './composition-builder/composition-builder.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'patch-notes', component: PatchNotesComponent },
  { path: 'composition-builder', component: CompositionBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
