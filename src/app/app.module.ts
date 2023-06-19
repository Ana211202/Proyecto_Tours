import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TablareservasComponent } from './componentes/tablareservas/tablareservas.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { LoginPhoneComponent } from './componentes/login-phone/login-phone.component';
import { UsersComponent } from './componentes/users/users.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SearchResultsComponent } from './componentes/search-results/search-results.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { ContactformComponent } from './componentes/contactform/contactform.component';
import { PipepPipe } from './pipes/pipep.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';

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
    VideoPipe,
    TablareservasComponent,
    LoginComponent,
    SignupComponent,
    LoginPhoneComponent,
    UsersComponent,
    SearchResultsComponent,
    GraficasComponent,
    ContactformComponent,
    PipepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    AngularFireModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
