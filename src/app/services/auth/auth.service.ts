import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: LoginFormData) {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/sign-in`, data)
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
