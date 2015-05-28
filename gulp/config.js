var src = 'app',
    build = 'build',
    dev = 'build/dev',
    prod = 'build/prod',
    srcAssets = 'app/assets',
    devAssets = 'build/dev/assets',
    prodAssets = 'build/prod/assets';

module.exports = {
    browserify: {
        debug: true,
        extensions: ['js', 'jsx', 'styl'],
        bundleConfigs: [{
            entries: './' + src + '/app.js',
            src: src + '/app.js',
            dest: dev,
            outputName: 'bundle.js'
        }]
    },
    browsersync: {
        dev: {
            server: {
                baseDir: [dev, build, src]
            },
            port: 9999,
            files: [
                devAssets + '/css/*.css',
                devAssets + '/js/*.js',
                devAssets + '/images/**',
                devAssets + '/fonts/*'
            ]
        }
    },
    delete: {
        src: [dev]
    },
    watch: {
        scripts: src + '**/*.js'
    }
};