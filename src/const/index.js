export const statusWord = 'correct' | 'empty' | 'edit' | 'absent' | 'present';

export const statusGame = 'playing' | 'lost' | 'won';

export const dictionary = [
  'oportunidad',
  'destreza',
  'crypto',
  'finanzas',
  'economia',
  'tienda',
  'fintech',
  'unicornio',
  'autodidacta',
  'responsable',
  'crea',
  'carga',
  'explora',
  'inverti',
  'ahorros',
];

const elemRandom = Math.floor(Math.random() * dictionary.length);
export const elemToPlay = dictionary?.[elemRandom];

export const letterColumnOne = [
  { letter: 'q' },
  { letter: 'w' },
  { letter: 'e' },
  { letter: 'r' },
  { letter: 't' },
  { letter: 'y' },
  { letter: 'u' },
  { letter: 'i' },
  { letter: 'o' },
  { letter: 'p' },
];
export const letterColumnTwo = [
  { letter: 'a' },
  { letter: 's' },
  { letter: 'd' },
  { letter: 'f' },
  { letter: 'g' },
  { letter: 'h' },
  { letter: 'j' },
  { letter: 'k' },
  { letter: 'l' },
];
export const letterColumnThree = [
  { letter: 'z' },
  { letter: 'x' },
  { letter: 'c' },
  { letter: 'v' },
  { letter: 'b' },
  { letter: 'n' },
  { letter: 'm' },
];

export const messages = [
  'Tu objetivo es adivinar la palabra del día',
  'No sabrás cuantas letras tiene',
  'Tendrás pequeñas ayudas tras cada intento',
  'Las palabras están en español',
];

export const datagame = [
  {
    bg: 'var(--bg-correct-letter)',
    type: 'Correcto',
  },
  {
    bg: 'var(--bg-absent-letter)',
    type: 'No existe',
  },
  {
    bg: 'var(--bg-present-letter)',
    type: 'Lugar incorrecto',
  },
];
