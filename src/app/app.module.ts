import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './componentes/feedback/feedback.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { TourlistComponent } from './componentes/tourlist/tourlist.component';
import { DestinosComponent } from './componentes/destinos/destinos.component';
import { VideoPipe } from './componentes/pipes/video.pipe';
import { SearchComponent } from './componentes/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    GaleriaComponent,
    NavbarComponent,
    HomeComponent,
    PieComponent,
    ContactoComponent,
    NosotrosComponent,
    ReservaComponent,
    TourlistComponent,
    DestinosComponent,
    SearchComponent,
    VideoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
