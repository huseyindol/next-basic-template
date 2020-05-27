/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const pageExists = require('../utils/pageExists');

module.exports = {
  description: 'Add an unconnected page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'AboutMe',
      validate: (value) => {
        if (/.+/.test(value)) {
          return pageExists(value)
            ? 'A page or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'dynamicParams',
      message: 'Do you want dynamic params?',
      default: 'id',
    },
  ],
  actions: (data) => {
    // Generate index.js
    const actions = [
      {
        type: 'add',
        path: '../../pages/{{name}}/index.js',
        templateFile: './dynamicPages/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../pages/{{name}}/[{{dynamicParams}}]/index.js',
        templateFile: './dynamicPages/indexDynamic.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '../pages/',
      dynamicPage: true,
    });

    return actions;
  },
};
