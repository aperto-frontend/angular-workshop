import { Component, Input, OnInit } from '@angular/core';
import { IBookmark } from '../bookmark.interface';
import { ActivatedRoute } from '@angular/router';
import { BookmarksService } from '../../../services/bookmarks.service';

@Component({
  selector: 'app-bookmark-goto',
  templateUrl: './bookmark-goto.component.html',
  styleUrls: ['./bookmark-goto.component.scss']
})
export class BookmarkGotoComponent implements OnInit {

  bookmark: IBookmark;

  constructor(
    private bookmarksService: BookmarksService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    const bookmarkId = this.activatedRoute.snapshot.params.id;

    console.log(bookmarkId);

    this.bookmark = this.bookmarksService.getById(Number(bookmarkId));
  }

}
