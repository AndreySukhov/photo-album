'use strict';
// переносим остальные файлы - favico и прочее
module.exports = function() {
  $.gulp.task('copy:files', function() {
    return $.gulp.src('./source/views/*.*', '!./source/views/*.html')
      .pipe($.gulp.dest($.config.root));
  });
};
