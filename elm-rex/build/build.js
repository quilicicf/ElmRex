#!/usr/bin/env node

const renderSass = require('./renderSass');
const prepareBuild = require('./prepareBuild');


const main = async () => {
  await prepareBuild();
  await renderSass();
};

main();
