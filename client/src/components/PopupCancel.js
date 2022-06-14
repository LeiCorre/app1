function PopupCancel () {
    let popup = document.getElementById("more-menu");
    popup.setAttribute("open", "closed");
    popup.classList.add("PopupInvisible");
    popup.classList.remove("More-menu-vis")
}

export default PopupCancel;