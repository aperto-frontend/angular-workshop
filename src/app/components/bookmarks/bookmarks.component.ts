import { Component, OnInit } from '@angular/core';
import { IBookmark } from './bookmark.interface';
import { BookmarksService } from '../../services/bookmarks.service';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: IBookmark[];

  newMode = false;

  updateIndex = -1;

  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit() {
    this.bookmarks = this.bookmarksService.get();
  }

  create(title: string, url: string) {
    event.preventDefault();

    this.bookmarks = this.bookmarksService.create({
      title: title,
      url: url
    });

    this.newMode = false;
    this.updateIndex = -1;
  }

  update(index: number, bookmark: IBookmark) {
    this.bookmarks = this.bookmarksService.update(index, bookmark);
    this.updateIndex = index;
  }

  delete(id: number) {
    this.bookmarks = this.bookmarksService.delete(id);
    this.updateIndex = -1;
  }

  onNew() {
    this.newMode = true;
    this.updateIndex = -1;
  }

  onNewClose() {
    this.newMode = false;
    this.updateIndex = -1;
  }
}
