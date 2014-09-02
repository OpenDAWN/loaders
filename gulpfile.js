var gulp = require('gulp');
var packageJson = require('./package.json');
var loadTasks = require('module-boilerplate');
var exec = require('child_process').exec;
var markdox = require('./node_modules/markdox/index');
var fs = require("fs");

loadTasks(gulp, packageJson);

gulp.task('coverage', function() {
  exec('mocha -r blanket -R html-cov > coverage.html tests/tests.js');
});

gulp.task('api-doc', function() {
  markdox.process('./src/index.js', {}, function(err, output){
    fs.writeFileSync("./api.md", output, "UTF-8");
  });
});