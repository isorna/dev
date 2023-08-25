# Design Patterns

[Refactoring.guru](https://refactoring.guru/).

## [Architecture & Design patterns](https://medium.com/@hjkmines/javascript-design-and-architectural-patterns-cfa900c6fe41).

Design Patterns
* Creational: This category focuses on object creation mechanisms which optimize object creation and control object creation. Examples: Factory, Builder, Singleton, Abstract, and Prototype
* Structural: This category focuses on object relationships. They ensure that if one part of a system changes, the entire system doesn’t need to change along with it. Examples: Adapter, Decorator, Composite, and Bridge
* Behavioral: This category recognize, implement, and improve communication between disparate objects in a system. They ensure disparate parts of a system have synchronized information. Examples: Command, Momento, and Observer

Architecture Patterns
* Model-View-Controller (MVC)
* Model-View-Presenter (MVP)
* [Model-View-ViewModel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) (MVVM)
* Monolithic
* Micro-service

## [Large scale Javascript apps by Addy Osmani](https://addyosmani.com/largescalejavascript/):

Design patterns
* Module Theory
  * High-level Summary
  * Module pattern
  * Object literal notation
  * CommonJS modules
* Facade Pattern
* Mediator Pattern

Applying To Your Architecture
* The Facade - Abstraction Of The Core
* The Mediator - The Application Core
* Tying It All Together

## [Domain driven architecture](https://dev.to/itshugo/a-different-approach-to-frontend-architecture-38d4).

* Presentation: This layer is basically made of UI components. For Vue, they are Vue SFcs. For React, they are React Components. For Svelte, they are Svelte SFCs. And so on. The Presentation Layer is directly coupled to the Application Layer.
* Application: This layer contains application logic. It knows of the Domain Layer and the Infrastructure Layer. This layer, in this architecture, is implemented via React Hooks in React or Vue "Hooks" in Vue 3.
* Domain: This layer is for domain/business logic. Only business logic lives in the Domain layer, so there is just pure JavaScript/TypeScript code with no frameworks/libraries whatsoever here.
* Infrastructure: This layer is responsible for communications with the outside world (sending requests/receiving responses) and storing local data. This is an example of the libraries you would use in a real-world application for this layer:
  * HTTP Requests/Responses: Axios, Fetch API, Apollo Client, etc.
  * Store (State Management): Vuex, Redux, MobX, Valtio, etc.

Repasar [este repositorio](https://github.com/huy-ta/flexible-counter-app), contiene un ejemplo de cómo usar _Domain Driven Design Patterns_ y cambiar fácilmente cualquier parte por otra.