import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {SocialAuthService} from '@abacritt/angularx-social-login'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private socialAuthService: SocialAuthService,
  ) {}

  login(data: LoginFormData) {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/sign-in`, data)
  }

  loginWithGoogle(idToken: string, googleId: string) {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/sign-in-with-google`,
      {
        id_token: idToken,
        google_id: googleId,
      },
    )
  }

  logout() {
    localStorage.removeItem('access_token')
    this.socialAuthService.signOut()
  }

  getViewer() {
    return this.http.get<User>(`${environment.apiUrl}/viewer`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
  }
}

type LoginFormData = {
  email: string
  password: string
}

type LoginResponse = {
  access_token: string
  token_type: string
}
