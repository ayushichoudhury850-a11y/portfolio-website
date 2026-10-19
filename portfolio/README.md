# Portfolio template

Plain HTML, CSS and JavaScript. No frameworks, no build step. Double-click `index.html` to open it.

## Files

| Page | HTML | CSS | JavaScript |
|---|---|---|---|
| Home | `index.html` | `css/home.css` | `js/home.js` (rotating roles) |
| Know me | `know-me.html` | `css/know-me.css` | none |
| Projects | `projects.html` | `css/projects.css` | `js/projects.js` (role filter) |
| Contact me | `contact.html` | `css/contact.css` | `js/contact.js` (copy email, form) |

Every page also loads `css/base.css` (colours, top bar, buttons, image boxes, footer) and `js/main.js` (image preview).
Put your pictures in the `images/` folder.

## Make it yours

1. **Name:** search every file for `Your Name` and `YN`.
2. **Roles beside your name:** edit the four words inside `<div class="roles">` in `index.html`.
3. **Pictures:** replace a dashed box such as
   `<div class="slot r-43" data-label="..."></div>` with
   `<div class="slot r-43"><img src="images/your-picture.jpg" alt="Describe the picture"></div>`.
4. **Text:** every grey sentence is a placeholder.
5. **Projects:** copy a whole `<article class="card">` in `projects.html`. Set `data-type` to creator, artist, designer or developer, and replace `href="#"` with your link.
6. **Colours:** change the values at the top of `css/base.css`.
7. **Contact form:** it does not send anything yet. Connect it to a form service such as Formspree or Netlify Forms.
