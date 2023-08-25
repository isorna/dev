# Compilers

## [Babel]

TODO: documentar configuración de Babel

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Crea un archivo ```babel.config.json``` en la raíz de tu proyecto:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

```bash
npx babel src --out-dir lib
```

## [PostCSS]

TODO: documentar configuración de PostCSS

```bash
npm install --save-dev postcss autoprefixer cssnano

postcss --use autoprefixer -o main.css css/*.css
```

[PostCSS VS Code extension](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

### [PostCSS CLI]

TODO: documentar configuración de PostCSS CLI

### Plugins

* [Autoprefixer]
* [cssnano]

> Alvaro Isorna

[Babel]: https://babeljs.io/
[PostCSS]: https://github.com/postcss/postcss#usage
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[Autoprefixer]: https://github.com/postcss/autoprefixer
[cssnano]: https://cssnano.co/
