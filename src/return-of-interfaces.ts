export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void; // 処理の実態のない処理＝signature
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
} // Typescriptでは多重継承はできないが、interfaceによる多重継承のようなことはできる

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
