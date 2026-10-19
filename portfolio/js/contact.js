/* CONTACT: copy-email button and the message form. */
(function () {
  var btn = document.getElementById('copy-email');
  var email = document.getElementById('email-text');

  if (btn && email) {
    btn.addEventListener('click', function () {
      function done() {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
      }
      // if the browser blocks clipboard access, select the address so it can be copied by hand
      function fallback() {
        try {
          var range = document.createRange();
          range.selectNodeContents(email);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          btn.textContent = 'Selected';
          setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
        } catch (e) {}
      }
      try { navigator.clipboard.writeText(email.textContent.trim()).then(done, fallback); }
      catch (e) { fallback(); }
    });
  }

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Template only: nothing is sent. Replace this handler once the form is connected to a service.
      status.textContent = 'Template form: nothing was sent. Connect it to a form service to receive messages.';
    });
  }
})();
