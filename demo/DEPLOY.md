The demo site will be hosted using GitHub Pages.

We'll deploy just the /demo/dist directory, using git subtree. Sadly this means
that the demo dist will need to be committed to the master branch :(

Also, we'll need to add React and ReactDOM via a CDN, since they're just peer/dev
dependencies. And a custom font, since NWB's react-component mode doesn't allow for editing the demo HTML file


$ nwb build

<!-- Copy this into the <head> of demo/dist/index.html -->
<script src="https://fb.me/react-0.14.7.min.js"></script>
<script src="https://fb.me/react-dom-0.14.7.min.js"></script>


$ git subtree push --prefix demo/dist origin gh-pages
