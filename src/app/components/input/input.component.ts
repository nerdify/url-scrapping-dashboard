import {Component, Input, forwardRef} from '@angular/core'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  value: unknown = ''
  touched = false
  isDisabled = false

  @Input() label = ''
  @Input() placeholder = ''
  @Input() helperText = ''
  @Input() leftElement = ''
  @Input() type = 'text'
  @Input() name = ''

  protected onChange: (value: unknown) => void = () => {} // eslint-disable-line @typescript-eslint/no-empty-function

  private onTouched: () => void = () => {} // eslint-disable-line @typescript-eslint/no-empty-function

  writeValue(value: unknown) {
    this.value = value
  }

  registerOnChange(fn: (value: unknown) => void) {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled
  }

  handleOnBlur() {
    this.onTouched()
  }
}
