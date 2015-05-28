var gulp = require('gulp'),
    config = require('../../config').watch;

gulp.task('watch', ['browsersync'], function () {
    gulp.watch(config.scripts, ['build']);
});