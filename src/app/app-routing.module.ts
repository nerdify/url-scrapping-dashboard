import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component'

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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
