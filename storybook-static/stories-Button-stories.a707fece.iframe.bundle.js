(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [791],
  {
    './src/stories/Button.stories.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: () => Large,
          Primary: () => Primary,
          Secondary: () => Secondary,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/@storybook/test/dist/index.mjs'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Example/Button',
          component: __webpack_require__('./src/stories/Button.tsx').$,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: { backgroundColor: { control: 'color' } },
          args: {
            onClick: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
          },
        },
        Primary = { args: { primary: !0, label: 'Button' } },
        Secondary = { args: { label: 'Button' } },
        Large = { args: { size: 'large', label: 'Button' } },
        Small = { args: { size: 'small', label: 'Button' } };
      (Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
            ...Primary.parameters?.docs?.source,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    label: 'Button'\n  }\n}",
              ...Secondary.parameters?.docs?.source,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",
              ...Large.parameters?.docs?.source,
            },
          },
        }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...Small.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",
              ...Small.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Primary', 'Secondary', 'Large', 'Small'];
    },
    './node_modules/@storybook/test/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/test/dist sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './src/stories/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      const Button = (_ref) => {
        let {
          primary = !1,
          size = 'medium',
          backgroundColor,
          label,
          ...props
        } = _ref;
        const mode = primary
          ? 'storybook-button--primary'
          : 'storybook-button--secondary';
        return (0, jsx_runtime.jsx)('button', {
          type: 'button',
          className: [
            'storybook-button',
            'storybook-button--'.concat(size),
            mode,
          ].join(' '),
          style: { backgroundColor },
          ...props,
          children: label,
        });
      };
      Button.__docgenInfo = {
        description: 'Primary UI component for user interaction',
        methods: [],
        displayName: 'Button',
        props: {
          primary: {
            required: !1,
            tsType: { name: 'boolean' },
            description: 'Is this the principal call to action on the page?',
            defaultValue: { value: 'false', computed: !1 },
          },
          backgroundColor: {
            required: !1,
            tsType: { name: 'string' },
            description: 'What background color to use',
          },
          size: {
            required: !1,
            tsType: {
              name: 'union',
              raw: "'small' | 'medium' | 'large'",
              elements: [
                { name: 'literal', value: "'small'" },
                { name: 'literal', value: "'medium'" },
                { name: 'literal', value: "'large'" },
              ],
            },
            description: 'How large should the button be?',
            defaultValue: { value: "'medium'", computed: !1 },
          },
          label: {
            required: !0,
            tsType: { name: 'string' },
            description: 'Button contents',
          },
          onClick: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: 'Optional click handler',
          },
        },
      };
    },
  },
]);
