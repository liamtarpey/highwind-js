var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var JS_SRC = [
    'src/index-wrap-start.js',
    'src/modules/*.js',
    'src/index-wrap-end.js'
];

gulp.task('js', function() {
    return gulp.src(JS_SRC)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js']);
