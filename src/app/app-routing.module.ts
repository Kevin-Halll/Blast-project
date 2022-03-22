import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: RegistrationFormComponent},
  {path: 'post-a-review', component: ReviewFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
