# JavaScript

## Ejecución de llamadas fetch

Aplicando el uso de la API de [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) podemos optimizar las llamadas fetch de nuestra aplicación, y controlarlas de manera más profesional.

```js
// simpleFetch.ts
// 1. Definimos nuestra propia clase para gestionar los errores,
// ya que las peticiones erróneas no devuelven un status adecuado cuando lanzan un error normal:
export class HttpError extends Error {
  constructor(public response: Response) {
    super(`HTTP error ${response.status}`);
  }
}

// 2. Creamos un método para gestionar las peticiones fetch que se aproveche de la clase anterior:
export async simpleFetch<ResponseType = any> (
  url: string,
  options: RequestInit = {}
) {
  const result = await fetch(url, options);
  if (!result.ok) {
    throw new HttpError(result);
  }
  return (await result.json()) as ResponseType;
}
```

De esta manera, podríamos usar estas utilidades:

```js
// fetchUsers.ts
try {
  const result = await simpleFetch<User>('/url', {
    // Si la petición tarda demasiado, la abortamos
    signal: AbortSignal.timeout(3000),
  });
} catch (err) {
  if (err.name === 'AbortError') {
    console.log('Fetch abortado');
  }
  if (err instanceof HttpError) {
    if (err.response.status === 404) {
      console.log('Not found');
    }
    if (err.response.status === 500) {
      console.log('Internal server error');
    }
  }
}
```
