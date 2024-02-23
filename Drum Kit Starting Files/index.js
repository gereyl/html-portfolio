var numberOfButtons = document.querySelector(".drum").lenght;
for (var i = 0; i < numberOfButtons; i++){
    document.querySelector(".drum")[i].addEventListener("click", function () {
        alert("I got clicket!")
    });
}



