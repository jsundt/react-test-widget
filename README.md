# React widget

Embedable react app.


## How to run locally

1. Clone, then run `yarn install` in the project folder.

2. Run `yarn start`


## Building for production

1. Run `yarn build`

2. The final assets will be available in the `/build` folder

3. Test the `widget.js` file by opening `test.html`


## Test on remote websites
You'll need to build the production assets, and replace the versions on aws. If you move the script to another location you'll have to update the URL in widget.js as well as the one bellow.

Paste into the javascript console on any website:
```javascript
(function() {
  var s = document.createElement('script');
  var url = 'https://s3-eu-west-1.amazonaws.com/charlie-production/downloads/widget.js';
  s.type = 'text/javascript';
  s.async = true;
  s.src = url + ( url.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
  var e = document.body;
  e.id = '1fc508e6-afa6-4de3-bccd-8def2929d438';
  // e.innerHTML = s + e.innerHTML;
  e.appendChild(s);

  var timeOut = setTimeout(function() {
    CharlieHR.widgets.setup('1fc508e6-afa6-4de3-bccd-8def2929d438')
  }, 500);
})();
```


## Test JS components

1. You can run/watch tests with `yarn test`
