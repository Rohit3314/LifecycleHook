import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { customer } from '../customer';

@Component({
  selector: 'app-grand-child',
  changeDetection : ChangeDetectionStrategy.Default,
  template :`<h3>Grand Child Component</h3>
             {{Customer?.name}}
  `
})
export class GrandChildComponent implements OnInit {


  @Input() Customer : customer | undefined
  
  constructor()
  {
    console.log("Grandchildcomponent Constructed");
  }

  ngOnChanges()
  {
    console.log("Grandchildapplication ngOnChanges");
  }
  ngOnInit()
  {
    console.log("GrandChildApplication ngOnInit");
  }
  ngOnDocheck()
  {
    console.log("GrandChildApplication ngOnDocheck");
  }
  ngAfterContentInit()
  {
    console.log("GrandChildApplication ngAfterContentInit");
  }
  ngAfterContentChecked()
  {
    console.log("GrandChildApplication ngAfterContentChecked");
  }
  ngAfterViewInit()
  {
    console.log("GrandChildApplication ngAfterViewInit");
  }
  ngAfterViewChecked()
  {
    console.log("GrandChildApplication ngAfterViewChecked");
  }

}
