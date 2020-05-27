/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(
  path.join(__dirname, '../../../src/components'),
);
// const pagePages = fs.readdirSync(path.join(__dirname, '../../../pages'));
// const components = pageComponents.concat(pagePages);

function componentExists(comp) {
  return pageComponents.indexOf(comp) >= 0;
}

module.exports = componentExists;
