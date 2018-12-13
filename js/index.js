

// Click Listener
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked');
});


// Key Down Listener
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.which);
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('not a G');
  }
});


// Bubbling
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}


// Capturing
const divs2 = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs2.length; i++) {
  // set the third argument to `true`!
  divs2[i].addEventListener('click', capture, true);
}
