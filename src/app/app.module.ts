import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material/material/material.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { HeroCardsComponent } from './components/hero-cards/hero-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    HeroComponent,
    HeroCardsComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
