/* eslint-env browser */

import { Observable, Event } from "../utils/Observable.js";

class Editor extends Observable {

  constructor(el) {
    super();
    this.el = el;
  }

  // TODO: Remove after testing!
  brodcastTestEvent() {
    let event = new Event("event", { msg: "Hello Observer!" });
    this.notifyAll(event);
  }
}

export default Editor;