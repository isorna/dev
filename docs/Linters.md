# Linters

## [ESLint]

TODO: documentar configuración de ESLint

```bash
npm init @eslint/config
```

[ESLint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## [Stylelint]

TODO: documentar configuración de Stylelint

```bash
npm install --save-dev stylelint stylelint-config-standard
```

Crea un archivo ```.stylelintrc.json``` con el siguiente contenido:

```json
{
  "extends": "stylelint-config-standard"
}
```

O desde la consola:

```bash
echo "{\n\"extends\": \"stylelint-config-standard\"\n}" > .stylelintrc.json
```

```bash
npx stylelint "**/*.css"
```

[Stylelint VS Code extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## [commitlint]

TODO: documentar configuración de Commitlint

**¡Ojo!** en la documentación oficial está indicada la instalación con el parámetro ```-g``` para hacer una instalación global, cosa que desaconsejo enormemente. En mi caso yo siempre hago una instalación local al proyecto como dependencia de desarrollo.

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

Crea un archivo ```commitlint.config.js``` con el siguiente contenido:

```javascript
module.exports = {extends: ['@commitlint/config-conventional']}
```

O desde la consola:

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

[Commitlint VS Code extension](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint)

## [lint-staged]

TODO: documentar configuración de lint-staged

> Alvaro Isorna

[ESLint]: https://eslint.org/
[Stylelint]: https://stylelint.io/
[commitlint]: https://commitlint.js.org/
[lint-staged]: https://www.npmjs.com/package/lint-staged
