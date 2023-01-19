import { Template } from '@angular/compiler/src/render3/r3_ast';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VERSION } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
 changeDetection : ChangeDetectionStrategy.Default,
  template:`<a href="http://angular.io/guide/lifecycle-hooks">
            Angular lifecycle Hooks
  </a> <br>
  <h3>Root component</h3>
  <input type="text" name="message" [(ngModel)]="message" autocomplete="off">
  <br>
  <input type="text" name="content" [(ngModel)]="content" autocomplete="off">
  <br>
  <input type="checkbox" name="hidechild" [(ngModel)]="hidechild" autocomplete="off">
  <br><br>
  <app-child [message]="message" *ngIf="!hidechild">
    <h4>{{content}}</h4>
  </app-child>`

})
export class AppComponent {
  title = 'lifecycle';

  name= "Angular"+VERSION.major;
  message="Hello";
  content="Hello";
  hidechild =false;

  constructor()
  {
    console.log("Appcomponent Constructed");
  }

  ngOnChanges()
  {
    console.log("Application ngOnChanges");
  }
  ngOnInit()
  {
    console.log("Application ngOnInit");
  }
  ngOnDocheck()
  {
    console.log("Application ngOnDocheck");
  }
  ngAfterContentInit()
  {
    console.log("Application ngAfterContentInit");
  }
  ngAfterContentChecked()
  {
    console.log("Application ngAfterContentChecked");
  }
  ngAfterViewInit()
  {
    console.log("Application ngAfterViewInit");
  }
  ngAfterViewChecked()
  {
    console.log("Application ngAfterViewChecked");
  }

  
}
