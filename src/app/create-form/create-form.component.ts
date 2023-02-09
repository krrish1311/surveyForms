import {Component} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'create-form.component.html',
  styleUrls: ['create-form.component.scss'],
})

export class CreateFormComponent {
  todo = ['Title', 'short ans', 'single correct', 'multiple correct','Date', 'email', 'number'];

  done = ['Title',];

  drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else if (event.previousContainer.id === 'todo' && event.container.id === 'done') {
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  } else if (event.previousContainer.id === 'done' && event.container.id === 'todo') {
    event.previousContainer.data.splice(event.previousIndex, 1);
  }
}
}
