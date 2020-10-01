var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {

    if (document.getElementById("character").classList == "animate") { return }
    document.getElementById("character").classList.add("animate");
    setTimeout(function () {
        document.getElementById("character").classList.remove("animate");
    }, 300);

}
var checkDead = setInterval(function () {
    let characterTop =
        parseInt(window.getComputedStyle(document.getElementById("character"),"").getPropertyValue("top"));
    let blockleft =
        parseInt(window.getComputedStyle(document.getElementById("block"),"").getPropertyValue("left"));

    if (blockleft < 20 && blockleft > -20 && characterTop >= 130) {
        document.getElementById("block").style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        document.getElementById("block").style.animation = "block is infinite linear";
    } else {
        counter++;
        document.getElementById("scorespan").innerHTML = Math.floor(counter / 100);
    }



}, 10);