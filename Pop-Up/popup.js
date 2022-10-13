function Popup(title, text, btntext) {
    this.title = title;
    this.text = text;
    this.btntext = btntext;
}

Popup.prototype.create = function () {
    return `
    <div id="openModal" class="modalDialog">
      <div>	<a title="Close" class="close">X</a>
              <h2 class="title">${this.title}</h2>
          <p class="text">${this.text}</p>
          <button class="btn">${this.btntext}</button>
      </div>
  </div>
    `
}

Popup.prototype.show = function () {
    var _this = this;
    var popupHTML = this.create();
    document.querySelector("body").insertAdjacentHTML("afterend", popupHTML);
    document.querySelector(".modalDialog").style.opacity = 1;
    document.querySelector('.close').addEventListener('click',function(){
        _this.close();
    })
}

Popup.prototype.close=function(){
    document.querySelector("#openModal") && document.querySelector("#openModal").remove();
}

