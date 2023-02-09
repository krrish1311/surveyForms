import { Component } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HeadComponent } from '../head/head.component';
import { ShortAnsComponent } from '../short-ans/short-ans.component';
import { SingleCorrectComponent } from '../single-correct/single-correct.component';
import { MultipleCorrectComponent } from '../multiple-correct/multiple-correct.component';
import { DateComponent } from '../date/date.component';
import { EmailComponent } from '../email/email.component';
import { NumberComponent } from '../number/number.component';


@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'create-form.component.html',
  styleUrls: ['create-form.component.scss'],
})

export class CreateFormComponent {
  formElements = [
    HeadComponent,
    ShortAnsComponent,
    SingleCorrectComponent,
    MultipleCorrectComponent,
    DateComponent,
  ];

  mainForm = [HeadComponent, ShortAnsComponent];

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
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (
      event.previousContainer.id === 'mainForm' &&
      event.container.id === 'formElements'
    ) {
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }
}