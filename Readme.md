
# reactive-each

  Basic iteration for reactive. It takes an array from your model,
  a template and renders out a list of reactive views.

## Installation

  Install with [component(1)](http://component.io):

    $ component install segmentio/reactive-each

## API

`reactive-each` is a plugin that takes some paramters:

```js
var each = require('reactive-each');

var items = each('data-items', itemTemplate, function(model, el){
  return new ItemView(model, el);
});

reactive.use(items);
```

### each(attr, template, [fn])

The plugin takes three paramters. The first is the attribute to use
to bind the loop to. For example:

```html
<nav data-items="items"></nav>
```

This would use `data-items` as the attribute. It will then pick the
`items` attribute from the model which should be an array.

The second parameter is a template for each item.

The third parameter is optional. This will create a view for each item.
You'll want to do this if your child view needs to do any reactive work
of it's own.

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.