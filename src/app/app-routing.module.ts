import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HistoryComponent} from './history/history.component';
import {HarvestsComponent} from './harvests/harvests.component';
import {HarvestEditComponent} from './harvest-edit/harvest-edit.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'harvests', component: HarvestsComponent
  },
  {
    path: 'harvests/:id', component: HarvestEditComponent
  },
  {
    path: 'history', component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
