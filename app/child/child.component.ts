import { ChangeDetectionStrategy,Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';

@Component({
  selector: 'app-child',
 changeDetection: ChangeDetectionStrategy.Default,
 template:`<h3>Child Component</h3>
           message from parent via @Input {{message}}
           <br>
           message from parent via content Injection
           <ng-content></ng-content>
           <br><br>
           code:
           <input type="text" name="code" [(ngModel)]="Customer.code" autocomplete="off">
           name :
           <input type="text" name="name" [(ngModel)]="Customer.name" autocomplete="off">
           <app-grand-child [Customer]="Customer"></app-grand-child>
 `

})
export class ChildComponent implements OnInit {

  @Input()
  message!: string;
  Customer : customer = new customer();

  constructor()
  {
    console.log("childcomponent Constructed");
  }

  ngOnChanges()
  {
    console.log("childapplication ngOnChanges");
  }
  ngOnInit()
  {
    console.log("ChildApplication ngOnInit");
  }
  ngOnDocheck()
  {
    console.log("ChildApplication ngOnDocheck");
  }
  ngAfterContentInit()
  {
    console.log("ChildApplication ngAfterContentInit");
  }
  ngAfterContentChecked()
  {
    console.log("ChildApplication ngAfterContentChecked");
  }
  ngAfterViewInit()
  {
    console.log("ChildApplication ngAfterViewInit");
  }
  ngAfterViewChecked()
  {
    console.log("ChildApplication ngAfterViewChecked");
  }

  
}
