import { Component } from "./Component.js";

export class Label extends Component {
  constructor(text) {
    this.build();
    this.element.textContent = text;
  }
}