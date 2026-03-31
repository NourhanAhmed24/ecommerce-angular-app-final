import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { ProductDetailsComponent } from './pages/product-details/product-details';
import { AuthGuard } from './guards/auth-guard';
import { ShopNow } from './pages/shop-now/shop-now';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 // { path: 'shop-now', component: ShopNow },
 // { path: 'product/:id', component: ProductDetailsComponent},

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'shop-now', component: ShopNow, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


