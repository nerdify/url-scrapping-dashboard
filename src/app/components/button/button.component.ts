import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label = ''
  @Input() fullWidth = false
  @Input() className = ''
  @Input() variant: ButtonVariant = 'solid'
  @Input() type = 'button'
  @Input() disabled = false

  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit()
  }

  variantClassName() {
    switch (this.variant) {
      case 'solid':
        return 'bg-indigo-700 hover:bg-indigo-600  text-white'
      case 'outline':
        return 'bg-white hover:border-indigo-600 hover:text-indigo-600 border border-indigo-700 text-indigo-700'
      case 'ghost':
        return 'bg-gray-200 focus:outline-none hover:bg-gray-300  text-indigo-700'
    }
  }
  componentClassName() {
    return `inline-block transition ease-in-out duration-150 text-xs px-6 py-3 rounded-md ${this.variantClassName()} ${
      this.fullWidth ? 'w-full' : ''
    } ${this.className}`
  }
}

type ButtonVariant = 'solid' | 'outline' | 'ghost'
