exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

exports.build = series(scssTask, jsTask);