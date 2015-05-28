var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    reactify = require('reactify'),
    config = require('../../config').reactify;

gulp.task('reactify', function(){
    return gulp.src('../../../app/assets/components/**')
        .pipe(reactify())
        .pipe(gulp.dest('./build'));
});

gulp.task('reactify-rebuild', ['reactify'], function() {
    browsersync.reload();
});