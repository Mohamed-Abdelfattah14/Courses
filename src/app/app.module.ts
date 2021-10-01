import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AnnouncementComponent } from './components/home/announcement/announcement.component';
import { FeatureComponent } from './components/home/feature/feature.component';
import { FeedbackComponent } from './components/home/feedback/feedback.component';
import { CountComponent } from './components/home/count/count.component';
import { SubscribtionComponent } from './components/home/subscribtion/subscribtion.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardPricingComponent } from './components/pricing/card-pricing/card-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricingComponent,
    CoursesComponent,
    HeaderComponent,
    AnnouncementComponent,
    FeatureComponent,
    FeedbackComponent,
    CountComponent,
    SubscribtionComponent,
    FooterComponent,
    CardPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
