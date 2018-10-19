import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'widget', component: WidgetComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
