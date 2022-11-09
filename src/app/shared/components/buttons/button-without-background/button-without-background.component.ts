import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-without-background',
  templateUrl: './button-without-background.component.html',
  styleUrls: ['./button-without-background.component.scss']
})
export class ButtonWithoutBackgroundComponent implements OnInit {

  @Input() content:any;

  constructor() { }

  ngOnInit(): void {
  }

}
