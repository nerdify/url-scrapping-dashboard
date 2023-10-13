import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {AuthService} from 'src/app/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/'])
    }
  }

  login() {
    if (this.email && this.password) {
      this.authService
        .login({
          email: this.email,
          password: this.password,
        })
        .subscribe((response: {access_token: string; token_type: string}) => {
          localStorage.setItem('access_token', response.access_token)

          this.router.navigate(['/'])
        })
    }
  }
}
