function dropDown() {
    let x = document.getElementById("vertical-menu");
    if (x.className === "vertical-menu hide") {
        x.className = "vertical-menu show";
    } else {
        x.className = "vertical-menu hide";
    }
}