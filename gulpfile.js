const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

// function html() {
//     return src('src/**/**.html')
//         .pipe(include({
//             prefix: '@@'
//         }))
//         .pipe(dest('dist'))
// }

// exports.html = html;

function scss() {
    return src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('styles_min.css'))
        .pipe(dest('dist'))
}

exports.scss = scss;