// Apply different background colors to pricing plans on hover
var pricingPlans = document.querySelectorAll('.pricing-plan');
pricingPlans.forEach(function (plan) {
    plan.addEventListener('mouseover', function () {
        pricingPlans.forEach(function (p) {
            p.style.backgroundColor = '#f2f2f2';
        });
        plan.style.backgroundColor = '#ff6699';
    });
});

// Reset background colors of pricing plans on mouseout
pricingPlans.forEach(function (plan) {
    plan.addEventListener('mouseout', function () {
        pricingPlans.forEach(function (p) {
            p.style.backgroundColor = '#f2f2f2';
        });
    });
});


// second project

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxLayers = document.querySelectorAll('.parallax-layer');

    parallaxLayers.forEach(function (layer, index) {
        var speed = 0.5 * (index + 1);
        var yPos = -scrollTop * speed;
        layer.style.transform = 'translateY(' + yPos + 'px)';
    });
});


//   third project

// Optional: Add a delay before starting the animation
setTimeout(function () {
    var animatedText = document.querySelector('.animated-text');
    animatedText.style.animationPlayState = 'running';
}, 1000);

//   fourth project

var images = document.querySelectorAll('.image');
var modal = document.getElementById('modal');
var modalContent = document.querySelector('.modal-content');
var modalCaption = document.querySelector('.modal-caption');
var closeBtn = document.querySelector('.close');

images.forEach(function (image) {
    image.addEventListener('click', function () {
        var imgSrc = image.querySelector('img').src;
        var imgAlt = image.querySelector('img').alt;
        modalContent.src = imgSrc;
        modalCaption.textContent = imgAlt;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// 5 p

// Simulating content loading for 3 seconds
setTimeout(function () {
    var spinner = document.querySelector('.loading-spinner');
    spinner.style.display = 'none';
}, 3000);



//   7p

var modalOpenBtn = document.querySelector('.modal-open');
var modal = document.getElementById('modal');
var modalCloseBtn = document.querySelector('.modal-close');

modalOpenBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

modalCloseBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// 8p

function countdown() {
    var endDate = new Date("2023-12-31").getTime();

    var timer = setInterval(function () {
        var now = new Date().getTime();
        var distance = endDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("days").textContent = '00';
            document.getElementById("hours").textContent = '00';
            document.getElementById("minutes").textContent = '00';
            document.getElementById("seconds").textContent = '00';
        }
    }, 1000);
}

countdown();


//   9p

var testimonials = document.querySelectorAll('.testimonial');
var currentTestimonial = 0;

function showTestimonial(testimonialIndex) {
    testimonials[currentTestimonial].classList.remove('active');
    testimonials[testimonialIndex].classList.add('active');
    currentTestimonial = testimonialIndex;
}

function slideTestimonials() {
    var nextTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextTestimonial);
}

setInterval(slideTestimonials, 3000);

// 11p

const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

// Mouse/touch event listeners
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('touchstart', dragStart);
slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('touchend', dragEnd);
slider.addEventListener('mousemove', drag);
slider.addEventListener('touchmove', drag);

function dragStart(e) {
    e.preventDefault();
    if (e.type === 'touchstart') {
        startPos = e.touches[0].clientX;
    } else {
        startPos = e.clientX;
        document.onselectstart = () => false; // Disable text selection while dragging
    }
    isDragging = true;
    animationID = requestAnimationFrame(animation);
}

function dragEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < slides.length - 1) {
        currentIndex += 1;
    }
    if (movedBy > 100 && currentIndex > 0) {
        currentIndex -= 1;
    }
    setPositionByIndex();
    document.onselectstart = () => true; // Enable text selection again
}

function drag(e) {
    if (isDragging) {
        const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function animation() {
    setSliderPosition();
    if (isDragging) {
        requestAnimationFrame(animation);
    }
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -slider.clientWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
}


// 12p

// Add event listener to close button
const closeButton = document.querySelector('.notification-close');
closeButton.addEventListener('click', function () {
    const notification = this.parentNode;
    notification.style.animation = 'slideOut 0.5s forwards';

    // Remove notification from the DOM after the animation
    setTimeout(function () {
        notification.parentNode.removeChild(notification);
    }, 500);
});


// 14p

const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', animateTimeline);

function animateTimeline() {
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight * 0.8) {
      item.style.animation = 'slideIn 0.5s forwards';
    }
  });
}


// 15p

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showNextItem() {
  const nextItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.remove('active');
  carouselItems[nextItem].classList.add('active');
  carouselItems[currentItem].classList.add('prev');
  carouselItems[nextItem].classList.remove('next');
  currentItem = nextItem;
}

function showPreviousItem() {
  const prevItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentItem].classList.remove('active');
  carouselItems[prevItem].classList.add('active');
  carouselItems[currentItem].classList.add('next');
  carouselItems[prevItem].classList.remove('prev');
  currentItem = prevItem;
}

setInterval(showNextItem, 3000);


// 16p

const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseenter', () => {
    menuItem.style.transform = 'rotateX(360deg) scale(1.2)';
  });

  menuItem.addEventListener('mouseleave', () => {
    menuItem.style.transform = 'rotateX(0deg) scale(1)';
  });
});


// 18p

function toggleActive(menuItem) {
    menuItem.classList.toggle('active');
  }
  
//   21p

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

