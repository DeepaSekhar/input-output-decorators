import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // 1.Hey there is a data coming from the parent so should be notified in @Input()
  // @Input() public parentData;
  //2.another method of input using alias hey this an input but in this component I want to refered this as name
  @Input('parentData') public name;

  constructor() { }

  ngOnInit(): void {
  }

}
