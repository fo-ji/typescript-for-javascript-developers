export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('ham', 23);

type Profile = Parameters<typeof debugProfile>; 

const profile: Profile = ['oji', 25];

debugProfile(...profile);
