/* eslint-env browser */

const STORAGE_KEY = "Writer-Text-Storage";

class Storage {

  save(text) {
    localStorage.setItem(STORAGE_KEY, text);
  }

  load() {
    let text = localStorage.getItem(STORAGE_KEY) || "";
    return text;
  }

}

export default Storage;