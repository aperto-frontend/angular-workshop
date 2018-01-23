import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkGotoComponent } from './bookmark-goto.component';

describe('BookmarkGotoComponent', () => {
  let component: BookmarkGotoComponent;
  let fixture: ComponentFixture<BookmarkGotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkGotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkGotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
