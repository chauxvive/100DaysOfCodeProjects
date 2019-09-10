alert("js still works");



var button = document.querySelector("button");


button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});