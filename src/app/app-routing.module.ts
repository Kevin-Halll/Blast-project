import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: RegistrationFormComponent},
  {path: 'post-a-review', component: ReviewFormComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
