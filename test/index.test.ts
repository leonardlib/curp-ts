import { ESTADO, generar, GENERO, Persona, validar } from '../src';

describe('curp', () => {
  it.each([
    [
      'Jesús Israel',
      'Perales',
      'Martínez',
      GENERO.MASCULINO,
      '06-09-1992',
      ESTADO.NUEVO_LEON,
      'PEMJ920906HNLRRS00',
    ],
    [
      'Felipe de Jesús',
      'Calderón',
      'Hinojosa',
      GENERO.MASCULINO,
      '18-08-1962',
      ESTADO.MICHOACAN,
      'CAHF620818HMNLNL09',
    ],
    [
      'Enrique',
      'Peña',
      'Nieto',
      GENERO.MASCULINO,
      '20-07-1966',
      ESTADO.ESTADO_DE_MEXICO,
      'PXNE660720HMCXTN06',
    ],
    [
      'Andrés Manuel',
      'López',
      'Obrador',
      GENERO.MASCULINO,
      '13-11-1953',
      ESTADO.TABASCO,
      'LOOA531113HTCPBN07',
    ],
    [
      'Oscar',
      'Sanchez',
      'Santos',
      GENERO.MASCULINO,
      '09-09-1975',
      ESTADO.CDMX,
      'SASO750909HDFNNS05',
    ],
    [
      'Luis',
      'Perez',
      '',
      GENERO.MASCULINO,
      '09-09-1975',
      ESTADO.CDMX,
      'PEXL750909HDFRXS02',
    ],
    [
      'Luis',
      'Perez',
      'Piedra',
      GENERO.MASCULINO,
      '09-09-2000',
      ESTADO.NUEVO_LEON,
      'PEPL000909HNLRDSA1',
    ],
    [
      'Maria Del Carmen',
      'Loredo',
      'Caballero',
      GENERO.FEMENINO,
      '27-06-1990',
      ESTADO.SAN_LUIS_POTOSI,
      'LOCC900627MSPRBR07',
    ],
    [
      'MARIA GILA',
      'HURTADO',
      'HERRERA',
      GENERO.FEMENINO,
      '01-09-1920',
      ESTADO.SAN_LUIS_POTOSI,
      'HUHG200901MSPRRL09',
    ],
    [
      'MARIA DEL ROSARIO',
      'MARTINEZ',
      'RIVAS',
      GENERO.FEMENINO,
      '08-09-1981',
      ESTADO.SAN_LUIS_POTOSI,
      'MARR810908MSPRVS00',
    ],
    [
      'JOSE SAUL',
      'GALVAN',
      'DEL RIO',
      GENERO.MASCULINO,
      '23-09-1970',
      ESTADO.SAN_LUIS_POTOSI,
      'GARS700923HSPLXL06',
    ],
    [
      'ALBERTO',
      'ÑANDO',
      'RODRIGUEZ',
      GENERO.MASCULINO,
      '09-09-1975',
      ESTADO.CDMX,
      'XARA750909HDFNDL00',
    ],
    [
      'ALBERTO',
      'RODRIGUEZ',
      'ÑANDO',
      GENERO.MASCULINO,
      '09-09-1975',
      ESTADO.CDMX,
      'ROXA750909HDFDNL07',
    ],
    [
      'ANDRES',
      'ICH',
      'RODRIGUEZ',
      GENERO.MASCULINO,
      '09-09-1975',
      ESTADO.CDMX,
      'IXRA750909HDFCDN09',
    ],
    [
      'ANGELINE',
      'ZULEYKA',
      'NETAN',
      GENERO.FEMENINO,
      '08-03-1954',
      ESTADO.NO_ESPECIFICADO,
      'ZUNA540308MNELTN05',
    ],
  ])(
    'Deberia obtener el CURP correcto',
    (
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      genero,
      fechaNacimiento,
      estado,
      resultado,
    ) => {
      const persona: Persona = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        genero,
        fechaNacimiento,
        estado,
      };
      expect(generar(persona)).toBe(resultado);
    },
  );

  it.each([
    [
      'nombre',
      '',
      'Sanchez',
      'Santos',
      GENERO.MASCULINO,
      '09-09-1975',
      ESTADO.CDMX,
    ],
    [
      'apellido paterno',
      'Oscar',
      '',
      'Santos',
      GENERO.MASCULINO,
      '09-09-1975',
      ESTADO.CDMX,
    ],
    ['genero', 'Oscar', 'Sanchez', 'Santos', '', '09-09-1975', ESTADO.CDMX],
    [
      'fecha de nacimiento',
      'Oscar',
      'Sanchez',
      'Santos',
      GENERO.MASCULINO,
      '',
      ESTADO.CDMX,
    ],
    [
      'estado',
      'Oscar',
      'Sanchez',
      'Santos',
      GENERO.MASCULINO,
      '09-09-1975',
      '',
    ],
  ])(
    'Deberia lanzar un error al faltar %s',
    (
      _,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      genero,
      fechaNacimiento,
      estado,
    ) => {
      const persona: Persona = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        genero,
        fechaNacimiento,
        estado,
      };
      expect(() => generar(persona)).toThrow(Error);
    },
  );

  it.each([
    [false, 'XARA750909HDFNDL01'],
    [true, 'PXNE660720HMCXTN06'],
    [true, 'LOOA531113HTCPBN07'],
  ])('Deberia obtener %s al validar un curp', (result, curp) => {
    expect(validar(curp)).toBe(result);
  });
});
