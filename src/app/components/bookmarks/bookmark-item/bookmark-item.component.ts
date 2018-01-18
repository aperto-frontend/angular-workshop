import {
  Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { IBookmark } from '../bookmark.interface';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent implements OnInit {

  @Input()
  bookmark;

  @Output()
  deleteRequest: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  bookmarkChange: EventEmitter<IBookmark> = new EventEmitter<IBookmark>();

  editMode = false;

  constructor() { }

  ngOnInit() {
  }

  onDelete(event: any) {
    this.deleteRequest.emit(this.bookmark.id);
  }

  onEdit(event: any) {
    this.editMode = true;
  }

  onEditClose(event: any) {
    this.editMode = false;
  }

  onBookmarkChange() {
    this.bookmarkChange.emit(this.bookmark);
  }
}
