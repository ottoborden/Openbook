var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    browserify = require('browserify'),
    bundleLogger = require('../../util/bundleLogger'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    config = require('../../config').browserify,
    notify = require('gulp-notify'),
    _ = require('lodash');

gulp.task('browserify', function (callback) {
    browsersync.notify('Compiling JavaScript');
    var bundleQueue = config.bundleConfigs.length;

    var browserifyThis = function (bundleConfig) {

        var bundler = watchify(browserify(_.assign(config, {
            cache: {},
            packageCache: {},
            fullPaths: false,
            transform: reactify,
            entries: bundleConfig.entries
        })));

        var bundle = function () {
            bundleLogger.start(bundleConfig.outputName);

            return bundler
                .bundle()
                .on('error', handleErrors)
                .pipe(source(bundleConfig.outputName))
                .pipe(gulp.dest(bundleConfig.dest))
                .on('end', reportFinished);
        };

        bundler.on('update', bundle);

        function handleErrors() {
            var args = Array.prototype.slice.call(arguments);
            notify.onError({
                title: "Compile Error",
                message: "<%= error.message %>"
            }).apply(this, args);
            this.emit('end'); // Keep gulp from hanging on this task
        }

        var reportFinished = function() {
            // Log when bundling completes
            bundleLogger.end(bundleConfig.outputName);

            if(bundleQueue) {
                bundleQueue--;
                if(bundleQueue === 0) {
                    // If queue is empty, tell gulp the task is complete.
                    // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
                    callback();
                }
            }
        };

        return bundle();
    };

    config.bundleConfigs.forEach(browserifyThis);
});