import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {
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
    return { formTitle, formDescription };
  }
}
