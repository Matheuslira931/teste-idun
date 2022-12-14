import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {

  @Input() iconType:any;
  @Input() iconName:any;
  @Input() classColor:any;

  constructor() { }

  ngOnInit(): void {
  }

}
