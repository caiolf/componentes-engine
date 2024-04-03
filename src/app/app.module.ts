import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrutturaPageComponent } from './components/struttura-page/struttura-page.component';
import { CardComponent } from './components/card/card.component';
import { TopoComponent } from './components/struttura-page/topo/topo.component';
import { PieComponent } from './components/struttura-page/pie/pie.component';
import { BannerComponent } from './components/struttura-page/banner/banner.component';
import { CardsSectionComponent } from './components/struttura-page/cards-section/cards-section.component';

@NgModule({
  declarations: [
    AppComponent,
    StrutturaPageComponent,
    CardComponent,
    TopoComponent,
    PieComponent,
    BannerComponent,
    CardsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
