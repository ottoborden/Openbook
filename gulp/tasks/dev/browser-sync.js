var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    config = require('config');

gulp.task('browsersync', ['build'], function () {
    browsersync(config);
});