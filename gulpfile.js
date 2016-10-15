var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefix = require('gulp-autoprefixer')
var notify = require('gulp-notify')



gulp.task('test', function() {
    return gulp.src('./app/scss/app.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: []
        })
        .on('error', notify.onError(function (error) {
            return 'Error: ' + error.message;
        })))
        .pipe(autoprefix('last 2 version'))
        .pipe(gulp.dest('./public/css'));
})

// gulp.task('watch', function() {
//     gulp.watch(config.sassPath + '/**/*.scss', ['css']);
// });

// gulp.task('default', ['bower', 'icons', 'css']);
