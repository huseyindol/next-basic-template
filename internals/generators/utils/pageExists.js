/**
 * componentExists
 *
 * Check whether the given component exist in either the pages or containers directory
 */

const fs = require('fs');
const path = require('path');
const pagePages = fs.readdirSync(path.join(__dirname, '../../../pages'));
// const pagePages = fs.readdirSync(path.join(__dirname, '../../../pages'));
// const pages = pagePages.concat(pagePages);

function componentExists(comp) {
  return pagePages.indexOf(comp) >= 0;
}

module.exports = componentExists;
