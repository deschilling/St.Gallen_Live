import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselParkingComponent } from './carousel-parking/carousel-parking.component';
import { CarouselEnergyComponent } from './carousel-energy/carousel-energy.component';
import { CarouselTaxComponent } from './carousel-tax/carousel-tax.component';
import { CarouselRelocationComponent } from './carousel-relocation/carousel-relocation.component';
import { CarouselRefuseComponent } from './carousel-refuse/carousel-refuse.component';
import { CarouselPedestrianComponent } from './carousel-pedestrian/carousel-pedestrian.component';
import { CarouselQuizComponent } from './carousel-quiz/carousel-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CarouselParkingComponent,
    CarouselEnergyComponent,
    CarouselTaxComponent,
    CarouselRelocationComponent,
    CarouselRefuseComponent,
    CarouselPedestrianComponent,
    CarouselQuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
