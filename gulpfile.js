var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inline = require('gulp-inline');
var webserver = require('gulp-webserver');

gulp.task('uglify:js', function() {
    return gulp.src('./app/index.js')
        .pipe(rename('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/'))
});

// identifies a dependent task must be complete before 'uglify:js' begins
gulp.task('inline',['uglify:js'], function(){
	return gulp.src('./app/index.html')
	.pipe(inline({
		base:'./index.min.js'
	}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('webserver', function() {
  gulp.src('./app/')
    .pipe(webserver({
      port:8888,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default',['uglify:js', 'inline', 'webserver']);