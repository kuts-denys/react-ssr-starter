const prettier = require('prettier');

module.exports = (plop) => {
  const prettierConfig = prettier.resolveConfig.sync(__dirname);
  plop.load('plop-prettier', prettierConfig);

  plop.setGenerator('React component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'prompt',
        name: 'componentName',
        message: 'Name of your component:',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'pretty-add',
          path: './src/client/components/{{properCase componentName}}/index.js',
          templateFile: './config/plop/component/container.js.plop',
        },
        {
          type: 'pretty-add',
          path: './src/client/components/{{properCase componentName}}/{{properCase componentName}}.js',
          templateFile: './config/plop/component/component.js.plop',
        },
      ];
      return actions;
    },
  });

  plop.setGenerator('Redux Reducer', {
    description: 'Generate a new Redux reducer (reducer, actions, selectors …)',
    prompts: [
      {
        type: 'prompt',
        name: 'reducerName',
        message: 'Name of your reducer (e.g. "Calendar Event" or "Vehicle")',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'pretty-add',
          path: './src/client/store/{{camelCase reducerName}}/actions.js',
          templateFile: './config/plop/reducer/actions.js.plop',
        },
        {
          type: 'pretty-add',
          path: './src/client/store/{{camelCase reducerName}}/reducer.js',
          templateFile: './config/plop/reducer/reducer.js.plop',
        },
        {
          type: 'pretty-add',
          path: './src/client/store/{{camelCase reducerName}}/selectors.js',
          templateFile: './config/plop/reducer/selectors.js.plop',
        },
      ];

      return actions;
    },
  });
};
