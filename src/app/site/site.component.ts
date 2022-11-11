import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html'
})
export class SiteComponent implements OnInit {

  public title = 'SiteTeste'

  constructor() { }

  ngOnInit(): void {
  }

}
