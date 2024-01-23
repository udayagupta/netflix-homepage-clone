function showDisplay(element) {
    var nextSiblingStyle = window.getComputedStyle(element.nextElementSibling);

    if (nextSiblingStyle.display === "none") {
        element.nextElementSibling.style.display = "flex";
    } else {
        element.nextElementSibling.style.display = "none";
    }

}