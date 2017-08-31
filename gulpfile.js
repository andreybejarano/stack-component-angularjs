'use strict';
const async = require('async');
const config = require('./gulp.config')();
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const babelify = require('babelify');
const browserify = require('browserify');
const vinylSourceStream = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');
const plugins = gulpLoadPlugins();
const Server = require('./server');
const env = process.env.NODE_ENV;
const debug = process.env.DEBUG || false;

/**
 * Concat app js files.
 */
gulp.task('default', ['js', 'styles', 'watch']);

gulp.task('watch', () => {
    gulp.watch([`${config.src}**/*.+(js|jade)`], ['js']);
    //gulp.watch([`${config.src}**/*.js`], ['docs']); Uncomment when creating docs while changing js files
    gulp.watch([`${config.src}**/*.scss`], ['styles']);
    setTimeout(() => { log('Starting server: http://localhost:8080/example') }, 5000);
});


gulp.task('js', ['templateCache'], () => {
    const sources = browserify({
        entries: config.mainModule,
        debug: debug
    }).transform(babelify.configure({
        presets: ['es2015']
    }));

    return sources.bundle()
        .pipe(vinylSourceStream(`${config.projectName}.js`))
        .pipe(vinylBuffer())
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(plugins.if(true, plugins.sourcemaps.init({
            loadMaps: true // Load the sourcemaps browserify already generated
        })))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.if(false, plugins.uglify()))
        .pipe(plugins.if(true, plugins.sourcemaps.write('./', {
            includeContent: true
        })))
        .pipe(plugins.if(false, plugins.rename({ extname: '.min.js' })))
        .pipe(plugins.if(false, plugins.rev()))
        .pipe(gulp.dest(config.dist));
});


gulp.task('styles', ['css', 'fonts'], () => {
    return gulp.src('./.tmp/**/*.css')
        .pipe(plugins.concat(`${config.projectName}.css`))
        .pipe(gulp.dest(config.dist))
        .pipe(plugins.combineMq())
        .pipe(plugins.csso())
        .pipe(plugins.rename({ extname: '.min.css' }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('template', () => {
    const YOUR_LOCALS = {};

    return gulp.src(`${config.src}**/*.jade`)
        .pipe(plugins.jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest(config.src));
});

gulp.task('templateCache', ['template'], () => {
    return gulp.src(`${config.src}**/*.html`)
        .pipe(plugins.angularTemplatecache(config.templateCache.file, config.templateCache.options))
        .pipe(gulp.dest(config.src));
});

gulp.task('css', () => {
    return gulp
        .src(config.mainscss)
        .pipe(plugins.sass())
        .pipe(plugins.rename(`${config.projectName}.css`))
        .pipe(gulp.dest('./.tmp/'));
});

gulp.task('fonts', () => {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(gulp.dest(`${config.dist}fonts`));
});

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof (msg) === 'object') {
        for (const item in msg) {
            if (msg.hasOwnProperty(item)) {
                plugins.util.log(plugins.util.colors.blue(msg[item]));
            }
        }
    } else {
        plugins.util.log(plugins.util.colors.blue(msg));
    }
}