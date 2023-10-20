import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {AuthService} from 'src/app/services/auth/auth.service'

import {SocialAuthService} from '@abacritt/angularx-social-login'

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
    private socialAuthService: SocialAuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/'])
    }

    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        this.authService
          .loginWithGoogle(user.idToken, user.id)
          .subscribe((response: {access_token: string; token_type: string}) => {
            if (response.access_token === undefined) {
              return
            }

            localStorage.setItem('access_token', response.access_token)
            this.router.navigate(['/'])
          })
      }
    })
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
