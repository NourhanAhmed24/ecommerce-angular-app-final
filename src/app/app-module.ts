import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './pages/product-details/product-details';
import { Navbar } from './pages/navbar/navbar';
import { CommonModule } from '@angular/common';
import { ShopNow } from './pages/shop-now/shop-now';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    Navbar,
    ShopNow,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
