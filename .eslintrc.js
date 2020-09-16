/*
 * @Author: your name
 * @Date: 2020-09-16 16:21:22
 * @LastEditTime: 2020-09-16 16:39:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cli3-ele/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    eqeqeq: ['error', 'always'], // 强制在任何情况下都使用 === 和 !==
    'brace-style': ['error', '1tbs', { allowSingleLine: true }] //强制在代码块中使用一致的大括号风格
  }
};
