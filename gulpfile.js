var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
  HTML: 'src/index.html',
  ALL: [],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  MINIFIED_OUT: '',
  DEST_SRC: 'dist/src',
  DEST_BUILD: '',
  DEST: ''
};

// change JSX to JS
gulp.task('transform', function () {
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});
