var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/assets/scss/app.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/assets/css'))
});

gulp.task('watch', () => {
    gulp.watch('app/assets/scss/app.scss', (done) => {
        gulp.series(['sass'])(done);
    });
});

