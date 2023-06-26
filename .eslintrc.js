const commonRules = {
  // allow paren-less arrow functions
  'arrow-parens': 0,
  // allow async-await
  'generator-star-spacing': 0,
  // 不强制要求三元运算符换行
  'multiline-ternary': 0,
  // 对象key保持一致风格，都加引号或者都不加
  'quote-props': ['error', 'as-needed'],
  // 关闭使用apply时提示使用解构参数的行为，因为有时候apply用于改变this指向
  'prefer-spread': 0,
  // 允许使用中括号进行属性取值操作
  'dot-notation': 0,
  // 不强制要求使用const
  'prefer-const': 0,
  // 允许混合使用 && 和 ||
  'no-mixed-operators': 0,
  // 允许promise.reject不返回 Error 类型
  'prefer-promise-reject-errors': 0,
  // 这个规则有问题，先关掉
  'no-unused-vars': 0,
  // 允许使用prototype
  'no-prototype-builtins': 0,
  // allow debugger during development
  'no-debugger': process.env.NODE_ENV ? 2 : 0,
  'space-before-function-paren': 0,
  // 不知道为什么会有node的规则，先关闭，可能是eslint默认引入了
  'node/no-callback-literal': 0,
  camelcase: 0,
  curly: 0,
  quotes: 0,
  semi: 0,
  'no-case-declarations': 0,
  'no-empty': 0,
  'lines-between-class-members': 0
}
module.exports = {
  extends: ['@mpxjs/eslint-config-ts'],
  rules: commonRules,
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        // .ts文件规则 https://typescript-eslint.io/rules/
      }
    },
    {
      files: ['**/*.js'],
      rules: {
        // .js文件规则 https://eslint.bootcss.com/docs/rules/
      }
    }
  ]
}
