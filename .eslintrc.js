module.exports = {
  root: true,
  extends: '@react-native',
  ignorePatterns: ['**/*'],
  parserOptions: {
    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './client/tsconfig.json',
},
};
