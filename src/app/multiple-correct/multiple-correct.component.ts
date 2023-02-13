import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() valueEvent = new EventEmitter<void>();

  getValue() {
    console.log(this.checkboxes);
    this.valueEvent.emit();
    return this.checkboxes;
  }
}