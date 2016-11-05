var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'run-sequence', 'systemjs-route-bundler', 'merge-stream']
});

var paths = require('../paths');

gulp.task('minify-css', function () {
  return gulp.src(paths.outputCss)
    .pipe($.cleanCss({
      keepSpecialComments: 0
    }))
    .pipe($.concat('main.min.css'))
    .pipe(gulp.dest(paths.output));
});

gulp.task('inline-systemjs', function () {
  var app = gulp.src([
      './jspm_packages/es6-module-loader.js',
      './jspm_packages/system.js',
      './jspm.config.js',
      'dist/main.js'
    ])
    //.pipe($.uglify())
    .pipe($.concat('main.js'));

  var bundles = gulp.src([
      './jspm_packages/es6-module-loader.js',
      './jspm_packages/system.js',
      './jspm.config.js',
      'dist/common.js'
    ])
    //.pipe($.uglify())
    .pipe($.concat('common.js'));

  return $.mergeStream(app, bundles)
    .pipe(gulp.dest(paths.output));
});

gulp.task('release', function (callback) {
  return $.runSequence(
    'clean',
    'build',
    ['bundle', 'minify-css', 'replace', 'move'],
    'inline-systemjs',
    callback
  );
});

gulp.task('bundle', function () {
  return $.jspmBuild({
      bundles: [
        { src: 'src/app/main/main.component.js',
          dst: 'main.js'
        }
      ]
    })
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest(paths.output));
});
