const controllersList = document.querySelector("#controllers ul");

chrome.devtools.inspectedWindow.eval(
  `window.application.controllers.map(c => (
     { 
       identifier: c.identifier, 
       element: c.element, 
       targets: Array.from(c.targets).map(t => ( 
         { 
           element: t.element, 
           identifier: t.identifier
         }
       ))
     }))`,
  (controllers, error) => {
    console.log(controllers);
    controllers.forEach(controller => {
      controllersList.insertAdjacentHTML(
        "beforeend",
        `<li>${controller.identifier}
           <ul>
             ${controller.targets.map(t => `<li>${t.identifier}</li>`)}
           </ul>
         </li>`
      );
    });
  }
);
