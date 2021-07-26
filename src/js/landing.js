function gradientAnimation() {
    let gradient = document.getElementById('gradientAnimation');
    let phone = document.getElementById('animationPhone');
    let val = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (val >= 0.4) {
            clearInterval(id);
        } else if (phone.style.left == '540px') {
            val += 0.005;
            gradient.style.opacity = val;
            
        }
    }
}


function myMove() {
    let phone = document.getElementById('animationPhone')
    
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos > 534) {
            clearInterval(id);
        } else {    
            pos += 6;
            phone.style.left = pos + 'px';
            
        }
    }
    
}
function myMoveSubtitle() {
    let subtitle = document.getElementById('vanishingText')
    let styles1 = getComputedStyle(subtitle);
    let pos = parseInt(styles1.left);
    let val = 1
    
    let id = setInterval(frame, 10);
    function frame() {
        if (pos > 1300) {
            clearInterval(id);
        } else {
            pos += 1;
            val -= 0.008;
            subtitle.style.left = pos + 'px';
            subtitle.style.opacity = val;
            
        }
    }
    
}

function myRotate() {
    let elem = document.getElementById('animationPhone')
    let img = document.getElementById('phoneImg')
    let val = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (val >= 90) {
            clearInterval(id);
        } else if (elem.style.left == '540px') {
            val += 1;
            elem.style.transform = `rotate(${(90-val)}deg)`;
            elem.style.width
        }
    }
}

function myWidth() {
    let phone = document.getElementById('animationPhone')
    
    let val = 512;
    let id = setInterval(frame, 10);
    function frame() {
        if (val < 371) {
            clearInterval(id);
        } else if (phone.style.left == '540px') {    
            val -= 2;
            phone.style.width = val + 'px';
            
        }
    }
}




function ourMissionAndVision() {
        if (animationSpace.getBoundingClientRect().top < -390) {
            if (document.documentElement.clientWidth > 1024 ) {
        myMove()
        myMoveSubtitle();
        myRotate();
        gradientAnimation();
        myWidth();
        window.removeEventListener('scroll', ourMissionAndVision);
}}};

window.addEventListener('scroll', ourMissionAndVision)




// Form Input Required
let inputs = document.forms[1].elements;
for (let i = 0; i < (inputs.length - 1); i++) {
    inputs[i].oninput = function() {
        inputs[i].classList.remove('required')
    }
    
}


function requiredCheck() {
    let inputs = document.forms[1].elements;
    let requiredStack = [];
    for (let i = 0; i < (inputs.length - 1); i++) {
        if (requiredStack.length === 0) {
            form.removeAttribute('onsubmit');
        }
        if (inputs[i].value === '') {
            requiredStack.push(i);
            form.setAttribute('onsubmit', 'return false');
            inputs[i].classList.add('required')
        } else if (inputs[i].value) {
            requiredStack.pop()
            inputs[i].classList.remove('required')
        }
    }
}






// Cookie
cookieBtn.onclick = function() {
    pjAcceptCookieBar.classList.add('hide-cookie')
}