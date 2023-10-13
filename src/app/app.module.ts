import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './modules/app-routing.module'
import {AppComponent} from './app.component'
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component'
import {PageComponent} from './components/page/page.component'
import {LoginComponent} from './login/login.component'
import {InputComponent} from './components/input/input.component'
import {ButtonComponent} from './components/button/button.component'
import {FormsModule} from '@angular/forms'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {PasswordModule} from 'primeng/password'
import {InputTextModule} from 'primeng/inputtext'
import {AuthService} from './services/auth/auth.service'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    PageComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
