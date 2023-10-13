import {Component, OnInit} from '@angular/core'
import {AuthService} from '../../services/auth/auth.service'

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent implements OnInit {
  user?: User

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getViewer().subscribe((response) => {
      this.user = response
    })
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
