## aframe-line-component

[![Version](http://img.shields.io/npm/v/aframe-line-component.svg?style=flat-square)](https://npmjs.org/package/aframe-line-component)
[![License](http://img.shields.io/npm/l/aframe-line-component.svg?style=flat-square)](https://npmjs.org/package/aframe-line-component)

A Line component for A-Frame.

For [A-Frame](https://aframe.io).

![line example](https://raw.githubusercontent.com/fernandojsg/aframe-line-component/master/screenshot.png)

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| start         | Start line position            | 0 0 0               |
| end         | End line position            | 0 0 0               |
| color         | Line color            | #fff               |
| opacity         | Line opacity            | 1               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-line-component/dist/aframe-line-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity line="start: 1 2 3; end: 4 5 6; color: #ff0"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-line-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-line-component
```

Then require and use.

```js
require('aframe');
require('aframe-line-component');
```
