# Automatización

## Generación de etiquetas automáticas en el README.md

TODO: INVESTIGAR cómo hacerlo, y cuáles poner.

## [release-please]

TODO: documentar release-please

Más información sobre conventional commits: [https://carlosazaustre.es/conventional-commits].

## Dependabot

TODO: documentar dependabot

TODO: investigar esto de ignorar los semver-patch:

```yml
version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

[https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file]

[https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates]

[release-please]: https://github.com/googleapis/release-please
