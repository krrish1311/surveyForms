import { Component } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

const formElementsMapping = {
  Title: 'app-head',
  'Short Answer': 'app-short-ans',
  Number: 'app-number',
  Email: 'app-email',
  Date: 'app-date',
  'Single Correct': 'app-single-correct',
  'Multiple Correct': 'app-multiple-correct',
};

@Component({
  selector: 'app-create-form',
  templateUrl: 'create-form.component.html',
  styleUrls: ['create-form.component.scss'],
})
export class CreateFormComponent {
  formElements = [
    'Title',
    'Short Answer',
    'Number',
    'Email',
    'Date',
    'Single Correct',
    'Multiple Correct',
  ];

  mainForm = [
    'Title',
    'Short Answer',
    'Number',
    'Email',
    'Date',
    'Single Correct',
    'Multiple Correct',
  ];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (
      event.previousContainer.id === 'formElements' &&
      event.container.id === 'mainForm'
    ) {
      const formElement = event.previousContainer.data[event.previousIndex];
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data[event.currentIndex] = formElement;
    } else if (
      event.previousContainer.id === 'mainForm' &&
      event.container.id === 'formElements'
    ) {
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }
  fromSubmit() {
    console.log(this.mainForm);
  }
}