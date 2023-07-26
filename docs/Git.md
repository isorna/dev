# Git

TODO: documentar el inicio de un proyecto.

```bash
git init
git add README.md
git commit -m "feat: project setup"
git branch -M main
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git
git push -u origin main
```

## Gitignore

## Compartir templates

## Submódulos

Primero entras en la carpeta de tu proyecto principal desde el terminal, donde quieres que se clone el submódulo, y a continuación:

```bash
git submodule add [--name <submodule-name>] <repository> [<submodule-path>]
```

Luego hay que asegurarse de que se creó correctamente el archivo ```/.gitmodules```, de otro modo hay que crearlo a mano. Asegúrate de que haya un espacio en blanco entre los símbolos ```=``` y el texto por delante y por detrás de éstos:

```yaml
[submodule "submodule-name"]
	path = submodule-path
	url = https://github.com/user/repository.git
```

Para eliminar un submódulo usa:

```terminal
git submodule deinit -f submodule-path
rm -rf .git/modules/submodule-name
git rm -f submodule-path
```

Si los submódulos no se están descargando al hacer checkout del proyecto, tendrás que lanzar un fetch recursivo:

```terminal
git submodule update --init --recursive
```

Otras opciones también son (según la versión de Git):

```terminal
git submodule update --recursive --remote
git submodule update --recursive
git pull --recurse-submodules
```

### Integración con CI

Recuerda que cada submódulo tiene sus propios git hooks, así que no le afectan los del repositorio donde se encuentra y tendrás que configurar su propio _lintstaged_ si quieres integrar herramientas de este tipo dentro de los submódulos.

Es muy probable que necesites habilitar las opciones de ejecución recursiva en tus comandos, revisa la documentación de tu _CI_ específico para más información.

Para más información, mejor [leer la referencia](https://git-scm.com/docs/gitmodules).

> Alvaro Isorna
