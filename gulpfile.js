var gulp = require('gulp');
var br = require('browser-sync');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var option='';

gulp.task('build:js',function(cb){
  gulp.src('src/**/*.js',option)
  .pipe(gulp.dest('dist'))
  cb();
});

gulp.task('build:res',function(cb){
  gulp.src('src/**/**',option)
  .pipe(gulp.dest('dist'))
  cb();
});

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
    //https: true,
    port: 8088
  });
});


gulp.watch('src/**/**',gulp.series('build:html','build:js','build:style','build:res'));
gulp.task('default',gulp.series('build:html','build:js','build:style','build:res','build'));

