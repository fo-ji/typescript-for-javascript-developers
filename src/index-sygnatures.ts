export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// 初期化時にデータが決まっていない場合は「？」のオプションで
let profile: Profile = { name: 'Ham', underTwenty: false };

// how to write index signatures
// { [ index: typeforindex]: typeforvalue } 

profile.name = 'Ham';
profile.age = 36;
profile.nationallity = 'Japan';
