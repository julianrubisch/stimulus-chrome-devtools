const controllersList = document.querySelector("#controllers ul");

chrome.devtools.inspectedWindow.eval(
  "Array.from(document.querySelectorAll('[data-controller]')).map(e => ({ tag: e.tagName, controller: e.dataset.controller }))",
  (result, error) => {
    result.forEach(element => {
      controllersList.insertAdjacentHTML(
        "beforeend",
        `<li>${element.tag}: ${element.controller}</li>`
      );
    });
  }
);
