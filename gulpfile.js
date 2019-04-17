
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let htmlmin = require('gulp-htmlmin');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
const del = require("del");

gulp.task('minify-css', () => {
    // Folder with files to minify
    return gulp.src('*.css')
    //The method pipe() allow you to chain multiple tasks together 
    //I execute the task to minify the files
   .pipe(cleanCSS())
   //I define the destination of the minified files with the method dest
   .pipe(gulp.dest('./dist'));
});

gulp.task('minify-html', () => {
    return gulp.src(['*.html'])
        .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify-js', () => {
    return gulp.src('script.js')
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('./dist'))
});

gulp.task('imgmin', () => {
    return gulp.src('*.jpg')
        // Minify the file
        .pipe(imagemin())
        // Output
        .pipe(gulp.dest('./dist'))
});

gulp.task('mv', () => {
    return gulp.src('favicon.ico')
        .pipe(gulp.dest('./dist'))
})

// Clean output directory
gulp.task('clean', () => del(['dist/**', '!dist', '!dist/.git']));

// Gulp task to minify all files
exports.default = gulp.series('clean','minify-css','minify-html','minify-js','imgmin','mv');