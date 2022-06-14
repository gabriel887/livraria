var sideButtons = document.getElementById("sideButtons");
var carouselImages = document.getElementById('carouselImages');
var carouselTexts = document.getElementById('carouselTexts');
var cellCount = 0;
var selectedIndex = 0;
var lastSelectedIndex = 0;
var cellWidth = carouselImages.offsetWidth;
var cellHeight = carouselImages.offsetHeight;
var rotateFn = 'rotateX';
var radius, theta;
var rotating = false;





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
        texts += `
        <div id="text${cellCount}" class="carouselText ${cellCount === 0 ? "selected" : ""}">
            <p>${b.comments}</p>
        </div>
        `;
        cellCount++;
    });
    sideButtons.innerHTML = buttons;
    carouselImages.innerHTML = images;
    carouselTexts.innerHTML = texts;
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
            var lastPos = 0;
            if ((i - 1) === lastSelectedIndex) {
                lastPos = (i - 1);
            } else if ((i + 1) === lastSelectedIndex) {
                lastPos = (i + 1);
            }
            document.getElementById("image" + lastPos).classList.add("lastSelected");
            setTimeout(function() {
                document.getElementById("image" + lastPos).classList.remove("lastSelected");
            }, 2000);

            for (var counter = 0; counter < cellCount; counter++) {
                document.getElementById("image" + counter).classList.remove("transitionCarouselImageFast");
                document.getElementById("image" + counter).classList.add("transitionCarouselImage");
                document.getElementById("button" + counter).classList.remove("sideButtonTransitionFast");
                document.getElementById("button" + counter).classList.add("sideButtonTransition");

                if (counter === 0) {
                    carouselImages.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                    carouselTexts.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                }
                if (counter === i) {
                    document.getElementById("image" + i).classList.add("selected");
                    document.getElementById("text" + i).classList.add("selected");
                    document.getElementById("button" + i).classList.add("sideButtonSelected");
                } else {
                    document.getElementById("text" + counter).classList.remove("selected");
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
                        document.getElementById("text" + j).classList.remove("selected");
                        document.getElementById("button" + j).classList.remove("sideButtonSelected");
                        document.getElementById("image" + j).classList.add("lastSelected");
                        setTimeout(function() {
                            document.getElementById("image" + j).classList.remove("lastSelected");
                        }, 2000);
                        angle = ((360 / cellCount) * (j - 1) * -1);
                        carouselImages.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                        carouselTexts.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                        document.getElementById("image" + (j - 1)).classList.add("selected");
                        document.getElementById("text" + (j - 1)).classList.add("selected");
                        document.getElementById("button" + (j - 1)).classList.add("sideButtonSelected");

                    } else {
                        setTimeout(function() {
                            document.getElementById("image" + j).classList.remove("selected");
                            document.getElementById("text" + j).classList.remove("selected");
                            document.getElementById("button" + j).classList.remove("sideButtonSelected");
                            document.getElementById("image" + j).classList.add("lastSelected");
                            setTimeout(function() {
                                document.getElementById("image" + j).classList.remove("lastSelected");
                            }, 2000);
                            angle = ((360 / cellCount) * (j - 1) * -1);
                            carouselImages.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                            carouselTexts.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                            document.getElementById("button" + (j - 1)).classList.add("sideButtonSelected");
                            document.getElementById("image" + (j - 1)).classList.add("selected");
                            document.getElementById("text" + (j - 1)).classList.add("selected");
                            if (j === (i + 1)) {
                                rotating = false;
                            }
                        }, time);
                        time += 600;
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
                        document.getElementById("text" + j).classList.remove("selected");
                        document.getElementById("button" + j).classList.remove("sideButtonSelected");
                        document.getElementById("image" + j).classList.add("lastSelected");
                        setTimeout(function() {
                            document.getElementById("image" + j).classList.remove("lastSelected");
                        }, 2000);
                        angle = ((360 / cellCount) * (j + 1) * -1);
                        carouselTexts.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                        carouselImages.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                        document.getElementById("image" + (j + 1)).classList.add("selected");
                        document.getElementById("text" + (j + 1)).classList.add("selected");

                        document.getElementById("button" + (j + 1)).classList.add("sideButtonSelected");
                    } else {
                        setTimeout(function() {
                            document.getElementById("button" + j).classList.remove("sideButtonSelected");
                            document.getElementById("image" + j).classList.remove("selected");
                            document.getElementById("text" + j).classList.remove("selected");
                            document.getElementById("image" + j).classList.add("lastSelected");
                            setTimeout(function() {
                                document.getElementById("image" + j).classList.remove("lastSelected");
                            }, 2000);
                            angle = ((360 / cellCount) * (j + 1) * -1);
                            carouselTexts.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                            carouselImages.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + angle + 'deg)';
                            document.getElementById("button" + (j + 1)).classList.add("sideButtonSelected");
                            document.getElementById("image" + (j + 1)).classList.add("selected");
                            document.getElementById("text" + (j + 1)).classList.add("selected");
                            if (j === (i - 1)) {
                                rotating = false;
                            }
                        }, time);
                        time += 600;
                    }
                }
            }
        }
        lastSelectedIndex = i;
    }
}