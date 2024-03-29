/* eslint-disable max-len */
module.exports = {
  extends: ['./index.js'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes,
      // e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    /**
  * 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
  * @category React
  * @reason 不强制要求写 propTypes
  */
    'react/boolean-prop-naming': 'off',
    /**
     * 一个 defaultProps 必须有对应的 propTypes
     * @category React
     * @reason 不强制要求写 propTypes
     */
    'react/default-props-match-prop-types': 'off',
    /**
     * 组件必须有 displayName 属性
     * @category React
     * @reason 不强制要求写 displayName
     */
    'react/display-name': 'off',
    /**
     * 禁止在自定义组件中使用一些指定的 props
     * @category React
     * @reason 没必要限制
     */
    'react/forbid-component-props': 'off',
    /**
     * 禁止使用一些指定的 elements
     * @category React
     * @reason 没必要限制
     */
    'react/forbid-elements': 'off',
    /**
     * 禁止直接使用别的组建的 propTypes
     * @category React
     * @reason 不强制要求写 propTypes
     */
    'react/forbid-foreign-prop-types': 'off',
    /**
     * 禁止使用一些指定的 propTypes
     * @category React
     * @reason 不强制要求写 propTypes
     */
    'react/forbid-prop-types': 'off',
    /**
     * 禁止使用数组的 index 作为 key
     * @category React
     * @reason 太严格了
     */
    'react/no-array-index-key': 'off',
    /**
     * 禁止使用 dangerouslySetInnerHTML
     * @category React
     * @reason 没必要限制
     */
    'react/no-danger': 'off',
    /**
     * 禁止在 componentDidMount 里面使用 setState
     * @category React
     * @reason 同构应用需要在 didMount 里写 setState
     */
    'react/no-did-mount-set-state': 'off',
    /**
     * 禁止在一个文件创建两个组件
     * @category React
     * @reason 有一个 bug https://github.com/yannickcr/eslint-plugin-react/issues/1181
     */
    'react/no-multi-comp': 'off',
    /**
     * 禁止使用 setState
     * @category React
     * @reason setState 很常用
     */
    'react/no-set-state': 'off',
    /**
     * 禁止出现 HTML 中的属性，如 class
     * @category React
     * @fixable
     */
    'react/no-unknown-property': 'error',
    /**
     * 禁止出现未使用的 propTypes
     * @category React
     * @reason 不强制要求写 propTypes
     */
    'react/no-unused-prop-types': 'off',
    /**
     * 定义过的 state 必须使用
     * @category React
     * @reason 没有官方文档，并且存在很多 bug： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
     */
    'react/no-unused-state': 'off',
    /**
     * 必须使用 pure function
     * @category React
     * @reason 没必要限制
     */
    'react/prefer-stateless-function': 'off',
    /**
     * 组件必须写 propTypes
     * @category React
     * @reason 不强制要求写 propTypes
     */
    'react/prop-types': 'off',
    /**
     * 出现 jsx 的地方必须 import React
     * @category React
     * @reason 已经在 no-undef 中限制了
     */
    'react/react-in-jsx-scope': 'off',
    /**
     * 非 required 的 prop 必须有 defaultProps
     * @category React
     * @reason 不强制要求写 propTypes
     */
    'react/require-default-props': 'off',
    /**
     * 组件必须有 shouldComponentUpdate
     * @category React
     * @reason 没必要限制
     */
    'react/require-optimization': 'off',
    /**
     * 组件内没有 children 时，必须使用自闭和写法
     * @category React
     * @reason 没必要限制
     * @fixable
     */
    'react/self-closing-comp': 'off',
    /**
     * 组件内方法必须按照一定规则排序
     * @category React
     * @fixable
     */
    'react/sort-comp': 'error',
    /**
     * propTypes 的熟悉必须按照字母排序
     * @category React
     * @reason 没必要限制
     */
    'react/sort-prop-types': 'off',
    /**
     * 布尔值的属性必须显式的写 someprop={true}
     * @category JSX-specific
     * @reason 没必要限制
     * @fixable
     */
    'react/jsx-boolean-value': 'off',
    /**
     * 自闭和标签的反尖括号必须与尖括号的那一行对齐
     * @category JSX-specific
     * @fixable
     */
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: false,
        selfClosing: 'line-aligned',
      },
    ],
    /**
     * 结束标签必须与开始标签的那一行对齐
     * @category JSX-specific
     * @reason 已经在 jsx-indent 中限制了
     * @fixable
     */
    'react/jsx-closing-tag-location': 'off',
    /**
     * 大括号内前后禁止有空格
     * @category JSX-specific
     * @fixable
     */
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        attributes: {
          allowMultiline: true,
        },
        children: true,
        spacing: {
          objectLiterals: 'never',
        },
      },
    ],
    /**
     * props 与 value 之间的等号前后禁止有空格
     * @category JSX-specific
     * @fixable
     */
    'react/jsx-equals-spacing': ['error', 'never'],
    /**
     * 限制文件后缀
     * @category JSX-specific
     * @reason 没必要限制
     */
    'react/jsx-filename-extension': 'off',
    /**
     * 第一个 prop 必须得换行
     * @category JSX-specific
     * @reason 没必要限制
     * @fixable
     */
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    /**
     * handler 的名称必须是 onXXX 或 handleXXX
     * @category JSX-specific
     * @reason 没必要限制
     */
    'react/jsx-handler-names': 'off',
    /**
     * jsx 的 children 缩进必须为四个空格
     * @category JSX-specific
     * @fixable
     */
    'react/jsx-indent': ['error', 2],
    /**
     * jsx 的 props 缩进必须为四个空格
     * @category JSX-specific
     * @fixable
     */
    'react/jsx-indent-props': ['error', 2],
    /**
     * 限制每行的 props 数量
     * @category JSX-specific
     * @reason 没必要限制
     * @fixable
     */
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    /**
     * jsx 中禁止使用 bind
     * @category JSX-specific
     * @reason 太严格了
     */
    'react/jsx-no-bind': 'off',
    /**
     * 禁止在 jsx 中出现字符串
     * @category JSX-specific
     * @reason 没必要限制
     */
    'react/jsx-no-literals': 'off',
    /**
     * 禁止使用 target="_blank"
     * @category JSX-specific
     * @reason 没必要限制
     */
    'react/jsx-no-target-blank': 'off',
    /**
     * props 必须排好序
     * @category JSX-specific
     * @reason 没必要限制
     * @fixable
     */
    'react/jsx-sort-props': 'off',
    /**
     * jsx 的开始和闭合处禁止有空格
     * @category JSX-specific
     * @fixable
     */
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    /**
     * 多行的 jsx 必须有括号包起来
     * @category JSX-specific
     * @reason 没必要限制
     * @fixable
     */
    'react/jsx-wrap-multilines': 'off',
    /**
     * 数组中的 jsx 必须有 key
     */
    'react/jsx-key': 'error',
    /**
     * 禁止在 jsx 中使用像注释的字符串
     */
    'react/jsx-no-comment-textnodes': 'error',
    /**
     * 禁止出现重复的 props
     */
    'react/jsx-no-duplicate-props': 'error',
    /**
     * 禁止使用未定义的 jsx elemet
     */
    'react/jsx-no-undef': 'error',
    /**
     * 禁止使用 pascal 写法的 jsx，比如 <TEST_COMPONENT>
     */
    'react/jsx-pascal-case': 'error',
    /**
     * jsx 文件必须 import React
     */
    'react/jsx-uses-react': 'error',
    /**
     * 定义了的 jsx element 必须使用
     */
    'react/jsx-uses-vars': 'error',
    /**
     * 禁止使用 children 做 props
     */
    'react/no-children-prop': 'error',
    /**
     * 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
     */
    'react/no-danger-with-children': 'error',
    /**
     * 禁止使用已废弃的 api
     */
    'react/no-deprecated': 'error',
    /**
     * 禁止在 componentDidUpdate 里面使用 setState
     */
    'react/no-did-update-set-state': 'error',
    /**
     * 禁止直接修改 this.state
     */
    'react/no-direct-mutation-state': 'error',
    /**
     * 禁止使用 findDOMNode
     */
    'react/no-find-dom-node': 'error',
    /**
     * 禁止使用 isMounted
     */
    'react/no-is-mounted': 'error',
    /**
     * 禁止在 PureComponent 中使用 shouldComponentUpdate
     */
    'react/no-redundant-should-component-update': 'error',
    /**
     * 禁止使用 ReactDOM.render 的返回值
     */
    'react/no-render-return-value': 'error',
    /**
     * 禁止使用字符串 ref
     */
    'react/no-string-refs': 'error',
    /**
     * 禁止拼写错误
     */
    'react/no-typos': 'error',
    /**
     * 禁止在组件的内部存在未转义的 >, ", ' 或 }
     */
    'react/no-unescaped-entities': 'error',
    /**
     * 禁止在 componentWillUpdate 中使用 setState
     */
    'react/no-will-update-set-state': 'error',
    /**
     * 必须使用 Class 的形式创建组件
     */
    'react/prefer-es6-class': ['error', 'always'],
    /**
     * render 方法中必须有返回值
     */
    'react/require-render-return': 'error',
    /**
     * style 属性的取值必须是 object
     */
    'react/style-prop-object': 'error',
    /**
     * HTML 中的自闭和标签禁止有 children
     */
    'react/void-dom-elements-no-children': 'error',
  },
};
