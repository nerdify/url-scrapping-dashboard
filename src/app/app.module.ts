import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import { PageComponent } from './page/page.component'

@NgModule({
  declarations: [AppComponent, DashboardLayoutComponent, PageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
