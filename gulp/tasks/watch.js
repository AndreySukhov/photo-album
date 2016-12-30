'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/views/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/views/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/views/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch($.path.jsFoundation, $.gulp.series('css:foundation'));
    $.gulp.watch($.path.jsFoundation, $.gulp.series('js:foundation'));
  });
};
