import { Component, OnInit } from '@angular/core';
import { IBookmark } from './bookmark.interface';

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
      url: 'https://blog.angular.io'
    },
    {
      id: 4,
      title: 'Angular Home'
    }
  ];

  newMode = false;

  constructor() { }

  ngOnInit() {
  }

  bookmarkChange(index: number, bookmark: IBookmark) {
    const updatedBookmarks = [...this.bookmarks];
    updatedBookmarks[index] = bookmark;

    this.bookmarks = updatedBookmarks;

    console.log(this.bookmarks);
  }

  delete(id: number) {
    const bookmarks = this.bookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });

    this.bookmarks = [...bookmarks];
  }

  onNew() {
    this.newMode = true;
  }

  onNewClose() {
    this.newMode = false;
  }

  create(title: string, url: string) {
    event.preventDefault();

    const createdBookmark: IBookmark = {
      id: this.bookmarks.length + 1,
      title: title,
      url: url
    };

    this.newMode = false;

    this.bookmarks = [...this.bookmarks, createdBookmark];
  }
}
