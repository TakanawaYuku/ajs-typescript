import Buble from './Buble';

export default class Movie implements Buble {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly fullName: string,
    readonly year: number,
    readonly country: string,
    readonly movieGenre: string[],
    readonly timeLength: string,
    readonly price: number,
  ) { }
}
