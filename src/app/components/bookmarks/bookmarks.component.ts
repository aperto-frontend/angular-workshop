import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks = [
    {
      id: 1,
      title: 'Tour of Heroes',
      url: 'https://angular.io/tutorial'
    },
    {
      id: 2,
      title: 'CLI Documentation',
      url: 'https://github.com/angular/angular-cli/wiki'
    },
    {
      id: 3,
      url: 'https://blog.angular.io/'
    },
    {
      id: 4,
      title: 'Angular Home'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
