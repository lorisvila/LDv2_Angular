import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {WcsAngularModule} from "wcs-angular";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LDPageComponent } from './pages/ld-page/ld-page.component';
import { DocFctPageComponent } from './pages/doc-fct-page/doc-fct-page.component';
import { ModulesFormationPageComponent } from './pages/modules-formation-page/modules-formation-page.component';
import { LocOrgaPageComponent } from './pages/loc-orga-page/loc-orga-page.component';
import {appRoutingModule} from "./app.routing";
import { ModalsComponent } from './components/modals/modals.component';
import {CookieService} from "ngx-cookie-service";
import { GridComponent } from './pages/ld-page/grid/grid.component';
import {CodesDefPageComponent} from "./pages/codes-def-page/codes-def-page.component";
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';
import { ModElemComponent } from './pages/administration-page/mod-elem/mod-elem.component';
import { AddElemComponent } from './pages/administration-page/add-elem/add-elem.component';
import { GuideUtilisationComponent } from './pages/administration-page/guide-utilisation/guide-utilisation.component';
import { DonneesComponent } from './pages/administration-page/donnees/donnees.component';
import { GestFiltresComponent } from './pages/administration-page/gest-filtres/gest-filtres.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    HomePageComponent,
    LDPageComponent,
    DocFctPageComponent,
    ModulesFormationPageComponent,
    LocOrgaPageComponent,
    ModalsComponent,
    GridComponent,
    CodesDefPageComponent,
    AdministrationPageComponent,
    ModElemComponent,
    AddElemComponent,
    GuideUtilisationComponent,
    DonneesComponent,
    GestFiltresComponent,
  ],
  imports: [
    BrowserModule,
    WcsAngularModule,
    appRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      maxOpened: 4,
    }),
  ],
  providers: [
    CookieService
  ]
})
export class AppModule { }
