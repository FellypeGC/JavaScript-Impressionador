import { Component } from "./Component.js";

export class Label extends Component {
  constructor(text) {
    // this.build();
    super("label");
    this.element.textContent = text;
  }
}