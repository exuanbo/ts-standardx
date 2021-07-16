declare module 'eslint-config-prettier' {
  export = {
    rules: import('eslint').Linter.RulesRecord
  }
}
