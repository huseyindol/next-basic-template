/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantCreateSlice',
      default: false,
      message: 'Do you want createSlice?',
    },
    {
      type: 'confirm',
      name: 'wantStyle',
      default: true,
      message: 'Do you want styled-components?',
    },
  ],
  actions: (data) => {
    // Generate index.js
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: './components/index.js.hbs',
        abortOnFail: true,
      },
    ];

    // If the user wants createSlice
    if (data.wantCreateSlice) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/slice.js',
        templateFile: './components/slice.js.hbs',
        abortOnFail: true,
      });
    }

    // If the user wants styled-components
    if (data.wantStyle) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/styles.js',
        templateFile: './components/styles.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/components/',
    });

    return actions;
  },
};
