// using this file is optional
// you can also load the code snippets in using your browser's console
// const main = document.getElementById('main');

// main.addEventListener('click', event => alert('I was clicked!'));

// const input = document.querySelector('input');

// input.addEventListener('keydown', event => console.log(event.which));

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});

let divs = document.querySelectorAll('div');

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

divs.forEach( div => div.addEventListener('click', bubble));

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

divs.forEach (div => div.addEventListener('click', capture, true));