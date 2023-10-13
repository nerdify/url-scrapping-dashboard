import {HttpClient} from '@angular/common/http'
import {Component, OnInit} from '@angular/core'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css'],
})
export class SiteListComponent implements OnInit {
  sites?: Site[]

  isCreateModalOpen = false

  constructor(private http: HttpClient) {}

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

  openCreateModal() {
    this.isCreateModalOpen = true
  }
}
