import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {GraphComponent} from "./graph/graph.component";

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'graph', component: GraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
