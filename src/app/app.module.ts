import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component'

@NgModule({
  declarations: [AppComponent, DashboardLayoutComponent, PageComponent, LoginComponent, InputComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
