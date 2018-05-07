var gulp = require('gulp');
var inline = require('gulp-inline');
var webserver = require('gulp-webserver');

gulp.task('inline',function(){
	return gulp.src('./app/index.html')
	.pipe(inline({
		base:'./'
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

gulp.task('default',['inline', 'webserver']);