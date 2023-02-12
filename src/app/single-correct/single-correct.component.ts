import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-single-correct',
  templateUrl: './single-correct.component.html',
  styleUrls: ['./single-correct.component.scss'],
})
export class SingleCorrectComponent {
  selectedOption = new FormControl('');

  getValue() {
    console.log(this.selectedOption.value);
  }
}
