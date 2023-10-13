import {HttpClient} from '@angular/common/http'
import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.css'],
})
export class SiteCreateComponent {
  name = ''
  url = ''
  scanInterval = 5
  customScanInterval = null
  scanIntervalUnit:
    | ScanIntervalUnit
    | {
        label: string
        value: ScanIntervalUnit
      } = 'min'

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
    {
      label: 'Custom',
      value: null,
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
    console.log({
      name: this.name,
      url: this.url,
      scan_interval: this.scanInterval ?? this.customScanInterval,
      scan_interval_unit: this.scanIntervalUnit,
    })

    this.http
      .post(
        `${environment.apiUrl}/sites`,
        {
          name: this.name,
          url: this.url.startsWith('http') ? this.url : `https://${this.url}`,
          scan_interval: this.scanInterval ?? this.customScanInterval,
          scan_interval_type:
            typeof this.scanIntervalUnit === 'object'
              ? this.scanIntervalUnit?.value
              : this.scanIntervalUnit,
          dispatch_now: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      )
      .subscribe(() => {
        this.router.navigate(['/dashboard/sites'])
      })
  }
}
