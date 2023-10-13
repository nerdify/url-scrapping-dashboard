import {HttpClient} from '@angular/common/http'
import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css'],
})
export class SiteListComponent implements OnInit {
  sites?: Site[]

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    this.http
      .get<PaginatedResponse<Site>>(`${environment.apiUrl}/sites`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      .subscribe((response) => {
        this.sites = response.data
      })
  }

  redirectToCreatePage() {
    console.log('redirecting to create page')

    this.router.navigate(['/dashboard/sites/create'])
  }
}
