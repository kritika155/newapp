import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { AboutusComponent } from './aboutus.component';
import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';
import { MenuComponent } from './menu/menu.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CustomersComponent } from './customers/customers.component';
@NgModule({
  declarations: [
    AppComponent,LoginComponent,AboutusComponent, DashboardComponent, SampleComponent, MenuComponent, HeroesComponent, CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
