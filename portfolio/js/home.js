/* HOME: swaps the role word beside your name every 2.2 seconds and changes the pill colour to match. */
(function () {
  var roles = document.getElementById('roles');
  if (!roles) return;
  var words = [].slice.call(roles.querySelectorAll('span[data-tone]'));
  if (words.length < 2) return;
  var i = 0;

  setInterval(function () {
    var prev = words[i];
    i = (i + 1) % words.length;
    var next = words[i];

    prev.classList.remove('on');
    prev.classList.add('off');
    next.classList.add('on');
    roles.dataset.tone = next.dataset.tone;

    // once the old word has slid out, park it below again without animating
    setTimeout(function () {
      prev.classList.add('reset');
      prev.classList.remove('off');
      void prev.offsetWidth;
      prev.classList.remove('reset');
    }, 700);
  }, 2200);
})();
