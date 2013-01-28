LetMeIn.js
======

LetMeIn is a simple jQuery plugin for including HTML files. I was coding a mockup and wanted to include an article in the blog design, but it was ~3000+ words and it would have just clogged up my markup with code I wouldn't be editing.

Quick Start
------------

The simplest way of using LetMeIn.js is by specify a container with a `data-include` attribute. For example:

`<div data-include="article.html"></div>`

Voila!

Notes
------------

There is an option called `include_attribute` to solve conflicts. To use this, you'll need to call the plugin directly like so:

    <article data-custom-include="article.html"></article>

    <script>
        $('article').LetMeIn({include_attribute: 'data-custom-include'});
    </script>