import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'how', component: HowComponent},
  {path: 'productos', component: ProductsComponent},
  {path: 'contacto', component: ContactComponent}
];


@NgModule({
  declarations: [				
    AppComponent,
      HomeComponent,
      HowComponent,
      ContactComponent,
      ProductsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
