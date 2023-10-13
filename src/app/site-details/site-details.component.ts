import {HttpClient} from '@angular/common/http'
import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css'],
})
export class SiteDetailsComponent implements OnInit {
  site?: Site

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  getSiteAsString() {
    if (this.site) {
      return JSON.stringify(this.site)
    }
    return 'no site'
  }

  ngOnInit() {
    this.http
      .get<Site>(
        `${environment.apiUrl}/sites/${this.router.url.split('/')[3]}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      )
      .subscribe((response) => {
        this.site = response
      })
  }
}
