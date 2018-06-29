
import {RouterModule, Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import{ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import{RegisterComponent} from './register/index';
import {LoginComponent} from './login/login.component';


export const routes = [{
   path: 'home',
   component: HomeComponent
},
{
    path:'product',
    component:ProductComponent
},{
    path: 'product-detail/:ProductId',
    component: ProductDetailComponent
},
{ path: 'register', 
  component: RegisterComponent },
  { path: 'login', 
  component: LoginComponent },

];
