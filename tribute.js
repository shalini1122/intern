function nextslide() {
    var x = document.getElementsByClassName("slidesContainer");
    if (i > 0) {
        document.getElementById("previous").classList.remove('hide');
        document.getElementById("previous").classList.add('show');
    }
    if (i == x.length - 1) {
        document.getElementById("next").classList.remove('show');
        document.getElementById("next").classList.add('hide');
    }
    if (i <= x.length) {
        document.getElementById("slidesContainer" + i).classList.remove('show');
        document.getElementById("slidesContainer" + i).classList.add('hide');
        document.getElementById("slidesContainer" + (i + 1)).classList.remove('hide');
        document.getElementById("slidesContainer" + (i + 1)).classList.add('show');
        i++;
    }
}

function previousslide() {
    var x = document.getElementsByClassName("slidesContainer");
    if (i == 2) {
        document.getElementById("previous").classList.remove('show');
        document.getElementById("previous").classList.add('hide');
    }
    if (i <= x.length) {
        i--;
        document.getElementById("next").classList.remove('hide');
        document.getElementById("next").classList.add('show');
        document.getElementById("slidesContainer" + i).classList.remove('hide');
        document.getElementById("slidesContainer" + i).classList.add('show');
        document.getElementById("slidesContainer" + (i + 1)).classList.remove('show');
        document.getElementById("slidesContainer" + (i + 1)).classList.add('hide');
    }
}