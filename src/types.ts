export type Keys<T> = keyof T;
export type Values<T> = T[keyof T];

export type Persona = {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  genero: GeneroType;
  estado: EstadoType;
  fechaNacimiento: string;
};

export const GENERO = {
  MASCULINO: 'H',
  FEMENINO: 'M',
} as const;
export type GeneroType = Values<typeof GENERO>;

export const ESTADO = {
  AGUASCALIENTES: 'AS',
  BAJA_CALIFORNIA: 'BC',
  BAJA_CALIFORNIA_SUR: 'BS',
  CAMPECHE: 'CC',
  COAHUILA: 'CL',
  COLIMA: 'CM',
  CHIAPAS: 'CS',
  CHIHUAHUA: 'CH',
  DISTRITO_FEDERAL: 'DF',
  CDMX: 'DF',
  DURANGO: 'DG',
  GUANAJUATO: 'GT',
  GUERRERO: 'GR',
  HIDALGO: 'HG',
  JALISCO: 'JC',
  ESTADO_DE_MEXICO: 'MC',
  NO_ESPECIFICADO: 'NE',
  MICHOACAN: 'MN',
  MORELOS: 'MS',
  NAYARIT: 'NT',
  NUEVO_LEON: 'NL',
  OAXACA: 'OC',
  PUEBLA: 'PL',
  QUERETARO: 'QT',
  QUINTANA_ROO: 'QR',
  SAN_LUIS_POTOSI: 'SP',
  SINALOA: 'SL',
  SONORA: 'SR',
  TABASCO: 'TC',
  TAMAULIPAS: 'TS',
  TLAXCALA: 'TL',
  VERACRUZ: 'VZ',
  YUCATAN: 'YN',
  ZACATECAS: 'ZS',
} as const;
export type EstadoType = Values<typeof ESTADO>;

export const comunes = [
  'MARIA DEL ',
  'MARIA DE LOS ',
  'MARIA ',
  'JOSE DE ',
  'JOSE ',
  'MA. ',
  'MA ',
  'M. ',
  'J. ',
  'J ',
] as const;

export const malasPalabras = {
  BACA: 'BXCA',
  BAKA: 'BXKA',
  BUEI: 'BXEI',
  BUEY: 'BXEY',
  CACA: 'CXCA',
  CACO: 'CXCO',
  CAGA: 'CXGA',
  CAGO: 'CXGO',
  CAKA: 'CXKA',
  CAKO: 'CXKO',
  COGE: 'CXGE',
  COGI: 'CXGI',
  COJA: 'CXJA',
  COJE: 'CXJE',
  COJI: 'CXJI',
  COJO: 'CXJO',
  COLA: 'CXLA',
  CULO: 'CXLO',
  FALO: 'FXLO',
  FETO: 'FXTO',
  GETA: 'GXTA',
  GUEI: 'GXEI',
  GUEY: 'GXEY',
  JETA: 'JXTA',
  JOTO: 'JXTO',
  KACA: 'KXCA',
  KACO: 'KXCO',
  KAGA: 'KXGA',
  KAGO: 'KXGO',
  KAKA: 'KXKA',
  KAKO: 'KXKO',
  KOGE: 'KXGE',
  KOGI: 'KXGI',
  KOJA: 'KXJA',
  KOJE: 'KXJE',
  KOJI: 'KXJI',
  KOJO: 'KXJO',
  KOLA: 'KXLA',
  KULO: 'KXLO',
  LILO: 'LXLO',
  LOCA: 'LXCA',
  LOCO: 'LXCO',
  LOKA: 'LXKA',
  LOKO: 'LXKO',
  MAME: 'MXME',
  MAMO: 'MXMO',
  MEAR: 'MXAR',
  MEAS: 'MXAS',
  MEON: 'MXON',
  MIAR: 'MXAR',
  MION: 'MXON',
  MOCO: 'MXCO',
  MOKO: 'MXKO',
  MULA: 'MXLA',
  MULO: 'MXLO',
  NACA: 'NXCA',
  NACO: 'NXCO',
  PEDA: 'PXDA',
  PEDO: 'PXDO',
  PENE: 'PXNE',
  PIPI: 'PXPI',
  PITO: 'PXTO',
  POPO: 'PXPO',
  PUTA: 'PXTA',
  PUTO: 'PXTO',
  QULO: 'QXLO',
  RATA: 'RXTA',
  ROBA: 'RXBA',
  ROBE: 'RXBE',
  ROBO: 'RXBO',
  RUIN: 'RXIN',
  SENO: 'SXNO',
  TETA: 'TXTA',
  VACA: 'VXCA',
  VAGA: 'VXGA',
  VAGO: 'VXGO',
  VAKA: 'VXKA',
  VUEI: 'VXEI',
  VUEY: 'VXEY',
  WUEI: 'WXEI',
  WUEY: 'WXEY',
} as const;
export type MalaPalabraKey = Keys<typeof malasPalabras>;

export const conTildes = [
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
  '??',
] as const;
export type ConTildesType = typeof conTildes[number];

export const sinTildes = [
  'A',
  'A',
  'A',
  'A',
  'A',
  'E',
  'E',
  'E',
  'E',
  'I',
  'I',
  'I',
  'I',
  'O',
  'O',
  'O',
  'O',
  'U',
  'U',
  'U',
  'U',
  'a',
  'a',
  'a',
  'a',
  'a',
  'e',
  'e',
  'e',
  'e',
  'i',
  'i',
  'i',
  'i',
  'o',
  'o',
  'o',
  'o',
  'u',
  'u',
  'u',
  'u',
  'c',
  'c',
] as const;

export const compuestos = [
  /\bDA\b/,
  /\bDAS\b/,
  /\bDE\b/,
  /\bDEL\b/,
  /\bDER\b/,
  /\bDI\b/,
  /\bDIE\b/,
  /\bDD\b/,
  /\bEL\b/,
  /\bLA\b/,
  /\bLOS\b/,
  /\bLAS\b/,
  /\bLE\b/,
  /\bLES\b/,
  /\bMAC\b/,
  /\bMC\b/,
  /\bVAN\b/,
  /\bVON\b/,
  /\bY\b/,
] as const;
