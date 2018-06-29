import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import{routes} from './apps.routes';
import {RouterModule} from '@angular/router';
import{ItemServices} from './item.services';
import { ProductComponent } from './product/product.component';
import{SearchFilterPipe} from './custom.pipe';
import {FormsModule} from '@angular/forms';
import{RatingComponent} from './rating/rating.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductServices } from './product_list.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './_services/_services.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import {FormDataServices} from './services/formdata.services';
import {SignUpComponent} from './sign.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    SearchFilterPipe,
    RatingComponent,
    ProductDetailComponent,
    RegisterComponent,
    ServicesComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    HttpModule
  
  ],
  providers: [ProductServices,ItemServices, UserService, AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
