import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent implements OnInit {

  @Input()
  bookmark;

  constructor() { }

  ngOnInit() {
  }

}
