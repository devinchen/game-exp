var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var sourceFiles = [
  'src/timer.js',
  'src/farm.js',
  'src/animal.js',
  'src/textures.js',
  'src/touch-events.js',
  'src/device-events.js',
  'src/helpers.js',
  'src/index.js'
];

gulp.task('compress', function() {
  return gulp.src(sourceFiles)
    .pipe(concat('index.js'))
    .pipe(uglify('index.min.js'))
    .pipe(gulp.dest('dist'));
});