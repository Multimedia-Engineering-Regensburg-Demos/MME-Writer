/* eslint-env browser */

import Storage from "./data/Storage.js";
import Editor from "./ui/Editor.js";
import StatsView from "./ui/StatsView.js";

var textStorage,
  stats,
  editor;

function init() {
  initView();
  initEditor();
  initStorage();
}

function initView() {
  let statsEl = document.querySelector("#stats");
  stats = new StatsView(statsEl);
}

function initEditor() {
  let editorEl = document.querySelector("#editor");
  editor = new Editor(editorEl);
  editor.addEventListener("update", onTextChanged);
}

function initStorage() {
  textStorage = new Storage();
  editor.text = textStorage.load();
}

function onTextChanged(event) {
  stats.update(event.data);
  textStorage.save(editor.text);
}

init();