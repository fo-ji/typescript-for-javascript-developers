export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
// Hamしか入らない
// nickname = 'Hamtaro';

let profile = {
  name: 'Atsushi',
  height: 170
} as const;

// profile.name = 'han';
// profile.height = 157;
