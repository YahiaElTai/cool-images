# cool-images

[![Build Status](https://travis-ci.org/YahiaElTai/cool-images.svg?branch=master)](https://travis-ci.org/YahiaElTai/cool-images) [![dependencies Status](https://david-dm.org/YahiaElTai/cool-images/status.svg)](https://david-dm.org/YahiaElTai/cool-images) [![devDependencies Status](https://david-dm.org/YahiaElTai/cool-images/dev-status.svg)](https://david-dm.org/YahiaElTai/cool-images?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple tool to generate one or as many as you want cool good looking images with your desired dimensions.

```js
const coolImages = require("cool-images");

coolImages.one(); // 'https://unsplash.it/300/500?image=125'

coolImages.one(600, 800); // 'https://unsplash.it/600/800?image=425'

// generate a random black & white image
coolImages.one(600, 800, true); // 'https://unsplash.it/g/600/800?image=300'

// generate a random blured image
coolImages.one(600, 800, false, true); // 'https://unsplash.it/600/800?image=300&blur'

coolImages.many(); // array of 6 cool random images with 300x500!

coolImages.many(600, 800, 25); // array of 25 image random images with 600x800!

coolImages.many(600, 800, 10, true, false); // array of 10 black and white images!

coolImages.many(600, 800, 10, false, true); // array of 10 blured images!

coolImages.many(600, 800, 10, true, true); // array of 10 black and white blured images! go crazy.
```

## Usage

### `one(height, width, bool, bool)`

get an image url with specified dimensions and style.

#### Parameters

- `height` _(optional)_ dimension number. If not specified, `300` is implied.
- `width` _(optional)_ dimension number. If not specified, `500` is implied.

- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be black
  and white
- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be
  blured.

### `many(height, width, number , bool, bool)`

get an array of unique image urls with specified dimensions and style.

#### Parameters

- `height` _(optional)_ dimension number. If not specified, `300` is implied.
- `width` _(optional)_ dimension number. If not specified, `500` is implied.
- `number` _(optional)_ number of images. If not specified, `6` is implied.
- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be black
  and white
- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be
  blured.

## Install

`npm install cool-images --save`

## License

MIT
