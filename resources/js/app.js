/* eslint-env browser */

import Editor from "./ui/Editor.js";

var editor;

function init() {
  // Start here
  console.log("### Inititalizing Writer App ###");
  editor = new Editor();
  editor.addEventListener("event", onEvent);
  editor.brodcastTestEvent();
}

function onEvent(event) {
  console.log(`Received event from editor. Message is: "${event.data.msg}"`);
}

init();