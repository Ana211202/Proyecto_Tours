import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { FeedbackComponent } from './componentes/feedback/feedback.component';
import { TourlistComponent } from './componentes/tourlist/tourlist.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { DestinosComponent } from './componentes/destinos/destinos.component';
import { SearchComponent } from './componentes/search/search.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "reserva", component: ReservaComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "tourlist", component: TourlistComponent },
  { path: "destinos", component: DestinosComponent },
  { path: "search", component: SearchComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
