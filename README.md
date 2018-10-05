# client-route
---
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)
Client-route is a simple webcomponent for client side routing. 
The component supports lazyloading by using the javascript eval function. 
My custom import function will be replaced by the offical import as soon as the import propsal is supported in all browsers.

## Installation
---

`npm install client-route` or `yarn add client-route`

## Usage
---

**Note**: the recommended way of using client-route is together with [client-link]().

```html
<script src="node_modules/client-router/index.js"></script>
<client-route path="/"> Home </client-route>
<client-route path="/about"> About </client-route>
```

## Props
---

##### path
The children get rendered when the path matches the window location.
```html
<client-route path="/"></client-route>
```

##### from
The location of the custom element.
Activates lazy loading.
If from is specified then the tag attribute has to be set too.
**Warning**: the custom element can't be specified in a module file due to the limitations of eval.
```html
<client-route path="/" from="/home.js" tag="home-page"></client-route>
```
##### tag
The element that gets rendered after the element has been fetched.
Activates lazy loading.
If tag is specified then the from attribute has to be set too.
```html
<client-route path="/" from="/home.js" tag="home-page"></client-route>
```
## Contributing
---

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
6. 

## License
---

[LICENSE](LICENSE)
