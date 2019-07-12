 # If you are unfamiliar with Grunt, go to http://gruntjs.com/
# Especially http://gruntjs.com/getting-started, to get a sense
# of how it all works.

module.exports = (grunt) ->

  # Load grunt tasks without verbosity
  require("load-grunt-tasks")(grunt)

  # Configuration object
  grunt.initConfig

    pkg: grunt.file.readJSON "package.json"

    # VARIABLES
    vars:
      srcDir: "src"
      distDir: "public_assets"
      publicDir: "public"
      scssDir: "<%= vars.srcDir %>/scss"
      cssDir: "<%= vars.distDir %>/css"
      jsSrcDir: "<%= vars.srcDir %>/js"
      jsDistDir: "<%= vars.distDir %>/js"
      imageSrcDir: "<%= vars.srcDir %>/images"
      imageDistDir: "<%= vars.distDir %>/images"
      fontSrcDir: "<%= vars.srcDir %>/fonts"
      fontDistDir: "<%= vars.distDir %>/fonts"
      svgAssetDir: "<%= vars.imageSrcDir %>/svg-datauri-assets"
      svgStyleDir: "<%= vars.scssDir %>/svg-datauris"
      spriteAssetDir: "<%= vars.imageSrcDir %>/sprite-assets"
      spriteStyleDir: "<%= vars.scssDir %>/sprites"
      spriteDir: "<%= vars.imageDistDir %>/sprites"


    # ================================
    # STYLE
    # ================================

    # Compile SCSS to CSS.
    sass:
      options:
        sourcemap: true
        lineNumbers: true
      style:
        dest: "<%= vars.cssDir %>/main.css"
        src: "<%= vars.scssDir %>/main.scss"

    # Add vendor prefixes to CSS.
    autoprefixer:
      options:
        browsers: ["> 1%", "last 3 versions", "ie 9"]
      style:
        files:
          "<%= sass.style.dest %>": "<%= sass.style.dest %>"

    # Compress CSS.
    cssmin:
      dist:
        files: "<%= autoprefixer.style.files %>"


    # ================================
    # IMAGE THINGS
    # ================================

    # Minify data URI assets.
    svgmin:
      options:
        plugins: [removeViewBox: false]
      datauriAssets:
        files: [
          expand: true
          cwd: "<%= vars.svgAssetDir %>/raw/"
          src: ["*.svg"]
          dest: "<%= vars.svgAssetDir %>/opt/"
        ]

    # Turn SVGs into data URIs stored in SCSS variables.
    datauri:
      options:
        varPrefix: 'svg-'
      all:
        src: "<%= vars.svgAssetDir %>/opt/*.svg"
        dest: "<%= vars.svgStyleDir %>/_svg-datauris.scss"

    # Create a spritesheet.
    spriteHD:
      options:
        imgUrl: "../images/sprites"
        destImg: "<%= vars.spriteDir %>"
        destCSS: "<%= vars.spriteStyleDir %>"
      all:
        src: ["<%= vars.spriteAssetDir %>/all/*"]
        spriteName: "all"


    # ================================
    # JAVASCRIPT
    # ================================

    # Compile JS modules into a single file.
    browserify:
      options:
        bundleOptions:
          debug: true
      main:
        src: "<%= vars.jsSrcDir %>/main.js"
        dest: "<%= vars.jsDistDir %>/app.js"
    # Create a custom LoDash build.
    lodash:
      build:
        dest: "<%= vars.jsSrcDir %>/lib/lodash.build.js"
        options:
          include: [
            "debounce"
          ]
          flags: ["debug"]

    # Concatenate third-party JS.
    concat:
      lib:
        src: [
          # Insert third-party JS here, in the right order
          "<%= lodash.build.dest %>"
          "bower_components/jquery/dist/jquery.js"
        ]
        dest: "<%= vars.jsDistDir %>/libs.js"

    # Create a custom Modernizr build.
    modernizr:
      build:
        parseFiles: false
        devFile: "<%= vars.jsSrcDir %>/lib/modernizr-dev.js"
        outputFile: "<%= vars.jsDistDir %>/modernizr-custom.js"
        tests: [
          "inlinesvg"
          # add modernizr tests here
        ]

    # Uglify JS.
    uglify:
      dist:
        files: [
          # libs
          "<%= concat.lib.dest %>": "<%= concat.lib.dest %>"
          # app
          "<%= browserify.main.dest %>": "<%= browserify.main.dest %>"
          # both (for dist)
          "<%= vars.jsDistDir %>/all-scripts.js": [
            "<%= concat.lib.dest %>"
            "<%= browserify.main.dest %>"
          ]
        ]


    # ================================
    # MISC THINGS
    # ================================

    # Copy certain assets from src to dist, just as they are
    copy:
      dist:
        files: [{
          expand: true
          cwd: "<%= vars.srcDir %>/copy-to-assets/"
          src: ["**", ".*"]
          dest: "<%= vars.distDir %>"
        }, {
          expand: true
          cwd: "<%= vars.srcDir %>/copy-to-public/"
          src: ["**", ".*"]
          dest: "<%= vars.publicDir %>"
        }]

    # Clean up folders.
    clean:
      css: [
        "<%= vars.cssDir %>/*"
      ]
      svg: [
        "<%= vars.svgAssetDir %>/opt/*"
        "<%= vars.svgStyleDir %>/*"
      ]
      js: [
        "<%= vars.jsDistDir %>"
      ]
      sprite: [
        "<%= vars.spriteDir %>/*"
        "<%= vars.spriteStyleDir %>/*"
      ]
      dist: [
        "<%= vars.distDir %>"
        "<%= vars.publicDir %>"
      ]

    # Watch for changes and run tasks.
    watch:
      # Post-processing livereload.
      livereload:
        options:
          livereload: true
          debounceDelay: 2000
        files: [
          "<%= vars.cssDir %>/*.css"
          "<%= vars.jsDistDir %>/*.js"
          "<%= vars.imageDistDir %>/*"
          "<%= vars.imageDistDir %>/**/*"
          "<%= vars.distDir %>/fonts/*"
          "<%= vars.distDir %>/fonts/**/*"
        ]
      # General watching.
      style:
        files: ["<%= vars.scssDir %>/*.scss"]
        tasks: ["style"]
      sprite:
        files: ["<%= vars.spriteAssetDir %>/**/*"]
        tasks: ["sprite"]
      svg:
        files: ["<%= vars.svgAssetDir %>/raw/*.svg"]
        tasks: ["svg"]
      js:
        files: ["<%= vars.jsSrcDir %>/*.js"]
        tasks: ["browserify:main"]
      copy:
        files: [
          "<%= vars.srcDir %>/copy-*/*"
          "<%= vars.srcDir %>/copy-*/**/*"
        ]
        tasks: ["copy:dist"]


  # Load the plugins.
  # "grunt"-prefixed are loaded via `load-grunt-tasks`, at the top.

  # Register the tasks.

  # Style tasks.
  grunt.registerTask "style", [
    "sass:style"
    "autoprefixer:style"
  ]

  # Image thing tasks
  grunt.registerTask "sprite", [
    "spriteHD"
    "style"
  ]
  grunt.registerTask "reSprite", [
    "clean:sprite"
    "sprite"
  ]
  grunt.registerTask "svg", [
    "svgmin"
    "datauri"
    "style"
  ]
  grunt.registerTask "reSvg", [
    "clean:svg"
    "svg"
  ]

  # JS things
  grunt.registerTask "jsLibs", [
    "modernizr:build"
    "lodash:build"
    "concat:lib"
  ]

  # Build
  grunt.registerTask "build", [
    # add other build steps here
    "style"
    "cssmin:dist"
    "jsLibs"
    "browserify:main"
    "uglify:dist"
    "copy:dist"
  ]

  grunt.registerTask "reBuild", [
    # remove the dist directory and rebuild it
    # ... only do if everything can be removed and rebuilt
    "clean:dist"
    "build"
  ]