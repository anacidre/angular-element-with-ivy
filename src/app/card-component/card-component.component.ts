import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'bb-card',
  template: `
  <div class='main__shadow'>
  <img id='shadow-image' class='shadow__image' src='{{_src}}' alt='title'>
  <div id='shadow-info' class='shadow__info'>
    <h1 name='title' id='title' role='header' class='shadow__title'>{{_title}}</h1>
    <p name='description' id='description' class='shadow__description'>{{_description}}</p>
  </div>
  </div>
  `,
  styleUrls: ['./card-component.component.scss'],
  encapsulation: ViewEncapsulation.Native,
})
export class CardComponent implements OnInit {
  _title = '<no title set>';
  _description = '<no description set>';
  _src = 'https://goo.gl/STZhS6';

  @Input()
  set title(title: string) {
    this._title = title;
  }
  get title(): string {
    return this._title;
  }

  @Input()
  set description(description: string) {
    this._description = description;
  }
  get description(): string {
    return this._description;
  }

  @Input()
  set src(src: string) {
    this._src = src;
  }
  get src(): string {
    return this._src;
  }
  constructor() {}

  ngOnInit() {}
}
