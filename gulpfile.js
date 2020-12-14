"use strict"

const gulp = require("gulp"),
      scss = require("gulp-sass"),
      rename = require("gulp-rename"),
      serve = require("browser-sync"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer");

var paths = {
   styles: {
      src: "src/scss/**/*.scss",
      dest: "src/css",
   },
   html: "src/**/*.html"
};

gulp.task("scss", () => {
   return gulp.src(paths.styles.src)
   .pipe(scss({
      outputStyle: "compressed"
   }).on("error", scss.logError))
   .pipe(postcss([autoprefixer("last 15 versions")]))
   .pipe(rename({
      suffix: ".min"
   }))
   .pipe(gulp.dest(paths.styles.dest))
   .pipe(serve.stream());
});

gulp.task("server", () => {
   serve.init({
      server: {
         baseDir: "src"
      }
   });

   gulp.watch(paths.styles.src, gulp.series("scss"));
   gulp.watch(paths.html).on("change", serve.reload);
});

gulp.task("default", gulp.series(["server", "scss"]));