var gulp = require('gulp');
var br = require('browser-sync');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var option='';

gulp.task('build:html',function(cb){
  gulp.src('src/**/*.html',option)
  .pipe(gulp.dest('dist'))
  cb();
});

gulp.task('build:style',function(cb){
  gulp.src('src/**/*.less',option)
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist'))
  cb();
});

gulp.task('build',function(){
  br.create().init({
    server: {
      baseDir: './dist'
    },
    files: '**',
    open: false,
    https: true,
    port: 8089
  });
});


gulp.watch('src/**/*.less',gulp.series('build:style'));
gulp.task('default',gulp.series('build:html','build:style','build'));

