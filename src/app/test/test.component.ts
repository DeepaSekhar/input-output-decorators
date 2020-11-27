import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // 1.Hey there is a data coming from the parent so should be notified in @Input()

  // @Input() public parentData;

  //2.another method of input using alias hey this an input but in this component
  //  I want to refered this as name

  @Input('parentData') public name;

  //sending data from child to parent.
  //create an instance of the event emitter class and add output decorator
  @Output() public childEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent() {
    this.childEvent.emit('Hey Holition')
  }

}
