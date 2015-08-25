import gulp from 'gulp';
import webpack from 'webpack';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

const paths = {
  src: './web/static',
  dist: './priv/static',
  assets: '/assets/**/*'
};

const buildJs = (watch = false) => {
  return done => {
    webpack({
      watch,
      entry: paths.src + '/js/index.js',
      output: {
        path: paths.dist,
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
      },
      devtool: '#source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            optional: ['react', 'runtime'],
            stage: 0
          }
        }],
        resolve: {
          extensions: ['', '.js']
        }
      }
    }, (err, stats) => {
      if (err) {
        throw new plugins.util.PluginError("webpack", err);
      }
      plugins.util.log('[webpack]', stats.toString({}));
      watch || done();
    });
  };
};

gulp.task('build:js', buildJs());

gulp.task('watch:js', buildJs(true));

gulp.task('build:css', () => {
  return gulp.src(paths.src + '/styl/index.styl')
    .pipe(plugins.plumber())
    .pipe(plugins.stylus())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch:css', () => {
  gulp.watch(paths.src + '/styl/**/*.styl', ['build:css']);
});

gulp.task('copy:assets', () => {
  return gulp.src(paths.src + paths.assets).pipe(gulp.dest(paths.dist));
});

gulp.task('watch:assets', () => {
  return plugins.watch(paths.src + paths.assets).pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['build:js', 'build:css', 'copy']);

gulp.task('watch', ['watch:js', 'watch:css', 'watch:assets']);

gulp.task('default', ['build']);
