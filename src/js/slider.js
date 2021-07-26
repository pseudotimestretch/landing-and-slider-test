let slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

let paginationCounter = 0;
let index = 0;
let paginationContainer = document.createElement('div')
    paginationContainer.className = '.slider-dots'
    slider.append(paginationContainer);
let slidesCount = sliderItems.querySelectorAll('.slide');
let allowShift = true;
for (let i = 0; i < slidesCount.length; i++) {
    paginationContainer.innerHTML += `<span class="slider-dots_item" onclick="currentSlide(${i})"></span>`;
    paginationContainer.firstChild.classList.add('active');
}
 
function currentSlide(count) {
    if (allowShift) {
    allowShift = false;
    let dots = paginationContainer.querySelectorAll('.slider-dots_item')
    for (const i of dots) {
        i.classList.remove('active')
    }
    event.target.classList.add('active');
    index = count;
    let pos = 0;
    let width = 560;
    posInitial = sliderItems.offsetLeft

    if (count > paginationCounter) {
          let id = setInterval(frame, 5);
          function frame() {
          if (pos == (width * (count-paginationCounter))) {
                checkIndex();
                paginationCounter = count;
                clearInterval(id);
          } else {
                pos += 40;
                sliderItems.style.left = (posInitial - pos) + "px";
          }
          }

    } else if (count < paginationCounter) {

          let id = setInterval(frame, 5);
          function frame() {
          if (pos == (width * (paginationCounter - count))) {
                checkIndex();
                paginationCounter = count;
                clearInterval(id);
          } else {
                pos += 40;
                sliderItems.style.left = (posInitial + pos) + "px";
           }
          }
    }
    
  }
}


let posInitial,
slides = sliderItems.getElementsByClassName('slide'),
slidesLength = slides.length,
slideSize = sliderItems.getElementsByClassName('slide')[0].offsetWidth,
firstSlide = slides[0],
lastSlide = slides[slidesLength - 1],
cloneFirst = firstSlide.cloneNode(true),
cloneLast = lastSlide.cloneNode(true);


sliderItems.appendChild(cloneFirst);
sliderItems.insertBefore(cloneLast, firstSlide);

prev.addEventListener('click', function () { shiftSlide(-1) });
next.addEventListener('click', function () { shiftSlide(1) });



function shiftSlide(dir, action) {
if (allowShift) {
      for (const i of paginationContainer.querySelectorAll('.slider-dots_item')) {
      i.classList.remove('active')
      }
if (!action) { posInitial = sliderItems.offsetLeft; }
if (dir == 1) {
      paginationCounter++;
      paginationCounter > 9 ? paginationCounter = 0 : paginationCounter;
      paginationContainer.children[paginationCounter].classList.add('active')
      let pos = 0;
      let id = setInterval(frame, 5);
function frame() {
if (pos === slideSize) {
            index++;
            checkIndex();
            clearInterval(id);
} else {    
            pos += 10;
            sliderItems.style.left = (posInitial - pos) + "px";
            }
      }
} else if (dir == -1) {
      paginationCounter--;
      paginationCounter < 0 ? paginationCounter = 9 : paginationCounter;
      paginationContainer.children[paginationCounter].classList.add('active')
      let pos = 0;
      let id = setInterval(frame, 5);
function frame() {
if (pos === slideSize) {
      index--;
      checkIndex();
      clearInterval(id);
} else {    
      pos += 10;
      sliderItems.style.left = (posInitial + pos) + "px";
      }
      }     
      }
};

allowShift = false;
}

function checkIndex (){
      console.log(paginationCounter)
if (index == -1) {
      sliderItems.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
}

if (index == slidesLength) {  
      sliderItems.style.left = -(1 * slideSize) + "px";
      index = 0;
}
allowShift = true;
}

  
