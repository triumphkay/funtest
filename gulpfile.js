var gulp = require('gulp'),
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	cleanCss = require('gulp-clean-css'),
	rename = require('gulp-rename');

var src = 'src';
var dist = 'dist';

gulp.task('less', function(){
	return gulp.src(src + '/less/*.less')
	.pipe(less())
	.pipe(cleanCss())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(dist + '/css'));
});

gulp.task('script', function(){
	return gulp.src(src + '/script/*.js')
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(dist + '/js'));
});

gulp.task('watch', function(){
	gulp.watch(src + '/**/*.less', ['less']);
	gulp.watch(src + '/**/*.js', ['script']);
});

gulp.task('default', ['watch']);