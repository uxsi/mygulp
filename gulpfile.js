var gulp = require('gulp');
var br = require('browser-sync');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var docx2html=require('docx2html');

var option='';

<<<<<<< HEAD
gulp.task('build:js',function(cb){
  gulp.src('src/**/*.js',option)
=======
gulp.task('build:docx',function(cb){
  docx2html("src/**/test.docx").then(function(html){
    html.toString()
  })
  cb();
});

gulp.task('build:res',function(cb){
  gulp.src('src/**/**',option)
>>>>>>> 66b726d15c17e15d6eadcb32972eaaf8b5540c22
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
gulp.task('default',gulp.series('build:html','build:js','build:style','build:docx','build:res','build'));

