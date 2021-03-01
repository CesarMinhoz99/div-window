class JsWindow{
  title;
  body;

  constructor(title, body){
     this.title = title;
     this.body  = body;
  }

  fill(){
    let fillWindowInBody = document.createElement("div");
    fillWindowInBody.className = "window";
    fillWindowInBody.style = "diplay:block;";
    fillWindowInBody.innerHTML =
    `<div class="window-title"> ${this.title} </div> <div class="window-body">  ${this.body} </div>`;
    document.body.appendChild(fillWindowInBody);
  }

}

