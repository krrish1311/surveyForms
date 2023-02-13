import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {

  @Output() valueEvent = new EventEmitter<void>();

  getValue() {
    const formTitle = (
      document.querySelector(
        '.example-form .example-full-width input'
      ) as HTMLInputElement
    ).value;
    const formDescription = (
      document.querySelector(
        '.example-form .example-full-width textarea'
      ) as HTMLTextAreaElement
    ).value;
    console.log(formTitle, formDescription);
    this.valueEvent.emit();
    return { formTitle, formDescription };
  }
}
