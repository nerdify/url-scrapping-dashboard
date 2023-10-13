import {HttpClient} from '@angular/common/http'
import {Component, Input} from '@angular/core'
import {Router} from '@angular/router'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.css'],
})
export class SiteFormComponent {
  @Input() site?: Site

  name = ''
  url = ''
  scanInterval = 5
  scanIntervalUnit: ScanIntervalUnit = 'min'

  scanIntervalOptions = [
    {
      label: '5 Min',
      value: 5,
    },
    {
      label: '10 Min',
      value: 10,
    },
    {
      label: '15 min',
      value: 15,
    },
  ]

  scanIntervalUnitOptions = [
    {
      label: 'Minutes',
      value: 'min',
    },
    {
      label: 'Hours',
      value: 'hour',
    },
    {
      label: 'Days',
      value: 'day',
    },
    {
      label: 'Weeks',
      value: 'week',
    },
    {
      label: 'Months',
      value: 'month',
    },
    {
      label: 'Years',
      value: 'year',
    },
  ]

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  handleFormSubmit() {
    this.http.post(`${environment.apiUrl}/sites`, {}, {}).subscribe(() => {
      this.router.navigate(['/sites'])
    })
  }
}
