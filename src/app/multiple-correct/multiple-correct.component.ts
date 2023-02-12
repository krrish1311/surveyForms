import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-correct',
  templateUrl: './multiple-correct.component.html',
  styleUrls: ['./multiple-correct.component.scss'],
})
export class MultipleCorrectComponent {
  checkboxes = [false, false, false, false];

  onCheckboxChange(index: number) {
    this.checkboxes[index - 1] = !this.checkboxes[index - 1];
  }

  getValue() {
    console.log(this.checkboxes)
    return this.checkboxes;
  }
}