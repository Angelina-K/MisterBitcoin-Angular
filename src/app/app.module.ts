import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetUserComponent } from './cmps/greet-user/greet-user.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    GreetUserComponent,
    HomePageComponent,
    ContactListComponent,
    ContactPageComponent,
    AppHeaderComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    EditContactComponent,
    StatisticsComponent,
    ChartComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
    // MatSliderModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
