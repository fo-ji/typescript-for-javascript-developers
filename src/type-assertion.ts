export {};

let name: any = 'Ham';

// <>の方は非推奨
let length = (name as string).length;
// let length = (<string>name).length;

// length = 'foo';
