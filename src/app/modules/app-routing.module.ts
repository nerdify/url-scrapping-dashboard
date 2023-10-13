import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardLayoutComponent} from '../components/dashboard-layout/dashboard-layout.component'
import {LoginComponent} from '../login/login.component'
import {SiteListComponent} from '../site-list/site-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'sites',
        pathMatch: 'full',
      },
      {
        path: 'sites',
        component: SiteListComponent,
        title: 'Sites',
      },
    ],
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
