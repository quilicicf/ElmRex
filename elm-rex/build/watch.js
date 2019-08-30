#!/usr/bin/env node

const { watch } = require('chokidar');
const { resolve: resolvePath } = require('path');
const { start } = require('live-server');

const renderSass = require('./renderSass');
const prepareBuild = require('./prepareBuild');

const {
  REPO_PATH, STYLE_PATH, APP_HTML_NAME, APP_HTML_SOURCE_PATH, STYLE_ENTRY_POINT,
} = require('./constants');

const SERVER_PORT = 5421;
const STYLE_FILES_GLOB = resolvePath(STYLE_PATH, '**', '*.scss');
const OPEN_URL = `/elm-rex/${APP_HTML_NAME}`;
const main = async () => {
  await prepareBuild();

  const sassWatcher = watch(
    [ STYLE_ENTRY_POINT, STYLE_FILES_GLOB ],
    { cwd: STYLE_PATH, ignoreInitial: true },
  );

  sassWatcher
    .on('add', renderSass)
    .on('change', renderSass)
    // .on('unlink', renderSass) TODO needed?
    .on('ready', renderSass);

  start({
    host: 'localhost',
    port: SERVER_PORT,
    root: REPO_PATH,
    open: OPEN_URL,
    watch: [ APP_HTML_SOURCE_PATH, STYLE_PATH ],
  });
};

main();
