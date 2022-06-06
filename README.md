[![NPM Version](https://badge.fury.io/js/curp-ts.svg)](https://npmjs.org/package/curp-ts)
![Build and test](https://github.com/leonardlib/curp-ts/actions/workflows/test.yml/badge.svg)
![CodeQL](https://github.com/leonardlib/curp-ts/actions/workflows/codeql-analysis.yml/badge.svg)
![Deploy](https://github.com/leonardlib/curp-ts/actions/workflows/deploy.yml/badge.svg)

# curp-ts

Genera y valida el CURP (Clave Única de Registro de Población) mexicano.

> This is the Typescript version of the npm [curp](https://www.npmjs.com/package/curp) package

## Instalación

```sh
npm install curp-ts
```

## Uso:

#### Validar

```ts
import { validar } from 'curp-ts';

validar('LOOA531113HTCPBN07'); // returns true
```
#### Generar

```ts
import { generar, Persona, GENERO, ESTADO } from 'curp-ts';

const persona: Persona = {
  nombre: 'Andrés Manuel',
  apellidoPaterno: 'López',
  apellidoMaterno: 'Obrador',
  genero: GENERO.MASCULINO,
  fechaNacimiento: '13-11-1953',
  estado: ESTADO.TABASCO,
};
generar(persona); // returns LOOA531113HTCPBN07
```

## Licencia

MIT © [Leonardo Lira Becerra](https://github.com/leonardlib)
