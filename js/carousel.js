var carousel = document.getElementById('carouselImages');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount = 0;
var selectedIndex = 0;
var lastSelectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var rotateFn = 'rotateX';
var radius, theta;
var rotating = false;

var sideButtons = document.getElementById("sideButtons");
var carouselImages = document.getElementById("carouselImages");

function populateCarousel() {
    var buttons = "",
        images = "",
        texts = "";
    books.forEach(b => {
        buttons += `
        <div class="center">
            <div class="sideButton sideButtonTransition ${cellCount === 0 ? "sideButtonSelected" : ""}" id="button${cellCount}" onclick="rotateCarousel(${cellCount})"></div>
        </div>`;
        images += `
        <div id="image${cellCount}"  class="carouselImage transitionCarouselImage ${cellCount === 0 ? "selected" : ""}">
            <img src="./img/${b.img}" alt="Capa do livro ${b.name}">
        </div>
        `;
        texts = `
        <div id="image${cellCount}"  class="carouselImage transitionCarouselImage ${cellCount === 0 ? "selected" : ""}">
            <img src="./img/${b.img}" alt="Capa do livro ${b.name}">
        </div>
        `;
        cellCount++;
    });
    sideButtons.innerHTML = buttons;
    carouselImages.innerHTML = images;
}
populateCarousel();

function rotateCarousel(i) {
    if (!rotating) {
        rotating = true;
        var angle = ((360 / cellCount) * i * -1);
        var cellSize = cellHeight;
        radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
        if ((i - 1) === lastSelectedIndex || (i + 1) === lastSelectedIndex) {
            carouselImages.classList.add("transitionCarousel");
            carouselImages.classList.remove("transitionCarouselFast");

            for (var counter = 0; counter < cellCount; counter++) {
                document.getElementById("image" + counter).classList.remove("transitionCarouselImageFast");
                document.getElementById("image" + counter).classList.add("transitionCarouselImage");
                document.getElementById("button" + counter).classList.remove("sideButtonTransitionFast");
                document.getElementById("button" + counter).classList.add("sideButtonTransition");

                if (counter === 0) {
                    carousel.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                }
                if (counter === i) {
                    document.getElementById("image" + i).classList.add("selected");
                    document.getElementById("button" + i).classList.add("sideButtonSelected");
                } else {
                    document.getElementById("image" + counter).classList.remove("selected");
                    document.getElementById("button" + counter).classList.remove("sideButtonSelected");

                }
                if (counter === (cellCount - 1)) {
                    rotating = false;
                }
            }

        } else {
            time = 500;
            carouselImages.classList.remove("transitionCarousel");
            carouselImages.classList.add("transitionCarouselFast");
            if (i < lastSelectedIndex) {
                for (let j = lastSelectedIndex; j > i; j--) {
                    document.getElementById("image" + j).classList.add("transitionCarouselImageFast");
                    document.getElementById("image" + j).classList.remove("transitionCarouselImage");
                    document.getElementById("button" + j).classList.add("sideButtonTransitionFast");
                    document.getElementById("button" + j).classList.remove("sideButtonTransition");

                    if (j === lastSelectedIndex) {
                        document.getElementById("image" + j).classList.remove("selected");
                        document.getElementById("button" + j).classList.remove("sideButtonSelected");
                        angle = ((360 / cellCount) * (j - 1) * -1);
                        carousel.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                        document.getElementById("image" + (j - 1)).classList.add("selected");
                        document.getElementById("button" + (j - 1)).classList.add("sideButtonSelected");

                    } else {
                        setTimeout(function() {
                            document.getElementById("image" + j).classList.remove("selected");
                            document.getElementById("button" + j).classList.remove("sideButtonSelected");

                            angle = ((360 / cellCount) * (j - 1) * -1);
                            carousel.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                            document.getElementById("button" + (j - 1)).classList.add("sideButtonSelected");
                            document.getElementById("image" + (j - 1)).classList.add("selected");
                            if (j === (i + 1)) {
                                rotating = false;
                            }
                        }, time);
                        time += 400;
                    }
                }
            } else {
                for (let j = lastSelectedIndex; j < i; j++) {
                    document.getElementById("image" + j).classList.add("transitionCarouselImageFast");
                    document.getElementById("image" + j).classList.remove("transitionCarouselImage");
                    document.getElementById("button" + j).classList.add("sideButtonTransitionFast");
                    document.getElementById("button" + j).classList.remove("sideButtonTransition");
                    if (j === lastSelectedIndex) {
                        document.getElementById("image" + j).classList.remove("selected");
                        document.getElementById("button" + j).classList.remove("sideButtonSelected");
                        angle = ((360 / cellCount) * (j + 1) * -1);
                        carousel.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                        document.getElementById("image" + (j + 1)).classList.add("selected");

                        document.getElementById("button" + (j + 1)).classList.add("sideButtonSelected");
                    } else {
                        setTimeout(function() {
                            document.getElementById("button" + j).classList.remove("sideButtonSelected");
                            document.getElementById("image" + j).classList.remove("selected");

                            angle = ((360 / cellCount) * (j + 1) * -1);

                            carousel.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                            document.getElementById("button" + (j + 1)).classList.add("sideButtonSelected");
                            document.getElementById("image" + (j + 1)).classList.add("selected");
                            if (j === (i - 1)) {
                                rotating = false;
                            }
                        }, time);
                        time += 400;
                    }
                }
            }
        }
        lastSelectedIndex = i;
    }
}