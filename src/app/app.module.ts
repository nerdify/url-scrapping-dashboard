import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './modules/app-routing.module'
import {AppComponent} from './app.component'
import {DashboardLayoutComponent} from './components/dashboard-layout/dashboard-layout.component'
import {PageComponent} from './components/page/page.component'
import {LoginComponent} from './pages/login/login.component'
import {InputComponent} from './components/input/input.component'
import {ButtonComponent} from './components/button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    PageComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
