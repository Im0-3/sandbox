'use strict';
/**
 * 複製タスク
 * 指定されたファイルを指定されたディレクトリに複製する
 */
let gulp = require('gulp');
let ms = require('merge-stream');
let del = require('del');
let config = require('./config');
let $ = require('./plugins');

gulp.task('wordpress', () => {
    let files = config.path.wordpress || [];
    let stream = ms();
    files.forEach((file) => {
        del.sync([file.to]);
        let st = gulp.src(file.from)
            .pipe(gulp.dest(file.to));
        stream.add(st);
    });
    stream.on('end',() => {
        $.browser.stream();
    });
    return stream;
});