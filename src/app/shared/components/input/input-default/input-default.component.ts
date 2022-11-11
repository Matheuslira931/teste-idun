import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss']
})
export class InputDefaultComponent implements OnInit {

  @Input() contentPlaceholder:any;
  @Input() idInput:any;
  @Input() idName:any;
  @Input() typeInput:any;


  constructor() { }

  ngOnInit(): void {
  }

}
