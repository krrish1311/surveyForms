// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-view-form',
//   templateUrl: './view-form.component.html',
//   styleUrls: ['./view-form.component.scss'],
// })
// export class ViewFormComponent implements OnInit {
//   form!: FormGroup;
//   formElements = [
//     { type: 'Title', data: { label: 'User Information' } },
//     { type: 'Short Answer', data: { label: 'Name', name: 'name' } },
//     { type: 'Number', data: { label: 'Age', name: 'age' } },
//     { type: 'Email', data: { label: 'Email', name: 'email' } },
//     { type: 'Short Answer', data: { label: 'Address', name: 'address' } },
//   ];

//   constructor(private formBuilder: FormBuilder) {}

//   ngOnInit() {
//     this.form = this.formBuilder.group({});
//     this.formElements.forEach((element) => {
//       if (element.type !== 'Title' && element.data.name) {
//         this.form.addControl(element.data.name, new FormControl(''));
//       }
//     });
//   }
// }

// // import {
// //   Component,
// //   Input,
// //   ComponentFactoryResolver,
// //   ViewContainerRef,
// // } from '@angular/core';

// // import { HeadComponent } from './head/head.component';
// // import { ShortAnsComponent } from './short-ans/short-ans.component';
// // import { NumberComponent } from './number/number.component';
// // import { EmailComponent } from './email/email.component';
// // import { DateComponent } from './date/date.component';
// // import { SingleCorrectComponent } from './single-correct/single-correct.component';
// // import { MultipleCorrectComponent } from './multiple-correct/multiple-correct.component';

// // @Component({
// //   selector: 'app-view-form',
// //   templateUrl: './view-form.component.html',
// // })
// // export class ViewFormComponent {
// //   @Input() formData: any[];

// //   componentsMap = {
// //     Title: HeadComponent,
// //     'Short Answer': ShortAnsComponent,
// //     Number: NumberComponent,
// //     Email: EmailComponent,
// //     Date: DateComponent,
// //     'Single Correct': SingleCorrectComponent,
// //     'Multiple Correct': MultipleCorrectComponent,
// //   };

// //   constructor(
// //     private componentFactoryResolver: ComponentFactoryResolver,
// //     private viewContainerRef: ViewContainerRef
// //   ) {}

// //   ngOnInit() {
// //     this.formData.forEach((element) => {
// //       const component = this.componentsMap[element.type];
// //       const factory =
// //         this.componentFactoryResolver.resolveComponentFactory(component);
// //       const componentRef = this.viewContainerRef.createComponent(factory);
// //       componentRef.instance.data = element.data;
// //     });
// //   }
// // }
