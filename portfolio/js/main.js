/* MAIN: loaded by every page.
   1. Adds a label to every dashed image slot and lets you click one to preview a picture.
      The preview is not saved. To keep a picture, put an <img> inside the slot in the HTML.
   2. Lets you dismiss the template tip at the top (remembered while the tab stays open).
   3. Stops placeholder links (href="#") from jumping to the top of the page. */
(function () {
  var icon = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>';

  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.id = 'slot-file';
  input.hidden = true;
  document.body.appendChild(input);
  var target = null;

  document.querySelectorAll('.slot').forEach(function (s) {
    var label = document.createElement('span');
    label.className = 'slot-label';
    label.innerHTML = icon;
    var txt = document.createElement('span');
    txt.textContent = s.getAttribute('data-label') || 'Add an image';
    label.appendChild(txt);
    s.insertBefore(label, s.firstChild);
    s.setAttribute('role', 'button');
    s.setAttribute('tabindex', '0');
    s.setAttribute('aria-label', 'Preview an image in this box');

    function pick() { target = s; input.click(); }
    s.addEventListener('click', pick);
    s.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
    });
  });

  input.addEventListener('change', function () {
    var f = input.files && input.files[0];
    if (!f || !target) return;
    var t = target;
    var r = new FileReader();
    r.onload = function () {
      var img = t.querySelector('img');
      if (!img) { img = document.createElement('img'); img.alt = 'Preview'; t.appendChild(img); }
      img.src = r.result;
    };
    r.readAsDataURL(f);
    input.value = '';
  });

  var note = document.getElementById('note');
  var noteX = document.getElementById('note-x');
  if (note) {
    try { if (sessionStorage.getItem('note-dismissed') === '1') note.hidden = true; } catch (e) {}
    if (noteX) {
      noteX.addEventListener('click', function () {
        note.hidden = true;
        try { sessionStorage.setItem('note-dismissed', '1'); } catch (e) {}
      });
    }
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (a && a.getAttribute('href') === '#') e.preventDefault();
  });
})();
