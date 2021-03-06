var gulp = require('gulp');
var br = require('browser-sync');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var docx2html=require('docx2html');

var option='';

gulp.task('build:docx',function(cb){
  docx2html("src/**/test.docx").then(function(html){
    html.toString()
  })
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
    port: 4455
  });
});


gulp.watch('src/**/**',gulp.series('build:html','build:style','build:res'));
gulp.task('default',gulp.series('build:html','build:style','build:docx','build:res','build'));

