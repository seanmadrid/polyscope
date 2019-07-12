# Frontend Starter


## Dev Requirements

- Node and Ruby. (Use [homebrew](http://brew.sh/). install command is at the bottom of the page)
- After homebrew install, run `brew update` then `brew doctor`
- Verify node installation by entering `which node`. If no results, enter `brew install node`
- [Bower](http://bower.io/): `npm install -g bower`
- The [Grunt-cli](https://github.com/gruntjs/grunt-cli#grunt-cli-): `npm install -g grunt-cli`
- The [Sass-cli](http://sass-lang.com/tutorial.html): `gem install sass`
- *If you are going to be making sprites*: [GraphicsMagick](http://www.graphicsmagick.org/) (with homebrew, this should work: `brew install --use-gcc --with-perlmagick graphicsmagick`)


## Third-party Tools

-- besides those listed above as requirements --

### Automation
- [Grunt](http://gruntjs.com/) for automation

### Styling
- [Normalize](http://necolas.github.io/normalize.css/), Sassified as [`normalize-scss`](https://github.com/JohnAlbin/normalize-scss)
- [Sass](http://sass-lang.com/) along with [`grunt-contrib-sass`](https://github.com/gruntjs/grunt-contrib-sass)
- [Autoprefixer](https://github.com/ai/autoprefixer) in the form of [`grunt-autoprefixer`](https://github.com/nDmitry/grunt-autoprefixer)
- [Scut](http://davidtheclark.github.io/scut/) for mixins and placeholders
- [clean-css](https://github.com/GoalSmashers/clean-css) in the form of [`grunt-contrib-cssmin`](https://github.com/gruntjs/grunt-contrib-cssmin)

### JavaScript
- [Modernizr](http://modernizr.com/), custom built via [`grunt-modernizr`](https://github.com/Modernizr/grunt-modernizr)
- [LoDash](http://lodash.com/docs), custom built via [`grunt-lodash`](https://github.com/lodash/grunt-lodash)
- [Browserify](http://browserify.org/) in the form of [`grunt-browserify`](https://github.com/jmreidy/grunt-browserify) for CommonJS-style modular JS
- [UglifyJS](https://github.com/mishoo/UglifyJS) in the form of [`grunt-contrib-uglify`](https://github.com/gruntjs/grunt-contrib-uglify)
- [jQuery](http://jquery.com/)

### Image Things
- [`grunt-datauri-variables`](https://github.com/davemo/grunt-datauri-variables) to embed SVGs as datauri's saved as Sass variables
- [`grunt-spritesmith-hd`](https://github.com/davidtheclark/grunt-spritesmith-hd) to make retina-ready sprites
- [SVGO](https://github.com/svg/svgo) in the form of [`grunt-svgmin`](https://github.com/sindresorhus/grunt-svgmin)

### Other Grunt Plugins (for building)
- [`grunt-contrib-clean`](https://github.com/gruntjs/grunt-contrib-clean)
- [`grunt-contrib-concat`](https://github.com/gruntjs/grunt-contrib-concat)
- [`grunt-contrib-copy`](https://github.com/gruntjs/grunt-contrib-copy)
- [`load-grunt-tasks`](https://github.com/sindresorhus/load-grunt-tasks)


## How to Use
__Download the files__. (Don't bother cloning the repo unless you plan to make changes to the starter repo and commit them.)

Then __run `npm install` to install NPM and Bower dependencies.__

*If another dev has added a new component to your project via NPM or Bower, you'll need to run `npm install` again after pulling the latest repo.*


### Use Bower

Whenever possible use Bower to install frontend components ([documentation here](http://bower.io/)). Then keep them out of the repo.


### `src/` vs. `public_assets/`

**Most of the files that you'll modify are in `src/`.** Everything in there goes through some kind of compilation-build-or-copy step and gets output into `public_assets/` for consumption.

Here's the convention we're trying to uphold:

- You should never have to manually modify files within `public_assets/`.
- You should always be able to *completely erase* `public_assets/` and re-build by simply running `grunt build` (`grunt reBuild` does both parts).
- The site itself should *only* invoke files within `public_assets/` (never `src/`).
- We should be able, ultimately, to upload `public_assets/` to a CDN.


### `grunt watch`

This command will watch for changes to files, then run the relevant compilation and optimization tasks -- and reload your browser if you have installed the [Chrome LiveReload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en). When developing, you probably want to run this.


### Style

The starter uses SCSS stylesheets ([thorough documentation here](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html)); and [Autoprefixer](https://github.com/ai/autoprefixer) adds vendor prefixes.

As part of the build process, the CSS will be minified.


### JavaScript

#### Modernizr

Add Modernizr tests as-needed to the Gruntfile, then run `grunt modernizr`.

#### LoDash

Add LoDash functions as-needed to the Gruntfile, then run `grunt lodash`.

#### Browserify

Use Browserify to write modular JS that compiles into a single file.

*But third-party libraries will be left out of the Browserify modules*: instead, they'll all be concatenated into a single `libs.js` file that the HTML invokes *first*. This way you can just depend on library globals, as usual, and they can depend on each other for globals (e.g. jQuery plugins).


### Images

Because our designers have some GUI optimization apps that are very powerful, we are expecting them to give us PNGs and JPGs already optimized.

However, SVGs will be optimized via Grunt; so svg `src` directories there should be `raw` and `opt` versions; and you should only have to modify the `raw` folder. The `opt` versions will be used by further processes.

#### SVGs as datauris
This process uses [grunt-datauri-variables](https://github.com/davemo/grunt-datauri-variables) to transform SVG files into embedded data-URIs stored as SCSS variables.

To do it, add SVG files to `src/images/svg-datauri-assets/raw`. As usual, if you're running `grunt watch` everything gets taken care of; otherwise, run `grunt svg`.

The SVG files are optimized into `src/images/svg-datauri-assets/opt`, then the variables are output into `src/scss/svg-datauris`. **Import them into `main.scss` and plug them in as background-images**.

#### Sprites

This process uses [`grunt-spritesmith-hd`](https://github.com/davidtheclark/grunt-spritesmith-hd).

To create a sprite, add files to a folder in `src/images/sprite-assets/` (the folder `all` is there by default, if you only need one spritesheet on the site). Multiple folders can be used to produce multiple spritesheets. If you are running `grunt watch`, relevant tasks will run automatically; otherwise, run `grunt sprite`.

A spritesheet (or a couple, if using retina-ready functionality) is output to `public_assets/images/sprites/`. An accompnaying SCSS stylesheet is output to `src/scss/sprites/`. Import this into `main.scss` to use the sprites.

__In your SCSS, use sprites like this: `@include sprite($[asset's filename]);`.__


## Customize

When installing new components with NPM and Bower add `--save-dev` to your install command (e.g. `bower install [package] --save-dev`). This will ensure that other devs will automatically get the same components when they run `npm install`.

**Try to maintain the convention of `src/` and `public_assets/` when adding new compilation and build processes**.