import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'about-page',
  styles: [`
    .test {
      position: relative;
      top: -117px;
      background-image: url(http://www.tapperiet.nu/files/layout/main_background_repeat.jpg);
      z-index: 1;
      padding-bottom: 117px;
    }

    .test img {
      position: relative;
      z-index: 5;
      top: 70px;
    }
  `],
  template: `
    <div class="test">

      <img src="./app/about/page1.png">

    </div>
  `
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
  }

}
