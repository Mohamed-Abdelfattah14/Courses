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
import { FilterComponent } from './components/courses/filter/filter.component';
import { CourseComponent } from './components/courses/course/course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CourseInfoComponent } from './components/courses/course-info/course-info.component';

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
    CardPricingComponent,
    FilterComponent,
    CourseComponent,
    CourseDetailsComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
