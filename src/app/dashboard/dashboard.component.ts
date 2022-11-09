import { Component, OnInit } from '@angular/core';

var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {

  public email: any;
  public password: any;
  public user: any;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('loggedUser')){
      this.user = localStorage.getItem('loggedUser');
      this.user = JSON.parse(this.user);
    }
    $(document).ready(function () {
        $('.nav_btn').click(function () {
            $('.mobile_nav_items').toggleClass('active');
        });
    });
  }

}
