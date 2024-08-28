//get slider items
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
var  slidesCount = sliderImages.length; //get number of images

//set current slide
var currentSlide = 1;

var slideNumber = document.getElementById("slide-number");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create ul element
var paginationElement = document.createElement("ul");
paginationElement.setAttribute('id', 'pagination-ul');

//create li element based on number of slide
for (var i = 1 ; i <= slidesCount ; i++) {
    var paginationItem = document.createElement("li");
    paginationItem.setAttribute('data-index', i);

    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);

var paginationCreatedUl = document.getElementById('pagination-ul');
var paginationIBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

//loop through all bullets items
for (var i = 0 ; i < paginationIBullets.length; i++) {
    paginationIBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

//trigger theChecker function
theChecker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;    
    } else {    
    currentSlide++;   
    theChecker();
    }
}
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;   
    } else {   
        currentSlide--;
        theChecker();
    }
}

//create the checker function
function theChecker() {
    //set the slide number
    slideNumber.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    //remove active class from all images and all pagination bullets
    removeAllActive();

    //set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");

    //set active class on current slide pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");

    //check if current slide is the first
    if (currentSlide == 1) {
        prevButton.classList.add("disabled");   
    } else {
        prevButton.classList.remove("disabled")
    }

    //check if current slide is the last
    if (currentSlide == slidesCount) {
        nextButton.classList.add("disabled");   
    } else {
        nextButton.classList.remove("disabled")
    }

}

function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove("active");
    })
    paginationIBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
    })
};

