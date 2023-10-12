import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
