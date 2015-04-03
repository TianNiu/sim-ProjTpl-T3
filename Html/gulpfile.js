// 引入 gulp
var gulp = require('gulp');

// 引入 Plugins
var compass = require('gulp-compass');

// 创建 Compass 任务
gulp.task('compass', function() {
    gulp.src('./Scss/**')
        .pipe(compass({
            comments: false,
            css: 'css',
            sass: 'Scss',
            image: 'image'
        }));
});

// 默认任务
gulp.task('default', function() {
    gulp.run('compass');

    gulp.watch([
        './Scss/**',
        './image/**'
    ], function(event) {
        gulp.run('compass');
    });
});
