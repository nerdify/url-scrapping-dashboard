import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label = ''
  @Input() placeholder = ''
  @Input() helperText = ''
  @Input() leftElement = ''
  @Input() type = 'text'
  @Input() name = ''
}
