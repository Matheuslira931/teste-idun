import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {

  public email: any;
  public password: any;
  public user:any = {
    'name' : 'jr'
  };


  constructor(public router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('loggedUser')){
      this.user = localStorage.getItem('loggedUser');
      this.user = JSON.parse(this.user);
    }
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
