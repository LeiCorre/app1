 function ClickOff (path) {
    let popup = document.getElementById("MeowPop");
    let popupo = document.getElementById("MeowPopO")
    popup.classList.remove("PopupVisible");
    popupo.classList.remove("PopupVisible");
    window.history.pushState({}, "", path)
  }

  export default ClickOff;

