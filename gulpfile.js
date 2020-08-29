const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const pxtorem = require("postcss-pxtorem");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const browserSync = require("browser-sync").create();

const plugins = [
  pxtorem({
    propList: ["*"],
  }),
  autoprefixer(),
  cssnano(),
];

const generateStyleSheet = () => {
  return (
    gulp
      .src("./scss/*.scss")
      // .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      // .pipe(sourcemaps.write("."))
      .pipe(postcss(plugins))
      .pipe(gulp.dest("./css"))
      .pipe(browserSync.stream())
  );
};

const syncHtml = () => {
  gulp.src("./index.html").pipe(browserSync.stream());
};

gulp.task("build", generateStyleSheet);

gulp.task("watch", () => {
  generateStyleSheet();
  browserSync.init({
    server: { baseDir: "." },
    startPath: "index.html",
    ui: false,
    port: 8080,
  });
  gulp.watch("./scss/*.scss", generateStyleSheet);
});
