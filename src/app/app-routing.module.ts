import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';
import { AboutusComponent }      from './aboutus.component';
import { LoginComponent }      from './login.component';
import { MenuComponent } from './menu/menu.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'aboutus',    component: AboutusComponent },
  { path: 'login',      component: LoginComponent},
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'sample',    component: SampleComponent },
  { path: 'menu',    component: MenuComponent },
  { path: 'heroes',    component: HeroesComponent },
  {path: 'customers',    component: CustomersComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}