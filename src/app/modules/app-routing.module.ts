import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardLayoutComponent} from '../components/dashboard-layout/dashboard-layout.component'
import {LoginComponent} from '../login/login.component'
import {SiteListComponent} from '../site-list/site-list.component'
import {SiteCreateComponent} from '../site-create/site-create.component'
import {SiteDetailsComponent} from '../site-details/site-details.component'

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
      {
        path: 'sites/create',
        component: SiteCreateComponent,
        title: 'Create Site',
      },
      {
        path: 'sites/:siteId',
        component: SiteDetailsComponent,
        title: 'Site Details',
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
