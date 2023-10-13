import {Component, OnInit} from '@angular/core'
import {AuthService} from '../../services/auth/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent implements OnInit {
  user?: User

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.authService.getViewer().subscribe((response) => {
        this.user = response
      })
    } else {
      this.router.navigate(['/login'])
    }
  }

  getUserInitials() {
    if (this.user) {
      return this.user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
    }

    return ''
  }
}
