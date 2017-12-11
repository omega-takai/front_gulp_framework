var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "dist"
  });

  gulp.watch("app/asset/script/*.js");
  gulp.watch("app/asset/style/**/*.scss", ['sass']);
  gulp.watch("dist/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/asset/style/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);