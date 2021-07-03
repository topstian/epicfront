var currentHello = 0

function setHello() {
  const HELLO_SPAN = document.getElementById('hello-span');
  const HELLO_MESSAGES = ['Hello', 'Hola', 'Jallo']

  if (currentHello + 1 == HELLO_MESSAGES.length) {
    currentHello = 0
  } else {
    currentHello += 1
  }

  HELLO_SPAN.innerHTML = HELLO_MESSAGES[currentHello]
}

window.addEventListener('load', function () {
  setInterval(setHello, 1000)
})