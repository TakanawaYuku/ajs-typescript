import Buble from './Buble';

export default class MusicAlbum implements Buble {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
  ) { }
}
