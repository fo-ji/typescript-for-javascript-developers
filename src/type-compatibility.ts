export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1975 = 1975;
fooNumber = fooNumberLiteral;

// 下記のようにオブジェクト間での代入でもその型の持つメンバーの互換性を評価されるが、interfaceやclassの関係性などは関係なし
// 構造的部分型
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'michael');
