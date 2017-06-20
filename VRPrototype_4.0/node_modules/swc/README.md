# SWC

A Simple Web Component library, inspired by the [reusable charts pattern](https://bost.ocks.org/mike/chart/) commonly found in [D3](https://d3js.org/) components.

[![NPM](https://nodei.co/npm/swc.png?compact=true)](https://nodei.co/npm/swc/)

## Quick start

```
import { * as SWC } from 'swc';
```
or
```
var SWC = require('swc');
```
or even
```
<script src="/path/to/dist/swc.js"></script>
```

## Usage example

### Define the component
```
const ColoredText = SWC.createComponent({
    
    props: [
        new SWC.Prop('color', 'red'),
        new SWC.Prop('text', '')
    ],
    
    init: (domElement, state) => {
        state.elem = document.createElement('span');
        domElement.appendChild(state.elem);
    },
    
    update: state => {
        state.elem.style.color = state.color;
        state.elem.textContent = state.text;
    }

});
```

### Instantiate the component

```
let myText = ColoredText();
```

### Render

```
myText(<myDOMElement>)
    .color('blue')
    .text('foo');
```

## How to build

```
npm install
npm run build
```
