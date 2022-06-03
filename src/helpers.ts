import {
  Persona,
  comunes,
  malasPalabras,
  MalaPalabraKey,
  conTildes,
  sinTildes,
  ConTildesType,
  compuestos,
} from './types';

export const validarDatos = (persona: Persona) => {
  if (!persona.nombre) {
    throw new Error('Nombre es requerido');
  }

  if (!persona.apellidoPaterno) {
    throw new Error('Apellido Paterno es requerido');
  }

  if (!persona.fechaNacimiento) {
    throw new Error('Fecha de nacimiento es requerido');
  }

  if (!persona.genero) {
    throw new Error('Genero es requerido');
  }

  if (!persona.estado) {
    throw new Error('Estado es requerido');
  }
};

export const zeropad = (ancho: number, num: number) => {
  const pad = Array.apply(0, Array.call(0, ancho))
    .map(() => 0)
    .join('');

  return (pad + num).replace(new RegExp('^.*([0-9]{' + ancho + '})$'), '$1');
};

export const normalizaString = (str: string) => {
  const salida = str.split('').map(char => {
    const pos = conTildes.indexOf(char as ConTildesType);
    return pos > -1 ? sinTildes[pos] : char;
  });

  return salida.join('');
};

export const obtenerNombreUsar = (nombre: string) => {
  const nombres = nombre.trim().split(/\s+/);
  const esNombreComun = comunes.some(nombreComun =>
    nombre.includes(nombreComun),
  );

  if (esNombreComun) {
    nombres.reverse();
  }

  return nombres[0];
};

export const ajustaCompuesto = (str: string) => {
  compuestos.forEach(compuesto => {
    if (compuesto.test(str)) {
      str = str.replace(compuesto, '');
    }
  });

  return str;
};

export const removerMalasPalabras = (palabra: MalaPalabraKey) => {
  if (malasPalabras[palabra]) {
    return malasPalabras[palabra];
  }

  return palabra;
};

export const filtraCaracteres = (str: string) => {
  return str.toUpperCase().replace(/[\d_\-./\\,]/g, 'X');
};

export const primerConsonante = (str: string) => {
  str = str
    .trim()
    .substring(1)
    .replace(/[AEIOU]/gi, '')
    .substring(0, 1);
  return str === '' || str === 'Ñ' ? 'X' : str;
};

export const getSpecialChar = (bornYear: string) => {
  if (bornYear[0] === '1') {
    return '0';
  }

  return 'A';
};

export const agregaDigitoVerificador = (incompleteCurp: string) => {
  const dictionary = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  let lnSum = 0.0;
  let lnDigt = 0.0;
  for (let i = 0; i < 17; i++) {
    lnSum += dictionary.indexOf(incompleteCurp.charAt(i)) * (18 - i);
  }

  lnDigt = 10 - (lnSum % 10);
  if (lnDigt === 10) return 0;
  return lnDigt;
};
