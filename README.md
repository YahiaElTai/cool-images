# cool-images

Simple tool to generate one or as many as you want cool good looking images with your desired dimensions.



```js
var coolImages = require('cool-images')

coolImages.one()           		 	           // 'https://unsplash.it/300/500?image=125'

coolImages.one(600, 800)     		           // 'https://unsplash.it/600/800?image=425'

// generate a random black & white image
coolImages.one(600, 800, true)                 // 'https://unsplash.it/g/600/800?image=300'

// generate a random blured image
coolImages.one(600, 800, false, true)          // 'https://unsplash.it/600/800?image=300&blur'

coolImages.many()           		 	       // array of 6 cool random images with 300x500!

coolImages.many(600,800,25)                    // array of 25 image random images with 600x800!

coolImages.many(600, 800, 10, true, false)     // array of 10 black and white images!

coolImages.many(600, 800, 10, false, true)     // array of 10 blured images!

coolImages.many(600, 800, 10, true, true)      // array of 10 black and white blured images! go crazy.


```

## Usage

### `one(height, width, bool, bool)`

get an image url with specified dimensions and style.

#### Parameters
- `height`  _(optional)_ dimension number. If not specified, `300` is implied.
- `width`  _(optional)_ dimension number. If not specified, `500` is implied.

- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be black
  and white
- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be
  blured.

### `many(height, width, length , bool, bool)`

get an array of unique image urls with specified dimensions and style.

#### Parameters
- `height`  _(optional)_ dimension number. If not specified, `300` is implied.
- `width`  _(optional)_ dimension number. If not specified, `500` is implied.
- `length`  _(optional)_ array length. If not specified, `6` is implied.
- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be black
  and white
- `bool` _(optional)_ If not specified, `false` is implied. if value `true` is specified the image will be
  blured.

## Install

`npm install cool-images --save`

## License

MIT