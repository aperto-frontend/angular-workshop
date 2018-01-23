import { Injectable } from '@angular/core';
import { IBookmark, IBookmarkData } from '../components/bookmarks/bookmark.interface';

@Injectable()
export class BookmarksService {

  constructor() { }

  create(bookmarkData: IBookmarkData): IBookmark[] {
    let bookmarks = this.get();

    const newBookmark: IBookmark = {
      id: bookmarks.length + 1,
      title: bookmarkData.title,
      url: bookmarkData.url
    };

    bookmarks = [...bookmarks, newBookmark];

    return this.save(bookmarks);
  }

  update(index: number, bookmark: IBookmark): IBookmark[] {
    let bookmarks = this.get();

    if (bookmarks && bookmarks.length && bookmarks[index]) {
      const updatedBookmarks = [...bookmarks];
      updatedBookmarks[index] = bookmark;

      bookmarks = updatedBookmarks;
    }

    return this.save(bookmarks);
  }

  delete(id: number): IBookmark[] {
    let bookmarks = this.get();

    bookmarks = bookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });

    // remap id's
    bookmarks = bookmarks.map((bookmark, index) => {
      bookmark.id = index + 1;
      return bookmark;
    });

    return this.save(bookmarks);
  }

  get(): IBookmark[] {
    const bookmarksJson = localStorage.getItem('bookmarks');
    let bookmarks = [];

    if (bookmarksJson) {
      bookmarks = JSON.parse(bookmarksJson);
    }

    return bookmarks;
  }

  getById(id: number): IBookmark {
    let bookmarks = this.get();

    bookmarks = bookmarks.filter((bookmark) => {
      console.log(bookmark.id, id, bookmark.id === id);
      return bookmark.id === id;
    });

    if (bookmarks.length) {
      return bookmarks[0];
    }

    return null;
  }

  save(bookmarks: IBookmark[] = []): IBookmark[] {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    return this.get();
  }
}
