'use strict';

var gulp = require('gulp')
var jshint = require('gulp-jshint')
var stylish = require('jshint-stylish')

function makeTask(files) {
  return function() {
    gulp.src(files)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
  }
}

module.exports = makeTask
