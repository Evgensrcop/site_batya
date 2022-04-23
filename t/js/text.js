/*
function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
*/
/*
function animateText(textArea) {
  let text = textArea.value;
  let to = text.length,
    from = 0;

  animate({
    duration: 5000, // 2 секунды
    timing: bounce,
    draw: function(progress) {
      let result = (to - from) * progress + from;
      textArea.value = text.substr(0, Math.ceil(result))
    }
  });
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

 */
