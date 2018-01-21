[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 6: Attribute directives

This branch has been achieved by performing the following steps:

## Step A

Create two buttons edit and close in the `bookmark-item.component.html` that call functions `onEdit` and `onEditClose`

```html
<div class="bookmark-item">
  <div class="bookmark-item__content">
    <div class="bookmark-item__button-group">
    
      <button *ngIf="!editMode" (click)="onEdit($event)" class="bookmark-item__button">edit</button>
      <button *ngIf="editMode" (click)="onEditClose($event)" class="bookmark-item__button is-close">close</button>
      
      <button (click)="onDelete($event)" class="bookmark-item__button">delete</button>
    </div>
    <a target="_blank" rel="noopener" href="{{bookmark.url}}" *ngIf="bookmark.url">{{bookmark.title || bookmark.url}}</a>
    <span *ngIf="!bookmark.url && bookmark.title">{{bookmark.title}} <span class="bookmark-item__error">(Missing url)</span></span>
  </div>
</div>
```

Add the editMode variable and implement the two function bodies in `bookmark-item.component.ts`

```javascript
export class BookmarkItemComponent {
  @Input() bookmark;

  @Output() deleteRequest: EventEmitter<string> = new EventEmitter<string>();

  editMode = false;

  constructor() { }

  onDelete(event: any) {
    this.deleteRequest.emit(this.bookmark.id);
  }

  onEdit(event: any) {
    this.editMode = true;
  }

  onEditClose(event: any) {
    this.editMode = false;
  }
}
```

## Step B

Extend the `bookmark-item.component.html` template by the edit case that is defined by editMode

```html
<div class="bookmark-item">
  <div class="bookmark-item__content">
    <div class="bookmark-item__button-group">
      <button *ngIf="!editMode" (click)="onEdit($event)" class="bookmark-item__button">edit</button>
      <button *ngIf="editMode" (click)="onEditClose($event)" class="bookmark-item__button is-close">close</button>
  
      <button (click)="onDelete($event)" class="bookmark-item__button">delete</button>
    </div>
    <a target="_blank" rel="noopener" href="{{bookmark.url}}" *ngIf="bookmark.url">{{bookmark.title || bookmark.url}}</a>
    <span *ngIf="!bookmark.url && bookmark.title">{{bookmark.title}} <span class="bookmark-item__error">(Missing url)</span></span>
  </div>
  
  <div *ngIf="editMode" class="bookmark-item__form">
    <div class="bookmark-item__form-group">
      <label class="bookmark-item__label" [attr.for]="'title-' + bookmark.id">Title</label>
      <input class="bookmark-item__input" type="text" [id]="'title-' + bookmark.id" [value]="bookmark.title || ''" />
    </div>
    <div class="bookmark-item__form-group">
      <label class="bookmark-item__label" [attr.for]="'url-' + bookmark.id">URL</label>
      <input class="bookmark-item__input" type="text" [id]="'url-' + bookmark.id" [value]="bookmark.url || ''" />
    </div>
  </div>
</div>
```
