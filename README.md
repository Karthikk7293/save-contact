# save contact

Vanilla JavaScript contact-form demo with submission feedback, a simulated asynchronous save, and a contact-list redirect.

## Project scope

Saving is simulated with a Promise and timer in `script.js`. The example passes the submitted contact to `contact-list.html`; it does not persist contacts to a backend.

## View locally

Serve the repository as a static site:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080 in a browser.

## Source guide

- [index.html](index.html)
- [script.js](script.js)
