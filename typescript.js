module.exports = {
  extends: ['./index.js'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    /**
     * 一个缩进必须用四个空格替代
     * @category Stylistic Issues
     * @fixable
     */
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    /**
     * 重载的函数必须写在一起
     * @category TypeScript
     * @reason 增加可读性
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    /**
     * 限制数组类型必须使用 Array<T> 或 T[]
     * @category TypeScript
     * @reason 允许灵活运用两者
     * @fixable
     */
    '@typescript-eslint/array-type': 'off',
    /**
     * 是否允许使用 // @ts-ignore 来忽略编译错误
     * @category TypeScript
     * @reason 既然已经使用注释来忽略编译错误了，说明已经清楚可能带来的后果
     */
    '@typescript-eslint/ban-ts-ignore': 'off',
    /**
     * 禁用特定的类型
     * @category TypeScript
     * @reason 该规则用于禁止某个具体的类型的使用
     * @fixable
     */
    '@typescript-eslint/ban-types': 'off',
    /**
     * 变量名必须是 camelcase 风格的
     * @category TypeScript
     * @reason 很多 api 或文件名都不是 camelcase
     */
    '@typescript-eslint/camelcase': 'off',
    /**
     * 类名与接口名必须为驼峰式
     * @category TypeScript
     */
    '@typescript-eslint/class-name-casing': 'error',
    /**
     * 函数返回值必须与声明的类型一致
     * @category TypeScript
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /**
     * 必须设置类的成员的可访问性
     * @category TypeScript
     * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
     */
    '@typescript-eslint/explicit-member-accessibility': [2, {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'off',
        parameterProperties: 'explicit',
      },
    }],
    /**
     * 约束泛型的命名规则
     * @category TypeScript
     */
    '@typescript-eslint/generic-type-naming': 'off',
    /**
     * 接口名称必须已 I 开头
     * @category TypeScript
     */
    '@typescript-eslint/interface-name-prefix': 'off',
    /**
     * 接口和类型别名的成员之间必须使用分号分隔
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/member-delimiter-style': 'error',
    /**
     * 私有成员必须以 _ 开头
     * @category TypeScript
     * @reason 已有 private 修饰符了，没必要限制变量名
     */
    '@typescript-eslint/member-naming': 'off',
    /**
     * 指定类成员的排序规则
     * @category TypeScript
     * @reason 优先级：
     * 1. static > instance
     * 2. field > constructor > method
     * 3. public > protected > private
     */
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-field',
          'protected-field',
          'private-field',
          'instance-field',
          'field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-method',
          'protected-method',
          'private-method',
          'instance-method',
          'method',
        ],
      },
    ],
    /**
     * 禁止使用 Array 构造函数
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/no-array-constructor': 'off',
    /**
     * 禁止定义空的接口
     * @category TypeScript
     */
    '@typescript-eslint/no-empty-interface': 'error',
    /**
     * 禁止使用 any
     * @category TypeScript
     */
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * 禁止定义没必要的类，比如只有静态方法的类
     * @category TypeScript
     */
    '@typescript-eslint/no-extraneous-class': 'off',
    /**
     * 禁止对 array 使用 for in 循环
     * @category TypeScript
     */
    '@typescript-eslint/no-for-in-array': 'off',
    /**
     * 禁止给一个初始化时直接赋值为 number, string 的变量显式的指定类型
     * @category TypeScript
     * @reason 可以简化代码
     * @fixable
     */
    '@typescript-eslint/no-inferrable-types': 'error',
    /**
     * 禁止在接口中定义 constructor，或在类中定义 new
     * @category TypeScript
     */
    '@typescript-eslint/no-misused-new': 'off',
    /**
     * 禁止使用 namespace 来定义命名空间
     * @category TypeScript
     * @reason 使用 es6 引入模块，才是更标准的方式。
     * 允许使用 declare namespace ... {} 来定义外部命名空间
     */
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
    /**
     * 禁止使用 non-null 断言（感叹号）
     * @category TypeScript
     * @reason 使用 non-null 断言时就已经清楚了风险
     */
    '@typescript-eslint/no-non-null-assertion': 'off',
    /**
     * 禁止给类的构造函数的参数添加修饰符
     * @category TypeScript
     */
    '@typescript-eslint/no-parameter-properties': 'error',
    /**
     * 禁止使用 require
     * @category TypeScript
     * @reason 有时需要动态引入，还是需要用 require
     */
    '@typescript-eslint/no-require-imports': 'off',
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值
     * @category TypeScript
     */
    '@typescript-eslint/no-this-alias': 'error',
    /**
     * 禁止使用类型别名
     * @category TypeScript
     */
    '@typescript-eslint/no-type-alias': 'off',
    /**
     * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     * @category TypeScript
     * @reason 已经禁止使用命名空间了
     * @fixable
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    /**
     * 禁止无用的类型断言
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    /**
     * 禁止出现未使用的变量
     * @category TypeScript
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/no-unused-vars': 'off',
    /**
     * 禁止在定义变量之前就使用它
     * @category TypeScript
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/no-use-before-define': 'off',
    /**
     * 禁止出现没必要的 constructor
     * @category TypeScript
     */
    '@typescript-eslint/no-useless-constructor': 'error',
    /**
     * 禁止使用 require 来引入模块
     * @category TypeScript
     * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
     */
    '@typescript-eslint/no-var-requires': 'error',
    /**
     * 可以简写为函数类型的接口或字面类似，必须简写
     * @category TypeScript
     * @reason reason
     * @fixable
     */
    '@typescript-eslint/prefer-function-type': 'error',
    /**
     * 禁止使用 module 来定义命名空间
     * @category TypeScript
     * @reason module 已成为 js 的关键字
     * @fixable
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    /**
     * async 函数的返回值必须是 Promise
     * @category TypeScript
     * @reason 有时 async 函数在某个分支是同步的，不需要返回 Promise
     */
    '@typescript-eslint/promise-function-async': 'off',
    /**
     * 使用加号时，两者必须同为数字或同为字符串
     * @category TypeScript
     */
    '@typescript-eslint/restrict-plus-operands': 'off',
    /**
     * 类型定义的冒号前面必须没有空格，后面必须有一个空格
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/type-annotation-spacing': 'error',
    /**
     * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
     * @category TypeScript
     */
    '@typescript-eslint/unified-signatures': 'error',
  },
};
