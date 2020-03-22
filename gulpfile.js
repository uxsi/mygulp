var gulp = require('gulp');
var br = require('browser-sync');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:html',function(cb){
  gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(br.reload({stream: true}));
  cb();
});

gulp.task('build:style',function(cb){
  gulp.src('src/**/*.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist'))
  .pipe(br.reload({stream: true}));
  cb();
});

gulp.task('build',function(cb){
  br.create().init({
    server: {baseDir: './dist'},
    https: true,
    port: 8089
  });
  cb();
});

gulp.task('default',gulp.series('build:html','build:style','build'));
