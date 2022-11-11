import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-href-background',
  templateUrl: './button-href-background.component.html',
  styleUrls: ['./button-href-background.component.scss']
})
export class ButtonHrefBackgroundComponent implements OnInit {

  @Input() content:any;
  @Input() iconType:any;
  @Input() iconName:any;
  @Input() hRef:any;
  @Input() classColor:any;

  constructor() { }

  ngOnInit(): void {
  }

}
