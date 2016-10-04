var gulp = require('gulp');
// var sass = require('gulp-sass');
var watch = require('gulp-watch');

// gulp.task('sass', function() {
//   // place code for your default task here
//   gulp.src('sass/style.scss')
//   	.pipe(sass())
//   	.pipe(gulp.dest('css'))
// });
const babel = require('gulp-babel');
 
gulp.task('babel', () => {
    return gulp.src('js/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('watch',function() {
    gulp.watch('js/*.js', ['babel']);
    // gulp.watch('css/*.css');
});
