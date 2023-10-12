import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardLayoutComponent} from '../components/dashboard-layout/dashboard-layout.component'
import {LoginComponent} from '../pages/login/login.component'

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
