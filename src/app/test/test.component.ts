import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  //Hey there is a data coming from the parent so should be notified in @Input()
  @Input() public parentData;

  constructor() { }

  ngOnInit(): void {
  }

}
