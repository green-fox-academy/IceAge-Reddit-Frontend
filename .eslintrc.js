module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          "e2e/tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
      ],
      rules: {
        "import/prefer-default-export": "off",
        "no-console": "off",
        'lines-between-class-members': [
          'error',
          'always',
          { 'exceptAfterSingleLine': true },
        ]
      }
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
