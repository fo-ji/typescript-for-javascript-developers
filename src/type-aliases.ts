export {};

type Mojiretsu = string;

const fooString: string = 'hello!';
const fooMojiretsu: Mojiretsu = 'hello!';

const example1 = {
  name: 'han',
  age: 33
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'june',
  age: 32
};

type Profile2 = typeof example1; // 上のやり方では「example1」のデータ構造に変化があった時に追従できないが、typeofで指定してやると追従できるのでこちらを使用するべし