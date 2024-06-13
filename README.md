# Frontend Development Boilerplate Project

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Netlify Status](https://api.netlify.com/api/v1/badges/13542bbf-46ea-4ad0-b547-7ceb1328ed42/deploy-status)](https://app.netlify.com/sites/isorna/deploys)

This is my current favored tech stack, currently deployed at [isorna.dev](https://isorna.dev).

## Dependencies

* Code linters: [ESLint], [Stylelint], [commitlint]
* Compilers: [Babel], [PostCSS] with [Autoprefixer] and [cssnano]
* Static content generator: [Vitepress] or [Astro] (WIP)
* CDN and Database: [Firebase] & [Vuefire]
* Frontend framework: [Vue] & [Pinia]
* Testing suite: [Vitest]
* Continous integration:
  * [lint-staged] integration through [Git Hooks]
  * [Conventional Commits] and automated changelog generation with [release-please] github action

## TODO

1. AÑADIR README.md A MI PERFIL EN GITHUB. Investigar cómo configurarlo.
2. Configurar release-please y comprobar que funciona correctamente
3. Comprobar si es necesario configurar commitlint también en el CI: [https://commitlint.js.org/#/guides-ci-setup]
4. [Vuetify] Components?
5. [Typescript] support?, read [Volar Takeover Mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)
6. [Cypress]?
7. [Storybook] support ```$ npx storybook init```
8. Investigar si es necesario [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
9. Añadir el preprocesado de imágenes (imagemin, svg optimizer etc) en el lintstagedrc?
10. Añadir etiquetas automáticas al README.md: INVESTIGAR cómo hacerlo, y cuáles poner.
11. ¿Instalar [Nuxt devtools](https://github.com/nuxt/devtools?s=03)?
12. Revisar [Volar.js](https://blog.vuejs.org/posts/volar-a-new-beginning.html?s=03) y [Volar.io](https://volarjs.github.io/)
13. Desarrollar un plugin de VS Code para el diario de proyecto.
14. Instalar ```front-matter``` como dependencia de desarrollo.
15. Ver cómo registrar mi propia librería en [js.org](https://js.org/)!!!.

[Git Hooks]: https://git-scm.com/docs/githooks
[lint-staged]: https://www.npmjs.com/package/lint-staged
[ESLint]: https://eslint.org/
[Stylelint]: https://stylelint.io/
[PostCSS]: https://github.com/postcss/postcss#usage
[Autoprefixer]: https://github.com/postcss/autoprefixer
[cssnano]: https://cssnano.co/
[Babel]: https://babeljs.io/
[Typescript]: https://www.typescriptlang.org/
[commitlint]: https://commitlint.js.org/
[Vitepress]: https://vitepress.vuejs.org/
[Vuefire]: https://v3.vuefire.vuejs.org/
[Vitest]: https://vitest.dev/
[Vue]: https://vuejs.org/
[Pinia]: https://pinia.vuejs.org/getting-started.html
[Vuetify]: https://vuetifyjs.com/en/
[Storybook]: https://storybook.js.org/
[Astro]: https://astro.build/
[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/
[release-please]: https://github.com/googleapis/release-please
[Firebase]: https://firebase.google.com/
[Cypress]: https://github.com/cypress-io/cypress
