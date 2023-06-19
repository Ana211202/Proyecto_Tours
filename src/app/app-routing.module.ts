import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { FeedbackComponent } from './componentes/feedback/feedback.component';
import { TourlistComponent } from './componentes/tourlist/tourlist.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { DestinosComponent } from './componentes/destinos/destinos.component';
import { SearchComponent } from './componentes/search/search.component';
import { TablareservasComponent } from './componentes/tablareservas/tablareservas.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { LoginPhoneComponent } from './componentes/login-phone/login-phone.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { PreguntasFComponent } from './componentes/preguntas-f/preguntas-f.component';
//import { ContactformComponent } from './componentes/contactform/contactform.component';
const routes: Routes = [
 // { path: "contactform", component: ContactformComponent},
  { path: "home", component: HomeComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "reserva", component: ReservaComponent },
  { path: "tablareservas", component: TablareservasComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "tourlist", component: TourlistComponent },
  { path: "destinos", component: DestinosComponent },
  { path: "login", component: LoginComponent},
  { path: "loginPhone", component: LoginPhoneComponent},
  { path: "signup", component: SignupComponent},
  { path: "search", component: SearchComponent },
  { path: "preguntas-f", component: PreguntasFComponent },
  { path: "graficas", component: GraficasComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
