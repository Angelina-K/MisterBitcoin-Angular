import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AuthService } from './services/authService/auth.service';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'contact/:id',
        component: ContactDetailsComponent,
        resolve: { contact: ContactResolverService },
      },
      {
        path: 'edit/:id',
        component: EditContactComponent,
        resolve: { contact: ContactResolverService },
      },
      {
        path: 'edit',
        component: EditContactComponent,
        resolve: { contact: ContactResolverService },
      },
    ],
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthService],
  },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
