export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'ham',
  age: 23,
}; 

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Hiroshi',
  age: 30,
};

// friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] }
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
