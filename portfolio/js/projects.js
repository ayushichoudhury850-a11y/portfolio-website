/* PROJECTS: filters the cards by role and updates the "Showing n projects" line. */
(function () {
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.card[data-type]');
  var count = document.getElementById('count');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var type = chip.dataset.filter;
      var shown = 0;

      chips.forEach(function (c) {
        c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
      });
      cards.forEach(function (card) {
        var on = (type === 'all' || card.dataset.type === type);
        card.hidden = !on;
        if (on) shown++;
      });
      if (count) count.textContent = 'Showing ' + shown + (shown === 1 ? ' project' : ' projects');
    });
  });
})();
