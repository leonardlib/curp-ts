import {
  agregaDigitoVerificador,
  ajustaCompuesto,
  filtraCaracteres,
  getSpecialChar,
  normalizaString,
  obtenerNombreUsar,
  primerConsonante,
  removerMalasPalabras,
  validarDatos,
  zeropad,
} from './helpers';
import { MalaPalabraKey, Persona } from './types';

export const generar = (persona: Persona) => {
  validarDatos(persona);

  let curp = '';
  const pad = zeropad.bind(null, 2);
  const nombre = normalizaString(persona.nombre.toUpperCase()).trim();
  const nombreUsar = obtenerNombreUsar(nombre);

  const apellidoPaterno = ajustaCompuesto(
    normalizaString(persona.apellidoPaterno.toUpperCase()),
  ).trim();

  let apellidoMaterno = persona.apellidoMaterno || '';
  apellidoMaterno = ajustaCompuesto(
    normalizaString(apellidoMaterno.toUpperCase()),
  ).trim();

  const inicialNombre = nombreUsar.substring(0, 1);

  let vocalApellido = apellidoPaterno
    .trim()
    .substring(1)
    .replace(/[BCDFGHJKLMNÑPQRSTVWXYZ]/g, '')
    .substring(0, 1);
  vocalApellido = vocalApellido === '' ? 'X' : vocalApellido;

  let primeraLetraPaterno = apellidoPaterno.substring(0, 1);
  primeraLetraPaterno = primeraLetraPaterno === 'Ñ' ? 'X' : primeraLetraPaterno;

  let primeraLetraMaterno = '';
  if (!apellidoMaterno || apellidoMaterno === '') {
    primeraLetraMaterno = 'X';
  } else {
    primeraLetraMaterno = apellidoMaterno.substring(0, 1);
    primeraLetraMaterno =
      primeraLetraMaterno === 'Ñ' ? 'X' : primeraLetraMaterno;
  }

  let posicionUnoCuatro = [
    primeraLetraPaterno,
    vocalApellido,
    primeraLetraMaterno,
    inicialNombre,
  ].join('');

  posicionUnoCuatro = removerMalasPalabras(
    filtraCaracteres(posicionUnoCuatro) as MalaPalabraKey,
  );

  const posicionCatorceDieciseis = [
    primerConsonante(apellidoPaterno),
    primerConsonante(apellidoMaterno),
    primerConsonante(nombreUsar),
  ].join('');

  const fechaNacimiento = persona.fechaNacimiento
    .split('-')
    .map(val => parseInt(val));

  curp = [
    posicionUnoCuatro,
    pad(fechaNacimiento[2] - 1900),
    pad(fechaNacimiento[1]),
    pad(fechaNacimiento[0]),
    persona.genero,
    persona.estado,
    posicionCatorceDieciseis,
  ].join('');

  curp += getSpecialChar(fechaNacimiento[2].toString());
  curp += agregaDigitoVerificador(curp);

  return curp;
};

export const validar = (curpToValidate: string) => {
  const regex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
  const validado = curpToValidate.match(regex);

  return (
    validado &&
    parseInt(validado[2], 10) === agregaDigitoVerificador(validado[1])
  );
};
