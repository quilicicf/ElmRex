const { resolve: resolvePath } = require('path');

const REPO_PATH = resolvePath(__dirname, '..', '..');
const SRC_PATH = resolvePath(__dirname, '..');
const DIST_PATH = resolvePath(SRC_PATH, 'dist');
const STYLE_PATH = resolvePath(SRC_PATH, 'style');

const APP_HTML_NAME = 'index.html';

module.exports = {
  REPO_PATH,
  SRC_PATH,
  DIST_PATH,
  STYLE_PATH,
  APP_HTML_NAME,

  APP_HTML_SOURCE_PATH: resolvePath(SRC_PATH, APP_HTML_NAME),
  STYLE_ENTRY_POINT: resolvePath(STYLE_PATH, 'app.scss'),

  STYLE_OUTPUT_PATH: resolvePath(DIST_PATH, 'app.css'),
  STYLE_SOURCE_MAP_PATH: resolvePath(DIST_PATH, 'app.css.map'),
};
