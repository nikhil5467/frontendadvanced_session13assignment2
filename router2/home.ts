import { Component } from 'angular2/core';

const styles: string = require('./home.scss');
const template: string = require('./home.html');

@Component({
  selector: 'home',
  styles: [styles],
  template
})

export class Home {}

