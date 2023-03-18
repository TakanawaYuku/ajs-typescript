import Buble from './Buble';

export default class Book implements Buble {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
  ) { }
}
